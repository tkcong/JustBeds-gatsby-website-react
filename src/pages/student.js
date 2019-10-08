import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container } from "reactstrap";
import Link from "gatsby-link";

import Layout from "../components/layout";
import ThreeNav from '../components/threeBlocks'

function getStudent(data) {
  const PostsArray = [];
  data.allMarkdownRemark.edges.forEach(post =>
    PostsArray.push(
      <div className="productbox col-sm p-3 mx-2 mb-3">
        <Link to={post.node.frontmatter.path} className="title">
          <img src={post.node.frontmatter.thumbnail} alt="product"/>
          {post.node.frontmatter.title}
        </Link>
      </div>
    )
  );
  return PostsArray;
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
          query MyQuery {
            allMarkdownRemark(filter: { frontmatter: { date: {} } }) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    thumbnail
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
