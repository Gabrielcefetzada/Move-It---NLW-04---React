
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

const CompleteChalenges = () => {

    const { challengesCompleted } = useContext(ChallengesContext) 

    return (
    <div className="completed-challenges-container">
            <strong>Desafios completos</strong>
            <strong>{challengesCompleted}</strong>
        </div>
    )
}

export default CompleteChalenges