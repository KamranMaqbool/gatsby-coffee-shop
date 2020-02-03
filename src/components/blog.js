import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'



const blog = () =>  {
    const data = graphql`
        query {
            allContentfulBlogPost {
                edges {
                  node {
                    title
                    slug
                    publishedDate(fromNow: true)
                  }
                }
              }
        }
    `
    return (
        <Layout>
            <h1>Blog Post</h1>
            <ol>
                {data.allContentfulBlogPost.edges.map((node) => {
                    return (
                        <li>
                            <h2>{node.title}</h2>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}


export default blog