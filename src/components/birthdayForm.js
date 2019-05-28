import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Clock from './clock';

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
                {
                    this.state.formCompleted ? 
                        <div>
                            <Clock birthdayFormState={this.state} />
                        </div>
                    :
                        <div>
                            <h1>Birthday Form Component</h1>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                            <a onClick={this.handleGenerate}>Generate Countdown</a>
                        </div>
                }
            </div>
        )
    }
}