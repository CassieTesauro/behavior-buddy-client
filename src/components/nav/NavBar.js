import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    return(
        <ul className="navbar">
            <li className="navbar__item active one">
                <Link className="navbar_link" to="/">Home</Link>
            </li>
            <li className="navbar_item active two">
                <Link className="navbar_link" to="/students/">Students</Link>
            </li>
            <li className="navbar_item active three">
                <Link className="navbar_link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("bb_token")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    ) //end of NavBar return

} //end of NavBar