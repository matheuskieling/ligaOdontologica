import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {

  constructor() { }

  openWhatsAppWithMessage(number: string, message: string) {
    let encodedMessage = encodeURI(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`)
  }
}
