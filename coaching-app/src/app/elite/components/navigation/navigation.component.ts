import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top border-bottom" style="background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(12px); border-color: rgba(168, 85, 247, 0.2);">
      <div class="container">
        <a class="navbar-brand fw-bold fs-3" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Elite Academy
        </a>
        <button class="navbar-toggler" type="button" (click)="mobileMenuOpen = !mobileMenuOpen">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="mobileMenuOpen">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link px-4 py-2 rounded" 
                 [class.active]="currentPage === 'home'"
                 (click)="changePage('home')" 
                 style="cursor: pointer;">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4 py-2 rounded" 
                 [class.active]="currentPage === 'enquiry'"
                 (click)="changePage('enquiry')" 
                 style="cursor: pointer;">
                Enquiry
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4 py-2 rounded" 
                 [class.active]="currentPage === 'admin'"
                 (click)="changePage('admin')" 
                 style="cursor: pointer;">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      color: #c4b5fd !important;
      transition: all 0.3s;
    }
    .nav-link:hover {
      color: white !important;
    }
    .nav-link.active {
      background: linear-gradient(to right, #9333ea, #db2777) !important;
      color: white !important;
    }
  `]
})
export class NavigationComponent implements OnInit {
  @Output() pageChange = new EventEmitter<string>();
  currentPage = 'home';
  mobileMenuOpen = false;

  changePage(page: string) {
    this.currentPage = page;
    this.mobileMenuOpen = false;
    this.pageChange.emit(page);
  }

  ngOnInit() {
    // emit initial page so parent can sync and show default view
    this.pageChange.emit(this.currentPage);
  }
}
