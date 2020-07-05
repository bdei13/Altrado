import React from 'react';
import "./PlaceLogo.css";

class PlaceLogo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="place-parent-div">
                <div class="place-p">
                    <p>هرجای دنیا که برید آلترابو همراهتونه</p>
                </div>

                <div class="place-imgs">
                    <div class="p-img-div">
                        <img src={require("./1.png")}></img>
                    </div>
                    <div class="p-img-div">
                        <img src={require("./2.png")}></img>
                    </div>
                    <div class="p-img-div">
                        <img src={require("./3.png")}></img>
                    </div>
                    <div class="p-img-div">
                        <img  src={require("./4.png")}></img>
                    </div>
                    <div class="p-img-div">
                        <img src={require("./5.png")}></img>
                    </div>
                    <div class="p-img-div">
                        <img src={require("./6.png")}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceLogo;