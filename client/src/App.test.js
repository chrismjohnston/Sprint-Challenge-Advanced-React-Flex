import React from 'react'
import App from './App.js'
import { render } from '@testing-library/react'
import PlayerCardList from './components/PlayerCardList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('renders without crashing', () => {
  render(<App />)
})

test('PlayerCard should render without crashing', () => {
  const PlayerCardList = render(<PlayerCardList />)
  expect(PlayerCardList.getByText(/searches/i))
})