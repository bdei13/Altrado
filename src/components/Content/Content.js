import React from 'react';
import "./Content.css";

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="content-offset">
                <div class="content-div">
                    <div class="items-div">
                        <div class="item-img-div">
                            <img src={require("./hotel.png")}></img>
                        </div>

                        <div class="p-head">
                            <h2>چمدان</h2>
                        </div>

                        <div class="item-p-div">
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                        </div>

                    </div>

                    <div class="items-div">
                        <div class="item-img-div">
                            <img src={require("./globe.png")}></img>
                        </div>

                        <div class="p-head">
                            <p>کره ی زمین</p>
                        </div>


                        <div class="item-p-div">
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                        </div>

                    </div>

                    <div class="items-div">
                        <div class="item-img-div">
                            <img src={require("./suitcase.png")}></img>
                        </div>

                        <div class="p-head">
                            <p>هتل ایران</p>
                        </div>

                        <div class="item-p-div">
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                            <p>چمدان چمدان چمدان چمدان </p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Content;