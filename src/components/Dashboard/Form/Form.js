import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './Form.scss';

const Form = ({ hideForm, sensor, showingForm }) => {
    return (
        <Modal show={showingForm} onHide={hideForm} className="form-container">
            <Modal.Header closeButton>
                <Modal.Title>{sensor.id == '' ? 'Add Sensor' : 'Update Sensor'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="action-button" onClick={hideForm}>Close</button>
                <button type="button" className="action-button" onClick={hideForm}>Save</button>
            </Modal.Footer>
        </Modal>
    );
}

Form.propTypes = {
    showingForm: PropTypes.bool.isRequired,
    sensor: PropTypes.object.isRequired,
    hideForm: PropTypes.func.isRequired
}

export default Form;
