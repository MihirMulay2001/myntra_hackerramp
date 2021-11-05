import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/Item.module.css'
import Image from 'next/image'
import useModifyCart from '../../common/hooks/useModifyCart'
import SampleImage from '../../common/assets/sample-image.jpg'
import { useSelector } from 'react-redux'


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


export default function Item() {
    const router = useRouter()
    const id = router.query.id
    const itemList: ItemType[] = useSelector((state: any) => state.itemsList)
    const data = itemList.find(item => item._id === id)
    console.log(data);

    const { addItem, modifyItemQuantity, itemQuantity } = useModifyCart(id)
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
            <div className={styles.header}> </div>
            <div className={styles.container} >
                <div className={styles.image}>
                    {/* <Image src="https://storage.googleapis.com/download/storage/v1/b/myntra-sense.appspot.com/o/%2Fimages%2Fimg6.jpg?generation=1636021558092010&alt=media" alt="item" width="355" height="325" /> */}
                </div>
                <div className={styles.brand}>{data.brand}</div>
                <div className={styles.label}>{data.label}</div>
                <div className={styles.price}>
                    &#x20B9;{data.price}
                    <div className={styles.discount}>({data.discount}% off)</div>
                </div>
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