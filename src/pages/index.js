import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "animate.css/animate.min.css";
import CookieSetter from "../components/global/Cookie";
import LandingPageHero from "../components/pages/landingPage/1_hero";
import LandingPageCitation from "../components/pages/landingPage/2_citation";
import LandingPageMethodo from "../components/pages/landingPage/3_methodo";
import LandingPageProduits from "../components/pages/landingPage/4_produits";
import LandingPageAvis from "../components/pages/landingPage/5_avis";
import LandingPageContact from "../components/pages/landingPage/6_contact";


export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

    return (
    <Layout  description="Data Engineer | DataGuru">
      <main>
          <CookieSetter/>
          <LandingPageHero/>
          <LandingPageCitation/>
          <LandingPageMethodo/>
          <LandingPageProduits/>
          <LandingPageAvis/>
          <LandingPageContact/>
      </main>

    </Layout>
  );
}
