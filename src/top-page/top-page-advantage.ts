import { Prop } from "@nestjs/mongoose";

export class TopPageAdvantage {
    @Prop()
    title: string;
    @Prop()
    description: string;
}