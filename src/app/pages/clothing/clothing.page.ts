import { Component, OnInit } from '@angular/core';
import { Clothing } from '@core/models/clothing.model';
import { ClothingService } from '@core/services/clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss']
})
export class ClothingPage implements OnInit {
  public clothes: Clothing[] = [];

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.clothingService.getClothing().subscribe((response) => {
      this.clothes = response.data;
    });
  }
}
