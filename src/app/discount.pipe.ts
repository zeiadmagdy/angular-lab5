import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    const discount = Math.floor((price * discountPercentage) / 1000);
    return price - discount;
  }
}
