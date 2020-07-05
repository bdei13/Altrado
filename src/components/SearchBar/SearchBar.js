import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {ticket: '', direction: 'dotarafe', num: 'donafare', origin: '', destination: '', date: ''};
        this.handleDirection = this.handleDirection.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDestination = this.handleDestination.bind(this);
        this.handleOrigin = this.handleOrigin.bind(this);
        this.handleearch = this.handleearch.bind(this);
    }


    changeStateTicket(ticket) {
        this.setState({ticket: ticket})
    }


    changeClassByState(cls) {
        if(this.state.ticket == cls) {
            return "sndi sndi-active";
        } else {
            return "sndi";
        }
    }
    

    handleDirection(e) {
        this.setState({direction: e.target.value});
    }


    handleNumber(e) {
        this.setState({num: e.target.value});
    }


    handleDate(e) {
        this.setState({date: e.target.value})
    }


    handleDestination(e) {
        this.setState({destination: e.target.value})
    }

    handleOrigin(e) {
        this.setState({origin: e.target.value})
    }


    handleearch() {
        alert (this.state.ticket+"   "  +this.state.num +"   "+ this.state.direction +"   " + this.state.origin +"   " + this.state.destination +"    " + this.state.date)
    }

    render() {
        return (
        <div class="searchbar">
            <div class="navigation">
                <div class="nav-cont">
                    <div class="iran-img-div">
                        <img class="iran-img" src={require("./irang.png")}></img>
                    </div>

                    <div class="reg-div">
                        <img src={require("./regicon.png")}></img>
                        <p>ورود/ عضویت</p>
                    </div>

                    <div class="nav-items">
                        <p>بلیت هوابیما</p>
                    </div>

                    <div class="nav-items">
                        <p>بلیت قطار</p>
                    </div>

                    <div class="nav-items">
                        <p>بلیت اتوبوس</p>
                    </div>

                    <div class="nav-items">
                        <p>رزرو هتل</p>
                    </div>


                    <div class="altrabo-logo-div">
                        <img class="altrabo-logo" src={require("./altrabo-logo.png")}></img>
                    </div>
                </div>

            </div>

            <div class="searchfield">
                <div class="search-nav-div">
                    <div class="search-nav-div-items">
                        <div class={this.changeClassByState("hotel")} onClick={this.changeStateTicket.bind(this, "hotel")}>
                            <p>بلیت هتل</p>
                            <img src={require("./hotels.png")}></img>
                        </div>
                    </div>
                        
                    <div class="search-nav-div-items">
                        <div class={this.changeClassByState("bus")} onClick={this.changeStateTicket.bind(this, "bus")}>
                             <p>بلیت اتوبوس</p>
                             <img src={require("./buss.png")}></img>
                        </div>
                    </div>
                        
                    <div class="search-nav-div-items">
                        <div class={this.changeClassByState("train")} onClick={this.changeStateTicket.bind(this, "train")}>
                            <p>بلیت قطار</p>
                            <img src={require("./transs.png")}></img>
                        </div>
                    </div>
                
                    <div class="search-nav-div-items">
                        <div class={this.changeClassByState("flight")} onClick={this.changeStateTicket.bind(this, "flight")}>
                            <p>بلیت هوابیما</p>
                            <img src={require("./flights.png")}></img>
                        </div>
                    </div>

                </div>

                <div class="options-div">
                    <div class="options-div-in">
                        <select name="number" id="number" defaultValue="yeknafar" onChange={this.handleNumber}>
                            <option value="yeknafar">یک نفر بزرگسال</option>
                            <option value="donafar">دو نفر بزرگسال</option>
                        </select>

                        <select name="direction" id="direction" defaultValue="yektarafe" onChange={this.handleDirection}>
                            <option value="yektarafe">یک طرفه</option>
                            <option value="dotarafe">دو طرفه</option>
                        </select>

                    </div>
                </div>

                <div class="fields-div">

                    <button class="button" onClick={this.handleearch}>
                            <p>جستجو</p>
                    </button>

                    <div id="border">
                        <div class="filed-cont">
                            <div class="input-f">
                                <input type="text" onChange={this.handleDate}></input>
                            </div>

                            <div class="input-n">
                                <p>تاریخ</p>
                                <div>
                                    <img src={require("./date-field.png")}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div>
                        <div class="filed-cont">
                            <div class="input-f">
                                <input type="text" onChange={this.handleDestination}></input>
                            </div>

                            <div class="input-n">
                                <p>مقصد</p>
                                <div>
                                    <img src={require("./date-field.png")}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <div class= "exch-img">
                        <img src={require("./exch.png")}></img>
                    </div>
                    </div>

                    <div>
                        <div class="filed-cont">
                            <div class="input-f">
                                <input type="text" onChange={this.handleOrigin}></input>
                            </div>

                            <div class="input-n">
                                <p>مبدا</p>
                                <div>
                                    <img src={require("./date-field.png")}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
        )
    }
}


export default SearchBar;