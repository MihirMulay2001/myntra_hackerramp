import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/Item.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import useModifyCart from '../../common/hooks/useModifyCart'


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
const data: ItemType = {
    id: 'ab3h',
    brand: 'nike',
    label: 'air force 1',
    image: 'data:image/jpeg;base64,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',
    price: 4000,
    discount: 10,
    size: 'small',
    fit: 'skinny',
    occasion: 'date',
    color: 'pink',
    rating: 5
}

export default function Item() {
    const router = useRouter()
    const { id } = router.query
    const { itemProp, addItem, modifyItemQuantity, itemQuantity } = useModifyCart(id)
    const [size, setSize] = useState('m')
    const handleClick = (value: string) => {
        setSize(value)
    }
    const addNewItem = event => {
        event.preventDefault()
        addItem()
    }
    const increaseQuantity = event => {
        event.preventDefault()
        modifyItemQuantity(1)
    }
    const decreaseQuantity = event => {
        event.preventDefault()
        modifyItemQuantity(0)
    }
    return (
        <>
            <div className={styles.header}></div>
            <div className={styles.image}>
                <Image src={data.image} alt="item" width="300" height="300" />
            </div>
            <div className={styles.brand}>{data.brand}</div>
            <div className={styles.price}>
                {data.price}
                <div className={styles.discount}>{data.discount}</div>
            </div>
            <hr />
            <div className={styles.sizes}>
                <div>Select size</div>
                <div className={styles.selectSizes}>
                    <div
                        className={styles.size + ' ' + size == 'xs' ? styles.active : ''}
                        onClick={e => { e.preventDefault(); handleClick('xs') }}
                    >XS
                    </div>
                    <div
                        className={styles.size + ' ' + size == 's' ? styles.active : ''}
                        onClick={e => { e.preventDefault(); handleClick('s') }}
                    >S
                    </div>
                    <div
                        className={styles.size + ' ' + size == 'xm' ? styles.active : ''}
                        onClick={e => { e.preventDefault(); handleClick('m') }}
                    >M
                    </div>
                    <div
                        className={styles.size + ' ' + size == 'l' ? styles.active : ''}
                        onClick={e => { e.preventDefault(); handleClick('l') }}
                    >L
                    </div>
                    <div
                        className={styles.size + ' ' + size == 'xl' ? styles.active : ''}
                        onClick={e => { e.preventDefault(); handleClick('xl') }}
                    >XL
                    </div>
                </div>
            </div>
            <div className={styles.addtocart}>
                {
                    itemQuantity() === 0
                        ? < button onClick={addNewItem} > Add to cart</button>
                        : <div>
                            <button onClick={increaseQuantity}>+</button>
                            <div>{itemQuantity()}</div>
                            <button onClick={decreaseQuantity}>-</button>
                        </div>
                }
            </div>
        </>
    )
}