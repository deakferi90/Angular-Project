import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Import any other shared components, directives, or pipes here

@NgModule({
  declarations: [
    // Declare any shared components, directives, or pipes here
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Add any other modules that you need (e.g., FormsModule, ReactiveFormsModule, etc.)
  ],
  exports: [
    CommonModule,
    // Export any shared components, directives, or pipes here to make them available in other modules
  ],
})
export class SharedModule {}
