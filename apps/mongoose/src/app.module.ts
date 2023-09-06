import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DB_CONFIG } from "./config/db.config";
import { TypegooseModule } from "@haorama/nestjs-tg";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [DB_CONFIG] }),
    TypegooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get("db");
        console.log(dbConfig);
        return dbConfig;
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
