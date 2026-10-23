
export const TypesDeTaches = {
    DEVELOPPEUR: {
        GAMEPLAY: 'Programmation du Gameplay',
        MOTEUR: 'Développement du moteur de jeu',
        SCRIPTING: 'Scripting des événements',
        UI: 'Gestion des interfaces',
        OPTIMISATION: 'Optimisation des performances',
        INTEGRATION: 'Intégration des assets',
        DEBUG: 'Débogage',
        MULTIJOUEUR: 'Multijoueur / Réseau'
    },
    GRAPHISTE: {
        CONCEPT_ART: 'Concept art',
        MODELISATION: 'Modélisation 3D / 2D',
        TEXTURING: 'Texturing',
        ANIMATION: 'Animation',
        UI_UX: 'Design de l’interface (UI/UX)',
        VFX: 'Effets visuels (VFX)',
        DIRECTION_ARTISTIQUE: 'Direction artistique'
    },


    // Méthode utilitaire
    getKeyFromValue(value) {
        for (const job in this) {
            if (typeof this[job] === 'object') {
                for (const key in this[job]) {
                    if (this[job][key] === value) {
                        return job;
                    }
                }
            }
        }
        return null; // Si non trouvé
    }

};

