import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  description,
  lang,
  title,
  ogImage,
}) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          ogImage
        }
      }
    }
  `);
  const {
    
    title: siteTitle,
    description: siteDescription,
    author
  } = data.site.siteMetadata;
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={title ? `${title} :: ${siteTitle}` : siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
            name: `author`,
            content: author
          },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: 'website'
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          name: `twitter:card`,
          content: 'summary_large_image'
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: ogImage
        },
        {
          name: `twitter:creator`,
          content: author
        }
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  ogImage: 'https://gatsboy.com/images/GBMeta.png'
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  siteUrl: PropTypes.string,
  ogImage: PropTypes.string
};

export default SEO;
