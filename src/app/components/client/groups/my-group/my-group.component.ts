import { Component } from '@angular/core';
import { Group } from 'src/app/core/models/group.model';
import { GroupService } from 'src/app/core/services/groups/group.service';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent {

  groups:Group[]=[]
  groupsCopy:Group[]=[]

  imageUrl = 'https://cinescopia.com/wp-content/uploads/2011/02/Posters-cine.jpg'; // URL de la imagen por defecto

  constructor(private groupService:GroupService) {
    this.groupService.getGroups().subscribe(res=>{
      this.groups=res;
      this.groupsCopy=res;
      console.log(this.groups)
    })
  }


}
