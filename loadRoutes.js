let Router = require('express-promise-router');

/**
 * Our router needs access to our database, so we define
 * a function that takes the knex object as an argument
 * and returns a new set of routes.
 */
function loadRoutes(knex) {
  let router = new Router();

  // GET /
  router.get('/', async(request, response) => {
    let orderDirection = request.query.order_direction || 'ASC';
    // let messages = await knex('messages').select('*').orderBy('created_at', 'DESC');
    let messages = await knex('messages').select('*').orderBy('created_at', orderDirection);
    let viewName = 'index';
    let viewData = { messages: messages };

    response.render(viewName, viewData);
  });

  // POST /messages
  router.post('/messages', async(request, response) => {
    let orderDirection = request.body.orderDirection;
    let messages = await knex('messages').select('*').orderBy('created_at', orderDirection);
    console.log(request.body);
    console.log(request.body.orderDirection);
    console.log(orderDirection);

    let viewName = 'index';
    let viewData = { messages: messages };

    response.render(viewName, viewData);
  });

  return router;
}

module.exports = loadRoutes;
