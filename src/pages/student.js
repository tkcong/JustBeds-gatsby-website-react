import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ThreeNav from '../components/threeBlocks'

function getStudent(data) {
  const PostsArray = []
  data.allMarkdownRemark.edges.forEach(post => {
    PostsArray.push(
      <div className="productbox col-md p-3 mx-2 mb-3">
        <Link to={post.node.frontmatter.path} className="title">
          <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid} />
          {post.node.frontmatter.title}
        </Link>
      </div>
    )
  });
  return PostsArray
}

const Student = props => (
  <Layout>

      <div className="hero">
        <Container>
          <div className="row">
            <div className="content">
              <div className="col-12">
                <h1>Student Accommodation Sets</h1>
                <a href="/" className="cta tick p-4">Start Saving Here</a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-3 mobile">
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="row">{getStudent(data)}</div>
          </>
        )}
      />
    </Container>
    <Container>
      <h4>Shop by collection</h4>
      <ThreeNav />
    </Container>
  </Layout>
);

export default Student;