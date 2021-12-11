import React, {useState, createContext} from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Item from context",
            rating: 10
        }
    ])

    const [edit, setEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }


    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter(el => el.id !== id));
        }
    }

    const editFeedback = (item) => {
        setEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, newItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...newItem} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        edit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;