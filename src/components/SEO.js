import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import getShareImage from "@jlengstorf/get-share-image"

const SEO = ({ title, tagline, description, article, pathname }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  const socialImage = getShareImage({
    title: title || defaultTitle,
    tagline,
    cloudName: "jenken",
    imagePublicID: "blog-post-card_hrvroi",
    titleExtraConfig: "_line_spacing_-10",
    textColor: "FFFFFF",
    titleFont: "montserrat",
    taglineFont: "montserrat",
    textLeftOffset: 520,
    titleBottomOffset: 324,
    taglineTopOffset: 375,
  })

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}` || "/",
  }

  return (
    <Helmet title={seo.title}>
      <html lang="en" amp />
      <meta name="description" content={seo.description} />
      <meta name="image" content={socialImage} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}
