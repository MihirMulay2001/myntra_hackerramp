import {useState, useEffect} from 'react'


const useFetcher = (url:string) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try{
                const data = await fetch(url);
                const dataJson = await data.json();
                setData(dataJson)
            }catch(e) {
                setError(e);
            }
        }
        fetchData()
        setLoading(false)
    }, [url])
    return {loading, error, data}
}

export default useFetcher