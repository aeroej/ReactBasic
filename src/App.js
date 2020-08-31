import React from 'react';
import logo from './logo.svg';
import './App.css';

// function WorldClock(props){
//   return(
//     <div className={"WorldClock"}>
//         <h2>도시 : {props.city}</h2>
//         <p>시간 : {props.time}</p>
//     </div>
//   );
// }

class App extends React.Component{

  constructor(props){
    super(props)

    this.citytime = [
      ['seoul', 10],
      ['beijing', 9],
      ['england', 13],
    ]
    this.state ={
      content: '',
      show : true,
    }


    console.log("Parent)  시작합니다.")
  }






  
  componentDidUpdate(){
    console.log("Child)  업데이트되었습니다.")
  }

  componentDidMount(){
    console.log("Parent)  마운트되었습니다.")
  }

  handlingChange = (event) =>{
    this.setState({content : event.target.value})
  }
  
  handlingClick = (event) => {
    this.setstate({show : false})
  }


  
  // const clocklist = citytime.map((ct, index)=>
  //   <WorldClock city={ct[0]} time={ct[1]} key={index}/>
  // )
  render(){
    console.log("Parent)  렌더링")
    return (
      <div className="App">
          <h1 className={'mystyle'} >안녕</h1>
          <div className={'post'}>
            첫 게시글입니다.
            <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
          </div>
          <button onClick={this.handlingClick}>손가락 튕기기!</button>


          {this.state.show &&
          this.citytime.map((ct, index)=>
            <WorldClock city={ct[0]} time={ct[1]} key={index}/>
          )}
          
      </div> 
    );
  }
}





class WorldClock extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      hour:this.props.time,
      minute:0,
      stop: false,
    }
    
  console.log("Child)  시작합니다.")
    // setInterval(()=>{
    //   this.setState({minute:1})
    // }, 1000)

    
    
  }




  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        ?{hour : state.hour + 1, minute:0}
        :{minute:state.minute+1}
    ))
  }, 100)
    console.log("Child)  마운트되었습니다.")
  }

  componentDidUpdate(){
    console.log("Child)  업데이트되었습니다.")
  }

  handlingClick = (event) => {
      console.log(event.target)
      this.setState({stop:event.target.value})
      clearInterval(this.timer)
  }




  render(){
    return(
    <div className={"WorldClock"}>
      <h2>도시 : {this.props.city}</h2>
      <p>시간 : {this.state.hour}시 {this.state.minute}분</p>
      <button value = {true} onClick={this.handlingClick}> click </button>
    </div>
    )
  }
}



export default App;
