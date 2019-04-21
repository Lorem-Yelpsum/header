import React from 'react'
// import Portal from './Portal.jsx';
// import ModalController from './ModalController.jsx';
import AddPhoto from './AddPhoto/AddPhoto.jsx'
import Share from './Share/Share.jsx'
import Save from './Save/Save.jsx'
import WriteReview from './WriteReview/WriteReview.jsx'
import MapBox from './MapBox/MapBox.jsx'
import BizInfo from './BizInfo/BizInfo.jsx'
import CSSModules from 'react-css-modules'
import style from './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      category: '',
      rest_name: '',
      pricePoint: null,
      totalReviews: null,
      showModal: false
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  componentDidMount() {
    let restId = window.location.href.split('/')[4]
    let route =
      restId < 101 && restId >= 0
        ? `http://127.0.0.1:3003/restaurantInfo/${restId}`
        : `http://127.0.0.1:3003/restaurantInfo/0`

    fetch(route)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data[0])
        data = data[0]
        this.setState({
          street: data.address.street,
          city: data.address.city,
          state: data.address.city,
          zip: data.address.zip,
          phone: data.phone,
          category: data.category,
          rest_name: data.rest_name,
          pricePoint: data.price_point,
          totalReviews: data.totalReviews.total
        })
      })
  }

  handleShow() {
    this.setState({ showModal: true })
  }

  handleHide() {
    this.setState({ showModal: false })
    console.log(this.state)
  }

  render() {
    return (
      <div styleName="container">
        <BizInfo />
        <div styleName="comps-container">
          <div styleName="biz-header">
            <h1 styleName="biz-title">{this.state.rest_name}</h1>

            <Save />
            <Share />
            <AddPhoto />
            <WriteReview onClick={this.handleShow} />
          </div>
          <div styleName="review-total">
            <span>{this.state.totalReviews} reviews</span>
          </div>
          {/* <br /> */}
          <div styleName="price-point">
            <span>
              $$ • <a href="#">{this.state.category}</a>
            </span>
          </div>
          {/* <br /> */}

          <MapBox
            street={this.state.street}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
            phone={this.state.phone}
          />
        </div>
      </div>
    )
  }
}

// export default App;
export default CSSModules(App, style, { allowMultiple: true })
