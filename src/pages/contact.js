import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactUs from "../components/sections/contact/02_form";
import HomePageTeaser from "../components/sections/contact/01_hero";

export default function Contact() {
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
