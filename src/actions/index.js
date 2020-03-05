import {UPDATE_UNIQUES, INIT_UNIQUES} from '../constants/action_types';

export function update_uniques(event){
	return {
		type: UPDATE_UNIQUES,
		payload: {
			rawText: event.target.value
		}
	}
}

export function init_uniques(event){
	return {
		type: INIT_UNIQUES,
		payload: {
			rawText: "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."
		}
	}
}