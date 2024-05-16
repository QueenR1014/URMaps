import pandas as pd
"""
# Leer el archivo Excel
df = pd.read_excel('traducciones.xlsx')

# Convertir a JSON
json_data = df.to_json(orient='records')

# Guardar el archivo JSON
with open('traducciones.json', 'w') as file:

    file.write(json_data)"""



# Load the Excel file into a pandas DataFrame, skipping the first row
df = pd.read_excel("traducciones.xls", skiprows=1)

# Initialize an empty dictionary to store the JSON object
json_data = {}

# Iterate over each row in the DataFrame
for index, row in df.iterrows():
    key = str(row.iloc[0])  # Extract the value from the first column as the key
    translations = {}  # Initialize an empty dictionary for translations
    for language in df.columns[1:]:  # Iterate over columns for translations
        translations[language] = str(row[language])  # Extract translation for each language
    json_data[key] = translations  # Add translations to the JSON object with key

# Output the JSON object
print(json_data)
