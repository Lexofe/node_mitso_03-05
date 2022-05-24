const express = require('express');
const menusRouter = require('./resources/menu/menu.router');
const dishesRouter = require('./resources/dish/dish.router');
const categoriesRouter = require('./resources/category/category.router');

const app = express();


app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/menus', menusRouter);
app.use('/dishes', dishesRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
