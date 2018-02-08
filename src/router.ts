import * as egg from 'egg';
export default (app: egg.Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
}
