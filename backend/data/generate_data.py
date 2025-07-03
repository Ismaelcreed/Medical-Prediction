# generate_medical_data.py

import pandas as pd

# Données médicales générées (20 cas)
data = {
    "age": [25, 45, 60, 33, 52, 28, 70, 19, 40, 65, 37, 58, 22, 49, 31, 43, 29, 67, 34, 55],
    "sex": ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F"],
    "symptomes": [
        "Fièvre,Toux,Douleurs musculaires",
        "Fatigue extrême,Soif excessive,Vision trouble",
        "Essoufflement,Douleur thoracique,Transpiration",
        "Maux de tête intense,Vomissements,Raideur nuque",
        "Palpitations,Étourdissements,Peau froide",
        "Éternuements,Écoulement nasal,Démangeaisons yeux",
        "Raideur articulaire,Gonflement,Rougeur",
        "Éruption cutanée,Démangeaisons,Œdème",
        "Nausées,Vomissements,Diarrhée",
        "Vertiges,Confusion,Trouble élocution",
        "Fièvre élevée,Frissons,Sueurs",
        "Toux persistante,Perte poids,Sueurs nocturnes",
        "Douleur abdominale,Perte appétit,Nausées",
        "Saignement gingival,Pâleur,Fatigue",
        "Brûlure urinaire,Fièvre,Douleur flanc",
        "Raideur matinale,Fatigue,Douleurs musculaires",
        "Nez bouché,Toux,Mal de gorge",
        "Essoufflement,Sifflement respiratoire,Toux sèche",
        "Douleur oculaire,Photophobie,Larmoiement",
        "Engourdissement visage,Faiblesse bras,Trouble parole"
    ],
    "disease": [
        "Grippe",
        "Diabète",
        "Infarctus du myocarde",
        "Méningite",
        "Arythmie cardiaque",
        "Rhinite allergique",
        "Polyarthrite rhumatoïde",
        "Urticaire",
        "Gastro-entérite",
        "AVC",
        "Malaria",
        "Tuberculose",
        "Appendicite",
        "Anémie",
        "Infection urinaire",
        "Fibromyalgie",
        "Rhume",
        "Asthme",
        "Conjonctivite",
        "Accident ischémique transitoire"
    ]
}

# Création du DataFrame
df = pd.DataFrame(data)

# Encodage one-hot du sexe
df = pd.get_dummies(df, columns=['sex'])

# Réorganisation des colonnes
df = df[['age', 'sex_F', 'sex_M', 'symptomes', 'disease']]

# Sauvegarde en CSV
df.to_csv("data/dataset/medical_dataset.csv", index=False)

print("✅ Fichier CSV généré avec succès (20 entrées) dans data/medical_dataset.csv !")