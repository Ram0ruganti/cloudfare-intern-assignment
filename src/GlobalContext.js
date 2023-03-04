import { createContext, useState } from "react";

export const GlobalContext = createContext({
    searchParam: '',
    handleOnChange: () => { },
    handleSubmit: () => { },
    movieList: [],
    loading: false
})

const GlobalState = ({ children }) => {

    const [searchParam, setSearchParam] = useState('')
    
    const handleOnChange = (event) => {
        console.log(event.target.value);
        setSearchParam(event.target.value)

    };
    const handleSubmit = async () => {
        const response  = await fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US')
        const data =await response.json();
        console.log(data);
    }
    const contextvalue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        movieList: [],
        loading: false
    }
    return (
        <GlobalContext.Provider value={contextvalue}>
            {children}
        </GlobalContext.Provider>
    )
};

export default GlobalState;