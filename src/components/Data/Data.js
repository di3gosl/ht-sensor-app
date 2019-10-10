import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../Header';
import Information from './Information';
import * as actions from './Data.actions';
import * as selectors from './Data.selectors';
import PropTypes from 'prop-types';
import './Data.scss';

class Data extends Component {
    componentWillMount() {
        const { fetchSensor } = this.props;
        fetchSensor();
    }

    render() {
        const { sensor, isFetching } = this.props;

        return (
            <div className="data-container">
                <Header />
                <Information
                    sensor={sensor}
                    isFetching={isFetching}
                />
            </div>
        );
    }
}

Data.propTypes = {
    sensor: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchSensor: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    sensor: selectors.getSensor(state),
    isFetching: selectors.getIsFetching(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchSensor: () => dispatch(actions.fetchSensor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);
