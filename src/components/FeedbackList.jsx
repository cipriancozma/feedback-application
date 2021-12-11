import React, {useContext} from "react";
import {FeedbackItem} from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

export function FeedbackList() {

    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0) {
        return <p>No feedback at the moment</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map((el) => {
                    return <FeedbackItem key={el.id} el={el} />
                })
            }
        </div>
    )
}
