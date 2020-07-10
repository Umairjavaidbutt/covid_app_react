export const fetchData = async () => {
    try {
        const data1 = await fetch('https://covid19.mathdro.id/api/');
        const data = await data1.json();
          
          
    return data;
    }
    catch (error){}
}

export const ChartData = async() => {
    try {
        const data1 = await fetch("https://covid19.mathdro.id/api/daily");
        const data = await data1.json();
        const modifiedData = data.map((dailyTotal) => ({
            confirmed: dailyTotal.confirmed.total,
            deaths: dailyTotal.deaths.total,
            date: dailyTotal.reportDate,
            
        }))
        return modifiedData;
    }
    catch (error){
        console.log(error)
    }
}

export const fetchCountries = async () => {
    const response = await fetch("https://covid19.mathdro.id/api/countries");
    const region = await response.json();
    const countryData= region.countries.map((country)=> country.name);
    return countryData
}





