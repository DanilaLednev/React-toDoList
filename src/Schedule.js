import { Component } from "react";

export class Schedule extends Component {


  state = {
    userInput: "",
    taskList: [], 
  }

  onChangeEvent(e) {
    this.setState({ userInput: e });
    console.log(e)
  }

  addItem(input) {
    if(input === ""){
      return false
    }


    let taskArray = this.state.taskList;
    taskArray.push(input);
    this.setState({ taskList: taskArray, userInput: "" });
    console.log(taskArray);
  }


  deleteItem() {
    let taskArray = this.state.taskList;
    taskArray = [];
    this.setState({ taskList: taskArray })
  }

  doneTask(event) {
    const li = event.target;
    li.classList.toggle('done')
  }

  onFormSumbit(event) {
    event.preventDefault();
  }

  render(){
    return (
    <div>
      <form onSubmit={ this.onFormSumbit }>
      <div className="container">
        <input className="input" type="text" placeholder="Your tasks..." value= { this.state.userInput } 
          onChange={ (e) => this.onChangeEvent(e.target.value) } />
          <button className="btn-add" onClick={ () => this.addItem(this.state.userInput) } >Add</button>
      </div>
      <div className="container">
        <ul type="none">
        { this.state.taskList.map((item, index) => (<li onClick={ this.doneTask } key={ index } > { item } 
            </li>)) } 
        </ul>
        </div>
      <div className="container">
        <button className="btn-delete" onClick={ () => { this.deleteItem() } } >Delete</button>
      </div>
      </form>
    </div>
    )
  }
}