import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { getClockTime } from './lib'
const { Component } = React
const target = document.getElementById('react-container')

class Clock extends Component {

   constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("Starting Clock")
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }

    render() {
        const { hours, minutes, seconds, timeOfDay } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}

render(
    <Clock onClose={() => unmountComponentAtNode(target) }/>,
    target
)
