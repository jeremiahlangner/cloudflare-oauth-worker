import { Environment } from './types';
import { Router } from 'simple-worker-router';

function authorize() {}

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ['/authorize', authorize],
      ['/code', authorize],
      ['/token', authorize],
      ['/login', authorize],
      ['/resource', authorize],
    ]);
    return router.handle({ request, env, ctx });
  },
};
