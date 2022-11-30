import React from "react";
import ReactDOM from "react-dom"

export default function First() {
    return (
        <div className="first--container">
            <nav className="navbar">
                <p className="left">React JS</p>
                <p className="right">Scrimba Tutorial</p>
            </nav>
            <main className="main--body">
                <ul>
                    <li>This is react container</li>
                    <li>This is react container</li>
                    <li>This is react container</li>
                    <li>This is react container</li>
                    <li>This is react container</li>
                </ul>
            </main>
        </div>
    );
}