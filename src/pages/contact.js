import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactUs from "../components/pages/contact/03_form";
import HomePageTeaser from "../components/pages/contact/01_hero";
import ContactCitation from "../components/pages/contact/02_phone";

export default function Contact() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title="Enovat Contact" description="Posez nous toutes vos questions !">
            <main>
                <HomePageTeaser/>
               {/* <ContactCitation/> */}
                <ContactUs/>
            </main>
        </Layout>
    );
}
