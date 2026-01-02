import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-4 text-center" style="background: #0f172a; border-top: 1px solid rgba(168, 85, 247, 0.2);">
      <div class="container">
        <p class="mb-3" style="color: #d8b4fe;">&copy; 2024 Elite Academy. All rights reserved.</p>
        <div class="d-flex justify-content-center gap-4">
          <i class="bi bi-envelope" style="color: #d8b4fe; font-size: 1.25rem;"></i>
          <i class="bi bi-telephone" style="color: #d8b4fe; font-size: 1.25rem;"></i>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
