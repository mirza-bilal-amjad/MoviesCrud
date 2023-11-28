import {useEffect, useState} from "react";
import {instance2} from "../constants/constants";
import axios from "axios/index";
import * as FileSystem from 'expo-file-system';

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

        const saveDataToFile = async (data: any) => {
            const fileUri = FileSystem.documentDirectory + 'data.json';

            try {
                // Write the data to the file
                await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data));

                console.log('Data saved to file:', fileUri);
            } catch (error) {
                console.error('Error saving data to file:', error);
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