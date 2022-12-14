# Vue 3

## Run Server and Endpoint
npm run start  

### CDN
`<script src="https://unpkg.com/vue@3"></script>`

### Boot a Node JS server
`npx serve`

## Option API  
### Shortening
v-bind:class = :class  
v-on:click = @click  
v-slot:footer = #footer  

### Directives
v-for - loop   
v-if - not exists in a DOM  
v-else   
v-else-if   
v-show - not display  
v-model   
v-text  

### Component parts
components:  
props:  
data:  
computed:  
watch:  
methods:  
templates:  
mixins: []  

### Hooks
beforeCreate  
created  
beforeMount  
mounted  
beforeUpdate  
updated  
beforeDestroy  
destroyed  

## Set up server for API
`npm install json-server --save-dev`

### Create data in db.json file
touch db.json

### Run server for Endpoint
`npx json-server db.json -p 3001`

## Install Vue through Vite
`npm init vue@latest`

## Composition API  

provide -> inject - pass variable through several layers to children component  

## Pinia
`npm install pinia`

state() - variables
actions: - methods influence on variables
getters: - additional manipulations with variables


