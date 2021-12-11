import React, {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

export function FeedbackStatus() {
    const {feedback} = useContext(FeedbackContext);

    let averageRatings = feedback.reduce((acc, el) => {
        return acc + el.rating;
    }, 0) / feedback.length;

    averageRatings = averageRatings.toFixed(1);
    return (
        <div className="feedback-stats">
            <h3>{feedback.length} reviews</h3>
            <h4>Average rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
        </div>
    )
}
