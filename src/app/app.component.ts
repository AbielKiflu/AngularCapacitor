import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestCameraComponent } from  './test-camera/test-camera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestCameraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCapacitor';
}
