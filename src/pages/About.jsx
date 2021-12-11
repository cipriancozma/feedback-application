import React from "react";
import {Card} from "../components/Card";
import {Link} from 'react-router-dom';

export function About() {


    return (
        <Card>
            <div className={"about"}>
                <h2>Info about this project</h2>
                <p>This is an application done with React hooks where you can leave a feedback for a product/service</p>
                <p>I used React hooks, React Router Dom v6, css</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to={"/"}>Go to homepage</Link>
                </p>
            </div>
        </Card>
    )
}