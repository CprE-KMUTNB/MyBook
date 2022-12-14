import {Link} from "react-router-dom";
import { useState } from "react";
import "./Navigation.css"
import MenuData from "../Data_Navidation/Menudata";
import { GoThreeBars } from "react-icons/go";
import { BiWindowClose } from "react-icons/bi";


const Navigation=()=>{
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu =()=>setShowMenu(!showMenu) //Change the bool when click the GoThreeBars Logo
    return(
        <aside>
            <div className='navbar'>
                <div className='navbar-toggle'>
                    <Link to="#" className='manu-bar'> {/*The onclick event occurs when the user clicks on an element.*/}
                        <GoThreeBars onClick={toggleMenu}/>
                    </Link>
                    <div className="menu-bar-header">
                        <div className="func-component-header">
                            <Link to="/">Mybook</Link>
                            <Link to="/collection" >Collection</Link>
                            <Link to="/sell-book">SongTor</Link>   
                        </div>
                        <div className="sign-component-header">
                            <Link to="/sign-in" className="header-sign-in">Sign In</Link>
                            <Link to="/sign-up" className="header-sign-up">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active":"nav-menu" }>  {/*Condition coding---keyword(Ternary operator) */}
                <ul className="nav-menu-item" onClick={toggleMenu}> 

                    <div className="navbar-sign"> 
                        <Link to='/sign-in' className="navbar-sign-in">
                            Sign In
                        </Link>
                        <Link to='/sign-up' className="navbar-sign-up">
                            Sign Up
                        </Link>    
                    </div>
                    <li className="navbar-toggle">
                        <Link to="#" className="manu-bar">
                            <BiWindowClose onClick={toggleMenu} />
                        </Link>
                    </li>
                    {MenuData.map((menu,index)=>{
                        return(
                            <li className="menu-txt" key={index}>
                                <Link to={menu.path}>
                                    {menu.icon}<span> {menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
export default Navigation