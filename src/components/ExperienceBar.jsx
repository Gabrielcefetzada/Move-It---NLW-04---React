
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

const ExperienceBar = () => {

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext) 

  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel)

    return (
      <div className="container">
        <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }}>
            <span className="current-experience" style={{ left: '50%' }}>
              {currentExperience} xp
            </span>  
          </div> 
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
      </div>
        )
}

export default ExperienceBar