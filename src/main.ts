import appFactory from './app';

const app = appFactory();
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
