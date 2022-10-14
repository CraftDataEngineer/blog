import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BootCampFaq from "../components/sections/bootcamp/8_faq";
import "animate.css/animate.min.css";
import CookieSetter from "../components/global/Cookie";
import BootCampHero from "../components/sections/bootcamp/1_hero";
import BootCampTheoriePratique from "../components/sections/bootcamp/2_theorie_pratique";
import BootCampContenuFormation from "../components/sections/bootcamp/3_contenu_formation";
import BootCampAvis from "../components/sections/bootcamp/5_avis_et_inscription_et_contact";
import BootCampHesitationFormation from "../components/sections/bootcamp/6_hesitation_formation";
import BootCampFormateur from "../components/sections/bootcamp/4_formateur";
import BootCampPrix from "../components/sections/bootcamp/7_prix_formation";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

    return (
    <Layout  description="Data Engineer | DataGuru <head />">
      <main>
          <CookieSetter/>
          <BootCampHero/>
          <BootCampTheoriePratique />
          <BootCampContenuFormation/>
          <BootCampFormateur/>
          <BootCampAvis/>
          <BootCampHesitationFormation/>
          <BootCampPrix/>
          <BootCampFaq/>
      </main>

    </Layout>
  );
}
