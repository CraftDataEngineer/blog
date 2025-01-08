import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "animate.css/animate.min.css";
import CookieSetter from "../components/global/Cookie";
import LandingPageHero from "../components/pages/landingPage/1_hero";
import LandingPageCitation from "../components/pages/landingPage/2_citation";
import LandingPageOffre from "../components/pages/landingPage/2_offres";
import LandingPageMethodo from "../components/pages/landingPage/3_methodo";
import LandingPageProduits from "../components/pages/landingPage/4_produits";
import LandingPageAvis from "../components/pages/landingPage/5_avis";
import LandingPageContact from "../components/pages/landingPage/6_contact";
import LandingPageNous from "../components/pages/landingPage/6_nous";
import NosVictoires from "../components/pages/landingPage/7_nos_victoires";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

    return (
    <Layout  title="Enovat" description={`${siteConfig.tagline}`}>
      <main>
          <CookieSetter/>
          <LandingPageHero/>
          <LandingPageCitation/>
          <LandingPageOffre/>
          <LandingPageMethodo/>
          <LandingPageProduits/>
          <LandingPageAvis/>
          <LandingPageNous/>
          <NosVictoires/>
          <LandingPageContact/>
      </main>

    </Layout>
  );
}
