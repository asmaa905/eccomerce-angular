import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: IProduct; // Receive data from parent
}
