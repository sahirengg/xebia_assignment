import React from 'react'
import './imageList.css'
class PlanetsList extends React.Component {
constructor(){
    super();
    this.state = {
    }
}
componentDidMount(){
}




    render(){
   const {searchResults} = this.props;
   
        return (
            <div className='image-list'>
               {this.props.searchResults && this.props.searchResults != null ?
               this.props.searchResults.map((planets, index)=>{
               return (
                    <div > 
                    <div class="content">
                    <a  style={planets.population > 90000 ?{ fontSize: '28px'}: { fontSize: ''}}>{planets.name}</a>
                    <div class="description">Population:{planets.population}</div> 
                    </div>
                    
                    </div> 
           // `${planets.population > 90000 ? ""}`
              
            )
         
        }) : ""
    }
    
            </div>
        )
       
    }
}

export default PlanetsList