import React from 'react';
//stylesheets
import './Header.css';

function Header(props) {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href='/page2'>pagina 2</a></li>
                <li><a href='/page3'>pagina 3</a></li>
            </ul>
        </div>
    );
}

export default Header;