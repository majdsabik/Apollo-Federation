import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Cart } from './cart.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Customer {
  @Field(() => String)
  @Directive('@external')
  id: string;

  @Field(() => Cart)
  cart?: Cart;
}
