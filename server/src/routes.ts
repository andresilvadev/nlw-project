import express, { request, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
      
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;



// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Request Param: Parâmetros que vem da própria rota que identificam um recurso (parâmetro obrigatório)
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// const users = [
//    'André',
//    'Luiz',
//    'Silva' ,
//    'Dev'
// ];

// app.get('/users', (request, response) => {
//     console.log('Listagem de usuários');
//     const search = String(request.query.search).toLowerCase();
    
//     const filteredUsers = search ? users.filter(user => user.toLowerCase().includes(search)) : users;

//     return response.json(filteredUsers);
// });


// app.get('/users/:id', (request, response) => {
//    const id = Number(request.params.id);
//    const user = users[id];
//    return response.json(user);
// });


// app.post('/users', (request, response) => {
//    const data = request.body;

//    console.log(data);

//    const user = {
//       nome: data.nome,
//       email: data.email
//    }
//    return response.json(user);
// });