import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Information.scss';

const Information = ({ sensor, isFetching }) => {
    if(isFetching) {
        return (
            <div className="loading-icon">
                <i className="fas fa-circle-notch fa-spin"></i> <span>Loading...</span>
            </div>
        );
    }
    
    const temperatureData = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'Last 7 days',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#f44336',
                borderColor: '#f44336',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#f44336',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#f44336',
                pointHoverBorderColor: '#f44336',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [25, 28, 20, 26, 28, 31, 30]
            }
        ]
    };

    const humidityData = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'Last 7 days',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#2196f3',
                borderColor: '#2196f3',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#2196f3',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#2196f3',
                pointHoverBorderColor: '#2196f3',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <div className="container-fluid information-container">
            <div className="row">
                <div className="col mt-3">
                    <h4>BioFractal (bio-001)</h4>
                </div>
                <div className="col">
                    <Link to="/" className="return-button float-right">Return</Link>
                </div>
                <div className="w-100"></div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">Temperature</div>
                        <div className="card-body temperature"><i className="fas fa-thermometer-half"></i> 25 °C</div>
                        <Line data={temperatureData} />
                    </div>
                    <div className="card">
                        <div className="card-header">Humidity</div>
                        <div className="card-body humidity"><i className="fas fa-tint"></i> 50%</div>
                        <Line data={humidityData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

Information.propTypes = {
    sensor: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default Information;