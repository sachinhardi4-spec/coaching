import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5 text-white">
      <h1 class="mb-4 fw-bold" style="background: linear-gradient(to right, #c084fc, #f9a8d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Admin Portal
      </h1>
      
      <div class="mb-4">
        <button class="btn me-3" 
                [class.btn-primary]="activeTab === 'upload'"
                [class.btn-outline-light]="activeTab !== 'upload'"
                (click)="activeTab = 'upload'">
          Upload Videos
        </button>
        <button class="btn" 
                [class.btn-primary]="activeTab === 'enquiries'"
                [class.btn-outline-light]="activeTab !== 'enquiries'"
                (click)="activeTab = 'enquiries'; loadEnquiries()">
          Manage Enquiries
        </button>
      </div>
      
      <!-- Upload Tab -->
      <div *ngIf="activeTab === 'upload'" class="card border-0" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(219, 39, 119, 0.6)); border: 1px solid rgba(168, 85, 247, 0.3) !important;">
        <div class="card-body p-4">
          <h2 class="h4 mb-4">Upload Video</h2>
          
          <div class="mb-3">
            <label class="form-label text-white-50 fw-semibold">Video Title</label>
            <input type="text" class="form-control custom-input" [(ngModel)]="videoTitle">
          </div>
          
          <div class="mb-3">
            <label class="form-label text-white-50 fw-semibold">Video File</label>
            <input type="file" class="form-control custom-input" accept="video/*" (change)="onFileSelected($event)">
          </div>
          
          <button class="btn btn-primary" [disabled]="uploading || !videoTitle || !videoFile" (click)="uploadVideo()">
            <i class="bi bi-upload me-2"></i>
            {{uploading ? 'Uploading...' : 'Upload Video'}}
          </button>
          
          <div class="mt-4">
            <h3 class="h5 mb-3">Uploaded Videos</h3>
            <div class="list-group">
              <div *ngFor="let video of videos" class="list-group-item d-flex align-items-center" style="background: rgba(30, 41, 59, 0.5); border-color: rgba(168, 85, 247, 0.2);">
                <i class="bi bi-play-circle me-3" style="color: #c084fc; font-size: 1.5rem;"></i>
                <div>
                  <h6 class="mb-0 text-white">{{video.title}}</h6>
                  <small class="text-white-50">{{video.date | date}}</small>
                </div>
              </div>
              <div *ngIf="videos.length === 0" class="text-white-50">No videos uploaded yet.</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enquiries Tab -->
      <div *ngIf="activeTab === 'enquiries'" class="card border-0" style="background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(219, 39, 119, 0.6)); border: 1px solid rgba(168, 85, 247, 0.3) !important;">
        <div class="card-body p-4">
          <h2 class="h4 mb-4">Student Enquiries</h2>
          
          <div class="row g-3">
            <div class="col-12" *ngFor="let enquiry of enquiries">
              <div class="card border-0" style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(168, 85, 247, 0.2) !important;">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <small class="text-white-50 d-block">Name</small>
                      <strong class="text-white">{{enquiry.name}}</strong>
                    </div>
                    <div class="col-md-6 mb-3">
                      <small class="text-white-50 d-block">Course</small>
                      <strong class="text-white">{{enquiry.course}}</strong>
                    </div>
                    <div class="col-md-6 mb-3">
                      <small class="text-white-50 d-block">Email</small>
                      <strong class="text-white">{{enquiry.email}}</strong>
                    </div>
                    <div class="col-md-6 mb-3">
                      <small class="text-white-50 d-block">Phone</small>
                      <strong class="text-white">{{enquiry.phone}}</strong>
                    </div>
                  </div>
                  <small style="color: #c084fc;">Submitted: {{enquiry.date | date:'medium'}}</small>
                </div>
              </div>
            </div>
            <div *ngIf="enquiries.length === 0" class="text-white-50">No enquiries yet.</div>
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
    }
    .btn-primary {
      background: linear-gradient(to right, #9333ea, #db2777);
      border: none;
    }
  `]
})
export class AdminComponent implements OnInit {
  activeTab = 'upload';
  videoTitle = '';
  videoFile: File | null = null;
  uploading = false;
  videos: any[] = [];
  enquiries: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadVideos();
  }

  onFileSelected(event: any) {
    this.videoFile = event.target.files[0];
  }

  async uploadVideo() {
    if (!this.videoFile || !this.videoTitle) return;
    
    this.uploading = true;
    await this.firebaseService.uploadVideo(this.videoFile, this.videoTitle);
    this.uploading = false;
    this.videoTitle = '';
    this.videoFile = null;
    this.loadVideos();
  }

  async loadVideos() {
    this.videos = await this.firebaseService.getVideos();
  }

  async loadEnquiries() {
    this.enquiries = await this.firebaseService.getEnquiries();
  }
}
