import pandas as pd

# Load the Excel file into a pandas DataFrame, skipping the first row
df = pd.read_excel("traducciones.xlsx")

# Initialize an empty dictionary to store the JSON object
json_data = {}

# Define the languages and keys to extract
languages = ["Español", "Inglés", "Francés"]
keys = df.columns[1:]

# Iterate over each language
for language in languages:
    lang_translations = {}  # Initialize translations for the current language
    # Iterate over each key
    for key in keys:
        key_translations = {}  # Initialize translations for the current key
        # Iterate over each row to extract the translation for the current key and language
        for index, row in df.iterrows():
            key_translations[str(row["Clave"])] = str(row[language])  # Add translation to the current key
        lang_translations[language] = key_translations  # Add translations for the current key to the current language
    json_data[language[:2].upper()] = lang_translations  # Add translations for the current language to the JSON object with language code

# Output the JSON object
print(json_data)