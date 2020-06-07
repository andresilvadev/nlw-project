###Code Blocks (multi-language) & highlighting

####Inline code

##### Abre a pesquisa no visual code
`ctrl + shift + p`

##### Visualizar atalhos VS Code
`ctrl + shift + p`
`Keyboard Shortcuts`

##### SERVER Inicia o servidor  
`$ npm run dev`

##### SERVER Inicia o servidor se este comando não estiver configurado no package.json, caso contrário roda o comando acima 
`$ npx ts-node-dev src/server.ts`

Obs: A flag ignore node_modules serve para não ficar observando se houve alteração nos arquivos da node_modules
`ts-node-dev --ignore-watch node_modules src/server.ts`

##### MIGRATION Roda as migrações do banco
`$ npm run knex:migrate`

##### MIGRATION Roda as migrações do banco se este comando não estiver configurado no package.json, caso contrário roda o comando acima 
`$ npx knex --knexfile knexfile.ts migrate:latest`

##### SEEDs Roda as seeds do banco
`$ npm run knex:seed`

##### SEEDs Roda as seeds do banco se este comando não estiver configurado no package.json, caso contrário roda o comando acima 
`$ npx knex --knexfile knexfile.ts seed:run`

