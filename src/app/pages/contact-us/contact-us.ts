import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { EmailLinks } from '../../app.const';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  private readonly formBuilder = inject(FormBuilder);
  protected readonly isSubmitting = signal(false);
  protected readonly isSubmitted = signal(false);

  protected readonly emailLink = `mailto:${EmailLinks.AlburyEsportsEmail}?subject=Contact%20Us%20Inquiry`;
  protected readonly contactForm = signal<FormGroup>(this.buildForm());

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  protected submitForm(): void {
    if (this.contactForm().invalid) {
      this.contactForm().markAllAsTouched();
      return;
    }
    // TODO: Implement form submission logic (e.g., send data to backend)
  }
}
