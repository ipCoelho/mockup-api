const Koa = require('koa'), Router = require('koa-router');

const app = new Koa();
const router = new Router();

let users = [
    { name: 'Israel', email: 'israel@gmail.com', lastname: "Coelho", password: "123" },
    { name: 'Kaylane', email: 'kaylane@gmail.com', lastname: "Guarino", password: "123" },
    { name: 'Elias', email: 'elias@gmail.com', lastname: "Oliveira", password: "123" },
    { name: 'Melissa', email: 'melissa@gmail.com', lastname: "Melo", password: "123" }
];

const porta = 3030;
const endpoint = "user/:id";

router.get(endpoint, ctx => {
    ctx.body = users[ctx.params.id];
});

app
    .use(router.allowedMethods())
    .use(router.routes())
    .use(require('koa-body')())

app.listen(porta);

console.log("Servidor rodando na porta "+porta+", endpoint disponivel em: 'localhost:"+porta+"/"+endpoint+"'");