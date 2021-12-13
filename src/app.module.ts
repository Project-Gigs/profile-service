import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as connectionOptions from './database/ormconfig';
import { SkillModule } from './skill/skill.module';
import { UserSkillModule } from './user-skill/user-skill.module';
import { GigsProfileModule } from './gigs-profile/gigs-profile.module';
import { UserGigsModule } from './user-gigs/user-gigs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(connectionOptions),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserProfileModule,
    SkillModule,
    UserSkillModule,
    GigsProfileModule,
    UserGigsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
