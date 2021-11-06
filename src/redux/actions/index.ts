const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM= "REMOVE_ITEM"
const ADD_ITEM_LIST = "ADD_ITEM_LIST"

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


export const addItem = (id :string | string[], size: string) => ({
    type: ADD_ITEM,
    id: id,
    size: size
})

export const modifyItem = (id :string  |string[], change : number) =>({
    type: 'MODIFY_ITEM',
    itemid: id,
    change
})



export const addItemList = (itemList) => ({
    type: ADD_ITEM_LIST,
    itemList: itemList
})