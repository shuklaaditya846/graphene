import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary modules


@Component({
  selector: 'app-component-bottom',
  templateUrl: './component-bottom.component.html',
  styleUrls: ['./component-bottom.component.css']
})
export class ComponentBottomComponent implements OnInit {
  myForm: FormGroup; // Define a FormGroup variable

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form and define validation rules
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Form is valid, proceed here
      console.log('Form submitted:', this.myForm.value);
    } else {
      // Form is invalid, handle errors or show messages
    }
  }
  
}
