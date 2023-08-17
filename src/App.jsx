// App.js
import './App.css';
import React, { Component } from 'react';
import ListItems from './Listitems'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentitems: {
        text: '',
        key: '',
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentitems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentitems;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        // buy saying this we making the input emty after taking the data to out place 
        currentitems: {
          text: '',
          key: '',
        },
        //==========================
      });
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input
              type='text'
              placeholder='Write Your Todo'
              value={this.state.currentitems.text}
              onChange={this.handleInput}
            />
            <button className='addbtn'>Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
