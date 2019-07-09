const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const path = require('path');
const utils = require('./utils');
const app = new Koa();

let posts = [];
const postsFile = path.join(__dirname, './posts.json');
const flightsFile = path.join(__dirname, './flights.json');

app.use(cors({
  origin: '*'
}));
app.use(logger());
app.use(koaBody());
app.use(router.routes());

router.get('/', list)
  .get('/flights/:id', getFlights)
  .get('/post/:id', show)
  .post('/post', create);


function list(ctx) {
  ctx.body = { posts: posts };
}

async function getFlights(ctx) {
  const uid = ctx.params.id
  const flights = await utils.readJSON(flightsFile);
  let res = "no data";
  for (let i = 0; i < flights.length; i ++) {
    if (flights[i].id === uid) {
      res = flights[i];
      break;
    }
  }
  ctx.body = res;
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  ctx.body = { post: post };
}

async function create(ctx) {
  const post = ctx.request.body;
  post.created_at = new Date();
  post.id = posts.length;
  try {
    const data = await utils.writeJSON(postsFile, posts.concat([post]));
    posts.push(post);
    ctx.body = data;
  } catch(err) {
    console.error(err);
    ctx.body = err;
  }
}

app.listen(8000, 'localhost', async () => {
  const data = await utils.readJSON(postsFile);
  posts = data;
});