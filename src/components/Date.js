import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import{fetchData} from './api'

export default function Date () {

    const [isDate, setIsDate] = useState();

    useEffect(() => {
        
            const date = async () => {
            setIsDate(await fetchData());
        }
        date();
    },[setIsDate]
    )
    console.log(isDate)

    if (!isDate) {
        return <p>"Loading"</p>
    }
    return (
        <div>
            <Moment parse="YYYY/MM/DD">
                {isDate.lastUpdate}
            </Moment>
        </div>
    )
}
