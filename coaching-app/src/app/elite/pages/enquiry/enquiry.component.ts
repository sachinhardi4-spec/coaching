import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div *ngIf="!submitted" class="card border-0" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(219, 39, 119, 0.6)); border: 1px solid rgba(168, 85, 247, 0.3) !important;">
            <div class="card-body p-5">
              <h2 class="text-center mb-4 fw-bold" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Enquiry Form
              </h2>
              
              <div class="mb-3">
                <label class="form-label text-white-50 fw-semibold">Full Name</label>
                <input type="text" class="form-control custom-input" [(ngModel)]="formData.name" required>
              </div>
              
              <div class="mb-3">
                <label class="form-label text-white-50 fw-semibold">Email</label>
                <input type="email" class="form-control custom-input" [(ngModel)]="formData.email" required>
              </div>
              
              <div class="mb-3">
                <label class="form-label text-white-50 fw-semibold">Phone Number</label>
                <input type="tel" class="form-control custom-input" [(ngModel)]="formData.phone" pattern="[0-9]{10}" required>
              </div>
              
              <div class="mb-4">
                <label class="form-label text-white-50 fw-semibold">Course Interested</label>
                <select class="form-select custom-input" [(ngModel)]="formData.course" required>
                  <option value="">Select a course</option>
                  <option *ngFor="let course of courses" [value]="course">{{course}}</option>
                </select>
              </div>
              
              <button class="btn btn-lg w-100 fw-semibold" 
                      [disabled]="loading"
                      (click)="submitForm()"
                      style="background: linear-gradient(to right, #9333ea, #db2777); color: white; border: none;">
                {{loading ? 'Submitting...' : 'Submit Enquiry'}}
              </button>
            </div>
          </div>
          
          <div *ngIf="submitted" class="card border-0 text-center" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(219, 39, 119, 0.6)); border: 1px solid rgba(168, 85, 247, 0.3) !important;">
            <div class="card-body p-5">
              <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                   style="width: 80px; height: 80px; background: #22c55e;">
                <i class="bi bi-check-lg" style="font-size: 3rem; color: white;"></i>
              </div>
              <h2 class="fw-bold text-white mb-3">Thank You!</h2>
              <p class="text-white-50">We've received your enquiry and will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .custom-input {
      background: rgba(30, 41, 59, 0.5) !important;
      border: 1px solid rgba(168, 85, 247, 0.3) !important;
      color: white !important;
    }
    .custom-input:focus {
      border-color: #c084fc !important;
      box-shadow: 0 0 0 0.25rem rgba(192, 132, 252, 0.25) !important;
      background: rgba(30, 41, 59, 0.7) !important;
    }
    .custom-input::placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  `]
})
export class EnquiryComponent {
  @Output() backToHome = new EventEmitter<void>();
  
  formData = { name: '', email: '', phone: '', course: '' };
  submitted = false;
  loading = false;
  courses = ['IIT-JEE Advanced', 'NEET Preparation', 'Foundation Course', 'Crash Course'];

  constructor(private firebaseService: FirebaseService) {}

  async submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.course) {
      return;
    }
    
    this.loading = true;
    await this.firebaseService.saveEnquiry(this.formData);
    this.loading = false;
    this.submitted = true;
    
    setTimeout(() => {
      this.backToHome.emit();
    }, 2000);
  }
}
