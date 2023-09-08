type Environment = {
  CODES: any;
  TOKENS: any;
  USERS: any;
}

type FetchParams = {
  request: Request;
  env: Environment;
  ctx: any;
}

export { Environment, FetchParams };
