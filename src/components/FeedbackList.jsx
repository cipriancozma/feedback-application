import React, {useContext} from "react";
import {FeedbackItem} from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { SpinnerCircularSplit } from 'spinners-react';

export function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback at the moment</p>
    }

    return (
        isLoading ? <SpinnerCircularSplit style={{margin: "auto", display: "block"}} size={50} thickness={100} speed={50} color="rgba(172, 111, 57, 1)" secondaryColor="rgba(172, 97, 57, 0.44)" /> : (
            <div className="feedback-list">
                {
                    feedback.map((el) => {
                        return <FeedbackItem key={el.id} el={el} />
                    })
                }
            </div>
        )
    )

}
