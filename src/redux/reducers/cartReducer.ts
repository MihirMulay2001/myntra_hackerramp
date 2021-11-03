type StateType = {
    id: string,
    quantity: number,
    size: string,
    fit ?: string
}


const addItem = (state:StateType[], itemId) => {
    const idx = state.findIndex(item =>  item.id === itemId)
    let newState = state
    if(idx === -1)
        newState.push({id: itemId, quantity: 1,size:'s', fit:'slim'})
    else
        newState[idx].quantity += 1
    return newState
}

const removeItem = (state:StateType[], itemId) => {
    const idx = state.findIndex(item =>  item.id === itemId)
    let newState = state
    if(newState[idx].quantity === 1)
        newState.splice(idx,1)
    else
        newState[idx].quantity -= 1
    return newState
}

const initialState: StateType[] = []

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_ITEM" : return addItem(state, action)
        case "REMOVE_ITEM" : return removeItem(state, action.id)
        default : return state
    }
}
export default cartReducer