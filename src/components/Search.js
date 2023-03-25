import React from "react";
import useReactRouter from 'use-react-router';
import { businessSearch } from "../API/businessSearch";
import { SearchResults } from "./SearchResults";

export function Search(){
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = businessSearch(term, locationParam);

    return(
        <div>
            <SearchResults/>
        </div>
    )

}