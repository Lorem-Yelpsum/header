import React from 'react';
import Portal from './Portal.jsx';
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
    let getRoute = window.restId !== undefined ? `/restaurants/${window.restId}` : `/restaurants/1`;
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
    console.log(this.state.biz[0].restId)
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
    console.log(this.state);
  }

  render() {
    return (
      <div>

          <BizInfo />
          <div styleName="container">
          {/* <div styleName="biz-header">
            <h1 styleName="biz-title"></h1>
            </div>
            <div styleName="info">
            <div styleName="stars"></div>
            <div styleName="price-point">
            <span>$$</span>
            </div>
          </div> */}
          <Save />
          <Share />
          <AddPhoto />
          <WriteReview onClick={this.handleShow}></WriteReview>
          <MapBox />
        </div>
      </div>
    )
  }
}

// export default App;
export default CSSModules(App, style, {allowMultiple: true});
