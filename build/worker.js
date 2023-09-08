"use strict";
(() => {
  // src/worker.ts
  function handler(params) {
  }
  function authorize() {
  }
  var worker_default = {
    async fetch(request, env, ctx) {
      const url = new URL(request.url);
      const router = new (void 0)([
        ["/authorize", authorize],
        ["/code", authorize],
        ["/token", authorize],
        ["/login", authorize],
        ["/resource", authorize]
      ]);
      return handler({ request, env, ctx });
    }
  };
})();
