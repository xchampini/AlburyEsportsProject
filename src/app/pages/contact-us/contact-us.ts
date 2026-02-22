import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  protected readonly isSubmitting = signal(false);
  protected readonly isSubmitted = signal(false);

  protected readonly contactForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  protected submitForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.isSubmitted.set(false);

    setTimeout(() => {
      console.log('Contact form payload', this.contactForm.value);
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.contactForm.reset();
    }, 900);
  }
}
