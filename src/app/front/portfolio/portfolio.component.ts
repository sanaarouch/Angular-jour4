import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../../service/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios ;
  constructor(service : PortfolioService) {
    this.portfolios = service.getData();
   }

  ngOnInit(): void {
  }

}

