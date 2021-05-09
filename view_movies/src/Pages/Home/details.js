import React, { Component } from 'react'

class Details extends Component{

    render(){
        return(
            <div id="teste">teste {this.props.name} {this.props.id} </div>
        );
    }
}
export default Details