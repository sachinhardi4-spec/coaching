import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  course: string;
  text: string;
  rank: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5" style="background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(12px);">
      <div class="container">
        <h2 class="display-5 fw-bold text-center mb-5" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Success Stories
        </h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let testimonial of testimonials">
            <div class="card h-100 border-0" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(219, 39, 119, 0.4)); border: 1px solid rgba(168, 85, 247, 0.2) !important;">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style="width: 50px; height: 50px; background: linear-gradient(135deg, #9333ea, #db2777); color: white; font-size: 1.5rem;">
                    {{testimonial.name.charAt(0)}}
                  </div>
                  <div class="ms-3">
                    <h5 class="mb-0 text-white fw-bold">{{testimonial.name}}</h5>
                    <p class="small mb-0" style="color: #d8b4fe;">{{testimonial.rank}}</p>
                  </div>
                </div>
                <p class="text-white fst-italic mb-3">"{{testimonial.text}}"</p>
                <p class="small mb-0" style="color: #c084fc;">{{testimonial.course}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { name: 'Rahul Sharma', course: 'IIT-JEE', text: 'Exceptional teaching methodology and personalized attention helped me secure AIR 147.', rank: 'AIR 147' },
    { name: 'Priya Singh', course: 'NEET', text: 'The faculty here transformed my preparation strategy. Highly recommended!', rank: 'AIR 89' },
    { name: 'Arjun Patel', course: 'IIT-JEE', text: 'Best decision of my academic journey. The support system is unparalleled.', rank: 'AIR 203' }
  ];
}
