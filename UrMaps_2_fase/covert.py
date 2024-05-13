import pandas as pd

# Leer el archivo Excel
df = pd.read_excel('traducciones.xlsx')

# Convertir a JSON
json_data = df.to_json(orient='records')

# Guardar el archivo JSON
with open('traducciones.json', 'w') as file:
    file.write(json_data)