import { createContext } from 'react'
import { useState, useEffect, useContext } from 'react'
import {ChallengesContext} from '../contexts/ChallengesContext'

export const CountDownContext = createContext({})

export const CountDownProvider = ({children}) => {


    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(25* 60)
    const [active, setActive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const startCountdown = () => {
        setActive(true);
    }

    const resetCountdown = () => {
        setActive(false);
        setHasFinish(false)
        setTime(25 * 60)
    }

    useEffect(() => {
        if (active && time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
            return () => clearTimeout(timer);
        } else if (active && time == 0) {
            setActive(false)
            setHasFinish(true)
            startNewChallenge()
        }
    }, [active, time])

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            active,
            startCountdown,
            resetCountdown,
        }}>
            { children }
        </CountDownContext.Provider>
    )
}