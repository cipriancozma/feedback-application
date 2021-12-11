import React from "react";
import PropTypes from 'prop-types';
import feedbackImg from '../assets/thumbs-up.png';

export function Header({ title, color }) {

    return (
        <header style={{backgroundColor: color}}>
            <img src={feedbackImg} alt={"feedback"} style={{width: "50px", height: "50px"}}/>
            <div  className="container-header">
                <h2>{title}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Feedback App",
    color: "#48bdab"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string
}