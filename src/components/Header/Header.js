import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="logo">
                            <i className="fas fa-thermometer-half float-left"></i>
                            <div className="title float-left">Temperature/Humidity Sensors</div>
                        </div>
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
