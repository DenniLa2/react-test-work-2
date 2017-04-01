/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 01.04.17.
 */

import { OFFERS_GET, OFFERS_RESET, OFFER_LIKE, OFFERS_FILTER } from '../constants'

export function getOffers() {
  return {
    apiMethod: 'GET',
    url: '../../offers.json',
    type: OFFERS_GET
  }
}

export function resetOffers() {
  return {
    type: OFFERS_RESET
  }
}

export function likeOffer(id, state) {
  return {
    type: OFFER_LIKE,
    id,
    state
  }
}

export function filterOffers(search) {
  return {
    type: OFFERS_FILTER,
    search
  }
}