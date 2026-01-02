import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5" style="background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(12px);">
      <div class="container">
        <h2 class="display-5 fw-bold text-center mb-5" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          About Elite Academy
        </h2>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p class="lead text-white-50 mb-4">
              With over 15 years of excellence in competitive exam preparation, Elite Academy stands as a beacon of quality education. Our meticulously designed curriculum and experienced faculty have guided thousands of students to achieve their dreams.
            </p>
            <p class="lead text-white-50">
              We combine traditional teaching wisdom with modern pedagogical techniques, ensuring each student receives personalized attention and comprehensive support throughout their preparation journey.
            </p>
          </div>
        </div>
        
        <div class="row mt-5 g-4">
          <div class="col-md-4" *ngFor="let stat of stats">
            <div class="card h-100 text-center border-0" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(219, 39, 119, 0.4)); border: 1px solid rgba(168, 85, 247, 0.2) !important;">
              <div class="card-body p-4">
                <div class="mb-3">
                  <i [class]="stat.icon" style="font-size: 3rem; color: #c084fc;"></i>
                </div>
                <h3 class="display-6 fw-bold text-white">{{stat.value}}</h3>
                <p class="text-white-50">{{stat.label}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  stats = [
    { icon: 'bi bi-trophy', value: '15+ Years', label: 'Of Excellence' },
    { icon: 'bi bi-people', value: '5000+', label: 'Success Stories' },
    { icon: 'bi bi-book', value: '98%', label: 'Success Rate' }
  ];
}
