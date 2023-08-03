import { RecentBooksService } from "../../services/recentBooksService";

export default function (recentBooksService: RecentBooksService) {
  const operations = {
    GET,
  };

  function GET(req: any, res: any, next: any) {
    res.status(200).json(recentBooksService.getRecentBooks());
  }

  GET.apiDoc = {
    operationId: "recentBooks",
    summary: "Get a list of the most recently published books",
    responses: {
      "200": {
        description: "200 response",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
      },
    },
  };

  return operations;
}
