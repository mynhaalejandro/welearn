import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Meta {
    metaYaml {
      title
      description
      url
      email
      social {
        Email
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
      gpg
      addressbook
      typekitID
      matomoUrl
      matomoSite
      allowedHosts
    }
  }
`

export const useMeta = () => {
  const { metaYaml } = useStaticQuery(query)
  return metaYaml
}
