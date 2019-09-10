import React from 'react';
import ReactTooltip from 'react-tooltip'
import './Table.scss';

const Table = ({ sensors, changeDisplayMode }) => {
    const renderDisplayModeMenu = () => (
        <div className="float-right display-menu">
            View As:
            <div onClick={changeDisplayMode.bind(this, 2)}>Cards</div>
            <div onClick={changeDisplayMode.bind(this, 1)}>List</div>
        </div>
    );

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
                                    <td>{sensor.temperature} °C</td>
                                    <td>{sensor.humidity}%</td>
                                    <td className="actions">
                                        <i className="fas fa-clock" data-tip="View Data"></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                        <i className="fas fa-edit" data-tip="Edit Sensor"></i>
                                        <ReactTooltip place="top" type="dark" effect="solid" />
                                        <i className="fas fa-trash" data-tip="Delete Sensor"></i>
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

export default Table;
