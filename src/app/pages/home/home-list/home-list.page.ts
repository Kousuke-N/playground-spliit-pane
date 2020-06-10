import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { of, Observable, from } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {
  @Input()
  isMenu = false;

  constructor(public menuCtrl: MenuController, public menuService: MenuService) {
  }

  ngOnInit() {
  }

  get isMenuOpen() {
    return this.menuService.getIsHomeTabMenuOpen();
  }
}
