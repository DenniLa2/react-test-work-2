/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Currency from 'react-currency-formatter'

import { likeOffer } from '../AC/offers'

class Poster extends Component {

  like = () => {
    //this.props.onLike(this.props.data.id);
    const { data: { id }, likeOffer } = this.props;
    likeOffer(id, 'active');
    setTimeout(() => {
      likeOffer(id, true);
    }, 250);
  };

  render() {
    const { isLike, data: {photo, discount, price, address, landArea, houseArea, furniture }} = this.props;

    const linkToPhoto = { 'backgroundImage': `url(./buildings/${photo})` };

    return (
      <div className="poster-component">
        <div className="photo-wrapper"
             style={linkToPhoto}>
          {discount === 0 ? null :
            discount > 0 ?
              <div className="discount positive">
                <Currency quantity={discount} currency="USD" pattern="### !" group=" "/>
              </div> :
              <div className="discount negative">
                <Currency quantity={discount} currency="USD" pattern="### !" group=" "/>
              </div>
          }

          <div className="price">
            {discount > 0 ? <span className="positive">
              <i className="fa fa-long-arrow-up"/>
              </span> : null
            }
            {discount < 0 ? <span className="negative">
              <i className="fa fa-long-arrow-down"/>
              </span> : null
            }<Currency quantity={price} currency="USD" pattern="### !" group=" "/>
          </div>

          <div className="heart"
               onClick={this.like}>
            {isLike === false ? <div className="outline">
              <i className="fa fa-heart-o fa-lg"/>
            </div> : null
            }
            {isLike === 'active' ? <div className="filled">
              <i className="fa fa-heart fa-lg"/>
            </div> : null
            }
          </div>
        </div>

        <div className="details-wrapper">
          <div className="address">{address}</div>
          <div className="details">
            <span className="land-area">{landArea} соток</span>
            { houseArea ? <span className="house-area">{houseArea} м<sup>2</sup></span>
              : null }
            { furniture ? <span className="furniture">{furniture}</span>
              : null }
          </div>
        </div>
      </div>
    )
  }

}

export default connect(
  state => ({}), {
    likeOffer
  }
)(Poster)