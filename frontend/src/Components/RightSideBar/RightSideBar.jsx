// RightSidebar.jsx
import React, { useEffect, useState } from 'react';
import './RightSideBar.scss';
import Skeleton from '../Skeleton/Skeleton';
import { quantum } from 'ldrs';
import gif from "../../assets/gif/doctor-penguin.gif";

quantum.register();

const RightSidebar = ({ isOpen, onClose, isLoading, prediction, error }) => {
  const [synth, setSynth] = useState(null);
  const [utterance, setUtterance] = useState(null);

  // Initialiser la synthèse vocale
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
  }, []);

  // Générer la voix automatiquement
  useEffect(() => {
    if (synth && prediction) {
      const frenchVoices = synth.getVoices().filter(voice => 
        voice.lang.startsWith('fr') || voice.name.includes('French')
      );

      if (frenchVoices.length > 0) {
        const newUtterance = new SpeechSynthesisUtterance(
          `Selon les paramètres reçus, nous pensons que vous pourriez avoir la : ${prediction}. 
          Veuillez consulter un médecin pour confirmation.`
        );
        newUtterance.voice = frenchVoices[0];
        newUtterance.rate = 0.9;
        
        synth.speak(newUtterance);
        setUtterance(newUtterance);
      }
    }

    // Nettoyer à la fermeture
    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, [prediction, synth]);

  return (
    <div className={`right-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>✖</button>
      <img src={gif} alt='Médecin virtuel' className="doctor-gif" />

      <div className="header-section">
        <h2>Résultat de l'analyse</h2>
      </div>

      {isLoading ? (
        <>
          <div className="skeleton-container">
            <Skeleton />
          </div>
          <div className="loader">
            <l-quantum size="45" speed="1.75" color="#6200ee" />
          </div>
        </>
      ) : (
        <div className="prediction-content">
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <>
              <div className="diagnostic-message">
                <p>
                  Notre système a analysé :
                  <br />
                  <span className="highlight-text">
                    {prediction || 'Aucune prédiction disponible'}
                  </span>
                </p>
                <p className="medical-advice">
                  Cette prédiction est générée par intelligence artificielle.<br />
                  Consultez toujours un professionnel de santé.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RightSidebar;