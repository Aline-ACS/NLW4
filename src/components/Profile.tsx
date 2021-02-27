import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengsContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Aline-ACS.png" alt="Aline Capoani" />
            <div>
                <strong>Aline Capoani</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}