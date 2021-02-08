// App Imports
// Importing action types
import { MESSAGE_SHOW, MESSAGE_HIDE } from './actions'
// could instead be imported as an object: import * as actions from './actions'

// Initial State
export const commonInitialState = {
  message: {
    text: null,
    open: false
  }
}

// State
// Reducer with default state of object commonInitialState
export default (state = commonInitialState, action) => {
  switch (action.type) {
    // Evaluating if the property *type* of the action object evaluates to *MESSAGE_SHOW*
    case MESSAGE_SHOW:
      // if imported as an obj, would instead be actions.MESSAGE_SHOW
      return {
        // spread out properties from state
        ...state,
        // adds to original state state object
        message: {
          text: action.message,
          open: true
        }
      }

    case MESSAGE_HIDE:
      return {
        ...state,
        message: {
          text: null,
          open: false
        }
      }

    default:
      return state
  }
}
