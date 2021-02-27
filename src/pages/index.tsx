import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css';


import Head from 'next/head';
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MoveIt</title>
      </Head>
      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
