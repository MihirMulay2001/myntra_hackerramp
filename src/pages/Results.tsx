import * as React from 'react'
import Card from '../common/components/Card'
import styles from '../../styles/Results.module.css'
import useFetcher from '../common/hooks/useFetcher'
import Loader from '../common/components/Loader'
import Header from '../common/components/Header/Index'
import { ItemType } from '../common/types'
import ErrorScreen from '../common/components/ErrorBoundary/ErrorScreen'
import { addItem, addItemList } from '../redux/actions'
import { useDispatch } from 'react-redux'

export default function Results() {
    const { data, loading, error } = useFetcher('https://myntra-sense-backend.herokuapp.com/item/findMatchedItems')
    const dispatch = useDispatch()
    dispatch(addItemList(data))
    console.log(loading);

    if (loading)
        return <Loader />
    else if (error)
        return <ErrorScreen />
    return (
        <>
            <Header />
            <div className={styles.patternMatches}>
                <h1>Pattern Matches</h1>
                <div className={styles.patternMatchCarousel}>
                    {data.map(item => <Card item={item} key={item._id} />)}
                </div>
            </div>
            <h1> Matches found </h1>
            <div className={styles.matchingOutfit}>
                {
                    data.map(item => <Card item={item} key={item._id} />)
                }
            </div>

        </>
    )
}