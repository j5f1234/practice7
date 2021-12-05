import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const online = app.middleware.online
  router.get('/', controller.home.index);

  router.post('/api/register', controller.user.register)
  router.post('/api/login', controller.user.login)
  router.delete('/api/logout', online, controller.user.logout)
  router.put('/api/changeinfo',online, controller.user.changeInfo)
  // router.get('/api/getinfo',online,controller.user.getInfo)
};
