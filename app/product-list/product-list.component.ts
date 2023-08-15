import { Component, ElementRef, ViewChild } from '@angular/core';
import IProduct from './products';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
})
export class ProductListComponent {
  filterValue: string = '';
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = 'Unfortenately its not subscribing';
  sub!: Subscription;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter() {
    const inputValue = this.inputElement.nativeElement.value;
    this.filteredProducts = this.products.filter((product) => {
      return product.productName.toLowerCase().includes(inputValue);
    });
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err: string) => (this.errorMessage = err),
    });
  }

  handleSort() {
    this.filteredProducts.sort((a, b) => {
      if (a.productName > b.productName) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  handleSortReverse() {
    this.filteredProducts.sort((a, b) => {
      if (a.productName < b.productName) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  sortByCode() {
    this.filteredProducts.sort((a, b) => {
      if (a.productCode > b.productCode) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  sortByCodeReverse() {
    this.filteredProducts.sort((a, b) => {
      if (a.productCode < b.productCode) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  sortByDate() {
    this.filteredProducts.sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  }

  sortByDateReverse() {
    this.filteredProducts.sort(
      (a, b) =>
        new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
    );
  }

  sortByPrice() {
    this.filteredProducts.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  sortByPriceReverse() {
    this.filteredProducts.sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
