import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { AdminComponent } from './pages/admin/admin.component';

@Component({
  selector: 'elite-root',
  standalone: true,
  imports: [CommonModule, NavigationComponent, HomeComponent, EnquiryComponent, AdminComponent],
  template: `
    <div class="min-vh-100 bg-gradient">
      <app-navigation (pageChange)="currentPage = $event"></app-navigation>
      
      <app-home *ngIf="currentPage === 'home'"></app-home>
      <app-enquiry *ngIf="currentPage === 'enquiry'" (backToHome)="currentPage = 'home'"></app-enquiry>
      <app-admin *ngIf="currentPage === 'admin'"></app-admin>
    </div>
  `,
  styles: [`
    .bg-gradient {
      background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
      min-height: 100vh;
    }
  `]
})
export class EliteAppComponent {
  currentPage = 'home';
}
