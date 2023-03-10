import { useState } from 'react';
import './styles.css'

const Search = (props) => {
    console.log(props);
    const {getDataFromSearchComponent} = props;

    const [inputValue, setInputValue] = useState('') //initial value
    
    const handleInputValue = (event)=>{
        const {value} = event.target;
        //set the update state
        setInputValue(value)
    }
    console.log(inputValue);

    const handleSubmit=(event)=>{
        event.preventDefault()
        getDataFromSearchComponent(inputValue)
    }
    return (
        <form onSubmit={handleSubmit} className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipes" id="search" />
            <button type="submit"> Search</button>
        </form>
    );

};

export default Search;