import React from 'react';
import "./Feed.css"


class Feed extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class="parent-div-feed">
                <div class="feed-div">
                    <div class="feed-input">
                        <div class="feed-p">
                            <p>با عضویت در خبرنامه از بیشنهاد های شگفت انگیز ما زود تر از بقیه باخبر میشین</p>
                        </div>
                        <button>
                            <p>عضویت در خبرنامه</p>
                        </button>
                        <input type="email"  placeholder="آدرس ایمیلتان را وارد کنید"></input>
                    </div>
                </div>

                <div class="img-div-feed">
                    <img src={require("./feedimg.png")}></img>
                </div>

            </div>
        )
    }
}

export default Feed;