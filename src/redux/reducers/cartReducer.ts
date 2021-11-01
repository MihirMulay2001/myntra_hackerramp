type StateType = {
    id: string,
    quantity: number,
    color: string,
    fit: string,
    type: string
}


const addItem = (state:StateType[], action) => {
    const newItem = { id: action.id, quantity: 1}
    return [...state,newItem]
}

const removeItem = (state:StateType[], action) => {
    return [...state]
}

const initialState: StateType[] = []

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_ITEM" : return addItem(state, action)
        case "REMOVE_ITEM" : return removeItem(state, action)
        default : return state
    }
}
export default cartReducer