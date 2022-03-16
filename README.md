<div align="center">
    <img width=150 height=150 src="./public/logo.png" title="demo" />
    <h1 style="margin-top: 0px">Demo
    </h1>
</div>

### Vue 3 Webapp Demo
A vue webapp that integrates with an API gateway and a Storybook component library.

<br>

## Getting Started

**Prerequisites**
* NodeJS `16.13.2`
* NPM `8.3.1`
* Vue CLI `4.5.15`
<br>

**Project Structure**
```
webapp-demo
└─── public
│   │   favicon-16.png
│   │   favicon-32.png
│   │   favicon-48.png
│   │   index.html
│
└─── src
│   │   assets
│   │   components # only wrapper components and fragments
│   └─── router
│   │   │   index.js
│   │   └─── auth
│   │   │   index.js
│   │   │   
│   └─── store
│   │   │   index.js
│   │   └─── modules
│   │   │   │   auth.js
│   │   │   │   mock.js
│   │   │   │   user.js   
│   │   
│   └─── views
│   │   │   Home.vue
│   │   │
│   │   app.js
│   │   main.js
│ 
│   tests
│   .browserlistrc
│   .editorconfig
│   .env
│   .env.development
│   .env.production
│   .eslintignore
│   .eslintrc.js
│   .gitignore
│   babel.config.js
│   cypress.json
│   package-lock.json
│   package.json
│   readme.md
│   vue.config.js
│   webpack.config.js
```


1. Vue Component Structure

```vue
<template>
  <my-component @click="getMock"> { mock } </my-component>
</template>

<script>
import { MyComponent} from 'components/src/stories'

export default {
  name: 'ViewComponent',
  components: { MyComponent },
  computed: {
    mock() {
      return this.$store.getters.user
    }
  },
  methods: {
    getMock() {
      this.$store.dispatch('GET_MOCK')
    }
  }
}
</script>
```

2. Router Structure
```js
const route = {
  path: '/router-name',
  name: 'RouterName',
  meta: {
    title: 'Reset Password'
  },
  component: () => import(/* webpackChunkName: "router-name" */ '../../views/ComponentName.vue')
}
```

3. Store Structure
* **states** should always be `camelCase`
* **getters** should always be `camelCase`
* **mutations** should always be `camelCase`
* **actions** should always be capslocked `SNAKE_CASE`

```js
const module = {
  state: {
    mock: {}
  },
  getters: {
    mock(state) {
      return state.mock
    }
  },
  mutations: {
    getMock(state, value) {
      state.mock= mock
    }
  },
  actions: {
    GET_MOCK({ commit }) {
      commit('getMock', value)
    }
  }
}

export default module 
```

4. Starting up Vue within the `main.js` along all the used and supported plugins

```js
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
```

---

#### :tada: Webapp's running!

![webapp]('./public/webapp.gif)

----

#### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Run your end-to-end tests
```
npm run test:e2e
```

##### Lints and fixes files
```
npm run lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
## Guia para inicializar a aplicação/projeto:
#### Definir o tamanho do escopo:
1. Quão grande é a aplicação? Ela pode ser dividida em mais de um escopo?
2. Quantos times irão trabalhar? Frontends? Full-stacks? UI/UX?
3. A aplicação é feita para validar um modelo de negócio? É uma refatoração?
4. Precisa ser um monolito? Tem recursos suficientes para um micro-frontend?

#### Delegar responsabilidades:
1. Dividir a aplicação em pelo menos 3 partes
   1. times
   2. especialidades
   3. escopos

2. Pensar em como unificar a experiência do usuário
3. Desenvolver testes para cada parte

