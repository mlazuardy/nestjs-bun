import { TypegooseModule } from "@haorama/nestjs-tg";
import { Module } from "@nestjs/common";
import { User, UserSchema } from "./user.model";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        model: User,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
