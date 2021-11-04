import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

type ItemType = {
    id: string,
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

const useModifyCart = (id:string | string[]) => {
    //const itemList = useSelector(state => state["itemsList"])
    //const itemProp:ItemType = itemList.find(item => item.id === id)
    const dispatch = useDispatch() 
    const addItem = () => {
        return {}
    }
    const modifyItemQuantity = (value:number) => {
        
    }
    const itemQuantity = () => {
        return 0
    }
    return {addItem,itemQuantity,modifyItemQuantity}
}

export default useModifyCart