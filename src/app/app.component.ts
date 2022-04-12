import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { RandomIdService } from './random-id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private randomIdService: RandomIdService) {
}
  public userFormGroup:FormGroup =  new FormGroup({
  name: new FormControl('',Validators.minLength(4)),
  price: new FormControl('',[Validators.required, Validators.min(1)]),
  id: new FormControl(this.randomIdService.makeid()),
  categories: new FormControl([]),
})
  public onClickButton(): void {
  this.userFormGroup.get('id').setValue(this.randomIdService.makeid());
}
public  onSubmitButton():void{
  if (this.userFormGroup.invalid){
    alert("Form is invalid");
    return;
  }
console.log(this.userFormGroup.value)
}
}


