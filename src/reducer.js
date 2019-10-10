import { combineReducers } from 'redux';
import DashboardReducer from './components/Dashboard/Dashboard.redux'
import DataReducer from './components/Data/Data.redux'

const reducer = combineReducers({
    dashboard: DashboardReducer,
    data: DataReducer
});

export default reducer;
