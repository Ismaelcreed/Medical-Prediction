const API_URL = 'http://localhost:5000/predict';

export const predictDisease = async (patientData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                age: parseInt(patientData.age), // ➡ Conversion en nombre
                sex: patientData.sexe === 'male' ? 'M' : 'F', // Clé 'sex' au lieu de 'sexe'
                symptomes: patientData.symptome // Clé exacte 'symptomes'
            })
        });

        if (!response.ok) {
            throw new Error('Erreur de prédiction');
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur API:', error);
        throw error;
    }
};