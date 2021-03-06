
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

export const LevelUpModal = () => {

    const { closeModal, level } = useContext(ChallengesContext)

    return (
        <div className="containerEmbacado">
         <div className="containerModal">
            <h1>{level}</h1>
            <strong>Parabéns</strong>
                <p>Você alcançou um novo Level!</p>
                <button onClick={closeModal}>
                <img src="icons/close.svg"></img>
             </button>
            </div>
        </div>
    )
}

export default LevelUpModal