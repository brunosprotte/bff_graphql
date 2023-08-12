import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';
import { OrderClient } from './client/order/order.client';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    PostsModule,
    AuthorsModule,
    OrdersModule
  ],
  
})

export class AppModule {}
