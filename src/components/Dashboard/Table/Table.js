import React from 'react';
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Table.scss';

const Table = ({ sensors, changeDisplayMode, showForm, setForm, isFetching, deleteSensor }) => {
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
        <div className="container-fluid table-container">
            <div className="row">
                <div className="col">
                    <h4 className="float-left">Sensors List</h4>
                    {renderDisplayModeMenu()}
                </div>
                <div className="w-100"></div>
                <div className="col">
                    <table className="table table-sm table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Temperature</th>
                                <th>Relative Humidity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensors.map((sensor) => (
                                <tr key={sensor.code}>
                                    <td>{sensor.code}</td>
                                    <td>{sensor.name}</td>
                                    <td className="temperature"><i className="fas fa-thermometer-half"></i> {sensor.temperature} °C</td>
                                    <td className="humidity"><i className="fas fa-tint"></i> {sensor.humidity}%</td>
                                    <td className="actions">
                                        <Link to={'/data/' + sensor.code}><i className="fas fa-clock" data-tip="View Data"></i></Link>
                                        <ReactTooltip place="top" type="dark" effect="solid" />

                                        <i className="fas fa-edit" data-tip="Edit Sensor" onClick={loadSensor.bind(this, sensor)}></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />

                                        <i className="fas fa-trash" data-tip="Delete Sensor" onClick={deleteSensor.bind(this, sensor.code)}></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

Table.propTypes = {
    sensors: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    changeDisplayMode: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    deleteSensor: PropTypes.func.isRequired
}

export default Table;
