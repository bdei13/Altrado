import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Content from "../Content/Content";
import GlobalSugg from "../GlobalSugg/GlobalSugg";
import IranSugg from "../IranSugg/IranSugg";
import Feed from "../Feed/Feed";
import PlaceLogo from "../PlaceLogo/PlaceLogo";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {locations: []}

  }

  searchLocation(ticket, direction, number, origin, destination, date) {
    
  }

  render () {
    return (
      <React.Fragment>
        <SearchBar />
        <Content />
        <GlobalSugg />
        <IranSugg />
        <Feed />
        <PlaceLogo />
        <Footer />
      </React.Fragment>
    );

  }
}

export default App;
