import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isHomeTabMenuOpen = false;

  constructor() { }

  public setIsHomeTabMenuOpen(f: boolean){
    this.isHomeTabMenuOpen = f;
  }
  public getIsHomeTabMenuOpen() {
    return this.isHomeTabMenuOpen;
  }
}
