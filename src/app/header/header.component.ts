import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  num:number = 1;
  title: string = "記載著 Will 在網路世界的學習心得與技術分享";
  titleURL: string = "http://blog.miniasp.com/";
  titleSize:number = 32;
  constructor() {}
  ngOnInit() {
  }
  changeTitle(){
    this.title += ' !';
    this.titleSize ++;
  }
}
