import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="container py-5 text-center text-white">
      <div class="py-5">
        <h1 class="display-3 fw-bold mb-4" style="background: linear-gradient(to right, #c084fc, #f9a8d4, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Transform Your Future
        </h1>
        <p class="lead mb-5" style="color: #c4b5fd; max-width: 700px; margin: 0 auto;">
          Premier coaching institute dedicated to excellence in IIT-JEE and NEET preparation
        </p>
        <button class="btn btn-lg fw-semibold px-5 py-3" style="background: linear-gradient(to right, #9333ea, #db2777); color: white; border: none;">
          Start Your Journey →
        </button>
      </div>
    </section>
  `
})
export class HeroSectionComponent {}
