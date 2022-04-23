import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactUs from "../components/ContactForm";
import HomePageTeaser from "../components/HomePageTeaser";

export default function Form() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <main>
                <HomePageTeaser/>
                <ContactUs/>
            </main>
        </Layout>
    );
}
