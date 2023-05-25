import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    console.log('Fetch aborted.');
                } else {
                    setIsPending(false);
                    setError(error);
                }   
            })
        return () => abortCont.abort();
    }, [])

    return {data, isPending, error};
}
 
export default useFetch;