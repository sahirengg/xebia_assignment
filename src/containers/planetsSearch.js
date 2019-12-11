import React from 'react';
import SearchBar from '../components/searchbar';
import axios from 'axios';
import PlanetsList from '../components/planetsList';
import { Link} from 'react-router-dom';



class PlanetsSearch extends React.Component{
constructor(){
  super();
  this.state ={
    imageResults: [], 
    total: '',
    planets: ''
  }
}

planetsApi = (term) => {
  const apiUrl = `https://swapi.co/api/planets?/${term}`;
  axios.get(apiUrl, {
      params:{
         query: term
       }
      
  })
  .then(response=>{
    this.setState({
      planets:response.data.results,

    });
  })
  .catch(error=>{
    console.log(error)
  })
}

  render(){
    const {planets} = this.state
       return (
      <div>
        <a style={{textAlign: 'right'}}><Link to='/login'>Login</Link></a>
        <SearchBar onSubmit={this.planetsApi} />
       <div>
        <PlanetsList searchResults={planets} />
       </div>
      </div>
    );
  }
 
}

export default PlanetsSearch;
