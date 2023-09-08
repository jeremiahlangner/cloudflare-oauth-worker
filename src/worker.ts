/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Environment, FetchParams } from './types';

function handler(params: Partial<FetchParams>) {

}

function loginPageResponse() {
}

function acceptPageResponse() {
}

function redirectCodeResponse() {
}

function tokenExchange() {
}

// Export a default object containing event handlers
export default {
  // The fetch handler is invoked when this worker receives a HTTP(S) request
  // and should return a Response (optionally wrapped in a Promise)
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);

    const paths = [
      '/authorize',
      '/code',
      '/token',
      '/login',
      '/resource'
    ];
    if (url.pathname.includes('/authorize')) {
    
    }

    return handler({ request, env, ctx });
  },
};
