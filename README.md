# Vue 3

## Run Server and Endpoint
npm run start  

### CDN
`<script src="https://unpkg.com/vue@3"></script>`

### Boot a Node JS server
npx serve

### Shortening
v-bind:class = :class  
v-on:click = @click

### Directives
v-for - loop   
v-if - not exists in a DOM  
v-else   
v-else-if   
v-show - not display  
v-model   

### Component parts
components:  
props:  
data:  
computed:  
watch:  
methods:  
templates:  

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
npm install json-server --save-dev

### Create data in db.json file
touch db.json

### Run server for Endpoint
npx json-server db.json -p 3001
