import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container } from "reactstrap";

import Layout from "../components/layout";
import ThreeNav from '../components/threeBlocks'

function getBedroom(data) {
  const PostsArray = [];
  data.allMarkdownRemark.edges.forEach(post =>
    PostsArray.push(
      <div className="productbox col-sm p-3 mx-2 mb-3">
        <Link to={post.node.frontmatter.path} className="title">
          {post.node.frontmatter.title}
        </Link>
      </div>
    )
  );
  return PostsArray;
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
          query BedroomQuery {
            allMarkdownRemark(filter: { frontmatter: { date: {} } }) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="row">{getBedroom(data)}</div>
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
