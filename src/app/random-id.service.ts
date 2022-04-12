import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomIdService {

  constructor() { }

  public makeid = () => {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    for( var i=0; i < 9; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));


    return text;
  }}

