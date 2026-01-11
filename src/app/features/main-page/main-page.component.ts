import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../core/sidenav/sidenav.component';
import { HeaderComponent } from '../../core/header/header.component';
import { BreadcrumpComponent } from '../../core/breadcrump/breadcrump.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [SharedModule,CommonModule,SidenavComponent,HeaderComponent,BreadcrumpComponent,RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
