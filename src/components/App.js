import React, { Component } from 'react'
import './App.css'
import Notes from './Notes';
import Title from './Title';
import Content from './Content';
const date = new Date();

class App extends Component {
  state = {  
    notes: [{
      id: 1,
      title: `Notatka #1`,
      desc: "",
      date: date,
    }],
    Title: "",
    Desc: "",
    selected: 0,
  }

  handleAddNote = () =>{
    const date = new Date();
    const last = this.state.notes[this.state.notes.length-1]
    if(this.state.notes.length===0){
      this.setState({
        Title: "",
        Desc: "",
        notes: [{
          id: 1,
          title: `Notatka #1`,
          desc: this.state.Desc,
          date: date,
        }],
      })
    }
    else{
      this.setState(prevState=>({
        Title: "",
        Desc: "",
        notes: prevState.notes.concat({
          id: last.id+1,
          title: `Notatka #${last.id+1}`,
          desc: this.state.Desc,
          date: date,
        }),
      }))
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

  handleSelectNote = (id) =>{
    this.setState({
      selected: id,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container-squares">
          <div onClick={this.handleAddNote} className="Add-square">
            ADD NEW NOTE
          </div>
          {this.state.notes.length > 0 ? <Notes select={this.handleSelectNote} delete={this.handleDeleteNote} notes={this.state.notes}/> : null}
        </div>
        <div className="inputs">
          <Title handleChange={this.handleInputValue} value={this.state.notes[this.state.selected].title} title={this.state.Title}/>
         <Content handle={this.handleTextareaValue} content={this.state.Desc}/>
        </div>
      </div>
    );
  }
}

 
export default App;