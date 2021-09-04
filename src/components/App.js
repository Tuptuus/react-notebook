import React, { Component } from 'react'
import './App.css'
import Notes from './Notes';
import Title from './Title';
import Content from './Content';

class App extends Component {
  state = {  
    notes: [],
    Title: "",
    Desc: "",
  }

  handleAddNote = () =>{
    const date = new Date();
    const last = this.state.notes[this.state.notes.length-1]
    if(this.state.notes.length===0 && this.state.Title.length>0){
      this.setState({
        Title: "",
        Desc: "",
        notes: [{
          id: 1,
          title: this.state.Title,
          desc: this.state.Desc,
          date: date,
        }],
      })
    }
    else if(this.state.Title.length>0){
      this.setState(prevState=>({
        Title: "",
        Desc: "",
        notes: prevState.notes.concat({
          id: last.id+1,
          title: this.state.Title,
          desc: this.state.Desc,
          date: date,
        }),
      }))
    }else{
      alert("Wpisz tytuł")
    }
  }

  handleDeleteNote = (id) =>{
    const notes = [...this.state.notes]
    const index = notes.findIndex(item => item.id === id)
    notes.splice(index, 1)
    this.setState({
      notes: notes
    })
  }

  handleInputValue = (e) =>{
      this.setState({
        Title: e.target.value
      })
  }

  handleTextareaValue = (e) =>{
    this.setState({
      Desc: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container-squares">
          <div onClick={this.handleAddNote} className="Add-square">
            ADD NEW NOTE
          </div>
          {this.state.notes.length > 0 ? <Notes delete={this.handleDeleteNote} notes={this.state.notes}/> : null}
        </div>
        <div className="inputs">
          <Title handleChange={this.handleInputValue} title={this.state.Title}/>
          <Content handle={this.handleTextareaValue} content={this.state.Desc}/>
        </div>
      </div>
    );
  }
}

 
export default App;