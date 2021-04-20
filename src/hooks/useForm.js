import { useState } from 'react';

function useForm() {

    var [data, setData] = useState({});

    function handleChange(e) {
        var id = e.target.id;
        setData({
            ...data,
            [id]: e.target.value
        });
    }


    return { data, change: handleChange };
}


export default useForm;