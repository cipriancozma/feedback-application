import React, {useContext} from "react";
import {Card} from "./Card";
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa';
import FeedbackContext from "../context/FeedbackContext";

export function FeedbackItem({ el }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">
                {el.rating}
            </div>
            <button className={'close'} onClick={() => deleteFeedback(el.id)}>
                <FaTimes color={"black"} />
            </button>
            <button className="edit" onClick={() => editFeedback(el)}>
                <FaEdit color={"black"}  />
            </button>
            <div className="text-display" >
                {el.text}
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    el: PropTypes.object.isRequired
}