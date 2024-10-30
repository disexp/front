import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {COMMA, ENTER, P} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';

export interface Topic {
  name: string;
}

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {

  //Stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private http:GroupService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  //Chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  topics: Topic[] = [{name: 'Anime'}, {name: 'Action'}, {name: 'Adventure'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our topic
    if (value) {
      this.topics.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(topic: Topic): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  edit(topic: Topic, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove topic if it no longer has a name
    if (!value) {
      this.remove(topic);
      return;
    }

    // Edit existing topic
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics[index].name = value;
    }
  }

  submit(){

    const groups=this.http.getGroups
    const secondCtrlValue = this.secondFormGroup.get('secondCtrl')?.value as string[] | undefined;

    const data: Group = {
      id: groups.length,
      ubication: this.firstFormGroup.get('firstCtrl')?.value as string,
      topics: secondCtrlValue ?? [],
      name: this.thirdFormGroup.get('thirdCtrl')?.value as string,
      description: this.fourthFormGroup.get('fourthCtrl')?.value as string
    };


    this.http.addGroup(data);
}



}
