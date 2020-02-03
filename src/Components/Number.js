import React, { Component } from 'react';

class Number extends Component {
    state = { 
        maxNumber : this.props.maxNumber,
        currentNumber : 0,
        countingSpeed : this.props.countingSpeed
     }

     componentDidMount() {
        const interval = setInterval(() => {
            let {currentNumber, countingSpeed} = this.state;
            currentNumber+= countingSpeed;
            if (currentNumber >= this.state.maxNumber) {
                clearInterval(interval)
            }
            this.setState({currentNumber})
        }, 50)
    }

    render() { 
        return ( <div>
            {this.state.currentNumber}
        </div> );
    }
}
 
export default Number;