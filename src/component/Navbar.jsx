import { NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">Movie</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName='active-class' aria-current="page" to="/">Movie1</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName='active-class' to="/movie2">Movie2</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName='active-class' to="/movie3" >Movie3</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName='active-class' to="/movie4" >Movie4</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName='active-class' to="/movie5" >Movie5</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;