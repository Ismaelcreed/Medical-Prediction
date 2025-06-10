import joblib

# Charger les colonnes depuis le fichier
columns = joblib.load("models/feature_columns.pkl")
print("Colonnes du modèle :", columns)