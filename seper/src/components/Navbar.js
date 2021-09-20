import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }       
    };

    window.addEventListener('resize', showButton);

    return  (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className ="seper-home">
                  SEPER 
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Search
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                            Submit
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/modqueue' className='nav-links' onClick={closeMobileMenu}>
                            Moderator Queue
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/analqueue' className='nav-links' onClick={closeMobileMenu}>
                            Analyst Queue
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Login</Button>}
                {button && <Button buttonStyle='btn--outline'>Register</Button>}
            </div>
        </nav>
    </>
    );
}

export default Navbar