import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ThreeNav from '../components/threeBlocks'

function getBedroom(data) {
  const PostsArray = []
  data.allMarkdownRemark.edges.forEach(post => {
    PostsArray.push(
      <div className="product-box">
        <Link to={post.node.frontmatter.path} className="link">
          <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid} />
          <h5>{post.node.frontmatter.title}</h5>
        </Link>
      </div>
    )
  });
  return PostsArray
}

const Bedroom = props => (
  <Layout>

      <div className="hero">
        <Container>
          <div className="row">
            <div className="content">
              <div className="col-12">
                <h1>Bedroom Accommodation Sets</h1>
                <Link to="/contact" className="cta tick p-4">Start Saving Here</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-3 mobile">
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark (filter: { frontmatter: { category: {regex: "/bedroom/"} } }) {
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
            <h4 className="mb-0">Products</h4>
            <div className="row products">{getBedroom(data)}</div>
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

export default Bedroom;