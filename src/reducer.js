import { combineReducers } from 'redux';
import DashboardReducer from './components/Dashboard/Dashboard.redux'

const reducer = combineReducers({
    dashboard: DashboardReducer
});

export default reducer;
