import { Environment, FetchParams } from './types';
import { Router } from 'simple-worker-router';

function handler(params: Partial<FetchParams>) {}

function authorize() {}

export default {
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);

    const router = new Router([
      ['/authorize', authorize],
      ['/code', authorize],
      ['/token', authorize],
      ['/login', authorize],
      ['/resource', authorize],
    ]);

    return handler({ request, env, ctx });
  },
};
