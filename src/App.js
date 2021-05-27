import React, {Fragment, Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox.js'
import './index.css'
import Scroll from './Scroll'; 




class  App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        } ).then(users => {
            this.setState({robots: users}); 
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
    return (
        <Fragment>
            <div className = "tc">
                 <h1 className = "white f1 f2">Robots</h1>
                <SearchBox searchChange = {this.onSearchChange} /> 
                <Scroll>
                 <CardList  robots = {filteredRobots}/>
                </Scroll>
            </div>
        </Fragment>
    )
    }; 
}

export default App
