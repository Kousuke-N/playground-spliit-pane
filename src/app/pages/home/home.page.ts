import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public menuService: MenuService, public menuCtrl: MenuController) {

  }

  ngOnInit() {
  }

  onSplitPaneChange(e){
    this.menuService.setIsHomeTabMenuOpen(e.detail?.visible);
  }
}
