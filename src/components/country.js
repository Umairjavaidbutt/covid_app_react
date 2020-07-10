import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import{fetchCountries} from './api'



export const Country = () => {
    const [countries , setCountry] = useState([]);

    useEffect(() => {
        const countryData = async () => {
            setCountry(await fetchCountries());
            
        }
        countryData();
    },[setCountry]
    )
    
    if (!setCountry) {
        return <div>"Loading...</div>
    }
    return (
        <FormControl>
            <NativeSelect>
                <option value='global'>Global</option>
    {countries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
