const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM= "REMOVE_ITEM"
const ADD_ITEM_LIST = "ADD_ITEM_LIST"
import { ItemType } from "../../common/types"

export const addItem = (id :string | string[], size: string) => ({
    type: ADD_ITEM,
    id: id,
    size: size
})

export const modifyItem = (id :string  | string[], change : number) =>({
    type: 'MODIFY_ITEM',
    itemid: id,
    change
})



export const addItemList = (itemList) => ({
    type: ADD_ITEM_LIST,
    itemList: itemList
})

export const addImage = (image) => ({
    type: 'SET_IMAGE',
    image: image
})