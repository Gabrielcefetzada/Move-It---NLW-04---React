
import { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'

const Countdown = () => {

    const {
        minutes,
        seconds,
        active,
        hasFinish,
        startCountdown,
        resetCountdown
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className="countdown-container">
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <div className="container-btn">

                {hasFinish ? (
                    <button
                        disabled
                        type="button"
                        className="countdown-button finishedBtn"
                    >
                        Ciclo encerrado
                    </button>
                ) : (
                        <>
                            {active ? (
                                <button
                                    type="button"
                                    className="countdown-button finishBtn"
                                    onClick={resetCountdown}
                                >
                                    Abandonar Ciclo
                                </button>
                            ) : (
                                    <button
                                        type="button"
                                        className="countdown-button"
                                        onClick={startCountdown}
                                    >
                                        Iniciar Ciclo
                                    </button>
                                )}
                        </>
                    )}

            </div>
        </div>
    )
}

export default Countdown