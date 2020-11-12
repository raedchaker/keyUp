import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  path: string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPath();
  }
  
  getPath(){
    this.route.url.subscribe(res=>{
      this.path = res[0].path;
    })
  }

}
