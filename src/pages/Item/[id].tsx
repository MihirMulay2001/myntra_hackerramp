import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Item.module.css'
import Image from 'next/image'
import useModifyCart from '../../common/hooks/useModifyCart'
import SampleImage from '../../common/assets/sample-image.jpg'
import { useSelector } from 'react-redux'
import Header from '../../common/components/Header/Index'
import { ItemType } from '../../common/types'
import { useRouter } from 'next/router'


export default function Item() {
    const itemList: ItemType[] = useSelector((state: any) => state.itemsList)
    const router = useRouter()
    const id = () => (router.query.id)
    //const id = window.location.pathname.split('/')[2]

    const [size, setSize] = useState('m')
    const data = itemList.find(item => item._id === id())
    const { addItem, modifyItemQuantity, itemQuantity } = useModifyCart(id())
    const handleClick = (value: string) => {
        setSize(value)
    }
    const addNewItem = event => {
        event.preventDefault()
        addItem({ size: size })
    }
    const increaseQuantity = event => {
        event.preventDefault()
        modifyItemQuantity(1)
    }
    const decreaseQuantity = event => {
        event.preventDefault()
        modifyItemQuantity(-1)
    }
    return (
        <>
            <Header />
            <div className={styles.container} >
                <div className={styles.image}>
                    <Image src={data.imageUrl} alt="item" width="355" height="325" />
                </div>
                <div className={styles.brand}>{data.brand}</div>
                <div className={styles.label}>{data.label}</div>
                <div className={styles.price}>
                    &#x20B9;{data.price}
                    <div className={styles.discount}>{data.discount &&
                        <>
                            <span className={styles.oldprice}>&#x20B9; {Math.round(data.price / 0.63)}</span>
                            ({data.discount}% off)
                        </>
                    }
                    </div>
                </div>
                <div className={styles.sizes}>
                    <h3>Select size</h3>
                    <div className={styles.selectSizes}>
                        <div
                            className={styles.size + ' ' + (size == 'xs' ? styles.active : '')}
                            onClick={e => { e.preventDefault(); handleClick('xs') }}
                        >XS
                        </div>
                        <div
                            className={styles.size + ' ' + (size == 's' ? styles.active : '')}
                            onClick={e => { e.preventDefault(); handleClick('s') }}
                        >S
                        </div>
                        <div
                            className={styles.size + ' ' + (size === 'm' ? styles.active : '')}
                            onClick={e => { e.preventDefault(); handleClick('m') }}
                        >M
                        </div>
                        <div
                            className={styles.size + ' ' + (size == 'l' ? styles.active : '')}
                            onClick={e => { e.preventDefault(); handleClick('l') }}
                        >L
                        </div>
                        <div
                            className={styles.size + ' ' + (size == 'xl' ? styles.active : '')}
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
                        : <div className={styles.modifyquantity}>
                            <button onClick={increaseQuantity}>+</button>
                            <div>{itemQuantity()}</div>
                            <button onClick={decreaseQuantity}>-</button>
                        </div>
                }
            </div>
        </>
    )
}