export function Index(params: any) {
  const { request } = params;

  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <script>
      function login() {
        const form = document.getElementById('form_id');
        
        const body = {
          username: form.elements.username.value,
          password: form.elements.password.value
        };
        
        return fetch(
          '',
          {
            body: JSON.stringify({
              username: form.elements.username.value,
              password: form.elements.password.value
            }),
            method: 'POST'
          }
        )
        .then(res => console.log(res))
        .catch(e => console.error(e));
      }
    </script>
  </head>
  <body>
    <form id="form_id" method="post">
      <div>
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required>

        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required>
        
        <button type="submit" onclick="login()">Login</button>
      </div>
    <form>
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
