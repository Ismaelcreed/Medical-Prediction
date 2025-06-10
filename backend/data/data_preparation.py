import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
import os

try:
    # Chargement du fichier
    csv_path = "./dataset/Disease_symptom_and_patient_profile_dataset.csv"
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Fichier introuvable : {csv_path}")

    df = pd.read_csv(csv_path)
    print("Colonnes détectées :", df.columns.tolist())

    # Vérification des colonnes nécessaires
    required_columns = {'Age', 'Gender', 'Disease'}
    if not required_columns.issubset(df.columns):
        missing = required_columns - set(df.columns)
        raise KeyError(f"Colonnes manquantes : {missing}")

    # Nettoyage et renommage
    df.rename(columns={
        'Age': 'age',
        'Gender': 'sex',
        'Disease': 'disease'
    }, inplace=True)

    # Supprimer les lignes où l'âge est manquant
    df.dropna(subset=['age'], inplace=True)
    df['sex'].fillna("Unknown", inplace=True)

    # Encodage des colonnes catégorielles
    df = pd.get_dummies(df, columns=['sex'])

    # Encodage de la cible
    df['disease'] = LabelEncoder().fit_transform(df['disease'])

    # Normalisation de l'âge
    scaler = StandardScaler()
    df['age'] = scaler.fit_transform(df[['age']])

    # Export des données nettoyées
    df.to_csv("clean_data.csv", index=False)
    print("✅ Nettoyage terminé avec succès et exporté dans clean_data.csv")

except Exception as e:
    print(f"❌ ERREUR : {str(e)}")
    print("💡 Conseil : Vérifiez que les noms des colonnes correspondent bien à ceux du fichier CSV.")
