import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

describe('Header Hamburger Menu', () => {
  test('hamburger button has correct type attribute', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    expect(button).toHaveAttribute('type', 'button')
  })

  test('hamburger button has correct ARIA attributes when closed', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'primary-navigation')
    expect(button).toHaveAttribute('aria-label', 'Toggle navigation menu')
  })

  test('hamburger button toggles menu on click', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    // Initially closed
    expect(button).toHaveAttribute('aria-expanded', 'false')

    // Click to open
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Click to close
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('menu closes on Escape key', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    // Open menu
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('menu closes when clicking a navigation link', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    // Open menu
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Click on About link
    const aboutLink = screen.getByRole('link', { name: /about/i })
    fireEvent.click(aboutLink)

    // Menu should close
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('navigation has correct id for aria-controls', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: /primary/i })

    expect(nav).toHaveAttribute('id', 'primary-navigation')
  })

  test('hamburger button is focusable', () => {
    render(<Header />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    button.focus()
    expect(button).toHaveFocus()
  })
})
