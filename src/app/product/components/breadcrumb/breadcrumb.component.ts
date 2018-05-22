import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs;
  breadcrumbMenu: string[] = ['Home'];
  constructor() { }

  ngOnInit() {
    this.breadcrumbs=this.breadcrumbMenu.concat(this.breadcrumbs)

   // console.log(this.breadcrumbs);
    console.log(this.breadcrumbMenu);
    
  }

}
