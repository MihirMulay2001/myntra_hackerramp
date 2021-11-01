import {combineReducers} from 'redux'
import cartState from './cartReducer'


const rootReducer = combineReducers({
        cart: cartState
    })

export default rootReducer