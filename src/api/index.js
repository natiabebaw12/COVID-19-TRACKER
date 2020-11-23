import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try {
        const {data: {confirmed, recovered, deaths, lastupdate}} = await axios.get(url); //distruct only the data i need from the returned api data
        
        return {confirmed, recovered, deaths, lastupdate,}

    } catch (error) {
        
    }
}