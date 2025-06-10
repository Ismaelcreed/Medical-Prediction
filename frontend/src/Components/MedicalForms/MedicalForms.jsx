import React, { useState } from 'react';
import RightSidebar from '../RightSideBar/RightSideBar';
import { predictDisease } from "../../Service/API"
import './MedicalForms.scss';

function MedicalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    age: '',
    sexe: '',    
    symptome: '', 
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await predictDisease(formData);
      setPrediction(result.disease);
      setIsSidebarOpen(true);
    } catch (err) {
      setError('Erreur lors de la prédiction');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    {isSidebarOpen && <div className="blur-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
    <form className="medical-form" onSubmit={handleSubmit}>
    <div className="row">
  <div className="input-group">
    <input
      type="number"
      name="age"
      value={formData.age}
      onChange={handleChange}
      required
      min="0"
      step="1"
      id="age"
    />
    <label htmlFor="age">Âge</label>
  </div>

  <div className="input-group">
    <select
      name="sexe"
      value={formData.sexe}
      onChange={handleChange}
      required
      id="sexe"
    >
      <option value="" disabled>Sexe</option>
      <option value="M">Homme</option>
      <option value="F">Femme</option>
    </select>
    <label htmlFor="sexe" className="select-label">Sexe</label>
  </div>
</div>

{/* ➕ Ajoutez une gestion améliorée des symptômes */}
<div className="row single">
  <div className="input-group full-width">
    <textarea
      type="text"
      name="symptome"
      value={formData.symptome}
      onChange={handleChange}
    
      required
      id="symptome"
    />
    <label htmlFor="symptome">Symptômes</label>
  </div>
</div>

      <button type="submit" onClick={() => setIsSidebarOpen(true)}>Prédire</button>
    </form>
    <RightSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isLoading={isLoading}
        prediction={prediction}
        error={error}
      />
    </>
  );
}

export default MedicalForm;
