import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Header from '../components/Header'

test('Header is accessible', async () => {
  const { container } = render(<Header />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})