
import {useContext} from 'react'
import {ChallengesContext} from '../contexts/ChallengesContext'

const Profile = () => { 

    const { level } = useContext(ChallengesContext)

    return (
        <div className="profile-container">
            <img src="https://avatars.githubusercontent.com/u/63877012?s=460&u=d948a514b538dedd106ba880325036de956cb71f&v=4" alt="Gabriel Augusto" />
            <div>
                <strong>Gabriel Augusto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                   Level: {level}
                </p>
            </div>
        </div>
    )
}

export default Profile