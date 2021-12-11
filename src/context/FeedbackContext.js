import React, {useState, createContext, useEffect} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback();
    }, [])

    const fetchFeedback = async () => {
        let result = await fetch("/feedback");
        let data = await result.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const [edit, setEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await response.json();
        setFeedback([data, ...feedback]);
    }


    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            await fetch(`/feedback/${id}`, {
                method: "DELETE"
            })

            setFeedback(feedback.filter(el => el.id !== id));
        }
    }

    const editFeedback = (item) => {
        setEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, newItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })

        const data = await response.json();

        setFeedback(feedback.map(item => item.id === id ? {...item, ...data} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        edit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;