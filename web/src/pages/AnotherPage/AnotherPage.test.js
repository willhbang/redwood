import { render } from '@redwoodjs/testing'

import AnotherPage from './AnotherPage'

describe('AnotherPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnotherPage />)
    }).not.toThrow()
  })
})
