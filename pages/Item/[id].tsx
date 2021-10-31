import React from 'react'
import { useRouter } from 'next/router'

export default function Item() {
    const router = useRouter()
    const {id} = router.query
    const data:Result = {
        name: id,
        price: 4000,
        discount: 0 
    }
    return (
        <div>
            {data.name}
            {data.price}
            {data.discount}
        </div>
    )
}

type Result = {
  name: string | string[],  
  price: number,
  discount: number
}
