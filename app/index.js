import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="flow-text center">Hello</h1>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));