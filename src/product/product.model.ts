import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ProductCharacteristic } from "./productsCharacteristic";



export type ProductModelDocument = HydratedDocument<ProductModel>;

@Schema()
export class ProductModel {
  @Prop({ required: true, unique: true })
  _id: string;
  
  @Prop()
  image: string;
  
  @Prop()
  title: string;
  
  @Prop()
  price: number;
  
  @Prop()
  oldPrice: number;
  
  @Prop()
  credit: number;
  
  @Prop()
  calculatedRating: number;
  
  @Prop()
  description: string;
  
  @Prop()
  advantages: string;
  
  @Prop()
  disAdvantages?: string;
  
  @Prop({ type: () => [String] })
  categories: string[];

  @Prop({ type: () => [String] })
  tags: string[];
  
  @Prop({ type: () => [ProductCharacteristic], _id: false })
  characteristics: {
    characteristics: ProductCharacteristic[];
  };
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);