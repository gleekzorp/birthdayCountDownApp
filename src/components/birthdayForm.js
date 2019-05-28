import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class BirthdayForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Birthday Form Component</h1>
                <DatePicker />
            </div>
        )
    }
}