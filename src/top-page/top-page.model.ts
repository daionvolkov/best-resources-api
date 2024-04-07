import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from 'mongoose';
import { HHData } from "./HHData";

import { TopPageAdvantage } from "./top-page-advantage";


export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export type TopPageModelDocument = HydratedDocument<TopPageModel>;

@Schema({ timestamps: true })
export class TopPageModel extends Document {
  @Prop({ required: true, unique: true })
  _id: string;

  @Prop({enum: TopLevelCategory})
  firstCategory: TopLevelCategory;
  @Prop()
  secondCategory: string;
  
  @Prop({unique: true})
  alias: string;
  
  
  @Prop()
  title: string;
  @Prop()
  category: string;
  @Prop({type: () => HHData})
  hh?: HHData;

  @Prop({type: () => [TopPageAdvantage]})
  advantages: TopPageAdvantage[]

  @Prop()
  seoText?: string;
  
  @Prop()
  tagsTitle: string;
  
  @Prop({type: ()=> [String]})
  tags: string[];
}


export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);