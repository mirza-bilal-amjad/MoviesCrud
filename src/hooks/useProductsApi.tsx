import {useEffect, useState} from "react";
import {instance} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {addProductItem, setData} from "../store/Product";

export const useProductsApi = () => {
    const data = useSelector((state: any) => state.productReducer.data);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const response = await instance.get('/products')
            dispatch(setData(response.data))
        } catch (e) {
            setError(e)
        } finally {
            setIsPending(false)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return {data, isPending, error, fetchData}

}