//ALLA IMPORT------------------------------------------------

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import { useState } from "react";


import { Header } from './components/Header';
import { Home } from './components/Home';
import { Boka } from "./components/Boka";


//APP.JS-----------------------------------------------------
function App() {

//State för search bar som ska skickas som prop till header/home
const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value); 
  };


//Router-------------------------------------------------------
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header
        searchInput={searchInput} handleSearchChange={handleSearchChange}
        />}> 
        <Route path="category/:category" element={<Home  searchInput={searchInput}/>} />
        <Route path="book" element={<Boka />} />

      </Route>
    )
  );
 
  return (

    <div className='app'>

        <div className="App">
          <RouterProvider router={router} />
        </div>
    </div> 
  )
}

export default App
