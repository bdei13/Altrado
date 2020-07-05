import React from 'react'
import "./Footer.css"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div class="feed-parent">
                    <div class="s-media-links">
                        <div class="s-m-l-in">
                            <div class="s-m-i">
                                <img src={require("./twitter.png")}></img>
                            </div>
                            <div class="s-m-i">
                                <img src={require("./linkedin.png")}></img>
                            </div>
                            <div class="s-m-i">
                                <img src={require("./google.png")}></img>
                            </div>
                            <div class="s-m-i">
                                <img src={require("./instagram.png")}></img>
                            </div>
                        </div>
                    </div>


                    <div class="footer-ps">
                        <div class="left">
                            <div class="pp">
                                <p>بلیت اتوبوس</p>
                                <p>  </p>
                                <p>بلیت هوابیما</p>
                            </div>
                            <div class="pp">
                                <p>رزرو هتل</p>
                                <p>  </p>
                                <p>بلیت قطار</p>
                            </div>
                        </div>


                        <div class="middle">
                            <p>تماس با آلترابو</p>
                            <p> آلترابو آلترابو آلترابوآلترابو</p>
                            <p>آلترابو آلترابو آلترابو آلترابو آلترابو</p> 
                            <p>آلترابو آلترابو آلترابو آلترابو آلترابو</p>
                        </div>


                        <div class="left">
                            <p>درباره ی آلترابو</p>
                            <p>د رباره درابه رباره درابه رباره درابه رباره درابه</p>
                            <p>رباره درابه رباره درابه رباره درابه رباره درابه </p>
                            <p>رباره درابهرباره درابه رباره درابه رباره درابه رباره درابه</p>
                        </div>

                    </div>

                    <div class="rights">
                            <p>تمامی حقوق این سایت متعلق به مجموعه آلترابو است</p>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Footer;