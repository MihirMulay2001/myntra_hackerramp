import React from 'react'
import { useRouter } from 'next/router'

type ItemType = {
    id: string,
    brand ?: string,
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


export default function Item(props) {
    const item: ItemType = props.item
    const router = useRouter()
    const {id} = router.query
    const data :ItemType = {
        id: 'ab3h',
        brand: 'nike',
        label: 'air force 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IgUPHtXodi9SX3kvlIet_MRZpQLcT2vtYw&usqp=CAU',
        price: 4000,
        discount: 10,
        size: 'small',
        fit: 'skinny',
        occasion: 'date',
        color: 'pink',
        rating: 5
    }
    return (
        <div>
            {data.label}
            {data.price}
            {data.discount}
        </div>
    )
}