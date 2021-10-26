import SearchContext from "./search-context";
import React from "react";

const SearchProvider:React.FC = props => {


    const searchContext = {
        movies: []
    }

    return(
        <SearchContext.Provider value={searchContext}>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;