import { Injectable } from '@angular/core';
/* Services */
import { ApiService } from './api/api.service';
/* Rxjs */
import { Observable } from 'rxjs';
/* Models */
import { ClothingResponse } from '@core/models/clothing.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ClothingService extends ApiService {
  getClothing(): Observable<ClothingResponse> {
    return this.get<ClothingResponse>(`${environment.clothingApi}/clothing`);
  }
}