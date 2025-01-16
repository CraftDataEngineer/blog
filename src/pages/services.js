import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "animate.css/animate.min.css";
import CookieSetter from "../components/global/Cookie";
import ServicesHero from "../components/pages/services/1_hero";
import BootCampTheoriePratique from "../components/pages/services/3_theorie_pratique";
import BootCampContenuFormation from "../components/pages/services/5_contenu_formation";
import BootCampAvis from "../components/pages/services/6_avis";
import BootCampHesitationFormation from "../components/pages/services/8_hesitation_formation";
import BootCampFormateur from "../components/pages/services/7_formateur";
import BootCampPrix from "../components/pages/services/9_prix_formation";
import BootCampCitation from "../components/pages/services/2_citation";
import BootCampDataEngineer from "../components/pages/services/4_role_data_enigneer";
import BootCampContact from "../components/pages/services/7_contact";
import BootCampFaq from "../components/pages/services/10_faq";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

    return (
    <Layout  title="Enovat Bootcamp" description="Rejoignez notre Bootcamp pour apprendre à développer correctement et être reconnu par vos pairs">
      <main>
          <ServicesHero/>
          <BootCampTheoriePratique/>
          <BootCampDataEngineer />
          <BootCampContenuFormation/>
          <BootCampFormateur/>
          <BootCampPrix/>
      </main>

    </Layout>
  );
}
