import {useEffect, useState} from "react";
import {instance2} from "../constants/constants";
import axios from "axios/index";

export const useMovieApi = () => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/',
            headers: {
                'X-RapidAPI-Key': '30a24c5bf3mshcf5ea6225aa16cbp187517jsn0cdf75846709',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };


        try {
            const response = await axios.request(options);
            setData((preState: any): any => response.data)
        } catch (e) {
            setError(e)
        } finally {
            setIsPending(false)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return {data, isPending, error}

}