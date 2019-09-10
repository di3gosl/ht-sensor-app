import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import { connect } from 'react-redux';
import * as actions from './Dashboard.actions';
import * as selectors from './Dashboard.selectors';
import PropTypes from 'prop-types';
import './Dashboard.scss';

class Dashboard extends Component {
    componentWillMount() {

    }

    render() {
        const { displayMode, changeDisplayMode, sensors } = this.props;
        return (
            <div className="dashboard-container">
                <Header />
                <Table
                    sensors={sensors}
                    changeDisplayMode={changeDisplayMode.bind(this)}
                />
                <div className="container-fluid">
                    <div className="float-right add-button"><i className="fas fa-plus-square"></i> Add</div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    displayMode: PropTypes.number.isRequired,
    changeDisplayMode: PropTypes.func.isRequired,
    sensors: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    displayMode: selectors.getDisplayMode(state),
    sensors: selectors.getSensors(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeDisplayMode: (displayMode) => dispatch(actions.changeDisplayMode(displayMode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
