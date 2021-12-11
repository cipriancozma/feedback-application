import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from "./components/Header";
import {FeedbackList} from "./components/FeedbackList";
import {FeedbackStatus} from "./components/FeedbackStatus";
import {FeedbackForm} from "./components/FeedbackForm";
import {About} from "./pages/About";
import {AboutIcon} from "./components/AboutIcon";
import {FeedbackProvider} from "./context/FeedbackContext";

const App = () => {

    return (
        <>
            <FeedbackProvider>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path={"/"} element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStatus />
                                    <FeedbackList />
                                </>
                            }>
                            </Route>
                           <Route path={"/about"} element={<About/>} />
                        </Routes>
                        <AboutIcon />
                    </div>
                </Router>
            </FeedbackProvider>
        </>

    )
}

export default App;