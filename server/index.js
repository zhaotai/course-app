const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const app = new Koa();

const posts = [];

app.use(cors({
  origin: '*'
}));
app.use(logger());
app.use(koaBody());

router.get('/', list)
  .get('/post/:id', show)
  .post('/post', create);

app.use(router.routes());

function list(ctx) {
  ctx.body = { posts: posts };
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  ctx.body = { post: post };
}

async function create(ctx) {
  const post = ctx.request.body;
  const id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  ctx.body = post;
}

app.listen(8000);