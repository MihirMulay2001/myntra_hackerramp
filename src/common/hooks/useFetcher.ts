import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addItemList} from '../../redux/actions'
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



const useFetcher = (url:string) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useDispatch()
    const imageData = {
            image : "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX////13hkAAAD13QD56oj85RrbxxZ7bwz44Rn44BnOuhX75Br/5xr03RnWwhbs1hiomBGunhL78rjm0BdtYwu9qxMtKQSWiA+BdQ11agzDsRShkhBbUglVTQkYFgJpXwo/OQZGQAeFeQ3SvhUJBwAxLAVRSQi2pRIlIgNgVwpZUAiejxA5MwYfHAMbGAMoJASPgg7Qx6ldAAAEG0lEQVR4nO2da5PaIBSGG7okEIjRokaje3N367qXtv//1zVxNTkg+qUzDqTv8y0JOjxCcuBAxm/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArsGPm2vz48qGN9+vzc3VDZPrAkMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGEZnKDqk76riWivNuRKxGpZ5R+oqSl7kq+X69ufbOhvnkp/+BBEYypR1LLl9SafZXX+V3WWpdh0jM8wsQ2WmzGVaquEY8tnziWDTjrndzhEb6rHHr2VmtWK8hmp2RpCxnCpGayjNWUHGDHncRGuo7i8Y3pJGjNVQji4IMjbpg3+shjyjQi/Txf2cHFfk47EaauIzr5shm+b1w+H4Z6rjN6TnmPm660Sx2x+OpTU+jdRQkFBRdfdm0fTUNzOMMY2Y9OfyrsnEiG2HMi6lhqO+Uwp3UDoMw613Whi9IbkP1/rixyM1tAL+mF/6eKSGVjxkm+L09ovfcEcVXyf6rGOshmLLLJ5XpSdHE7NhUvxmDouRN9kWraHauoaM7Wp96hitYaKWp4rsMeeuY7yGSfHgUWRvIyd2RGwoi0efIqsGMbc4KPozGY9mEJmoPXriVWSjAeRpDiiT+RXjz9N0F9XI90ydl134j92wXVwzi1PFZddP4zdsV9iS8cvZfjoEwwYlZ7e24fQ4axyIYbtOnNvh8XhhMIbtDbmihrUYnGETHmtiuFIDMDyZEGoSHY8L4oEaSlL582vAxjiOgqRvdkEbqpRsuqBZp00/HFNJxXZO7kKWfdFbHa6hKN7ZY193mrCojqeFmrWLTSs7k0iXTdfBGkpdfzQVnHT9kW/6ah+zvzo9hL+ZpajISHwaai9V5dcOkue0a0WyY+ZrjUIU/TiNLlQIWvQ9zGepkF1M+0x187yRgtOR9f7RIqw9CkvD95vBmpKGzvrDjIfyidaxGpkyrd/ImYd9n3RXuLM6LYvS5PZE6vidYRmK3K77r1f7+NDz1IY5vL7Mnd1D3f6wsAwTfWmHBWPloZg/CWXRhZvADJPyUq03Xcbb+PZ7URbBzg9Vfb7Wv/qJu3q6LPhRdt8YmqEV0hxqkiVUl/fTpCHnac7lz9jWGnWLcn3W77chv0V4hgl/mntqfVc7EyepVp9+waygKeEADffjUpeFu4kkaYc/73enfrvcLhmiYVP3YkJTEq+VUd7FQSXrzHqqvlSpu8QWpmHTjrrIJ9ViutyMZ0b7/fbluDb1eLO8v1/+mdSlp2Sohm3lhVKcK+V9BYEg9+XalxGifRvh34AhDGEIw0EaDv3/LYb/HyUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhf+QtuG2g4jPOCggAAAABJRU5ErkJggg=="
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try{
                const dataItems = await fetch('https://myntra-sense-backend.herokuapp.com/item/findMatchedItems',{
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
            }catch(e) {
                setError(e);
                console.log(e);
                
            }
        }
        fetchData()
        setLoading(false)
    }, [])
    return {loading, error, data}
}

export default useFetcher

//