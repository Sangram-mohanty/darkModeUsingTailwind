import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeService } from './services/dark-mode.service';
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CommonModule, ContentComponent, FooterComponent]
})
export class AppComponent {
  title = 'darkModeUsingTailwind';
  darkModeService:DarkModeService =inject(DarkModeService)
}
