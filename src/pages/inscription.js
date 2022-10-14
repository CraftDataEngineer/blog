import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Inscription from "../components/pages/inscription/01_hero_and_code";



export default function Form() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <main>
                <Inscription/>
            </main>
        </Layout>
    );
}
