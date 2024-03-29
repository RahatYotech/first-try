import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  title = 'first-component';
}
