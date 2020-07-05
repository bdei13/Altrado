import React from 'react'
import "./GlobalSugg.css";
import Sugg from '../Sugg/Sugg';


class GlobalSugg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="parent-div">
                    <div className="p-div">
                        <p>بیشنهاد های جهانگردی آلترابو</p>
                    </div>

                    <div className="img-div">
                        <Sugg />
                        <Sugg />
                        <Sugg />
                        <Sugg />
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default GlobalSugg;