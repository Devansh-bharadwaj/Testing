import React, { Component } from 'react'

export default class Total extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [
              { id: 1, value: 0 },
              { id: 2, value: 0 },
              { id: 3, value: 0 }
            ],
          }
    }

    totalCount = (e)=> {
        e = this.data.value * 3
        console.log(e)
    }
    render() {
        return (
            <div>
                Total: {this.totalCount}
            </div>
        )
    }
}
