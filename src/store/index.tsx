import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
