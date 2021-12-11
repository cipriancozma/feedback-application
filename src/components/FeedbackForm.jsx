import React, {useContext, useState, useEffect} from "react";
import {Card} from "./Card";
import {Button} from "./Button";
import {Rating} from "./Rating";
import FeedbackContext from "../context/FeedbackContext";

export function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    const {addFeedback, edit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(edit.edit === true) {
            setBtnDisabled(false);
            setText(edit.item.text);
            setRating(edit.item.rating)
        }
    }, [edit])

    const handleChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text  !== '' && text.trim().length <= 10) {
            setMessage("Text you entered must be at least 10 characters")
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if(edit.edit === true) {
                updateFeedback(edit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
        }
        setText("");
    }

    return (
            <Card>
                <form onSubmit={handleSubmit}>
                    <h3>How would you rate us?</h3>
                    <Rating select={(rating) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleChange} value={text} type={"text"} placeholder={"Write a review..."}/>
                        <Button type="submit" version="primary" isDisabled={btnDisabled}>Send</Button>
                    </div>
                    { message && <div className="message">{message}</div>}
                </form>
            </Card>
    )
}