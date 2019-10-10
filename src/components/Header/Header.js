import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Link to="/">
                            <div className="logo">
                                <i className="fas fa-thermometer-half float-left"></i>
                                <div className="title float-left">Temperature/Humidity Sensors</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col text-right right-menu">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
