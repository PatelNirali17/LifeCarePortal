import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterModule, UrlSegment } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrump',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './breadcrump.component.html',
  styleUrl: './breadcrump.component.scss'
})
export class BreadcrumpComponent {
 public breadcrumbs: {
    name: string;
    url: string
  }[] = [];
  constructor(public router: Router, public activatedRoute: ActivatedRoute,public title:Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
      }
    })
  }

  ngOnInit(): void {
  }

  private parseRoute(node: ActivatedRouteSnapshot) { 
    if (node.data['breadcrumb']) {
        if(node.url.length){
            let urlSegments: UrlSegment[] = [];
            node.pathFromRoot.forEach(routerState => {
                urlSegments = urlSegments.concat(routerState.url);
            });
            let url = urlSegments.map(urlSegment => {
                return urlSegment.path;
            }).join('/');
            this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '/' + url
            }) 
        }         
    }
    if (node.firstChild) {
        this.parseRoute(node.firstChild);
    }
}

breadCrumb(){

}
}
