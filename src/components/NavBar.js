import React from 'react'
import { Link } from 'react-router-dom';





const NavBar = () => {
    return ( 

<div>

<nav className="navbar navbar-dark bg-dark">
  <form className="container-fluid justify-content-start">
       <Link to='/people'>
    <button className="btn btn-outline-success me-2" type="button">People</button>
    </Link>
    <Link to='/planets'>

    <button className="btn btn-outline-success me-2" type="button">Planets</button>
    </Link>
    <Link to='/vehicles'>

    <button className="btn btn-outline-success me-2" type="button">Vehicles</button>
    </Link>
    <Link to='/favorites'>

<button className="btn btn-outline-success me-2" type="button">Favorites</button>
</Link>

  </form>
</nav>

</div>

     );
}
 


export default NavBar;