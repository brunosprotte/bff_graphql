import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { AuthorsService } from '../authors/authors.service';

@Module({
  providers: [PostsResolver, PostsService, AuthorsService],
})
export class PostsModule {}
