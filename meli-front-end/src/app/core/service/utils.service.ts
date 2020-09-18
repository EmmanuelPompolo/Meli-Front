import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  setFormatNumber(value: number){
   return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(value);
  }
}
