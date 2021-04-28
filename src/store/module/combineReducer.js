import {combineReducers} from 'redux';
import profileReducer from './profile/reducer';

const reducer = combineReducers({
	profile: profileReducer
});

export default reducer;
