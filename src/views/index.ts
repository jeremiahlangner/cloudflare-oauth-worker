export function Index(params: any) {
  const { request } = params;

  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  </body>
</html>
  `;

  return new Response(
    template, { 
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    }
  );
}
