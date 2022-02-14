import {UPDATE_SCHEDULE} from "./constants"

export default function Reducer(state, action) {
	return action.type === UPDATE_SCHEDULE ? {...state, [action.name]: action.value} : state
}