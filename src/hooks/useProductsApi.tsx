import {useEffect, useState} from "react";
import {instance} from "../constants/constants";

export const useProductsApi = () => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await instance.get('/products')
            setData(response.data)
        } catch (e) {
            setError(e)
        } finally {
            setIsPending(false)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return {data, isPending, error}

}