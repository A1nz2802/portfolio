import Navigation from './navigation';
import Head from 'next/head';

const ContainerNav = ( props: JSX.ElementChildrenAttribute ) => {
  return (
    <div>
      <Head>
        <title>A1nz Portfolio</title>
        {/* CDN Here */}
      </Head>

      <Navigation />
      <div>
        { props.children }
      </div>
    </div>
  )
}

export default ContainerNav;
