import React from 'react'
import ReactDOM from 'react-dom'
import Quote from '../index'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('<Quote />', () => {
  it('renders component with props', () => {
    const id = '123'
    const text = 'Text'
    const name = 'Name'
    const company = 'Company'
    const icon = 'cakeIcon'

    const { getByText, container } = render(<Quote id={id} text={text} name={name} company={company} icon={icon} />)

    expect(getByText(/Text/)).toHaveTextContent('Text')
    expect(getByText(/Name/)).toHaveTextContent('Name')
    expect(getByText(/Company/i)).toHaveTextContent('Company')
    expect(container.getElementsByTagName('img')[0]).toHaveClass('quote')
    expect(container.getElementsByTagName('img')[1]).toHaveClass('company-icon')
  })
})