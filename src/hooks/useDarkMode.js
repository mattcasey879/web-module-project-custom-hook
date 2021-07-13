import { useLocalStorage } from "./useLocalStorage";

const initialValue = false
const key = 'darkMode'

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage(key, initialValue)

    const handleToggle = (e) => {
        e.preventDefault();
        setValues(!values)
    }

    return [values, handleToggle]
}