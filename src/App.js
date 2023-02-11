import Counter from './components/Counter'
import './App.css'
import React, {Component}  from 'react';
import Total from './components/Total';

export class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
      ],
    }
  }

  onDecrement = e => {
    this.setState(state => {
      const data = state.data.map(item => {
        return { id: item.id, value: (item.value -= e) }
      })
      return {
        data,
      }
    })
  }

  

  onIncrement = e => {
    this.setState(state => {
      const data = state.data.map(item => {
        return { id: item.id, value: (item.value += e) }
      })
      return {
        data,
      }
    })
  }

  render() {
    return (
      <div>
        {this.state['data'].map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        <Total/>
      </div>
    )
  }
}

export default App