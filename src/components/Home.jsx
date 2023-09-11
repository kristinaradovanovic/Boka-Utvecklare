//ALLA IMPORTS-----------------------------------------------------
import "./Home.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//HOME FUNKTION ---------------------------------------------------
export const Home = ({ searchInput }) => {

    const [data, setData] = useState([]);
    const { category } = useParams();

//Spara response från json fil ------------------------------------
    useEffect(() => {
        let getData = async () => {
            let res = await fetch("../public/developers.json");
            let response = await res.json();
            setData(response.employees);
        }
        getData();
    }, []);

//FILTRERING AV DATA BEROENDE PÅ SIDE-BAR/SEARCH-BAR INPUT------------------------------------------------------

        //FILTER MED SIDE-BAR
    const filteredData = data.filter(employee => {
        if (category === 'all') {
            return true; 
        } else {
            return employee.developer.category.toLowerCase() === category.toLowerCase();
        }
    });
        //FILTER MED SEARCH-BAR
    const filteredDataWithSearch = filteredData.filter((employee) =>
    searchInput ? employee.developer.title.toLowerCase().includes(searchInput.toLowerCase()) : true
    );

    const isAll = searchInput.toLowerCase() === 'all';

        //KOMBINERAT FILTER MED BÅDE SIDE-BAR OCH SEARCH-BAR
    const combinedData = isAll ? data : (isAll ? data : (searchInput ? filteredDataWithSearch : filteredData));


//VISA DATA I DOM-en---------------------------------------------------------------
    return (
        <div className="home">
            <table className="employeeTable">
            <thead>
                <tr>
                <th>KOMPETENS</th>
                <th>ERFARENHET</th>
                <th>GEOGRAFI</th>
                <th>TILLGÄNLIGHET</th>
                <th>PRIS</th>
                </tr>
            </thead>
            <tbody>
                {combinedData.map((employee) => (
                <tr key={employee.developer.id}>
                    <td id="title">
                        {employee.developer.title}
                        <br />
                        <p className="competens">{employee.developer.competens}</p>
                    </td>
                    <td>{employee.developer.experienceAmount} år</td>
                    <td>{employee.developer.office.city}</td>
                    <td>{employee.developer.availability} %</td>
                    <td id="price">{employee.developer.price} sek/h</td>
                </tr>
                ))}
            </tbody>
            </table>
  </div>
    );
}




