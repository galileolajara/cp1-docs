import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy Metaprogramming System',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         Metaprogramming is as easy as <b>string interpolation</b>. Debugging is also easier too compared to other metaprogramming systems such as C++ templates.
      </>
    ),
  },
  {
    title: 'Fast Compilation Speed',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Built with <b>incremental compilation</b> in mind. Up to 125K lines of codes single-core compilation on a Macbook M2. Codes that are unmodified are <b>cached and never parsed again</b>.
      </>
    ),
  },
  {
    title: 'Shorter and more readable codes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can use function arguments to <b>declare variables quickly</b>. Spaces are required before and after operators for <b>better readability</b>. <b>Names can have dashes</b>, like in Lisp.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
