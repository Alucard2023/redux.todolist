import {combineReducers} from 'redux'
import listReducer from './ListTaskReducer'



const rootReducer = combineReducers({listReducer})

export default rootReducer