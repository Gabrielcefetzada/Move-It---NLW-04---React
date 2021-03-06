import { createContext } from 'react'
import { LevelUpModal } from '../components/LevelUpModal'
import { useState, useEffect } from 'react'
import challenges from '../challenges.json'

export const ChallengesContext = createContext({})

export const ChallengesProvider = ({ children }) => {

    const [level, setLevelUp] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(30)
    const [isModalLevelUpOpen, setIsModalLevelUpOpen] = useState(false)
    const [challengesCompleted, setChallengeCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1)*4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    /* useEffect(() => {
        localStorage.setItem('level', level.toString())
        localStorage.setItem('currentExperience', currentExperience.toString())
        localStorage.setItem('challengesCompleted', challengesCompleted.toString())
    }, [level, currentExperience, challengesCompleted]) */

    const levelUp = () => {
        setLevelUp(level + 1)
        setIsModalLevelUpOpen(true)
    }

    const closeModal = () => {
        setIsModalLevelUpOpen(false)
    }

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted' ){
            new Notification('Está na hora de um novo desafio 🔥 ', { 
                body: `Valendo ${challenge.amount} xp`
            })
        }
    }

    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    const completeChallenge = () => {
        if(activeChallenge === null){
            return
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengeCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeModal,
        }}>
            {children}
            {(isModalLevelUpOpen && (
                <LevelUpModal/>
            ))}
        </ChallengesContext.Provider>
    )

}