import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(private readonly elementRef: ElementRef) {}

  public async openModal(): Promise<void> {
    await this.modal.present();
  }

  public onChange(e: Event): void {
    this.timeValue = (e as DatetimeCustomEvent).detail.value;
    console.log(`Entered time: ${this.timeValue}`);
  }

  public setFocus(): void {
    this.getInputElement()?.focus();
  }

  public setBlur(): void {
    this.getInputElement()?.blur();
  }

  public onClosePopup(): void {
    this.setFocused(false);
  }

  private async setFocused(focused: boolean): Promise<void> {
    // Do not change focus, if just the popup opens and gains the focus
    // if (!focused && this.popupOpened) {
    //   return;
    // }
    // if (this.focusedValue === focused) {
    //   return;
    // }
    // this.focusedValue = focused;
    // // Mark as touch, when looses the focus the first time
    // if (!this.touchedValue && !this.focusedValue) {
    //   this.touchedValue = true;
    //   this.onTouched();
    //   this.propagateStateStyleClasses();
    // }
    // if (this.focusedValue && !this.popupOpened) {
    //   this.popupOpened = true;
    //   await this.popup?.present();
    // }
    // this.changedState();
  }

  private getInputElement(): HTMLInputElement {
    return this.elementRef.nativeElement.querySelector('input.value-holder');
  }
}
