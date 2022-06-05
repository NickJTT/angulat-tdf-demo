import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Vue'];
  public user: User = new User('Test', 'test@gmail.com', 1234567890, '', 'Morning', true);
  public isSubmitted: boolean = false;
  public errorMessage: string = '';

  constructor(private readonly enrollmentService: EnrollmentService) {}

  public onSubmit() {
    this.isSubmitted = true;
    this.enrollmentService.enroll(this.user).subscribe(data => console.log(data), error => this.errorMessage = error.statusText);
  }
}
