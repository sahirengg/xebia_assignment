import React from 'react';
import {Redirect} from 'react-router-dom';




class LoginUser extends React.Component{
    constructor(){
        super();
        this.state={
         userName: "",
         password: ""
        }
    }
submitForm = () => {

if(this.state.userName === 'Luke Skywalker' && this.state.password === '19BBY'){
    return  <Redirect  to="/" />
} else {
    return
}
  

    
}



    render(){
        console.log(this.state.userName)
        return(
         <div>
            <form  style={{padding: '100px 0 0 0'}} className="ui form">
               <h1 style={{textAlign: 'left'}}>Login</h1>
            <div className="field">
              <label>Username:</label>
              <input type="text"
              className='ui field'
              onChange={e=>this.setState({userName: e.target.value})} 
              value={this.state.userName}
                name="username"
              placeholder="Username"
              required='true'
              />
            </div>
            <div className="field">
              <label>password</label>
              <input  
               className=' ui field'
              type="password"
              onChange={e=>this.setState({password: e.target.value})} 
              value={this.state.password}
              name="password"
              required='true'
               />
            </div>
          <button  className='ui primary button'
          onSubmit={ this.submitForm()}
          >
          Login</button>
          </form>
          </div>
        )
    }
}

export default LoginUser;