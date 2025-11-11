import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

test('renders header', () => {
  render(<Header />)
  expect(screen.getByText('NEO-BRUTALIST')).toBeInTheDocument()
})