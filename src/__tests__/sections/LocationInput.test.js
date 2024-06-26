import { fireEvent, render, screen } from '@testing-library/react'
import { LocationInput } from '../../components/sections/LocationInput.jsx'
import { initialize } from '@googlemaps/jest-mocks'
import '@testing-library/jest-dom'

describe('Location input', () => {
  beforeEach(() => {
    initialize()
    render(<LocationInput/>)
  })

  it('should render the search input', () => {
    const searchInput = screen.getByPlaceholderText('Search location')
    expect(searchInput).toBeInTheDocument()
  })

  it('should update the input value when typed', () => {
    const searchInput = screen.getByPlaceholderText('Search location')
    fireEvent.change(searchInput, { target: { value: 'Opole' } })
    expect(searchInput.value).toBe('Opole')
  })
})
