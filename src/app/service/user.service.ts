import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient, private router:Router){}
  
  login(data:any){
    this.http.post("http://localhost:3000/api/v1/notes",data).subscribe((result:any)=>{
      console.warn(result);
      localStorage.setItem("token",result.token);
      this.router.navigate(['/dash'])
    })
  }
}
