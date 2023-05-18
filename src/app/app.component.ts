import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueNameValidator } from './unique-name-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name = new FormControl("");

  constructor(private uniqueNameValidator: UniqueNameValidator){ }

  value(){
    console.log(this.name.value);
  }

  validator(){
    console.log(this.name.validator);
  }

  asyncValidator(){
    console.log(this.name.asyncValidator);
  }

  parent(){
    console.log(this.name.parent);
  }

  status(){
    console.log(this.name.status)
  }

  valid(){
    console.log(this.name.valid);
  }

  invalid(){
    console.log(this.name.invalid);
  }

  pending(){
    console.log(this.name.pending);
  }

  disabled(){
    console.log(this.name.disabled);
  }

  enabled(){
    console.log(this.name.enabled);
  }

  pristine(){
    console.log(this.name.pristine);
  }

  dirty(){
    console.log(this.name.dirty);
  }

  touched(){
    console.log(this.name.touched);
  }

  untouched(){
    console.log(this.name.untouched);
  }

  valueChanges(){
    this.name.valueChanges.subscribe((value)=>{
      console.log(value);
    })
  }
  
  statusChanges(){
    this.name.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }

  getUpdateOn(){
    console.log(this.name.updateOn);
  }

  getRoot(){
    console.log(this.name.root);
  }

  addRequiredValidator(){
    this.name.addValidators(Validators.required);
  }

  addUniqueNameAsyncValidator(){
    this.name.addAsyncValidators(this.uniqueNameValidator.validate.
      bind(this.uniqueNameValidator));
  }

  setRequiredValidator(){
    this.name.setValidators(Validators.required);
  }

  setUniqueNameAsyncValidator(){
    this.name.setAsyncValidators(this.uniqueNameValidator.validate.
      bind(this.uniqueNameValidator));
  }

  removeRequiredValidator(){
    this.name.removeValidators(Validators.required);
  }

  removeUniqueNameAsyncValidator(){
    this.name.removeAsyncValidators(this.uniqueNameValidator.validate.
      bind(this.uniqueNameValidator))
  }

  hasRequiredValidator(){
    console.log(this.name.hasValidator(Validators.required))
  }

  hasUniqueNameAsyncValidator(){
    console.log(this.name.hasAsyncValidator(this.uniqueNameValidator.validate.
      bind(this.uniqueNameValidator)))
  }

  clearValidators(){
    this.name.clearValidators();
  }

  clearAsyncValidators(){
    this.name.clearAsyncValidators();
  }

  markAsTouched(){
    this.name.markAsTouched();
  }

  markAsUntouch(){
    this.name.markAsUntouched();
  }

  markAsDirty(){
    this.name.markAsDirty();
  }

  markAsPristine(){
    this.name.markAsPristine();
  }

  markAsPending(){
    this.name.markAsPending();
  }

  disable(){
    this.name.disable();
  }

  enable(){
    this.name.enable();
  }

  setParent(){
    this.name.setParent(new FormGroup({}))
  }

  setValue(){
    this.name.setValue("Juan");
  }

  patchValue(){
    this.name.patchValue("Marcos");
  }

  reset(){
    this.name.reset();
  }

  getRawValue(){
    console.log(this.name.getRawValue());
  }
  
  updateValueAndValidity(){
    this.name.updateValueAndValidity();
  }

  setRequiredError(){
    this.name.setErrors({
      required: true
    })
  }

  getRequiredError(){
    console.log(this.name.getError("required"))
  }

  hasRequiredError(){
    console.log(this.name.hasError("required"));
  }

}
