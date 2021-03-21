import React, { Component } from 'react';
import './App.css';
import List from './list.js';
import { library} from '@fortawesome/fontawesome-svg-core';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faTimesCircle);
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
      }
      this.handleInput= this.handleInput.bind(this);
      this.addItem= this.addItem.bind(this);
      this.deleteItem= this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
  }
handleInput(e){
  this.setState({currentItem:{
    text:e.target.value,
    key:Date.now()
  }})
}
addItem(e){
  e.preventDefault();
  const newItem=this.state.currentItem;
  if(newItem.text!==""){
    const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',key:''
      }
    })
  }
}
deleteItem(key){
const filteredItems=this.state.items.filter(item =>item.key!==key);
  this.setState({items:filteredItems})
}
setUpdate(text,key){
  console.log("items:"+this.state.items);
  const items = this.state.items;
  items.map(item=>{      
    if(item.key===key){
      console.log(item.key +"    "+key)
      item.text= text;
    }
  })
  this.setState({
    items: items
  })
}
  render(){
    return(
      <div className="todoform"><header>
        <form id="main" onSubmit={this.addItem}>
          <input type="text" onChange={this.handleInput} value={this.state.currentItem.text} placeholder="Enter your note here" />
          <button type="submit">ADD</button>
        </form>
      </header>
      <List items={this.state.items} 
      deleteItem={this.deleteItem}
      setUpdate={this.setUpdate}></List>
      
      </div>
    );
  }
}

export default App;
