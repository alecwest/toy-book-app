import { OpenAPIV3 } from "openapi-types";

const apiDoc: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "Toy Book API",
    version: "1.0.0",
  },
  paths: {},
  security: [
    {
      api_key: [],
    },
  ],
  components: {
    schemas: {
      Book: {
        allOf: [
          {
            $ref: "#/components/schemas/NewBook",
          },
        ],
      },
      NewBook: {
        type: "object",
        required: ["title", "isbn"],
        properties: {
          id: {
            type: "string",
          },
          title: {
            type: "string",
          },
          author: {
            type: "string",
          },
          isbn: {
            type: "string",
          },
          genre: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
export default apiDoc;
