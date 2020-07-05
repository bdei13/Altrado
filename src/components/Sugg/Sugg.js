import React from 'react'
import "./Sugg.css";


class Sugg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="items-div">
                <img src={require("./picture.png")}></img>
                <div class="img-p">
                    <p>استانبول</p>
                </div>
            </div>
        )
    }
}

export default Sugg;