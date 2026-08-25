# Demandes des écoles — pages publiques

Les cinq pages du service de signalement des demandes de maintenance des
écoles, servies par GitHub Pages sur **relais-ecoles.fr**.

| Page | Qui l'ouvre | Comment on y arrive |
|---|---|---|
| `index.html` | tout le monde | l'adresse du service |
| `formulaire-v3.html` | une école | dépose une demande, sans compte |
| `connexion.html` | une école | suit ses demandes, lien envoyé par email |
| `intervention-v3.html` | le service qui traite | lien reçu par email, jeton dans l'adresse |
| `cloture-v3.html` | l'école | lien reçu par email, confirme ou refuse |
| `gestion-v3.html` | les agents du pôle | le poste de travail, accès par lien magique |

## Ce qui n'est pas ici

Rien de secret. Ces pages ne portent que la **clé publiable** de Supabase,
faite pour partir dans le navigateur : c'est la sécurité par ligne qui
protège, à la ligne près, jamais le secret de cette clé.

Le worker d'emails, les schémas SQL et les jeux de données vivent dans le
dépôt du projet, séparément.

## Ne pas modifier ici

Ces fichiers sont **copiés** depuis le dépôt du projet. Toute correction s'y
fait, puis on recopie — sans quoi la correction serait perdue au prochain
report.
