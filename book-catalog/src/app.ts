import express from "express";
import { initialize } from "express-openapi";
import { RecentBooksService as V1RecentBooksService } from "./api-v1/services/recentBooksService";
import { AllBooksService as V1AllBooksService } from "./api-v1/services/allBooksService";
import v1ApiDoc from "./api-v1/api-doc";
import { serve, setup } from "swagger-ui-express";
import path from "path";

const app = express();
initialize({
  app,
  apiDoc: v1ApiDoc,
  paths: path.resolve(__dirname, "./api-v1/paths"),
  dependencies: {
    recentBooksService: new V1RecentBooksService(),
    allBooksService: new V1AllBooksService(),
  },
});

app.listen(3000, () => {
  console.log("App started");
});

app.use(
  "/api-documentation",
  serve,
  setup(undefined, {
    swaggerOptions: {
      url: "http://localhost:3000/api-docs",
    },
  })
);
