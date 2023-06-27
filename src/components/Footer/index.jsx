import React from 'react';
import './index.css';

const Footer = ( {title} ) => {
    return (
        <div className='containerFooter'>
            <h3>{title}</h3>
            <h3>Desenvolvido por Gustavo Trizotti</h3>
        </div>
    );
}

export default Footer;
