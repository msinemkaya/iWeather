import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchAnotherButton } from '../../components/sections/SearchAnotherButton.jsx'
import { MemoryRouter } from 'react-router-dom'
import * as router from 'react-router'

describe('Search another button', () => {
  const navigate = jest.fn()

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchAnotherButton/>
      </MemoryRouter>
    )
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  it('should render the search another button', () => {
    const searchAnotherButton = screen.getByRole('button')
    expect(searchAnotherButton).toBeInTheDocument()
  })

  it('should navigate to the correct route', () => {
    const searchAnotherButton = screen.getByRole('button')
    fireEvent.click(searchAnotherButton)
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
