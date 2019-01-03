import React from 'react';
import Portal from './Portal.jsx';
// import ModalController from './ModalController.jsx';
import AddPhoto from './AddPhoto/AddPhoto.jsx';
import Share from './Share/Share.jsx';
import Save from './Save/Save.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';
import MapBox from './MapBox/MapBox.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      biz: {},
      showModal: false,
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    let getRoute = window.restId !== undefined ? `/restaurants/${window.restId}` : `/restaurants/1`;
    // console.log(getRoute)
    fetch(getRoute)
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        biz: data
      });
    });
  }

  handleShow() {
    console.log('here');
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
    console.log(this.state);
  }

  render() {
    return (
      <div className="header">
        {/* <Portal /> */}
        <Save />
        <Share />
        <AddPhoto />
        <WriteReview onClick={this.handleShow}></WriteReview>
        <MapBox />
      </div>
    )
  }
}

export default App;
