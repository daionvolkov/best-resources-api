import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ReviewModelDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
	@Prop({ required: true, unique: true })
	_id: string;
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: number;
	@Prop()
	createdAt?: Date;
	@Prop()
	productId: Types.ObjectId;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);

// export interface ReviewModel extends Base { }
// export class ReviewModel extends TimeStamps {
// 	@prop()
// 	name: string;

// 	@prop()
// 	title: string;

// 	@prop()
// 	description: string;

// 	@prop()
// 	rating: number;

// 	@prop()
// 	productId: Types.ObjectId;
// }