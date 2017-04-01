/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */
import React, { Component } from 'react'

import Finder from './Finder'
import PosterWrapper from './PosterWrapper'


class Page extends Component {

  render() {
    return (
      <div className="content">
        <Finder />
        <PosterWrapper />
      </div>
    )
  }

}

export default Page