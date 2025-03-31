import React from 'react';
class Class extends React.Component{
    constructor(props){
        super(props);
    

    this.state={
        count:0
    };
}
handleIncrement=()=>{
    this.setState({ count: this.state.count + 1 });
}
render(){
    return(
        <>
        <button onClick={this.handleIncrement}>Increment</button>
        </>
    )
}
};

export default Class;
