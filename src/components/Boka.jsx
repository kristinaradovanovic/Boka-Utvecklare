import "./Boka.css";
import { Link } from "react-router-dom";


export const Boka = () =>{
    return(
        <div className="bokaUtvecklare">


            <div className="bookHeader">
                <div className="bookHeaderContainer">
                    <p className="title">FIND YOUR <strong>EXPERT</strong></p>
                </div>

                <div id="home">
                    <Link to="/"><p>HOME</p></Link>
                </div>
            </div>


            <div className="bokaContainer">
                <div className="containerLeft">

                    <div className="selectChoice">
                        <p>Tjänsteval</p>
                    </div>

                    <div className="selectChoice">
                        <p>Datum och Tid</p>
                    </div>

                    <div className="selectChoice">
                        <p>Dina Uppgifter</p>
                    </div>

                    <div className="selectChoice">
                        <p>Betalning</p>
                    </div>
                </div>
           

            <div className="containerRight">

                <div id="titleHolder">
                   <p className="title">Tjänsteval</p>
                </div>

                <div className="inputContainer">
                    <label for="selectService">*Välj tjänsten</label>
                    <select id="selectService" name="service">
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="cherry">Devos</option>
                    </select>
                </div>

                <div className="inputContainer">
                    <label for="selectEmployee">Välj anställd</label>
                    <select id="selectEmployee" name="employee">
                    <option value="1">Anställd 1</option>
                    <option value="2">Anställd 2</option>
                    <option value="3">Anställd 3</option>
                    <option value="4">Anställd 4</option>
                    </select>
                </div>

                <div className="inputContainer">
                    <label for="selectCity">Välj Stad</label>
                    <select id="selectCity" name="city">
                    <option value="stockholm">Stockholm</option>
                    <option value="geteborg">Göteborg</option>
                    <option value="malmo">Malmö</option>
                    <option value="uppsala">Uppsala</option>
                    </select>
                </div>


                <button className="btn">BOKA</button>
            </div>

            </div>

        </div>
    )
}

