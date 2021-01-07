//Import Area
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

//Let's Create a Class Component
class A extends Component{
    //1.Property
    state = {};

    //2.Constructor
    //Order Sequence 1
    constructor(props){
        super(props);
        //The role of constructor is to initialize the properties
        this.state = { "favColor":'Black'};
    }

    getSnapshotBeforeUpdate(prevProps,prevState){ //Formal Args
        alert('Previous Value of State was'+ prevState.favColor);
    }
    componentDidUpdate(){
        alert('After Value of State is'+this.state.favColor);
    }
    //3.Method
    //Every Class Component must have render method which always return HTML(JSX)
    //Order Sequence 2
    render(){
        return(
            <div>
                <h1>My Favourite Colour is { this.state.favColor }</h1>
            </div>
        );
    }
    //Order Sequence 3
    componentDidMount(){
        //this.state.favColor = "White";
        setTimeout(()=>{
            this.setState({"favColor" : 'White'});
        },3000);
    }
}



ReactDOM.render(<A/>,document.getElementById('root'));