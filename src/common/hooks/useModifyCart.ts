import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useModifyCart = (id) => {
    const itemList = useSelector(state => state["itemsList"])
    const itemProp = itemList.find(item => item.id === id)
    const dispatch = useDispatch() 
    const addItem = () => {
        return {}
    }
    const modifyItemQuantity = (value:number) => {
        
    }
    const itemQuantity = () => {
        return 0
    }
    return {itemProp, addItem,itemQuantity,modifyItemQuantity}
}

export default useModifyCart