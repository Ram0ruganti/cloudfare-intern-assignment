import { useState } from "react";
import Search from "../../components/search";
import RecipeItem from "../../components/search/recipe-item";
import './styles.css';
import data from '../../internet-traffic.json';

const dummydata = 'dummydata'

function MyComponent(){
    const [_key, setKey] = useState(data._key);
    const [data, setData] = useState(data.data);
    const [meta, setMeta] = useState(data.meta);
}

const Homepage = () => {

    //loading state
    const [loadingState, setLoadingState] = useState(false)

    //loading results we get from api
    const [results, setResults] = useState([])


    const getDataFromSearchComponent = (getData) => {

        //keep loading state as true before we call the api
        setLoadingState(true);
        console.log(getData, 'getData');




        //calling the api
        async function getRecipes() {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5b4af7bc64ef43b6833297a5bc54bf96&query=${getData}`);
            const result = await apiResponse.json();
            const { results } = result;
            if (results && results.length > 0) {
                // set loading state as false
                //set recipe state

                setLoadingState(false)
                setResults(results)
            }

            console.log(results);
        }

        getRecipes()
    };

    console.log(loadingState, results, 'loading and results');
    return (
        <div className="homepage">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} dummydata={dummydata}
            />

            {/* show loading state */}

            {
                loadingState && <div className="loading">Loading Recipes ,please wait</div>
            }


            {/* show loading state */}

            {/* map through all recipes */}

            <div className="items">{results && results.length > 0
                ? results.map(item => <RecipeItem id={item.id} imaage={item.image} title={item.title}  />)
                : null}</div>


            {/* map through all recipes */}

        </div>


    );

};

export default Homepage;