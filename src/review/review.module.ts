import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel, ReviewModelSchema } from './review.model';
import { ReviewService } from './review.service';

@Module({
  providers: [ReviewService],
  imports: [
    MongooseModule.forFeature([
    {name: ReviewModel.name, schema: ReviewModelSchema},

  ])
],
})
export class ReviewModule { }