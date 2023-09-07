import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-component-middle',
  templateUrl: './component-middle.component.html',
  styleUrls: ['./component-middle.component.css']
})
export class ComponentMiddleComponent implements OnInit {

  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  filteredProducts: any[] = []; // Add this line

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    // Set "All Products" as the default selected category
    this.selectedCategory = 'All Products';
  
    // Fetch categories from your service
    this.categoryService.getCategories().subscribe((data: string[]) => {
      this.categories = ['All Products', ...data]; // Add "All Products" as the first option
    });
  
    // Fetch products from your service
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
  
      // Initially, display all products
      this.filteredProducts = this.products;
    });
  }
  


  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProductsByCategory(category); // Call the filter method
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category; // Update selectedCategory

    if (category === 'All Products') {
      // Display all products when "All Products" is selected
      this.filteredProducts = this.products;
    } else {
      // Filter products based on the selected category
      this.filteredProducts = this.products.filter((product) => product.category === category);
    }
  }

}
