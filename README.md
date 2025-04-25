# ReadMe

## Installation des dépendances

```sh
npm install
```

## Run React project local

```sh
npm run dev
```

## End 2 end

### Runs the end-to-end tests.

```sh
npm run e2e
```

### Starts the interactive UI mode.

```sh
npx playwright test --ui
```

### Runs the tests only on Desktop Chrome.

```sh
npx playwright test --project=chromium
```

### Runs the tests in a specific file.

```sh
npx playwright test example
```

### Runs the tests in debug mode.

```sh
npx playwright test --debug
```

### Auto generate tests with Codegen.

```sh
npx playwright codegen
```

## Unit Tests

### Run unit tests

```sh
npm run test
```

### Unit Tests watch mode

```sh
npx vitest run
```

## Explication de la fonction getHour

Tests terminés pas la fonction !

La fonction **getHour** est censé calculer la valeur numérique basée sur les trois cadrans (lune, soleil, terre) et applique les règles spécifiques à chacun d'eux

Vérifie des valeurs des cadrans avec **checkCadranValue**:

- cadran doit avoir une valeur de 1 ou 2
- sinon une erreur

Cadran de la terre :

- Si la valeur est 2 et que le cadran du soleil vaut également 2 le résultat est immédiatement fixé à 6
- Si la valeur est 1, elle ajoute 2 au total
  cadran du soleil
- Si la valeur est 1, le cadran de la terre est ignoré (ni valeur ni effet).
- Si la valeur est 2, la valeur du cadran de la terre est doublée
  Cadran de la lune :
- Si la valeur est 1, le total est réduit de 2
- Si la valeur est 2, le total est divisé par 2 et arrondi à l'entier inférieur
  Calcul fina
  la somme des valeurs des cadrans avec les règles specifiques est retournée

Cette fonction est utilisée pour déterminer l'heure en Corodinsite Jupiterienne en fonction des cadrans.

Avec la fcocntion **getTime**
on retourne :
Si le résultat est <= 2 alors l'heure est mortin
sinon si le résultat est <= 4, alors l'heure est aprenoon
sinon si le résultat est <= 5 alors l'heure est soirning
sinon l'heure est nuight
