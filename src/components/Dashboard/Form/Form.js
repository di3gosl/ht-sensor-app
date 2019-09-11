import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './Form.scss';

const Form = ({ hideForm, sensor, showingForm, setField, saveSensor }) => {
    const renderTextInput = (label, name) => (
        <div className="form-field">
            <label htmlFor={name}>{label}:</label>
            <br />
            <input type="text" name={name} value={sensor[name]} onChange={event => setField(name, event.target.value)} />
        </div>
    );

    return (
        <Modal show={showingForm} onHide={hideForm} className="form-container">
            <Modal.Header>
                <Modal.Title>{sensor.id === '' ? 'Add Sensor' : 'Update Sensor'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    {renderTextInput('Code', 'code')}
                    {renderTextInput('Name', 'name')}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="action-button" onClick={hideForm}>Close</button>
                <button type="button" className="action-button" onClick={saveSensor}>Save</button>
            </Modal.Footer>
        </Modal>
    );
}

Form.propTypes = {
    showingForm: PropTypes.bool.isRequired,
    sensor: PropTypes.object.isRequired,
    hideForm: PropTypes.func.isRequired,
    setField: PropTypes.func.isRequired,
    saveSensor: PropTypes.func.isRequired
}

export default Form;
