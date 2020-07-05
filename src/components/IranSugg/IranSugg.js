import React from 'react'
import "./IranSugg.css";
import Sugg from '../Sugg/Sugg';


class IranSugg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="parent-div">
                    <div className="p-div">
                        <p>بیشنهاد های ایرانگردی آلترابو</p>
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

export default IranSugg;