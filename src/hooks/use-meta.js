import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Meta {
    metaYaml {
      title
      description
      url
      social {
        Facebook
        Twitter
        Instagram
        Linkedin
        Youtube
      }
      availability {
        status
        available
        unavailable
      }
      typekitID
      allowedHosts
    }
  }
`

export const useMeta = () => {
  const { metaYaml } = useStaticQuery(query)
  return metaYaml
}
