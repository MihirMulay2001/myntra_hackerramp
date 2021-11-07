import { ItemType } from "../../common/types"


const initialState : ItemType[] = []


const itemsReducer = (state = initialState, action) => {
    
    switch(action.type)
    {
        case 'ADD_ITEM_LIST': return [...action.itemList]
        default: return [...state]
    }
}
export default itemsReducer