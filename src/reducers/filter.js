/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import { OFFERS_RESET, OFFERS_FILTER } from '../constants'

function filter (state = '', action) {
  switch (action.type) {

    case OFFERS_RESET:
      return '';

    case OFFERS_FILTER:
      return action.search;

    default:
      return state;
  }
}

export default filter