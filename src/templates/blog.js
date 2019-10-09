import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Img from "gatsby-image"

import Layout from '../components/layout'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
    <Container>
      <Link to="/ta-nea-mas" className="back-button"><FaLongArrowAltLeft /></Link>
      <div>
        <Helmet title={`${post.frontmatter.title}`}>
        </Helmet>
        <Container>
          <h2>{post.frontmatter.title}</h2>
        </Container>
        <Img className="featuredBig" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} alt={post.frontmatter.title} />
        {/*<Container className="blogContent" dangerouslySetInnerHTML={{ __html: post.html }} />*/}
      </div>
    </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "DD-MM-YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`