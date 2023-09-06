import { Prop, buildSchema } from "@typegoose/typegoose";

export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserSchema = buildSchema(User);
