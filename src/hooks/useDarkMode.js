
import useLocalStorage from './useLocalStorage';


const useDarkMode = (initialValue) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('dark', initialValue);

    return [ darkMode, setDarkMode ];

}

export default useDarkMode;