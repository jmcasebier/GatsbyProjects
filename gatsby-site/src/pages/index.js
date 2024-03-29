import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allMarkdownRemark.edges.map(post => (
      <div>
      <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: {
        fields: [frontmatter___date], order: DESC
      }
      filter: {
        frontmatter: {
          published: {
            eq: true
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`

export default IndexPage
