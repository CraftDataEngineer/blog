import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import classnames from 'classnames';
import HomepageHeader from "../components/HomePageHeader";
import HomePageTeaser from "../components/HomePageTeaser";
import HomepageModules from "../components/HomePageModules";
import HomePageFormateur from "../components/HomePageFormateur";



const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function Hero({ tagline, config }) {
    return (
        <header className={classnames('hero hero--primary', styles.heroSection)}>
            <div className={classnames("container", styles.container, styles.heroContainer)}>
                <h1 className="hero__title">{tagline}</h1>
                <h4 className={classnames(styles.heroDescription)}>{config.description}</h4>
                <div className={styles.buttons}>
                    <Link
                        className={classnames(
                            'button button--outline button--lg',
                            styles.button,
                            styles.blueBtn,
                        )}
                        to={useBaseUrl(config.buttons.first.url)}>
                        {config.buttons.first.text}
                    </Link>
                    <Link
                        className={classnames(
                            'button button--outline button--lg',
                            styles.button,
                            styles.greenBtn,
                        )}
                        to={useBaseUrl(config.buttons.second.url)}>
                        {config.buttons.second.text}
                    </Link>
                </div>
            </div>
            <div style={{width: "20%", margin: "0 5% 5% 5%"}}>
                <img src={useBaseUrl("img/microsite/home.svg")} alt="home icon" />
            </div>
        </header>
    );
};

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
    const sections = siteConfig.customFields.sections;
    return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
        <HomepageHeader/>
        <HomePageTeaser config={siteConfig}  />
        <HomepageModules/>
        <HomePageFormateur/>

      <main>
          {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </Layout>
  );
}
