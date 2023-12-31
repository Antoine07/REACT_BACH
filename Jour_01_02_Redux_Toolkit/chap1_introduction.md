# Redux toolkit 

## TP découvrir reduxtoolkit

La première partie du cours commence par un TP par groupe de 2/3, faites au moins un dépôt par groupe, il s'agit ici de créer encore un compteur, mais en utilisant reduxtoolkit et un des concepts nouveaux dans la gestion de state avec reduxtoolkit : **createSlice**. Il permet de **slicer** le state dans des blocs autonomes, regroupant une partie du state, avec son reducer et ses actions, et également les payloads de chaque action.

Dans la suite du cours vous utiliserez **vite** comme bundle pour créer un nouveau projet.

```bash
npm create vite@latest
```

Puis pour installer un nouveau projet React on ajoute le nom de l'application et l'option --template react.

```bash
npm create vite@latest counter --template react
```

Installation de reduxtoolkit qui est un redux avec des outils pratiques en surcouche.

Permet de gérer les states globaux d'une application facilement. 

```bash
npm install react-redux
npm install @reduxjs/toolkit
```

- reduxtoolkit des outils avec redux
- react-redux permet d'utiliser reduxtoolkit dans React pour lire et dispatcher (envoyer) les données dans Redux 

On utilisera le useDispatch et le useSelector respectivement pour 

**useDispatch** => déclencher les actions dans Redux ( par exemple déclencher le counter )
**useSelector** => lire les données dans le store ( lire le résultat ou les données dans le store )

1. Créez un createSlice avec son initiale state + les reducers ou actions

2. On contextualise le configureStore une fois à la racine de React

3. On utilise la librairie react-redux pour dispatcher et lire les données dans Redux 

## createSlice gestion du state

C'est une fonction, createSlice, qui accepte un état initial, et qui gère des créateurs d'action, permet de découper le state en plus petites parties autonomes.

- Exemple dans un fichier valueSlice.jsx

```js
// import de la fonction 
import { createSlice } from '@reduxjs/toolkit'

// définit un state 
const initialState = { message: '' }

const exampleSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'message',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    showMessage(state, action) {
      state.message = action.payload
    }
  },
})

// Export des actions
const store = configureStore({
     reducer: {
       e : exampleSlice.reducer
    }
});

export const { showMessage } = counterSlice.actions

// pour contextualiser le store dans l'arbre React
export default store;
```

Une fois que l'on a contextualisé le store de redux avec le component Provider de react-redux, on doit utiliser ses hooks, afin de pouvoir lire et dispatcher des actions dans le state, les actions de reduxtoolkit sont importées.

```js
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/valueSlice';

// ...
```

### 01 Exercice

Reprendre l'exercice du cours et faire le reducer qui décrémente le résultat du compteur.

1. Faites une décrémentation de -1

2. Faites une décrémentation de la valeur du dernier compteur utiliser.

### 02 Exercice

Reprendre l'exercice du cours et faire le reducer qui décrémente le résultat du compteur.

1. Lorsqu'on ne peut pas décrémenter, on affiche un message d'avertissement en laissant la dernière valeur au compteur. Le message d'avertissement sera géré dans le store de votre Redux.

2. Créez un compteur alétoire. Lorsqu'on clique sur le bouton d'incrémente aléatoire on avance d'un nombre alétoire par rapport au précédent nombre.

3. Mettre le bouton inactif si on ne peut plus décrémenter.

4. Ajoutez un champ pour définir le step de manière dynamique.

### 03 Exercice nouveau form compteur 

1. Créez un projet reduxtoolkit counterBis.

2. Créez un formulaire avec deux champs un champ pour saisir une valeur de compteur et un champ pour déterminer le step de votre compteur.

Pensez à créez également deux boutons un pour incrémenter et un autre pour décrémenter.

### 04 Exercice counter synchrone

Rappelons que Redux gère les actions de manière synchrone.

Créez un compteur aléatoire en utilisant **reduxtoolkit**.

Dans la suite de l'exercice créez un dossier store dans l'application dans lequel vous implémenterez le code de vos createSlice.

1. Installez le projet **app-counter** avec vite (bundle). 

2. Créez un bouton pour incrémenter une valeur de manière aléatoire.

3. Pour chaque valeur affichée; vous indiquerez si le nombre est pair ou impair. Aidez-vous de la remarque qui suit pour mettre en place cette fonctionnalité.

Remarque : Dans la partie reducers de votre slice (createSlice), vous pouvez découper une action en une fonction **reducer** et une fonction **prepare**, cette dernière fonction permet de gérer le payload, voyez l'exemple ci-dessous :

```js
reducers: {
        increment: {
            reducer: (state, action) => {}
        }
        prepare : () => ({payload : ...})
```

### Gestion d'un state asynchrone

On utilise dans cette exemple la fonction **createAsynchThunk**.

Une action asynchrone ne peut être dispatcher dans Redux sans passer par le **middleware** Thunk qui est intégré dans reduxtoolkit. En effet, toutes les actions dans Redux sont dispatchées de manière synchrone, **createAsynchThunk** attendra la résolution de la Promesse et dispatchera l'action dans le reducer de manière synchrone.

#### Mise en pratique

On définit d'abord la fonction asynchrone elle-même, par exemple :

```js
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
    const response = await userAPI.fetchById(userId)

    return response.data
  }
)
```

Puis dans la partie createSlice, on peut préciser les états de la promesse:

```js
const usersSlice = createSlice({
  name: 'users',
  initialState : { entities : [] },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      // todo ?
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload)
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
        // todo ?
    })
  },
})
```

### 05 Exercice counter asynchrone

Reprendre l'exercice précédent sur le counter dans la partie TP

1. Définissez un compteur asynchrone dans une promesse. 

2. Ajoutez un bouton permettant d'afficher une valeur incrémentée +1 de manière asynchrone en utilisant createAsynchThunk

3. Maintenant le délai du compteur est de 500ms; ajoutez à ce compteur la fonctionnalité suivante : si la valeur du compteur dépasse 10 on incrémente de +2. Et si on atteind 20 on rend inactif le bouton.


### 06 Exercice middleware 

Nous allons afficher une liste incrémentable d'étoiles dans le component principal; pour chaque incrémentation d'une valeur aléatoire pair ou impair, on affichera une étoile. Cette liste "graphique" sera placée sous les valeurs affichées par notre compteur précédent, voyez le wireframe ci-après.

Pour définir un middleware, précisez que l'on utilise thunk, cependant on utilisera l'autre méthode ci-après à l'aide de la fonction getDefaultMiddleware et de sa méthode concat pour ajouter nos middlewares au createStore. Notons que dans ce cas le middleware thunk est ajouté par défaut par reduxtoolkit.

```js
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
})
```

Dans la fonction **createStore** ajoutez la fonction suivante pour la clé middleware:

```js

const middlewares = [
    ((store) => (next) => (action) => { /* ... */})
];

createStore({
    reducer { },
    middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat([ ...middlewares ] )
});
``` 

Rendu visuel 

![counter](./images/counter.png)