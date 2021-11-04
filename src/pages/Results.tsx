import * as React from 'react'
import Link from 'next/link'
import Card from '../common/components/Card'
import styles from '../../styles/Results.module.css'
import useFetcher from '../common/hooks/useFetcher'
import Loader from '../common/components/Loader'

type ItemType = {
    id: string,
    brand?: string,
    label: string,
    size: string | string[],
    color: string,
    fit: string,
    occasion: string,
    pattern: string,
    image: string,
    price: number,
    discount: number,
    rating: number
}



export default function Results() {
    const { data, loading, error } = useFetcher('http://192.168.0.106:8080/getitems')
    if (error)
        return <div>error</div>
    return (
        <>
            <div className={styles.header}> </div>
            {
                loading ? <Loader />
                    :
                    <>
                        <div className={styles.patternMatches}>
                            <h1>Pattern Matches</h1>
                            <div className={styles.patternMatchCarousel}>
                                {data.map(item => <Card item={item} key={item.id} />)}
                            </div>
                        </div>
                        <h1> Matches found </h1>
                        <div className={styles.matchingOutfit}>
                            {
                                data.map(item => <Card item={item} key={item.id} />)
                            }
                        </div>
                    </>
            }

        </>
    )
}