# Portfolio de Nouhayla Machkouri

Portfolio professionnel créé avec React, Tailwind CSS v4, et Vite.

## Objectif
Présenter mes compétences en tant que développeuse Full Stack Java Junior (Spring Boot / React), mes projets techniques et mon parcours.

## Technologies
- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Lucide React & React Icons**

## Structure du projet
```
portfolio/
├── public/
│   └── cv/                  # Contient le fichier CV PDF
├── src/
│   ├── components/          # Composants React (Hero, About, Projects...)
│   ├── index.css            # Fichier de style principal (Tailwind)
│   ├── App.jsx              # Composant racine
│   └── main.jsx             # Point d'entrée React
└── README.md
```

## Lancement local
1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## Personnalisation et Ajouts
- **Modifier le CV :** Remplacez le fichier dans `public/cv/nouhayla_Machkouri_CV.pdf` avec le même nom.
- **Ajouter un projet :** Éditez le fichier `src/components/Projects.jsx` et ajoutez un nouvel objet dans le tableau `projects`.

## Déploiement
Le projet est optimisé pour être déployé sur **Vercel**. Connectez simplement votre dépôt GitHub à Vercel et le build s'effectuera automatiquement.
