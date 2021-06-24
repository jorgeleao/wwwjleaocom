import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import companyLogo from "./JLeao_com_v3.png";

function Menu(){
    return(
    <div className='Menu'>
        <img src={companyLogo} 
             style={{height:'50px',paddingTop:'9px',paddingLeft:'1em',float:'left',zIndex:'200'}} 
             alt=""/>
        <div className="grad1">
            <ul className="ul_menu">
                    <li className="li_menu" style={{paddingLeft:'1em',paddingRight:'1em'}}><Link to="/" exact='true' style={{color:'white', textDecoration: 'none'}}>Home</Link></li>
                    <li className="li_menu" style={{paddingLeft:'1em',paddingRight:'1em'}}><Link to="/about" style={{color:'white', textDecoration: 'none'}}>About</Link></li>
                    <li className="li_menu" style={{paddingLeft:'1em',paddingRight:'1em'}}><Link to="/blog" style={{color:'white', textDecoration: 'none'}}>Blog</Link></li>
            </ul>
        </div>
    </div> 
    )   
}

export default Menu;