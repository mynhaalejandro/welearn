import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import Networks from './Networks'
import data from '../../../jest/__fixtures__/meta.json'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({ ...data }))
})

describe('Networks', () => {
  it('renders correctly from data file values', () => {
    const { social } = data.metaYaml
    const { container, getByTestId } = render(<Networks />)

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild.nodeName).toBe('ASIDE')
    // expect(getByTestId('network-email').href).toBe(social.Email)
    // expect(getByTestId('network-facebook').href).toBe(social.Facebook + '/')
    expect(getByTestId('network-facebook').href).toBe(social.Facebook)
    expect(getByTestId('network-twitter').href).toBe(social.Twitter)
    expect(getByTestId('network-instagram').href).toBe(social.Instagram)
    expect(getByTestId('network-linkedin').href).toBe(social.Linkedin)
    expect(getByTestId('network-youtube').href).toBe(social.Youtube)
  })

  it('renders correctly in small variant', () => {
    const { container } = render(<Networks small={true} />)

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild.className).toMatch(/networks small/)
  })

  it('can be hidden', () => {
    const { container } = render(<Networks hide={true} />)

    expect(container.firstChild).not.toBeInTheDocument()
  })
})
