import React from 'react'
import { Container, Row, Col } from 'reactstrap'
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
      <Link to={`/${post.frontmatter.category}`} className="back-button"><FaLongArrowAltLeft /></Link>
      <div>
        <Helmet title={`${post.frontmatter.title}`}>
        </Helmet>
        
        <h2>{post.frontmatter.title}</h2>
        <Row className="mb-4 product-product">
          <Col>
            <Img className="product-product-image" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} alt={post.frontmatter.title} />
          </Col>
          <Col>
            <p>Product: {post.frontmatter.title}</p>
            <p>Category: {post.frontmatter.category}</p>
            <p>Date: {post.frontmatter.date}</p>
            <p className="product-product-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
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
        category
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