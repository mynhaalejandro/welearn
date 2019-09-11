import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Link } from '../../images/link.svg'
import { ReactComponent as Download } from '../../images/download.svg'
import { ReactComponent as Info } from '../../images/info.svg'
import { ReactComponent as Styleguide } from '../../images/styleguide.svg'
import { ReactComponent as Instagram } from '../../images/instagram.svg'
import { ReactComponent as Linkedin } from '../../images/linkedin.svg'
import { ReactComponent as Email } from '../../images/email.svg'
import { ReactComponent as Facebook } from '../../images/facebook.svg'
import { ReactComponent as Twitter } from '../../images/twitter.svg'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Youtube } from '../../images/youtube.svg'

const LinkIcon = ({ title, type, ...props }) => {
  let typeOrTitle = type ? type : title

  switch (typeOrTitle) {
    case 'website':
    case 'Link':
      return <Link {...props} />
    case 'instagram':
    case 'Instagram':
      return <Instagram {...props} />
    case 'linkedin':
    case 'Linkedin':
      return <Linkedin {...props} />
    case 'info':
    case 'Info':
      return <Info {...props} />
    case 'download':
    case 'Download':
      return <Download {...props} />
    case 'styleguide':
    case 'Styleguide':
      return <Styleguide {...props} />
    case 'Email':
      return <Email {...props} />
    case 'Facebook':
      return <Facebook {...props} />
    case 'Twitter':
      return <Twitter {...props} />
    case 'star':
      return <Star {...props} />
    case 'youtube':
    case 'Youtube':
      return <Youtube {...props} />
    default:
      return null
  }
}

LinkIcon.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
}

export default LinkIcon
