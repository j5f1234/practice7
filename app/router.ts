import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const online = app.middleware.online
  router.get('/', controller.home.index);

  router.post('/api/register', controller.user.register)
  router.post('/api/login', controller.user.login)
  router.delete('/api/logout', online, controller.user.logout)
  router.put('/api/changeinfo',online, controller.user.changeInfo)
  router.get('/api/getinfo',online,controller.user.getInfo)
  router.post('/api/addnew',online,controller.book.addNew)
  router.post('/api/borrow',online,controller.book.borrow)
  router.get('/api/bookinfo',online,controller.book.getBookInfo)
  router.delete('/api/return/:id',controller.book.delete)
};