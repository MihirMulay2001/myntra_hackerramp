import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addItem as addNewItem, modifyItem} from '../../redux/actions'

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

const useModifyCart = (id : string | string[]) => {
    const dispatch = useDispatch() 
    const itemList = useSelector((state:any) => state.cart)
    console.log(itemList);
    
    const addItem = ({size}) => {
        dispatch(addNewItem(id, size))
    }
    const modifyItemQuantity = (value:number) => {
        dispatch(modifyItem(id,value))   
    }
    const itemQuantity = () => {
        const itemPresent = itemList.find(item => item.id === id)
        const quantity = itemPresent ? itemPresent.quantity : 0
        return quantity
    }
    return {addItem,itemQuantity,modifyItemQuantity}
}

export default useModifyCart