import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIATE_STATE = {email: '', password: ''}

export default (state=INITIATE_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		default:
			return state;
	}
}