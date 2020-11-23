import React from 'react';

import {Cards, Chart, CountryPicker} from './components'; //shorthand
import styles from './App.module.css';
import {fetchData} from './api' //no need to include index.js

class App extends React.Component {

    state = {
        data: {},
    }

   async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    render(){
        return(
            <div className={styles.container}>
                <h1>App</h1>
                <Cards data = {this.state.data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;