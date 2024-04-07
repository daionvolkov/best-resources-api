import { Prop } from "@nestjs/mongoose";

export class HHData {
    @Prop()
    count: number;
    @Prop()
    juniorSalary: number;
    @Prop()
    middleSalary: number;
    
    @Prop()
    seniorSalary: number;
  
  }