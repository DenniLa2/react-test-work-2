/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import { OFFERS_GET, START, SUCCESS, FAIL, OFFERS_RESET, OFFER_LIKE } from '../constants'

const initialState = { offers: [] };

function offers(state = initialState, action) {
  let offers = [];
  switch (action.type) {
    case OFFERS_GET + START:
      return { ...state, OFFERS_GET: START };

    case OFFERS_GET + FAIL:
      return { ...state, OFFERS_GET: FAIL };

    case OFFERS_GET + SUCCESS:
      offers = action.response.map((el) => {
        el.isLike = false;
        return el;
      });
      return { ...state, offers, OFFERS_GET: SUCCESS };

    case OFFERS_RESET:
      offers = state.offers.map((el) => {
        el.isLike = false;
        return el
      });
      return { ...state, offers };

    case OFFER_LIKE:
      offers = state.offers.map((el) => {
        if (el.id === action.id)
          el.isLike = action.state;
        return el
      });
      return { ...state, offers };

    default:
      return state
  }
}

export default offers;