
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

const ChallengeBox = () => {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountDownContext)

    const succededChallageHandler = () => {
        completeChallenge()
        resetCountdown()
    }

    const failedChallengeHandler = () => {
        resetChallenge()
        resetCountdown()
    }

    return (
        <>
            {activeChallenge ? (

                <div className="challengeBox box">
                    <div id="align">
                        <h1>Ganhe {activeChallenge.amount} xp</h1>
                        <div className="traco"></div>
                    </div>

                    <img src={`icons/${activeChallenge.type}.svg`}></img>
                    <p>{activeChallenge.description}</p>
                    <footer>
                        <button className="btnSucces" onClick={succededChallageHandler}>
                            Completei
                        </button>

                        <button className="btnFailed" onClick={failedChallengeHandler}>
                            Falhei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className="challengeAlreadyExits box">
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                        <img src="icons/level.svg"></img>
                        <p>Complete-os e avançe para o próximo nível!</p>
                    </div>
                )}
        </>
    )
}

export default ChallengeBox