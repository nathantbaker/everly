/**
 * BlogDescription component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const BlogDescription = () => {
  
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >   

      <p>
        This is the story of our first child, our daughter named Everly.
      </p>
    </div>
  )
}

export default BlogDescription
