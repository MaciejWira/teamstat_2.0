import { useEffect, useState } from 'react';

const useLocalStorageInit = () => {
    // server vs browser
    const [localStorageOn, setLocalStorageOn] = useState(false);

    useEffect(() => {
        if (!localStorageOn && typeof localStorage !== 'undefined') {
            setLocalStorageOn(true);
        }
    }, [localStorageOn]);

    return {
        localStorageOn,
    };
};

export default useLocalStorageInit;
