import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-artformpage',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent {
  
  
  constructor(private router:Router,private hero:HeroService) {}
  artform=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage'])
  }
}
