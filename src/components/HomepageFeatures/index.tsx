import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import "./styles.css"

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Um projeto colaborativo',
    Svg: require('@site/static/img/logo03.svg').default,
    description: (
      <>
        Um projeto feito 100% pelos alunos da disciplina de Engenharia de software.
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

export default function HomepageFeatures(): JSX.Element {
  return (

    <div className='features'>
      {
        FeatureList.map((props, index) => (
          <Feature key={index} {...props} />
        ))
      }
    </div>

    // <section className={styles.features}>
    //   <div className="container">
    //     <div className="row">
    //       {FeatureList.map((props, idx) => (
    //         <Feature key={idx} {...props} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
