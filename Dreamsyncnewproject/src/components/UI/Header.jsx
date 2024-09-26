import { NavLink } from "react-router-dom"

export const Header =()=>{
    return<>
    <header>
        <div className="container">
            <div className="navbar-grid">
                <div className="Logo">
        <NavLink to="/about">
        <h1>World Atlas</h1>

        </NavLink>
                </div>
                <nav>
                   <ul>
                   <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                        <NavLink to="/info">Info</NavLink>
                        </li>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                   </ul>
                </nav>
         </div>
        </div>
    </header>
    </>
}