import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from "../components/HomePageHeader";
import HomePageTeaser from "../components/HomePageTeaser";
import HomepageModules from "../components/HomePageModules";
import HomePageFormateur from "../components/HomePageFormateur";
import HomePageEnroll from "../components/HomePageEnroll";
import HomePageFaq from "../components/HomePageFaq";
import "animate.css/animate.min.css";
import HomePageAvis from "../components/HomePageAvis";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
    return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main>
          <HomepageHeader/>
          <HomePageTeaser config={siteConfig}  />
          <HomepageModules/>
          <HomePageFormateur/>
          <HomePageAvis/>
          <HomePageEnroll/>
          <HomePageFaq/>
      </main>

    </Layout>
  );
}
