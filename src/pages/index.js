import React from "react";
import { graphql } from "gatsby";
import BackgroundSection from "../components/Globals/BackgroundSection.js";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection img={data.img.childImageSharp.fluid} title="k company here" styleClass="default-background"/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        prive
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  }
`;
export default IndexPage;
