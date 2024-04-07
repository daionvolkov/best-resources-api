import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from 'mongoose';



export type UserModelDocument = HydratedDocument<UserModel>;

@Schema({ timestamps: true })
export class UserModel extends Document {
  @Prop({ required: true, unique: true })
  _id: string;
  
  @Prop({unique: true})
  email: string;

  @Prop()
  passwordHash: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;


}

export const UserModelSchema = SchemaFactory.createForClass(UserModel);