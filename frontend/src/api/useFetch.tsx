import { useState, useEffect } from "react";
import axios from "axios";
import { Endpoint } from "./endpoints";

interface FetchResult<T> {
    data: T | null;
    error: boolean;
}

function useFetch<T>(endpoint: Endpoint, id?: string): FetchResult<T> {

    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async() => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/api/v1/${endpoint}${id ? `/${id}` : ''}`;
                const response = await axios.get<T>(url);
                setData(response.data)
                setError(false);
            } catch (fetchError) {
                setError(true);
            }
        };

        fetchData();
    }, [endpoint])

    return {data, error}
}

export default useFetch;