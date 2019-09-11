import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import posed from 'react-pose'
import classNames from 'classnames'
import { moveInBottom } from '../atoms/Transitions'
import { ReactComponent as Logo } from '../../images/avatar.png'
import styles from './LogoUnit.module.scss'

const query = graphql`
  query {
    metaYaml {
      title
    }
  }
`

export default class LogoUnit extends PureComponent {
  static propTypes = {
    minimal: PropTypes.bool
  }

  Animation = posed.div(moveInBottom)

  nameClasses = classNames('p-name', [styles.title])
  descriptionClasses = classNames('p-job-title', [styles.description])

  render() {
    const wrapClasses = classNames([styles.logounit], {
      [styles.minimal]: this.props.minimal
    })

    return (
      <StaticQuery
        query={query}
        render={data => {
          const { title } = data.metaYaml

          return (
            // Header
            <this.Animation>
              <Link className={wrapClasses} to={'/'}>
                <h1 className={this.nameClasses}>{title}</h1>

              </Link>
            </this.Animation>
          )
        }}
      />
    )
  }
}
