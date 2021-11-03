import {combineReducers} from 'redux'
import cartState from './cartReducer'
import itemState from './itemsReducer'


const rootReducer = combineReducers({
        cart: cartState,
        itemsList: itemState
    })

export default rootReducer