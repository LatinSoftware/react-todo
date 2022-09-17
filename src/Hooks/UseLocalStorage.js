
import  {useEffect, useState} from 'react';

const useLocalStorage = (name, identifier) => {
    const [items, setItems] = useState(identifier);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
       setTimeout(() => {
        // search data into localstorage
        var data = localStorage.getItem(name);
        if(data)
            setItems(JSON.parse(data));
        setLoading(false);
       }, 1000)
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem));
        setItems(newItem)
    }

    return {
        items,
        saveItem,
        isLoading,
    }
}

export { useLocalStorage };