# Prompt Complet - Redesign Portfolio Nouhayla Machkouri

## Contexte

Je suis développeuse Full Stack Java Junior (Nouhayla Machkouri). Je veux redessiner complètement mon portfolio React/Vite/Tailwind avec un style moderne, créatif et différent de l'actuel "Digital Laboratory" dark theme.

## Palette de couleurs imposée
- Fond principal: #F5F5F5 (gris très clair, quasi blanc)
- Secondaire/Accent doux: #DFF1F1 (turquoise très pâle)
- Tertiaire/Borders: #BBD5DA (turquoise moyen)
- Accent vif: #FF0000 (rouge vif pour les CTA, highlights, hover)

## Portfolio actuel (sections existantes)
Le site React a ces sections dans l'ordre :
1. **Navbar** - Logo "NM." + liens (Accueil, À propos, Compétences, Projets, Parcours, Contact) + bouton CV
2. **Hero** - Nom complet, titre "Développeuse Full Stack Java Junior", bio courte (Licence Électronique + Simplon), boutons "Voir mes projets" + "Consulter mon CV", liens LinkedIn/GitHub/Email
3. **À propos** - Bio détaillée, 3 cards: Licence Électronique & Telecom, Formation Full Stack Java, Prête pour l'action
4. **Compétences** - 5 catégories, à conserver intégralement :
   - **Back-End**: Java 17, Java EE, Spring Boot, Spring MVC, Spring Security (JWT), API REST, Hibernate
   - **Front-End**: React.js, Tailwind CSS, HTML5, CSS3, JavaScript, Bootstrap
   - **Bases de données**: MySQL, SQL, Spring Data JPA
   - **DevOps & Outils**: Git & GitHub, Docker, CI/CD, Postman, Maven
   - **Conception & Autre**: UML, Figma, Approche Agile, C++, OOP
5. **Projets** - 4 projets: LogiTrack, XTrade, Système Gestion Médicale, FenPay (chacun avec titre, type, description, contribution, tech, GitHub)
6. **Expérience/Parcours** - Timeline: Formation Simplon 2024-2025, Licence Électronique 2022-2023
7. **Contact** - Email (machkourinouhayla@gmail.com) + Localisation (Béni Mellal, Maroc)
8. **Footer** - Logo "NM.", copyright

## Informations personnelles
- Nom: Nouhayla Machkouri
- Email: machkourinouhayla@gmail.com
- LinkedIn: https://www.linkedin.com/in/nouhayla-machkouri-589217255/
- GitHub: https://github.com/noha20009
- Localisation: Béni Mellal, Maroc

## Projet LogiTrack (déjà présent dans la liste, à enrichir)
- **Type**: API REST Logistique / Application de gestion d'entrepôt
- **Stack**: Java 17, Spring Boot 3.2.1, Spring Data JPA, Thymeleaf, MySQL, Lombok, Maven
- **Architecture**: Architecture en couches (Controller → Service → Repository → Model)
- **Entités JPA**: Client (nom, email, telephone, ville), Produit (nom, categorie, prix, quantiteStock), Commande (dateCommande, statut avec enum StatutCommande), CommandeLigne (quantité)
- **Relations**: Client 1→N Commandes, Commande 1→N CommandeLigne, Produit 1→N CommandeLigne
- **API Endpoints**: CRUD clients, produits, commandes; ajout de produits à une commande, mise à jour du statut, filtrage par client, comptage
- **GitHub**: https://github.com/noha20009/projet-logitrack
- **Description enrichie**: API REST Spring Boot centralisant la gestion des clients, produits, commandes et stocks. Architecture en couches avec relations JPA, CRUD complet, gestion des statuts de commande et endpoint de comptage.

