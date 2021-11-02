import * as React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
        <Link href={`/Item/${item.id}`} passHref>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={item.image} alt="item" width="300" height="300" />
                    <div className={styles.rating}>
                        <i className="fas fa-star"></i>{item.rating}
                        {item.rating}
                    </div>
                </div>
                <div className={styles.brand}>{item.brand}</div>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.value}>
                    <div className={styles.price}>{item.price}</div>
                    {
                        !item.discount && <div className={styles.discount}>{item.discount}</div>
                    }
                </div>
            </div>
        </Link>
    )
}
