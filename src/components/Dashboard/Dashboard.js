import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import Form from './Form';
import { connect } from 'react-redux';
import * as actions from './Dashboard.actions';
import * as selectors from './Dashboard.selectors';
import PropTypes from 'prop-types';
import './Dashboard.scss';

class Dashboard extends Component {
    componentWillMount() {
        const { fetchSensors } = this.props;
        fetchSensors();
    }

    render() {
        const {
            changeDisplayMode,
            sensors,
            sensor,
            isFetching,
            showForm,
            showingForm,
            setForm,
            hideForm,
            setField,
            saveSensor } = this.props;

        const addSensor = () => {
            setForm({ code: '', name: '' });
            showForm();
        };

        return (
            <div className="dashboard-container">
                <Header />
                <Table
                    sensors={sensors}
                    showForm={showForm}
                    setForm={setForm}
                    isFetching={isFetching}
                    changeDisplayMode={changeDisplayMode}
                />
                <div className="container-fluid">
                    <div className="float-right add-button" onClick={addSensor}><i className="fas fa-plus-square"></i> Add</div>
                </div>
                <Form
                    sensor={sensor}
                    showingForm={showingForm}
                    hideForm={hideForm}
                    setField={setField}
                    saveSensor={saveSensor}
                />
            </div>
        );
    }
}

Dashboard.propTypes = {
    displayMode: PropTypes.number.isRequired,
    sensors: PropTypes.array.isRequired,
    sensor: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showingForm: PropTypes.bool.isRequired,
    changeDisplayMode: PropTypes.func.isRequired,
    fetchSensors: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    setField: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    displayMode: selectors.getDisplayMode(state),
    sensors: selectors.getSensors(state),
    sensor: selectors.getSensor(state),
    isFetching: selectors.getIsFetching(state),
    showingForm: selectors.getShowingForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeDisplayMode: (displayMode) => dispatch(actions.changeDisplayMode(displayMode)),
    fetchSensors: () => dispatch(actions.fetchSensors()),
    showForm: () => dispatch(actions.showForm()),
    hideForm: () => dispatch(actions.hideForm()),
    setForm: (sensor) => dispatch(actions.setForm(sensor)),
    setField: (name, value) => dispatch(actions.setField(name, value)),
    saveSensor: () => dispatch(actions.saveSensor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
