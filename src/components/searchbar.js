import React from 'react'
// import Suggestions from './sugestions'


class SearchBar extends React.Component {
constructor(){
    super();
    this.state = {
   term: ''
    }
}
componentDidMount(){
console.log(this.ImagesApi)
}



onInputSearch=(e)=>{
console.log(e.target.value)
}

onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state.term)
}

    render(){

        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Planets Search</label>
                    <input type='text'
                    onChange={e=>this.setState({term: e.target.value})}
                    value={this.state.term}
                      />
                    </div>
                    {/* <Suggestions /> */}

                </form>
            </div>
        )
       
    }
}

export default SearchBar