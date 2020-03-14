import { Component, OnInit } from '@angular/core';
import { HttpClient }  from "@angular/common/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  api = "https://jsonplaceholder.typicode.com/posts"; 
  articles ;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    // il faut le faire dans la méthode  ngOnInit()
    this.http.get(this.api)
      .subscribe( (res : Response)  => {
        this.articles = res
      })
  }

}