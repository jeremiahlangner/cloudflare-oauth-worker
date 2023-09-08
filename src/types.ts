type Environment = {
  OAuthClients: KVNamespace;
  OAuthTokens: KVNamespace;
  OAuthCodes: KVNamespace;
  OAuthUsers: KVNamespace;

}

type Params = {
  request: Request;
  env: Environment;
  ctx: any;
}

export { Environment, Params };
