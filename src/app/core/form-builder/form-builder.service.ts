import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FormBuilderService {

  constructor(private fb: FormBuilder) { }

  public buildOrderForm(): FormGroup {
    const userGroup = this.fb.group({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.email),
      'phone': new FormControl(''),
      'memo': new FormControl('')
    })

    const vydraSet = this.fb.group({
      'isSetVydra': new FormControl(false),
      'vydraSet': new FormControl(0)
    })

    const palavaSet = this.fb.group({
      'isSetPalava': new FormControl(false),
      'palavaSet': new FormControl(0)
    });

    const itemsGroup = this.fb.group({
      'isItems': new FormControl(false),
      'cVydra': new FormControl(0),
      'cPalava': new FormControl(0),
      'paddle': new FormControl(0),
      'vest': new FormControl(0),
      'kidsVest': new FormControl(0),
      'barrel': new FormControl(0),
      'chain': new FormControl(0),
    });

    const tripGroup = this.fb.group({
      startDate: new FormControl(''),
      startTime: new FormControl(''),
      startFrom: new FormControl(''),
      endDate: new FormControl(''),
      endTime: new FormControl(''),
      endThere: new FormControl('') 
    });

    return this.fb.group({
      userGroup,
      vydraSet,
      palavaSet,
      itemsGroup,
      tripGroup
    });
  }
}
