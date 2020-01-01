import React, { useState, useEffect } from 'react'
import axios from 'axios'

const serverPath = 'http://localhost:5000/';

export const usePublicFetch = (path) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);

        const fetch = async () => {
            const {data} = await axios.get(`${serverPath}${path}`);
            setResponse(data);
            setIsLoading(false);
        }

        fetch();
    }, [])

    return {response, isLoading};
}