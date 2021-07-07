/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class Product {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly category: string;
  @IsNotEmpty()
  readonly description: string;
  @IsNotEmpty()
  readonly foto: string;
  @IsNotEmpty()
  readonly price: number;
}
