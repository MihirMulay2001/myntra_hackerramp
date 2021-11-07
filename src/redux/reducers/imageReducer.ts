const initialState = ""

const imageReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'SET_IMAGE' : return action.image
        default: return state
    }
}
export default imageReducer