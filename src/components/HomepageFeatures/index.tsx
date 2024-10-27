import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import TreeSpider from 'treespider';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

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

  React.useEffect(() => {
    const instance1 = new TreeSpider({
      targetContainer: '#container-1',
      random_data_length: 120
    });

    const instance2 = new TreeSpider({
      targetContainer: '#container-2',
      random_data_length: 120,
      tree_type: 'hSpiderWalk',
      chart_head_type: 'landscape',
      backgroundPattern: 'flurry'
    });

    const instance3 = new TreeSpider({
      targetContainer: '#container-3',
      random_data_length: 120,
      tree_type: 'cellar',
      chart_head_type: 'rounded',
      backgroundPattern: 'blurry'
    });
  }, [])
  
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
          <div className='sections-container'>
            <div className={styles.sectionsTitle}>
              Choose the tree that fits your organization
            </div>

            <div className='tree-type-title'>Default Tree</div>
            <div className='tree-container' id='container-1'></div>

            <div className='tree-type-title'>hSpiderWalk Tree with landscape chart heads with gyrrate background pattern</div>
            <div className='tree-container' id='container-2'></div>

            <div className='tree-type-title'>cellar Tree with rounded chart heads with blurry background pattern</div>
            <div className='tree-container' id='container-3'></div>
          </div>

          <div className='sections-container last-container'>
            <div>And more</div>
            <div>
              <button className='try-it-btn'>try it out</button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
