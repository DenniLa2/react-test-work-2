/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resetOffers, filterOffers } from '../AC/offers'

class Finder extends Component {

  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  onChange = (ev) => {
    const search = ev.target.value;
    this.setState({ search });
  };

  onSearch = (ev) => {
    ev.preventDefault();
    this.props.filterOffers(this.state.search);
  };

  onReset = (ev) => {
    ev.preventDefault();
    this.props.resetOffers();
    this.setState({search: ''})
  };


  render() {
    return (
      <div className="finder-component">
        <input type="text"
               value={this.state.search}
               onChange={this.onChange}/>
        <span className="button-wrapper">
          <button className="search"
                  onClick={this.onSearch}>
            <i className="fa fa-search"/>
          </button>
          <button className="reload" onClick={this.onReset}>
            <i className="fa fa-refresh"/>
          </button>
        </span>
      </div>
    )
  }
}

export default connect(
  state => ({}), {
    resetOffers,
    filterOffers
  }
)(Finder)