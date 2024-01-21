import React from "react";

export default class Layout extends React.Component {

    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Hello from React</h1>
            </div>
        );
    }
}