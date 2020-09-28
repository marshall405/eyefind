import React from 'react'
import PropTypes from 'prop-types'
import '../styles/daily.css'

export default function Daily(props) {

    const setDay = () => {
        const date = new Date();
        switch (date.getDay()) {
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            default:
                return 'Sun';
        }
    }

    return (
        <div className="daily-container">
            <div className="daily-left-side">
                <p> {props.location} </p>
                <p> {setDay()} </p>
            </div>
            <div className="daily-vert"></div>
            <div className="daily-right-side">
                <span className={`fas ${props.icon} fa-2x`}></span>
            </div>
        </div>
    )
}

Daily.defaultProps = {
    location: 'Rockford Hills',
    icon: 'fa-cloud-sun-rain'
}