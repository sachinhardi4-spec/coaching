import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutSectionComponent, CoursesComponent, TestimonialsComponent, FooterComponent],
  template: `
    <app-hero-section></app-hero-section>
    <app-about-section></app-about-section>
    <app-courses></app-courses>
    <app-testimonials></app-testimonials>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
