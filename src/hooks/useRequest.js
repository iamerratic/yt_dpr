import { useState, useEffect } from 'react';



function useRequest(url) {

    var [data, setData] = useState([]);
    var [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setData(data.slice(0, 5));
                    setLoading(false);
                });
        }, 500)
    }, [url]);

    return { data, isLoading };

}


export default useRequest;