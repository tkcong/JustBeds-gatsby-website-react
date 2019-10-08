import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Layout from '../components/layout'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Link to="/ta-nea-mas" className="back-button"><FaLongArrowAltLeft /></Link>
      <div>
        <Helmet title={`Τα νέα μας | ${post.frontmatter.title}`}>
        </Helmet>
        <Container>
          <h1 className='display-3'>{post.frontmatter.title}</h1>
        </Container>
        <img className="featuredBig" src={post.frontmatter.thumbnail} alt={post.frontmatter.title}></img>
        <Container className="blogContent" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
        path
        date(formatString: "DD-MM-YYYY")
        title
        thumbnail
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
            thumbnail
          }
        }
      }
    }
  }
`
