import React, {Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import Radium,{StyleRoot} from 'radium'
// import UserOutput from './UserOutput/UserOutput'
// import UserInput from './UserInput/UserInput'
class App extends Component{
  state = {
    person : [
      { id:'a', name:"Dipesh Jindal", age:19 },
      { id:'b',name:"Mike" , age:18 },
      { id:'c',name:"Han", age:25 }
    ],
    showPersons:false
,
  }

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.person]
    persons.splice(personIndex,1)
    this.setState({person:persons})
  }

  nameChangedHandler= (event,id)=>{
    const person = this.state.person.findIndex((p)=>{
      return p.id===id
    })
    const persons = [...this.state.person]
    persons[person].name=event.target.value
    this.setState({person:persons})
  }
  
  togglePersonsHandler = ()=>{
    this.setState({
      showPersons:!this.state.showPersons
    })
  }

  render(){
    const style= {
      font: 'inherit',
      color:'white',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      backgroundColor:'green',
      // ':hover':{
      //   backgroundColor: 'lightgreen',
      //   color:'black'
      // }
    };
    let persons = null
    if(this.state.showPersons)
    {
      persons=(
        <div>
          {
            this.state.person.map((person,index)=>{
              return(
                <Person 
                  name={person.name} 
                  age={person.age}
                  click={this.deletePersonHandler.bind(this,index)}
                  changed={(event)=>this.nameChangedHandler(event,person.id)}
                  key={person.id}/>
              )
            })
          }
        </div>
      );
      style.backgroundColor='red'
      // style[":hover"]={
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    }
    const classes = []
    if(this.state.person.length<=2)
    {
      classes.push('red')
    }
    if(this.state.person.length<=1)
    {
      classes.push('bold')
    }
    return (
      // <StyleRoot>
        <div className="App">

            <h1>Hi ,I am a React App</h1>
            <p className={classes.join(' ')}>This is Really Working</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
            {persons}

        </div>
      // </StyleRoot>
    );
  }
}
// export default Radium(App);
export default App;