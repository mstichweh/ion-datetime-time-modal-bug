import { Component, ViewChild } from '@angular/core';
import { DatetimeCustomEvent, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal)
  public modal: IonModal;

  public timeValue = '10:30';

  constructor() {}

  public async openModal(): Promise<void> {
    await this.modal.present();
  }

  public onChange(e: Event): void {
    this.timeValue = (e as DatetimeCustomEvent).detail.value;
  }
}
