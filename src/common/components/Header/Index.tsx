import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'


function Index() {
    return (
        <div className={styles.header}>
            <Link href="/Cart">
                Cart
            </Link>
        </div>
    )
}

export default Index
