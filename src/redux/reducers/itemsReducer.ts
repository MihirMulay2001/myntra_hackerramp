type ItemType = {
    _id: string,
    brand?: string,
    label: string,
    size: string,
    color: string,
    fit: string,
    occasion: string,
    image: string,
    price: number,
    discount: number,
    rating: number
}


const initialState : ItemType[] = []


const itemsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'ADD_ITEM_LIST': return [...action.itemList]
        default: return [...state]
    }
}
export default itemsReducer