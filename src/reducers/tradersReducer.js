import {
  TRADERS_REQUEST,
  TRADERS_REQUEST_SUCCESS,
  TRADERS_REQUEST_FAILURE
} from '../actions/tradersActions'
import { BUY_TOKEN_REQUEST, BUY_TOKEN_SUCCESS } from '../actions/buyTokensActions';

const initialState = {
  isFetching: true,
  traders: []
};

const tradersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRADERS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case TRADERS_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        traders: action.traders,
        lastUpdated: action.lastUpdated
      }
    case TRADERS_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        traders: [],
        error: action.message,
        lastUpdated: action.lastUpdated
      }
    case BUY_TOKEN_REQUEST:
      return state;
    case BUY_TOKEN_SUCCESS:
      const traders = state.traders.map(trader => {
        if (trader.id === action.traderId) {
          return {
            ...trader,
            tokens: trader.tokens - action.tokens,
            trades: trader.trades + 1
          }
        }
        return trader;
      })
      return {
        ...state,
        traders: traders,
        lastUpdated: action.lastUpdated
      }
    default:
      return state
  }
}

export default tradersReducer