import {UPDATE_UNIQUES, INIT_UNIQUES} from '../constants/action_types';

const stateInit = {
	inputPara: '',
	outputUniques: '',
	outputPara: ''
};

function rootReducer(state = stateInit, action){
	if (action.type === UPDATE_UNIQUES || action.type === INIT_UNIQUES ){
		const sample = action.payload.rawText;
		const sampleArr = sample.split('');
		const removeArr = [];
		const outputArr = [];
		let counter = sampleArr.length;
		for (let i = 0; i < sampleArr.length; i++){
			if (counter < 51){
				break;
			}
			if (!outputArr.includes(sampleArr[i])){
				outputArr.push(sampleArr[i]);
				removeArr.push(i);
				counter--;
			}
		}
		for (let idx = removeArr.length-1; idx >= 0; idx--){
			sampleArr.splice(removeArr[idx],1);
		}
		return Object.assign({},state,{
			inputPara: action.payload.rawText,
			outputUniques: outputArr,
			outputPara: sampleArr
		})
	}
	return state;
}

export default rootReducer;