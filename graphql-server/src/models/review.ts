import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Review {
  @Field((type) => ID, { name: "id" })
  reviewId: string;

  @Field((type) => ID)
  bookId: string;

  @Field((type) => ID)
  userId: string;

  @Field({ nullable: true })
  content: string;

  @Field()
  rating: number;
}
