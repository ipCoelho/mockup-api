// @ts-check
// Core packages.
import { Context, Next } from 'koa';
import Koa from 'koa';
import Router from 'koa-router';
// Middlewares | Features.
import KoaBody from 'koa-body';

// Instances.
const KoaApplication = new Koa();
const router = new Router();

// App configuration.
KoaApplication
    .use(router.allowedMethods())    
    .use(router.routes())
    .use(KoaBody({ multipart: true }));

// Port that the App will listen.
KoaApplication.listen(3000, "localhost");

// ---------------------------------------------------
// **DATEBASE**
// Array of Objects, to simulate the datebase.
let users: Array<Object> = [
    { name: 'Israel',   password: '123',    lastname: 'Coelho',     email: 'israel@gmail.com',   },
    { name: 'Kaylane',  password: '123',    lastname: 'Guarino',    email: 'kaylane@gmail.com',  },
    { name: 'Elias',    password: '123',    lastname: 'Oliveira',   email: 'elias@gmail.com',    },
    { name: 'Melissa',  password: '123',    lastname: 'Melo',       email: 'melissa@gmail.com',  }
];
// ---------------------------------------------------
// Functions.
async function ExportUsers(ctx: Context, next: Next) {
    ctx.body = users[ctx.params.id];

    await next();
}
// ---------------------------------------------------
// **ROUTES**
router.get('getting-users', '/users/:id', ExportUsers);
console.log("Route '/users/:id' is available on port 3000");





