import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler, MultiLabelBinarizer
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.utils import to_categorical
import joblib

# Chargement des données
data = pd.read_csv("./data/dataset/medical_dataset.csv")
print("Colonnes initiales :", data.columns.tolist())

# 1. Encodage des symptômes
data['symptomes'] = data['symptomes'].str.split(',')
symptom_encoder = MultiLabelBinarizer()
symptom_features = symptom_encoder.fit_transform(data['symptomes'])

# Sauvegarde de l'encodeur de symptômes
joblib.dump(symptom_encoder, "./models/symptom_encoder.pkl")

# Création du DataFrame des symptômes encodés
symptom_df = pd.DataFrame(symptom_features, columns=symptom_encoder.classes_)

# 2. Fusion avec les autres features
X = pd.concat([
    data[['age', 'sex_F', 'sex_M']], 
    symptom_df
], axis=1)

# 3. Encodage de la cible
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(data["disease"])
y = to_categorical(y_encoded)

# Sauvegardes
joblib.dump(label_encoder, "./models/label_encoder.pkl")
joblib.dump(X.columns.tolist(), "./models/feature_columns.pkl")

# 4. Normalisation
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
joblib.dump(scaler, "./models/scaler.pkl")

# 5. Entraînement
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2)
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_scaled.shape[1],)),
    Dense(64, activation='relu'),
    Dense(y.shape[1], activation='softmax')
])
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=50, batch_size=16, validation_split=0.2)
model.save("./models/medical_model.h5")

print("✅ Entraînement réussi !")