/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getOffers } from '../AC/offers'
import Poster from './Poster'

class PosterWrapper extends Component {

  componentDidMount() {
    this.props.getOffers()
  }

  render() {
    console.log('FILTER ---', this.props.filter);
    const { offers, filter } = this.props;
    const search = filter.toLowerCase();
    const posters = [];
    offers.forEach((el) => {
      const address = el.address.toLowerCase();
      if (el.isLike !== true && address.indexOf(search) === 0)
        posters.push(<Poster key={el.id} data={el} isLike={el.isLike}/>)
    });

    return (
      <div className="posters-wrapper">
        {posters}
      </div>
    )
  }

}

export default connect(
  state => ({ offers: state.offers.offers, filter: state.filter }), {
    getOffers
  }
)(PosterWrapper);
