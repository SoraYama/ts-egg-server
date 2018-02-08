import { EggApplication } from "egg";

export default (options: any, app: EggApplication) => {
  return async function robotMiddleware(ctx: Egg.Context, next: Function) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source))
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go Away, robot.';
    } else {
      await next();
    }
  }
};
