import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfileModule } from './user-profile/user-profile.module';
import * as connectionOptions from './database/ormconfig';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGigsModule } from './user-gigs/user-gigs.module';
import { SkillModule } from './skill/skill.module';
import { UserSkillModule } from './user-skill/user-skill.module';
import { GigsProfileModule } from './gigs-profile/gigs-profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserProfileModule,
    UserGigsModule,
    SkillModule,
    UserSkillModule,
    GigsProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
