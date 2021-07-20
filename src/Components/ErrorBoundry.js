import React, {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            errorMessage:''
        }
    }

    componentDidCatch(error,info){
        this.setState({
            hasError:true,
            errorMessage: String(error) + JSON.stringify(info)
        })
    }

    render(){
        return this.state.hasError ? 
            <h1>{this.state.errorMessage}</h1>
        : this.props.children
    }
}

export default ErrorBoundry