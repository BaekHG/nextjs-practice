import Head from 'next/head';

const Seo = ({ title }) => (
  <Head>
    <title>{`${title} | Next movies`}</title>
  </Head>
);

export default Seo;
