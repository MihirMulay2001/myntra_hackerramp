import {useState, useEffect} from 'react'
interface ItemType {
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



const useFetcher = (url:string, id = null) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try{
                const dataItems = await fetch(url,{
                    mode: 'no-cors'
                });
                console.log(dataItems);
                
                const dataJson = await dataItems.json();
                
                setData(dataJson)
            }catch(e) {
                setError(e);
                console.log(e);
                
            }
        }
        fetchData()
        setLoading(false)
    }, [url])
    return {loading, error, data}
}

export default useFetcher