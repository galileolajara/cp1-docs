import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

type FeatureItemWithImage = {
  title: string;
  image: string;
  imagePos: number;
  description: ReactNode;
};

const FeatureListSimple: FeatureItem[] = [
  {
    title: 'Easy Metaprogramming System',
    description: (
      <>
        Metaprogramming is as easy as string interpolation. Unlike other metaprogramming systems, metaprograms in Cp1 are cached and can have zero overhead. Debugging is also easier too compared to other metaprogramming systems such as C++ templates.
      </>
    ),
  },
  {
    title: 'Fast Compilation Speed',
    description: (
      <>
        Built with incremental compilation in mind. Up to 125K lines of codes single-core compilation on a Macbook M2. Codes that are unmodified are cached and never parsed again.
      </>
    ),
  },
  {
    title: 'Shorter and more readable codes',
    description: (
      <>
        You can use function arguments to declare variables quickly. Spaces are required before and after operators for better readability. Names can have dashes, like in Lisp.
      </>
    ),
  },
];

const FeatureListExtra: FeatureItemWithImage[] = [
  {
    title: 'Join us in Discord',
    image: require('@site/static/img/animated-robot-head.gif').default,
    imagePos: 1,
    description: (
      <>
        We welcome new people from our small crib. Fresh to C? Let's upgrade your skill with Cp1. <Link to="https://discord.gg/qBtunCNyUS" target="_blank"><strong>Join here &rarr;</strong></Link>
      </>
    ),
  },
  {
    title: 'Engage with us',
    image: require('@site/static/img/animated-robot-smart.gif').default,
    imagePos: 1,
    description: (
      <>
        Got the same interest? You might want to join our small community to spread the same vision. <Link to="mailto:galileolajara@gmail.com" target="_blank"><strong>Send us email today!</strong></Link>
      </>
    ),
  },
  {
    title: 'Support us through',
    image: require('@site/static/img/logo-patreon.png').default,
    imagePos: 2,
    description: (
      <>
        Help us grow our community by supporting us through <Link to="https://patreon.com/GalileoLajara?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target="_blank"><strong>Patreon</strong></Link>. We would love to meet you there!
      </>
    ),
  },
];

function FeatureSimple({title, description}: FeatureItem) {
  return (
    <div className="bottom-space">
      <div className="padding-horiz--md">
        <Heading as="h3"><span className="text-red"><strong>+</strong></span> {title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureExtra({title, image, imagePos, description}: FeatureItemWithImage) {
  return (
    <>
      { imagePos == 1 ? (
        <div className={clsx('col col--6', styles.featureItem)}>
          <div className={styles.featureItemWithImg}>
            <div className={styles.featureItemWithImgLeft}>
              <img src={image} className={styles.featureImg} alt={title} role="img" />
            </div>
            <div className={styles.featureItemWithImgRight}>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={clsx('col col--6 text-center feature-item-wide', styles.featureItem)}>
          <Heading as="h3">{title}</Heading>
          <img src={image} className={styles.featureImgWide} alt={title} role="img" />
          <p>{description}</p>
        </div>
      ) }
    </>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              {FeatureListSimple.map((props, idx) => (
                <FeatureSimple key={idx} {...props} />
              ))}
            </div>
            <div className="col col--6">
              <img src={require('@site/static/img/sample-code.png').default} style={{borderRadius: "0.5em"}} alt="Cp1 Programming Language Hello World" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Heading as="h2" className="fs-title text-center"><strong>Community</strong></Heading>
          <div className={clsx('row justify-content-center short-width', styles.featureItem)}>
            {FeatureListExtra.map((props, idx) => (
              <FeatureExtra key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
