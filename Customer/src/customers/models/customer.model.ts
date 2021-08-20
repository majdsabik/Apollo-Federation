import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Customer {
  @Field(() => String)
  @Directive('@external')
  id: string;
}
