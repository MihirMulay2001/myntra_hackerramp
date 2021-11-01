import * as React from 'react'

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


export default function Index(prop) {
    const item: ItemType = prop.item
    return (
        <div>
            item
        </div>
    )
}
