//ALLA IMPORT ----------------------------------------------------------------

import "./Header.css";
import {Outlet, Link} from "react-router-dom";


//Header function -------------------------------------------------------------
export const Header = ({ searchInput, handleSearchChange }) =>{

    return(
        <>
        <div className="header">
            <div className="headerContainer">

            
                <div className="left">
                    <p className="title">FIND YOUR <strong>EXPERT</strong></p>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search"
                        value={searchInput}                              
                        onChange={handleSearchChange}
                    />
                </div>

            
                <div className="right">
                    <button id="book" className="btn"><strong>BOKA</strong></button>
                </div>

            </div>
        </div>


        <div className="selectorBar">
            <div className="selectorContainer">
                <Link to="/category/all" className="select"> 
                <div id="select1" >
                    <h1>ALL</h1>
                    <p className="devInfo">12 Developers Available</p>
                </div>
                </Link>

                <Link to="/category/frontend" className="select">
                <div id="select2" >
                    <h1>FRONTEND</h1>
                    <p className="devInfo">12 Developers Available</p>
                </div>
                </Link>

                <Link to="/category/backend" className="select">
                <div id="select3" >
                    <h1>BACKEND</h1>
                    <p className="devInfo">12 Developers Available</p>
                </div>
                </Link>

                <Link to="/category/devops" className="select">
                <div id="select4">
                    <h1>DEVOPS</h1>
                    <p className="devInfo">12 Developers Available</p>
                </div>
                </Link>
            </div>
        </div>

        <Outlet searchInput={searchInput} /> 


        </>
    )
} 


