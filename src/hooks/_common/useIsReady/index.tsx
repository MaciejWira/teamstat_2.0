import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useIsReady = () => {
    const { isReady } = useRouter();
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (!isReady) return;
        setInit(true);
    }, [isReady]);

    return init;
};

export default useIsReady;
