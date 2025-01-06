import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import QuiSommesNousHero from "../components/pages/quisommesnous/1_hero";

export default function Quisommesnous() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title="Envoat Qui sommes-nous ?" description="Notre philisophie!">
            <main>
                <QuiSommesNousHero/>
            </main>
        </Layout>
    );
}