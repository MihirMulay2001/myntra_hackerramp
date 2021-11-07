import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItemList} from '../../redux/actions'
import { ItemType } from '../types'
//import { image } from '../assets/sample-test'


const useFetcher = (url:string) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useDispatch()
    const itemsList = useSelector((state : any) => state.itemsList)
    const image = useSelector((state : any) => state.image)
    //data:image/jpeg;base64,
    const imageData = {
            image : image
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                //console.log(imageData.image);
                setLoading(true);
                if(itemsList.length < 1)
                {
                const dataItems = await fetch('https://myntra-sense-backend.herokuapp.com/item/findSimilarItems',{
                    method: "POST",
                    body: JSON.stringify(imageData),
                    headers: {
                        'Content-Type':'application/json'
                    }
                });
                
                const dataJson = await dataItems.json();
                console.log(dataJson.itemsArray);
                dispatch(addItemList(dataJson.itemsArray))
                setData(dataJson.itemsArray)
            }
            }catch(e) {
                setError(e);
                console.log(e);
            }
        setLoading(false)
        }
        fetchData()
        //eslint-disable-next-line
    }, [])
    return {loading, error, data}
}

export default useFetcher

//