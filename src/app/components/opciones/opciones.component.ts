import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.sass'],
  providers: [CookieService]
})
export class OpcionesComponent {

  public categoria: string;
  public dificultad: string;
  constructor(
    private _router: Router,
    private _cookieSevice: CookieService
  ){
    this.categoria = '{"id":10,"categoria":"Books"}';
    this.dificultad = "easy";
  }

  empezar(){
    if(this.categoria == "" || this.dificultad == ""){
        alert("Faltan campos.");
    }else{

      let opciones = {
        "categoria" : this.categoria,
        "dificultad" : this.dificultad
      };

      if(this._cookieSevice.get("opciones")){
        this._cookieSevice.delete("opciones");
        this._cookieSevice.set("opciones",JSON.stringify(opciones));
        this._router.navigate(['/Juego']);

      }else{
        this._cookieSevice.set("opciones",JSON.stringify(opciones));
        this._router.navigate(['/Juego']);
      }
      
    }
  }

}
