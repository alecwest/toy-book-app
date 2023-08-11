import { AllBooksService } from "../../services/allBooksService";

export default function (allBooksService: AllBooksService) {
  const operations = {
    GET,
  };

  function GET(req: any, res: any, next: any) {
    res.status(200).json(allBooksService.getAllBooks());
  }

  GET.apiDoc = {
    operationId: "allBooks",
    summary: "Get a list of all books",
    responses: {
      "200": {
        description: "200 response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                books: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Book",
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return operations;
}
