import React from 'react';
import {Route ,Switch,BrowserRouter as Router} from 'react-router-dom';
import LoginUser from './login'
import PlanetsSearch from './planetsSearch'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
         
        };
      }




    render(){
        return(
          <div className='ui container'>
          <Router>
          <Switch>
          <Route exact path="/" component={PlanetsSearch} />
          <Route  path="/login" component={LoginUser} />
          
          </Switch>
            </Router>
        </div>
        )
    }
}
{/* <Router>
<Switch>
  <Route exact path="/" component={Home} />
  <Route  path="/xcoins" component={Xcoins} />
  <Route exact path="/videos" component={VideosSearch} />
<Route path="/searchimages" component={SearchImages} />
<Route exact path="/posts" component={PostContainer} />         
 <SearchImages/>
  </Switch>
  </Router> */}
export default App;