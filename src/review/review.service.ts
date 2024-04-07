import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel, ReviewModelDocument } from './review.model';

@Injectable()
export class ReviewService {
    constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewModelDocument>) {}

    // async create(dto: CreateReviewDto) {
    //     return this.reviewModel.create(dto);
    // }

    async create(model: CreateReviewDto) {
        const newModel = this.reviewModel.create(model);
        return (await newModel).save();
    }

    async delete(id: string) {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }

    async findByProductId (productId:string) {
        return this.reviewModel.find({ productId: productId }).exec();
    }

    async deleteByProductId(productId: string) {
        return this.reviewModel.deleteMany({productId: new Types.ObjectId(productId) }).exec();
    }
}
