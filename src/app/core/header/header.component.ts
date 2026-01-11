import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [SharedModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() SideNavToggle = new EventEmitter();

  constructor(){}

  openSidenav() {
    this.SideNavToggle.emit();
  }
}
