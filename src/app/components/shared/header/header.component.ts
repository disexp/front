import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  id: string | null = '';

  constructor(private router: Router,
     private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    //this.router.navigate(['/dashboard/cineclubs']);
    const user= JSON.parse(localStorage.getItem('userResult') || '{}');
    this.id = user?.id;
  }
  //links = ['Explorar', 'Peliculas', 'Cineclubs', 'Promociones', 'Mis grupos'];
  links = ['Peliculas', 'Cineclubs', 'Mis grupos'];
  activeLink = this.links[2];
  
  perfil (){
    this.router.navigate(['perfil']);
  }



}
