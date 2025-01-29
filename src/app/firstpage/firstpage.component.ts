import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  imports: [],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent {
  constructor(private router:Router){}
  gotosecondpage(name:string){
this.router.navigate(['/secondpage',name])
  }
}
