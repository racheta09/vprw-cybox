import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo-64_x_64.png'
import Button from '../button';



const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">

                            {
                                menus.map((data,idx) => (
                                    <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                    
                                    >
                                        <a href={data.links}>{data.name}</a>
                                        {
                                            data.namesub &&
                                            <ul className="sub-menu">
                                                {
                                                    data.namesub.map((submenu) => (
                                                        <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Button title='whitepaper' path='https://drive.google.com/file/d/108Yvvv674W1PBR3Dixgh7u0zvSRpqv_V/view' />

                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default Header;