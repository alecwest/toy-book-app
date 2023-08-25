import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Book {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  isbn10: string;

  @Field()
  isbn13: string;

  @Field((type) => [String])
  genre: string[];
}
