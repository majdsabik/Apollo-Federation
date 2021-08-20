import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Cart {
  @Field(() => String)
  id: string;

  @Field()
  customerId: string;

  @Field(() => Int)
  version: number;
}
