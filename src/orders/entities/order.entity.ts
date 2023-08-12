import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => String)
  id: string;

  @Field(() => String)
  externalId: string;

  @Field(() => String)
  externalOrderNumber: string;

  @Field(() => String)
  orderNumber: string;

  @Field(() => String)
  status: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  externalUserId: string;

  @Field(() => [Item])
  itens: Item[];
}

@ObjectType() 
  export class Item {
    @Field(() => String)
    id: string;
    
    @Field(() => String)
    externalId: string;
    
    @Field(() => [Image])
    images: Image[]
}

@ObjectType()
export class Image {
  @Field(() => String)
  item: string;

  @Field(() => String)
  url: string;
}