import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import {graphql, Link} from 'gatsby';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <hr/>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
