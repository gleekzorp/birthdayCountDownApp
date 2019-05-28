import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class BirthdayForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: new Date(),
            formCompleted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        })
    }

    render() {
        return (
            <div>
                <h1>Birthday Form Component</h1>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown</a>
            </div>
        )
    }
}