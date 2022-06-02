import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {
  socialLinks = [{
    name:"facebook",
    url:"https://learn.mindspark.in/Teacher/facebook.35112334cbd1866db8a0.svg"
  },
  {
    name:"blog",
    url:"https://learn.mindspark.in/Teacher/blogger.494e1b6662eedf8c3a2b.svg"
  },
  {
    name:"twitter",
    url:"https://learn.mindspark.in/Teacher/twitter.b843b53edb00c2e10375.svg"
  },
  {
    name:"youtube",
    url:"https://learn.mindspark.in/Teacher/youtube.df3dae69461101ff22ec.svg"
  },{
    name:"linkedin",
    url:"	https://learn.mindspark.in/Teacher/linkedin.0e1cb2535f08038b7f46.svg"
  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
