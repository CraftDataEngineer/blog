import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BootCampFaq from "../components/pages/bootcamp/10_faq";
import "animate.css/animate.min.css";
import CookieSetter from "../components/global/Cookie";
import BootCampHero from "../components/pages/bootcamp/1_hero";
import BootCampTheoriePratique from "../components/pages/bootcamp/3_theorie_pratique";
import BootCampContenuFormation from "../components/pages/bootcamp/5_contenu_formation";
import BootCampAvis from "../components/pages/bootcamp/6_avis";
import BootCampHesitationFormation from "../components/pages/bootcamp/8_hesitation_formation";
import BootCampFormateur from "../components/pages/bootcamp/7_formateur";
import BootCampPrix from "../components/pages/bootcamp/9_prix_formation";
import BootCampCitation from "../components/pages/bootcamp/2_citation";
import BootCampDataEngineer from "../components/pages/bootcamp/4_role_data_enigneer";
import BootCampContact from "../components/pages/bootcamp/7_contact";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

    return (
    <Layout  description="Data Engineer | DataGuru">
      <main>
          <BootCampHero/>
          <BootCampCitation/>
          <BootCampTheoriePratique />
          <BootCampDataEngineer />
          <BootCampContenuFormation/>
          <BootCampFormateur/>
          <BootCampAvis/>
          <BootCampContact/>
          <BootCampHesitationFormation/>
          <BootCampPrix/>
      </main>

    </Layout>
  );
}
