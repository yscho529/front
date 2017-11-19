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

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                        <img src="../app/prof.jpg" alt="" class="circle responsive-img"/>
                        </div>
                        <div class="col s10">
                        <span class="flow-text">
                            Some stuff here.
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));