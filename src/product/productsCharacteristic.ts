import { Prop } from "@nestjs/mongoose";

export class ProductCharacteristic {
	@Prop()
	name: string;

	@Prop()
	value: string;
}