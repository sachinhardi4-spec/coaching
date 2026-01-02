import { bootstrapApplication } from '@angular/platform-browser';
import { EliteAppComponent } from './app/elite/app.component';

bootstrapApplication(EliteAppComponent)
  .catch(err => console.error(err));
