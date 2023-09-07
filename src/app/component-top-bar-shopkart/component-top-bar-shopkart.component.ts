import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-top-bar-shopkart',
  templateUrl: './component-top-bar-shopkart.component.html',
  styleUrls: ['./component-top-bar-shopkart.component.css']
})
export class ComponentTopBarShopkartComponent implements OnInit {
  isMenuOpen = false; // Track the menu state

  constructor() { }

  ngOnInit(): void {
  }

  // Function to toggle the menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Define your menu items here
  navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' }
      ]
    },
    { name: 'Contact Us', id: 'contact' }
  ];
}





// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-component-top-bar-shopkart',
//   templateUrl: './component-top-bar-shopkart.component.html',
//   styleUrls: ['./component-top-bar-shopkart.component.css']
// })
// export class ComponentTopBarShopkartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   navbar = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     {
//       name: 'Our Products',
//       id: 'product',
//       child: [
//         { name: 'Product 1', id: 'p1' },
//         { name: 'Product 2', id: 'p2' },
//         { name: 'Product 3', id: 'p3' },
//         { name: 'Product 4', id: 'p4' }
//       ]
//     },
//     { name: 'Contact Us', id: 'contact' }
//   ];
  
// }
