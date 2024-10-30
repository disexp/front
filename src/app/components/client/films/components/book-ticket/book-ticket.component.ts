import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Film } from 'src/app/core/models/film.model';
import { Showtime } from '../../../../../core/models/showtime.model';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { Customer } from '../../../../../core/models/user-profile.model';
import { TicketService } from 'src/app/core/services/ticket/ticket.service';
import { Ticket } from 'src/app/core/models/ticket.model';

const userResult = localStorage.getItem('userResult');

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {

  empOfferForm: FormGroup;
  FilmProfile!: Film;
  ShowtimeProfile!: Showtime;
  count = 0;
  totalPrice = 0;
  ticket : Ticket = {
    showtime: {
      id: 0,
    },
    customer: {
      id: 0,
    },
  }
  
  constructor(
    private _fb: FormBuilder,
    //Para cerrar el modulo
    private _dialogRef: MatDialogRef<BookTicketComponent>,
    private _servMoviesProfile: FilmsProfileService,
    private _servTicket: TicketService,
    //Para recibir la data
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.empOfferForm = this._fb.group({
    })
  }

  ngOnInit(): void {
  }
  onFormSubmit(){
  }

  getCustomerId(){
      if (userResult !== null) {
      const parsedResult = JSON.parse(userResult);
      return parsedResult;      
    } 
  }

  postTicket(){
    this.ticket.customer!.id = this.getCustomerId().id;
    this.ticket.showtime!.id = this.data.id;
    this.ticket.numberSeats = this.count;
    this.ticket.totalPrice = this.totalPrice;

    this._servTicket.addTicket(this.ticket).subscribe((res) => {
      //console.log(res);
      this._dialogRef.close();
    }, (err) => { console.log(err); }
    );
  }

  getShowtimeDetails(){
    this._servMoviesProfile.getShowtimebyId(this.data.id).subscribe((res) => {
      this.ShowtimeProfile = res;
      //console.log(this.ShowtimeProfile);
    }, (err) => { console.log(err); }
    );
  }

  increment() {
    if (this.count < 10){
      this.count++;
      this.getTotalPrice();
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.getTotalPrice();
    }
  }

  getTotalPrice(){
    this.totalPrice = this.count * this.data.price;
  }

}