## Projet XTrade (à AJOUTER dans la section Projets)
- **Type**: Plateforme de Trading de Simulation (Full Stack)
- **Stack Backend**: Java 17, Spring Boot 3.3.4, Spring Data JPA, Spring Security + JWT (JJWT 0.12.6), Spring WebSocket, MySQL, H2 (tests), OpenCSV, Apache POI, Lombok
- **Stack Frontend**: React 19, TypeScript 6, Vite 8, React Router 7, Recharts, Axios, Oxlint
- **Architecture**: Backend API REST + Frontend SPA, communication temps réel via WebSocket
- **Fonctionnalités**:
  - Inscription / connexion sécurisée avec JWT et rôles
  - Cotations en temps réel des actifs (actions & crypto-monnaies) via WebSocket
  - Achat et vente d'actifs avec frais de transaction et spread simulés
  - Ordres conditionnels (limite, stop-loss, take-profit) auto-exécutés
  - Dashboard avec portefeuille, graphiques de performance (Recharts), historique
  - Export CSV et Excel des transactions (OpenCSV + Apache POI)
- **Pages Frontend**: Landing, Login, Signup, Dashboard, Traders, TraderDetail, Assets
- **Entités**: Trader (nom, balance, portefeuille), Asset (code, nom, type STOCK/CRYPTO, prix), Transaction, Order (ordres conditionnels), Portfolio
- **Contribution**: Backend complet (modèles, API REST, JWT, ordres conditionnels, frais/spread, exports CSV & Excel, WebSocket temps réel) + Frontend React (gestion états, formulaires, connexion temps réel, page détails trader) + Conception BDD MySQL + orchestration du lancement
- **GitHub**: https://github.com/noha20009/XTrade
- **Description**: Plateforme web de simulation de trading permettant d'acheter et vendre des actifs financiers avec un capital virtuel. Interface moderne React/TypeScript connectée en temps réel au backend Spring Boot via WebSocket. Gestion complète du cycle de trading : cotations, ordres conditionnels, portefeuille, statistiques et exports.

## Modifications souhaitées

### 1. Nouvelle identité visuelle
- Passer du thème dark "laboratoire scientifique" à un thème **light/mode clair** épuré et moderne
- Style: **Glass morphism léger**, ombres subtiles, beaucoup de blanc/négatif
- Typographie moderne (Inter ou similaire)
- Transitions fluides, animations Framer Motion sobres mais impactantes

### 2. Ajouter LinkedIn dans le Footer
Ajouter une icône LinkedIn cliquable pointant vers `https://www.linkedin.com/in/nouhayla-machkouri-589217255/` dans le footer alongside le logo et le copyright.

### 3. Images/Illustrations pour les projets
Générer des illustrations SVG ou composants React visuels pour chaque projet au lieu des gradients simples:
- **LogiTrack**: Illustration évoquant la logistique/entrepôt (flèches de flux, boîtes, diagramme de chaîne d'approvisionnement) avec accent rouge
- **XTrade**: Illustration évoquant le trading/finance (graphique boursier, chandeliers japonais, courbe de performance) en rouge vif
- **Système de Gestion Médicale**: Illustration médicale (cœur, dossiers, stéthoscope stylisé) en turquoise
- **FenPay**: Illustration financière (billet, graphique, facture) en rouge/orange

### 4. Design requested
- Style **différent et créatif** par rapport à l'actuel
- Palette strictement: `#F5F5F5`, `#DFF1F1`, `#BBD5DA`, `#FF0000`
- Fond clair (#F5F5F5) avec des sections alternant white et #DFF1F1
- Cards avec bordures #BBD5DA, ombres douces
- Boutons principaux et highlights en #FF0000
- Texte principal en noir/gris foncé pour contraste sur fond clair

### 5. Structure des fichiers à modifier
- `src/index.css` - Nouvelles couleurs CSS, suppression du thème dark
- `src/components/Navbar.jsx` - Adaptation fond clair
- `src/components/Hero.jsx` - Nouveau design hero light
- `src/components/About.jsx` - Nouveau design light
- `src/components/Skills.jsx` - Adaptation
- `src/components/Projects.jsx` - Ajouter illustrations, enrichir LogiTrack
- `src/components/Experience.jsx` - Adaptation
- `src/components/Contact.jsx` - Adaptation
- `src/components/Footer.jsx` - Ajouter lien LinkedIn
- `src/components/lab/*` - Adapter ou remplacer les composants glass/effets pour theme clair
- `tailwind.config.js` - Si nécessaire, ajouter les nouvelles couleurs
