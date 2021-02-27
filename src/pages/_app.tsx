import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengsContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
