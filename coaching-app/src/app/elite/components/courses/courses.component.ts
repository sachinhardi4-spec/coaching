import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  name: string;
  duration: string;
  students: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container py-5">
      <h2 class="display-5 fw-bold text-center mb-5" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Our Courses
      </h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3" *ngFor="let course of courses">
          <div class="card h-100 border-0 hover-card" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(219, 39, 119, 0.6)); border: 1px solid rgba(168, 85, 247, 0.3) !important; transition: all 0.3s;">
            <div class="card-body p-4">
              <i class="bi bi-book" style="font-size: 2.5rem; color: #c084fc;"></i>
              <h3 class="h5 fw-bold text-white mt-3 mb-3">{{course.name}}</h3>
              <p class="text-white-50 mb-2">Duration: {{course.duration}}</p>
              <p class="small" style="color: #d8b4fe;">{{course.students}} students enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hover-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3) !important;
      border-color: rgba(168, 85, 247, 0.6) !important;
    }
  `]
})
export class CoursesComponent {
  courses: Course[] = [
    { name: 'IIT-JEE Advanced', duration: '2 Years', students: '500+' },
    { name: 'NEET Preparation', duration: '2 Years', students: '400+' },
    { name: 'Foundation Course', duration: '1 Year', students: '300+' },
    { name: 'Crash Course', duration: '6 Months', students: '200+' }
  ];
}
