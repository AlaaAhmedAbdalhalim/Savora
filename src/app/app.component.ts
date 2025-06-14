import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StoryComponent } from "./components/story/story.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Savora';
}
