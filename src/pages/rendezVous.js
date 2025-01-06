import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RendezVousForm from "../components/pages/rendezVous/01_prendre_rendez_vous";



export default function RendezVous() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title="Enovat Rendez Vous" description="Prenez un rendez-vous avec notre équipe !">
            <main>
                <RendezVousForm/>
            </main>
        </Layout>
    );
}
