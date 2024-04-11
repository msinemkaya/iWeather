import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WelcomePage } from '../../components/pages/WelcomePage.jsx'
import { initialize } from '@googlemaps/jest-mocks'

describe('welcome page', () => {
  beforeEach(() => {
    initialize()
    render(<WelcomePage/>)
  })

  it('renders welcome message and location input', () => {
    expect(screen.getByAltText('application logo')).toBeInTheDocument()
    expect(screen.getByText('Welcome', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Choose a location to see the weather forecast')).toBeInTheDocument()
    expect(screen.getByTestId('location-input')).toBeInTheDocument()
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
  })
})
