import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CatalogueHero from "../components/pages/catalogue/1_hero";
import CatalogueCards from "../components/pages/catalogue/02_cards";



export default function Catalogue() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <main>
                <CatalogueHero/>
                <CatalogueCards/>
            </main>
        </Layout>
    );
}
