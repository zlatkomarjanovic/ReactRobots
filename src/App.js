import React, {Fragment, useState, useEffect} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox.js'
import './index.css'
import Scroll from './Scroll'; 




const  App = () => {
    
    const [robots, setRobots ] = useState([])
    const [searchfield, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => {setRobots(users)});
    },[])


    const onSearchChange = (event) => {
        setSearchField(event.target.value)
        
    }

    
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })
    return (
        <Fragment>
            <div className = "tc">
                 <h1 className = "white f1 f2">Robots</h1>
                <SearchBox searchChange = { onSearchChange} /> 
                <Scroll>
                 <CardList  robots = {filteredRobots}/>
                </Scroll>
            </div>
        </Fragment>
    )
     
}

export default App
