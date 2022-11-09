import Head from 'next/head';

import { StartScreen } from '../components/Screens/StartScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fibulacci - Kindelia Dapps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StartScreen />
      </main>
    </div>
  );
}
