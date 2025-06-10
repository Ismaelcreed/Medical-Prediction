import zipfile

with zipfile.ZipFile("disease-symptoms-and-patient-profile-dataset.zip", 'r') as zip_ref:
    zip_ref.extractall("dataset")
