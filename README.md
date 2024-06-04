This repo demonstrates a toy version of an "auth" middleware that makes sure you have the `name`  
cookie before allowing you to make it to the home route (`/`).

If you do not, it will redirect you to the login route (`/login`) and allow you to use a React Server Action to add the
`name` cookie value.
