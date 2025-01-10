import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CatalogueHero from "../../components/pages/catalogue/1_hero";
import CatalogueCards from "../../components/pages/catalogue/02_cards";
import CatalogueCitation from "../../components/pages/catalogue/2_citation";
import FormationCustom from "../../components/pages/catalogue/3_formation_custom";



export default function Index() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title="Catalogue" description="Découvrez le catalogue complet de nos formations.">
            <main>
                <CatalogueHero/>
                <CatalogueCitation/>
                <FormationCustom/>
                <CatalogueCards/>
            </main>
        </Layout>
    );
}
