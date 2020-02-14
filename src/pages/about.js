import React from "react";
import { graphql } from "gatsby";
import BackgroundSection from "../components/Globals/BackgroundSection.js";

import Layout from "../components/layout";

const AboutPage = ({ data }) => (
  <Layout>
    <BackgroundSection img={data.img.childImageSharp.fluid} title="k-company About" styleClass="about-background"/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default AboutPage;
