import Koa from 'koa';

const app = new Koa();

const PORT = process.env.PORT || "8082";
const server = app.listen(PORT, () => {
    console.log(`\n\n\n Node Server running at http://localhost:${PORT}.\n\n\n`);
});