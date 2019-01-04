import React from 'react';
// import Portal from './Portal.jsx';
// import ModalController from './ModalController.jsx';
import AddPhoto from './AddPhoto/AddPhoto.jsx';
import Share from './Share/Share.jsx';
import Save from './Save/Save.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';
import MapBox from './MapBox/MapBox.jsx';
import BizInfo from './BizInfo/BizInfo.jsx';
import CSSModules from 'react-css-modules';
import style from './app.css';

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
    let getRoute = window.restId !== undefined ? `/http://127.0.0.1:3003/restaurantInfo/${window.restId}` : `http://127.0.0.1:3003/restaurantInfo/1`;
    fetch(getRoute)
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        biz: data[0]
      });
    });
  }

  handleShow() {
    console.log(this.state.biz)
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
    console.log(this.state);
  }

  render() {
    return (
      <div styleName="container">

          <BizInfo />
          <div styleName="comps-container">
            <div styleName="biz-header">
              <h1 styleName="biz-title">Title</h1>

          <Save />
          <Share />
          <AddPhoto />
          <WriteReview onClick={this.handleShow}></WriteReview>
            </div>
            <div styleName="price-point">
              <span>$$ •</span>
            </div>
            <br />
          
          <MapBox />
        </div>
      </div>
    )
  }
}

// export default App;
export default CSSModules(App, style, {allowMultiple: true});
