import { Component, OnInit } from '@angular/core';
// import { Cinephile } from 'src/app/core/models/cinephile.model';
import { CinephileProfileService } from '../../../../core/services/auth/cinephile/cinephile-profile.service';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';

const userResult = localStorage.getItem('userResult');

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  perfil: Person | null = null;
  searchQuery = '';
  groups!: Group;
  constructor(private personService: PersonService, private groupService: GroupService, private route: ActivatedRoute) {
    /* this.groups={} as Group; */
  }

  ngOnInit(): void {

    const id = this.getPersonId().id;
/* 
    this.personService.getPersonById(id).subscribe((resp:any) => {
 
    }) */

    this.perfil = this.getPersonId();
    console.log(this.perfil);
    
/*     if (id && typeof id === 'number'){
    this.groupService.getGroupByPersonId(id).subscribe((resp:any) => {
      this.groups = resp;
    })
  } */
  }

  getPersonId(){
    if (userResult !== null) {
    const parsedResult = JSON.parse(userResult);
    return parsedResult;      
  } 
}
}

//import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import { Person } from 'src/app/core/models/person.model';
//import { Person } from 'src/app/core/models/person.model';
//import { PersonService } from 'src/app/core/services/auth/user/person.service';
//import { PersonService } from 'src/app/core/services/auth/user/person.service';

//
//@Component({
//@Component({
  //selector: 'app-view',
//  selector: 'app-view',
  //templateUrl: './view.component.html',
//  templateUrl: './view.component.html',
// styleUrls: ['./view.component.scss']
//)
//xport class ViewComponent implements OnInit  {
// perfil: Person[] = [];
// searchQuery = '';
// constructor(private PersonService: PersonService) {}
//
// ngOnInit(): void {
//
//   this.PersonService.getPersons().subscribe((response) => {
//     this.perfil = response;
//   });
// }
//
//



