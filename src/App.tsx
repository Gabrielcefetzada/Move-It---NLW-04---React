import React from 'react';
import { ChallengesProvider } from '../src/contexts/ChallengesContext'
import { CountDownProvider } from '../src/contexts/CountDownContext'

import CompleteChalenges from '../src/components/CompleteChalenges'
import Countdown from '../src/components/Countdown'
import ExperienceBar from '../src/components/ExperienceBar'
import Profile from '../src/components/Profile'
import ChallengeBox from '../src/components/ChallengeBox'

import './App.css';
import '../src/styles/CompleteChallenges.css'
import '../src/styles/Countdown.css'
import '../src/styles/Profile.css'
import '../src/styles/ExperienceBar.css'
import '../src/styles/ChallengeBox.css'
import '../src/styles/LevelUpModal.css'


function App() {

  return (

    <ChallengesProvider>
      <CountDownProvider>
    
    <div className="App">
       <ExperienceBar />
       <div className="fatherDiv">
      <div className="containerLeft">
        <Profile />
        <CompleteChalenges />
        <Countdown />
      </div>

      <div className="containerRigth">
        <ChallengeBox />
      </div>
      </div>
    </div>
      </CountDownProvider>
    </ChallengesProvider>

  );
}

export default App;
