import React from 'react'
import './WelcomePage.scss'
import gif from '../../assets/gif/doctor-penguin.gif'
import gif1 from '../../assets/gif/IA.gif'
import ShinyText from '../../Components/button/ShinyButton'
import Particle from "../../Components/Particles/Particles";
import ClickSpark from '../../Components/ClickSpark/ClickSpark';
import { Link } from 'react-router-dom';

function WelcomePage() {
    return (
        <>
            <ClickSpark
                sparkColor='#c50cbc'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                <Particle />
                <div className='WelcomePageContainer'>

                    <h1>Bienvenue dans la Plateforme MyDokoterako</h1>
                    <div className="gif">
                        <img src={gif1} alt="Images" />
                        <img src={gif} alt="Images" />
                    </div>
                    <p>⚕️Votre assistant médical intelligent pour une pré-diagnostic rapide et fiable.
                        Notre plateformeintélligente est là pour vous aider à identifier vos maladies.⚕️</p>
                    <Link to="/MyDokotera-app">
                    <ShinyText text="Commencer" disabled={false} speed={3} className='custom-class'/>
                    </Link>
                    <p className="disclaimer">
                        ℹ️ Ce service ne remplace pas une consultation médicale professionnelle. ℹ️
                    </p>
                </div>
            </ClickSpark>
        </>
    )
}

export default WelcomePage
