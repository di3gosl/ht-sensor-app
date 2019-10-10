import React from 'react';
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cards.scss';

const Cards = ({ sensors, changeDisplayMode, showForm, setForm, isFetching, deleteSensor }) => {
    const renderDisplayModeMenu = () => (
        <div className="float-right display-menu">
            View As:
            <div onClick={changeDisplayMode.bind(this, 2)}>List</div>
            <div onClick={changeDisplayMode.bind(this, 1)}>Cards</div>
        </div>
    );

    const loadSensor = (sensor) => {
        setForm(sensor);
        showForm();
    };

    if(isFetching) {
        return (
            <div className="loading-icon">
                <i className="fas fa-circle-notch fa-spin"></i> <span>Loading...</span>
            </div>
        );
    }

    return (
        <div className="container-fluid cards-container">
            <div className="row">
                <div className="col">
                    <h4 className="float-left">Sensors List</h4>
                    {renderDisplayModeMenu()}
                </div>
                <div className="w-100"></div>
                {sensors.map((sensor) => (
                    <div className="col-3">
                        <div className="card" key={sensor.code}>
                            <div className="card-header">{sensor.name} ({sensor.code})</div>
                            <div className="card-body">
                                <div className="temperature"><i className="fas fa-thermometer-half"></i> {sensor.temperature} °C</div>
                                <div className="humidity"><i className="fas fa-tint"></i> {sensor.humidity}%</div>
                                <div className="icons-container">
                                    <div className="icon">
                                        <Link to={'/data/' + sensor.code}><i className="fas fa-clock" data-tip="View Data"></i></Link>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-edit" data-tip="Edit Sensor" onClick={loadSensor.bind(this, sensor)}></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-trash" data-tip="Delete Sensor" onClick={deleteSensor.bind(this, sensor.code)}></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Cards.propTypes = {
    sensors: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    changeDisplayMode: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    deleteSensor: PropTypes.func.isRequired
}

export default Cards;
