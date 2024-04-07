import { IsString, IsNumber, Max, Min, IsDate } from 'class-validator';

export class CreateReviewDto {
    @IsString()
    _id: string;
    @IsString()
    name: string;
    @IsString()
    title: string;
    @IsString()
    description: string;
    
    @Max(5)
    @Min(1)
    @IsNumber()
    rating: number;
    @IsDate()
    createdAt?: Date;
    @IsString()
    productId: string;
}