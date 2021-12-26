To install project:

First install and run the backend
cd backend && npm i && npm start:dev

Then install the FE, postinstall hooks will pull GraphQL schema from BE endpoint. Then you can start the app.
cd frontend && npm i && npm start

Also for the FE do run codegenerator npm script to watch for changes in the ./src/graphql/*.graphql

Alternatively you can install both FE and BE, launch them immediatelly and also watch with codegen, through:
npm run install:start:both

To just launch both BE and FE without installing:
npm run start:both