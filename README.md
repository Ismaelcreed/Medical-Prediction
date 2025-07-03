 🧠 SYMPTOMA - Medical Disease Prediction using AI

SYMPTOMA est une application d’intelligence artificielle permettant de prédire une maladie probable à partir de l’âge, du sexe et d’une liste de symptômes saisis par l’utilisateur. Le projet repose sur un modèle de deep learning entraîné à partir de données médicales simulées, accessible via une API Flask et une interface React.

---

## 🚀 Fonctionnalités

- 🧾 Saisie simple des symptômes en texte
- 🔬 Prédiction automatique de la maladie probable à partir de symptômes
- 🗣️ Synthèse vocale : l'IA prononce la maladie détectée
- 🌐 API Flask légère et rapide
- 📊 Pipeline complet de traitement de données
- 🤖 Modèle de classification multiclasses avec Keras
- 💡 Frontend React pour une interface intuitive

---

## 🧪 Exemple d'utilisation de l'API

### 🔷 Requête POST

```http
POST http://localhost:5000/predict
Content-Type: application/json

{
  "age": 32,
  "sex": "M",
  "symptomes": "fièvre, toux, fatigue"
}
```

### 🔶 Réponse

```json
{
  "disease": "Grippe"
}
```

---

## 🔧 Installation 

# Cloner le projet :
```bash
git clone https://github.com/Ismaelcreed/RNA-2025.git
```

## pour le backend
```bash
cd backend
```

1. Créer un environnement virtuel :
```bash
python -m venv venv
source venv/bin/activate  # ou .\venv\Scripts\activate sous Windows
```

2. Installer les dépendances :
```bash
pip install -r requirements.txt
```

3. Entraîner le modèle :
```bash
python models/train_model.py
```

4. Lancer l'API :
```bash
python app.py
```

---


## pour le frontend
```bash
  cd frontend
  ```

1. Installer les dependence
```bash
  npm install
  ```

2. lancer le serveur
```bash
  npm run dev
  ```



## 🗣️ Synthèse vocale (Text-to-Speech)

Pour améliorer l’accessibilité et l’interaction, le projet SYMPTOMA propose une **fonction de lecture vocale** automatique. Lorsqu’une maladie est prédite, elle est non seulement affichée à l’écran mais également **prononcée** à haute voix à l’utilisateur.

Cette fonctionnalité est implémentée côté **frontend (React)** grâce à la **Web Speech API (SpeechSynthesis)**.

### Exemple :
> Symptômes : toux, fièvre, fatigue  
> Prédiction : "Grippe"  
> 🎤 L'IA dit : *"La maladie probable est la grippe."*

Cela améliore l’expérience utilisateur, en particulier pour les personnes malvoyantes ou les utilisateurs mobiles.

---

## 🧠 Technologies utilisées

- Python 3.11
- node 20+
- Flask & Flask-CORS
- TensorFlow / Keras
- scikit-learn / pandas / joblib
- ReactJS (pour le frontend)
- Web Speech API (synthèse vocale)
- JSON (pour les échanges API)

---

## 📈 Améliorations futures

- ✅ Ajout de la probabilité associée à chaque prédiction
- ✅ Intégration de BERT/CamemBERT pour interprétation NLP avancée
- ✅ Utilisation de données médicales réelles anonymisées
- ✅ Explicabilité des prédictions (XAI)
- ✅ Déploiement sur le web ou en application mobile

---

## 👨‍💻 Auteurs

> Ce projet a été réalisé dans le cadre d’un projet de groupe.  
> Merci à tous les membres de l’équipe pour cette projet.

---

## 📜 Licence

Ce projet est open-source à but pédagogique.  
Toute utilisation dans un cadre médical réel nécessite des validations éthiques et scientifiques rigoureuses.
