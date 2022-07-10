import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from "../components/HomePageHeader";
import HomepageModules from "../components/HomePageModules";
import HomePageFormateur from "../components/HomePageFormateur";
import HomePageEnroll from "../components/HomePageEnroll";
import HomePageFaq from "../components/HomePageFaq";
import "animate.css/animate.min.css";
import HomePageAvis from "../components/HomePageAvis";
import HomePageTheoriePratique from "../components/HomePageTheoriePratique";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
    return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main>
          <HomepageHeader/>
          <HomePageTheoriePratique />
          <HomepageModules/>
          <HomePageFormateur/>
          <HomePageEnroll/>
      </main>

    </Layout>
  );
}
