import React from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import Clock from '../Components/Clock'
import ErrorBoundry from "../Components/ErrorBoundry";
class App extends React.Component {

    constructor(){
        super()
        this.state = {
            robots:[], 
            searchField:'',
            date: new Date()
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json() )
        .then(robots => this.setState({robots:robots, date:new Date()}))
    }

    onSearchChange = (evt) => {
        console.log(evt.target.value)
        this.setState({searchField:evt.target.value})
    }

    render(){
        const {robots, searchField, date} = this.state
        return !robots.length ? 
            (<h1 className='tc f1'>Loading</h1>)
        :
            (
                <div className='tc'>
                    <h1 className='f1' >RoboFriends</h1>
                    <Clock date={date} />
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()))}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}
export default App