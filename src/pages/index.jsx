import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SEO from '../components/atoms/SEO'
import ProjectImage from '../components/molecules/ProjectImage'
import { ReactComponent as Images } from '../images/images.svg'
import styles from './index.module.scss'

// function getImageCount(images, slug) {
//   let array = []
//   let slugWithoutSlashes = slug.replace(/\//g, '')

//   images.map(
//     ({ node }) => node.name.includes(slugWithoutSlashes) && array.push(node)
//   )

//   return array.length
// }

export default class Home extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired
  }

  render() {
    const { data, pageContext } = this.props
    const projects = data.allProjectsYaml.edges
    const images = data.projectImageFiles.edges

    return (
      <>
        <SEO />

        <div className={styles.projects}>
          {projects.map(({ node }) => {
            const { title, link,  img } = node
            // const imageCount = getImageCount(images, slug)

            return (
              // Portfolio
              <article className={styles.project}>
                  <a href={ link } target="_blank">
                  <h1 className={styles.title}>{title}</h1>
                  <ProjectImage fluid={img.childImageSharp.fluid} alt={title} />

                  {/* {imageCount > 1 && (
                    <small
                      className={styles.imageCount}
                      title={`${imageCount} project images`}
                    >
                      <Images /> {imageCount}
                    </small>
                  )} */}
                  </a>
              </article>

            )
          })}
        </div>

      </>
    )
  }
}

export const IndexQuery = graphql`
  query {
    allProjectsYaml {
      edges {
        node {
          title
          link
          img {
            childImageSharp {
              fluid(maxWidth: 980, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    projectImageFiles: allFile(
      filter: { absolutePath: { regex: "/portfolio/" } }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`
