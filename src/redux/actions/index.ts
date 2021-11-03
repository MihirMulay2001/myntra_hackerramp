const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM= "REMOVE_ITEM"
const ADD_ITEM_LIST = "ADD_ITEM_LIST"

export const addItem = (itemId:string) => ({
    type: ADD_ITEM,
    id: itemId
})

export const removeItem = (itemId:string) => ({
    type: REMOVE_ITEM,
    id: itemId
})

export const addItemList = (itemList) => ({
    type: ADD_ITEM_LIST,
    itemList: itemList
})