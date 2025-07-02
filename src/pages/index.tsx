import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('hero__logo', styles.heroLogo)}>
          <img src={useBaseUrl('/img/cp1-lang-logo-white.png')} alt="C PLUS ONE Programming Language" />
        </div>
        <Heading as="h2" className={clsx('hero__title', styles.heroTitle)}>
        C plus 1 Programming Language
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubTitle)}>
          {siteConfig.tagline}
        </p>
        <p className={clsx('hero__caption', styles.heroCaption)}>
        Built for people who likes C. Designed with modern features such as metaprogramming, methods, namespaces, auto variable type deduction and more.
        </p>
        <div className={clsx('row', styles.codeButton)}>
          <div className={clsx('code-container text-end', styles.codeNPM)}>
            <div className="copied" id="copied">Copied!</div>
            <input type="text" value="git clone --depth 1 https://github.com/galileolajara/cp1" className="code-plus code-with-sign" readOnly />
            <button className="btn-copy-code" onClick={function() {
            document.getElementById("copied").style.opacity = '1';
            navigator.clipboard.writeText('git clone --depth 1 https://github.com/galileolajara/cp1');
            setTimeout(function(){ document.getElementById("copied").style.opacity = '0'; }, 3000); }}>Copy</button>
          </div>
          <div className={clsx('', styles.buttons)}>
            <Link
              className={clsx('button button--primary button--lg', styles.buttonReadDocs)}
              to="/docs/start/introduction">
              Read Docs
            </Link>
          </div>
        </div>
        <p>
          <Link to="https://github.com/galileolajara/cp1/releases/tag/0.1" target="blank">Latest release 0.1</Link> &bull; <Link to="https://github.com/galileolajara/cp1" target="blank">Download on GitHub</Link>
        </p>
        <p className="fs-small">Runs on: <img src={useBaseUrl('/img/operating-systems.png')} alt="Windows, macOS, Linux" className={styles.opSys} />
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="The Minimalistic TypeScript for C">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
