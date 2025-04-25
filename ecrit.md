# DS - Qualité logicielle et tests

## Temporalité ( / 5)

Placer sur la timeline suivante les événements suivants :

1. Ajout d'une tâche de CI pour lancer les tests e2e à chaque PR
2. Squellette de la fonction de recherche
3. Développement de l'interface utilisateur (formulaire de recherche)
4. Détection d'un bug sur la fonction de recherche
5. Ecriture de tests sur la fonction de recherche
6. Développement de la fonction de recherche
7. Ecriture de tests sur le formulaire React
8. Lancer les tests unitaires en watch mode
9. Correction du bug sur la fonction de recherche
10. Lancer les tests e2e en local
11. Ajouter les tests unitaires à Husky pour chaque commit

Vous noterez uniquement le numéro en essayant de partager au mieux le temps total.
Si un évènement intervient rapidement après un autre alors il devra y avoir moins d'espace qu'avec un évènement qui intervient plus tard.
Si vous souhaitez dupliquer un évènement, vous pouvez le faire.

--------------

--11---2--5--8--6--8----3--7--10--1----4--5--8--9--8--

Je pars du principe que la fonction de recherche et l'IHM sont deux tâches différentes et que le bug sera découvert par la QA ou PO sur un environnement de qualif par exemple.

--------------

## Qualité logicielle - Vrai ou Faux ( / 10)

Chaque bonne réponse rapporte 1 point
Chaque mauvaise réponse enlève 1 point
Note maximale : 10

- [F] Le code est à coup sûr de qualité s'il est écrit par un développeur senior
- [V] Une code review est un bon moyen de s'assurer du bon suivi des règles de nommage entre collègues
- [V] Docker permet une auto documentation de la démarche à suivre pour utiliser le projet sur sa machine
- [V] Un logger comme winston peut améliorer la reproducibilité d'un bug
- [F] Les tests end-to-end sont souvent utilisés dans une approche TDD
- [F] Prettier permet de valider que les typages de Typescript sont bien respectés
- [F] Storybook est un outil de documentation d'API Rest, tout comme Swagger
- [V] La code coverage est une métrique qui peut être utilisée pour bloquer une PR en cas de pourcentage trop faible
- [V] La QA peut être amenée à réaliser des tests e2e via codegen
- [F] Il est pertinent de lancer une github action pour lancer des tests e2e sur l'adresse de production de l'application
- [V] CucumberJS est un outil de test plutôt tourné vers les PO, avec un langage naturel
- [V] l'utilisation d'LLMs comme ChatGPT peut être améliorée en lui fournissant des tests unitaires

## Intêret des tests ( / 5)

Justifiez 3 cas concrets de moments, ou de problèmes rencontrés, où les tests permettent de soulager le développeur ou plus généralement, de faciliter la vie sur un projet informatique.

-  Lorsque la demande client n'est pas suffisament définie et lorsque le développeur ne connait pas le projet suffisament, les tests unitaires peuvent permettre de chiffrer plus précisemment une demande d'évolution. Ca m'est arrivé en entreprise récemment. Lire les TU et les modifier / écrire de nouveaux m'a permis de clarifier la demande de changement.  

-  Avoir des tests sur un projet permet d'anticiper les régressions. Si les tests ne passent lorsqu'on modifie le code, on peut vérifier auprès du PO ou de la documentation si ce qui vient d'être développé est correct vis à vis de la demande.  

-  Les TU peuvent permettre de valider ou non la robustesse de notre code. Ca permet de savoir si notre code répond à tous les cas d'utilisation possible. 
