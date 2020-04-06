import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

class Header extends Component {

    onClickMenu(){
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("navi").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg")
    }

    render (){
        return(
            <div className="above" >
                <div id="menu-bar">
                    <div id="menu" onClick={this.onClickMenu} >
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
                    <ul className="navi" id="navi">
                        <li><Link spy={true} smooth={true} duration={500} offset={-200} to="ph">Philippines</Link></li>
                        <li><Link spy={true} smooth={true} duration={500} offset={-200} to="world">World</Link></li>
                    </ul>
                </div>
                <div className="menu-bg" id="menu-bg"></div>
            </div>
        )
    }
}





export default Header;