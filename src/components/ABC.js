import React,{Component} from 'react'
class ABC extends Component{
    constructor(){
super()
        this.state=
        {firstName : "",
         lastName : ""
        }
    }
    onClickHandler= () =>{
        alert("hello")
        this.setState({firstName:"Kavya"})
        this.setState({lastName:"AVi"})
    }

    render(){
    return (<div>
        <button onClick={()=>this.onClickHandler()}>Check</button>
       <label style={{color:'black'}}> {this.state.firstName}</label>
        {this.state.lastName}
    </div>)
    }
}
export default ABC