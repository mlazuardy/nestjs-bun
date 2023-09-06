import { InjectModel } from "@haorama/nestjs-tg";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { User } from "./user.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { faker } from "@faker-js/faker";

@Injectable()
export class UserService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: ModelType<User>) {}

  async onModuleInit() {
    await this.userModel.deleteMany({});
    const users = faker.helpers.uniqueArray<any>(
      () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      }),
      50
    );

    await this.userModel.insertMany(users);
  }

  find() {
    return this.userModel.find();
  }
}
