from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Chargement des artefacts
model = load_model('models/medical_model.h5')
scaler = joblib.load('models/scaler.pkl')
label_encoder = joblib.load('models/label_encoder.pkl')
feature_columns = joblib.load('models/feature_columns.pkl')
symptom_encoder = joblib.load('models/symptom_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # 1. Encodage des symptômes
        symptomes = [s.strip() for s in data['symptomes'].split(',')]
        symptom_features = symptom_encoder.transform([symptomes])
        symptom_df = pd.DataFrame(symptom_features, columns=symptom_encoder.classes_)
        
        # 2. Création de l'entrée complète
        input_data = pd.DataFrame({
            'age': [data['age']],
            'sex_F': [1 if data.get('sex') == 'F' else 0],
            'sex_M': [1 if data.get('sex') == 'M' else 0]
        })
        
        # 3. Fusion avec les symptômes
        full_input = pd.concat([input_data, symptom_df], axis=1).fillna(0)
        
        # 4. Vérification des colonnes manquantes
        for col in feature_columns:
            if col not in full_input.columns:
                full_input[col] = 0
        full_input = full_input[feature_columns]
        
        # 5. Prédiction
        scaled_input = scaler.transform(full_input)
        prediction = model.predict(scaled_input)
        disease = label_encoder.inverse_transform([np.argmax(prediction)])[0]
        
        return jsonify({'disease': disease})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)