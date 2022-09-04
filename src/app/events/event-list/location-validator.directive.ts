import { Directive } from "@angular/core";
import { FormGroup, Validators , NG_VALIDATORS} from "@angular/forms";

@Directive({ 
    selector:'[validateLocation]',
    providers:[
        {provide:NG_VALIDATORS, useExisting : LocationValidator , multi:true}
    ]
})

export class LocationValidator implements Validators {

    validate(formGroup:FormGroup): { [key:string]: any } | null {

        let addressControl = formGroup.controls["address"];
        let cityControl = formGroup.controls["city"];
        let countryControl = formGroup.controls["country"];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls["onlineUrl"];

        const physicAddressFilled : boolean = addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value ;
        const onlineUrlFilled : boolean = onlineUrlControl && onlineUrlControl.value
        
        if(physicAddressFilled || onlineUrlFilled){

            return null;
        }
        else{
            return {validateLocation : false}
        }
    }
}