/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import { combineReducers } from 'redux'

import filter from './filter'
import offers from './offers'

export default combineReducers({
  filter,
  offers
})