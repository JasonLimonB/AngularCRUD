import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../../services/blog/blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataBlog = [];

  constructor(
    private _titleBlog: BlogserviceService
  ) { }

  ngOnInit(): void {
    this.dataBlog = this._titleBlog.getTitleBlog();
  }

}
