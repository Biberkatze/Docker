
# Verwende das Basis-Image von Node.js Version 14
FROM node:14

# Setze das Arbeitsverzeichnis im Container auf /app
WORKDIR /app

# Kopiere die package.json und package-lock.json Dateien in das Arbeitsverzeichnis des Containers
COPY package*.json ./

# Führe npm install aus, um die Abhängigkeiten der Anwendung zu installieren
RUN npm install

# Kopiere alle Dateien aus dem aktuellen Verzeichnis des Hosts in das Arbeitsverzeichnis des Containers
COPY . .

# Öffne den Port 3000 im Container, um auf die Anwendung zugreifen zu können
EXPOSE 3000

# Starte die Anwendung beim Containerstart mit dem Befehl node und der app.js Datei
CMD ["node", "app.js"]
