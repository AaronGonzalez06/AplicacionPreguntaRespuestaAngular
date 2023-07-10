import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass'],
  providers: [CookieService,PreguntasService]
})
export class JuegoComponent implements OnInit {

  public respuestas: any;
  public pregunta:string;
  public preguntas:any;
  public preguntaActual:number;
  public resultados: any[];
  public categoria: string;
  public dificultad: string;
  public aciertos:number;
  public nombreCategoria: string;



  constructor(
    private _cookieService: CookieService,
    private _preguntasService: PreguntasService
  ){
    this.pregunta = '';
    this.preguntaActual = 0;
    this.resultados = [];
    this.categoria = '';
    this.dificultad = '';
    this.aciertos = 0;
    this.nombreCategoria = '';
  }

  ngOnInit(): any {
    let opciones = JSON.parse(this._cookieService.get('opciones'));
    let idCategoria = JSON.parse(opciones.categoria);
    this.nombreCategoria = idCategoria.categoria
    this.inicio(idCategoria.id,opciones.dificultad);
  }

  inicio(categoria:string,dificultad:string){
    this._preguntasService.show(categoria,dificultad).subscribe(
      response => {
        console.log(response.results);
        //guardo las diez preguntas
        this.preguntas =response.results;
        this.respuestas = this.preguntas[this.preguntaActual].incorrect_answers;
        this.respuestas.push(this.preguntas[this.preguntaActual].correct_answer);
        this.respuestas.sort(function() { return Math.random() - 0.5 });
        this.pregunta = this.preguntas[this.preguntaActual].question;
      },
      error => {
      console.log("🚀 ~ file: juego.component.ts:31 ~ JuegoComponent ~ inicio ~ error:", error)

      }
    );
  }

  responder(respuesta:string){

    if(respuesta == this.preguntas[this.preguntaActual].correct_answer){
      this.aciertos++;
    }

      let datos: object = { "seleccion": respuesta, "correcta": this.preguntas[this.preguntaActual].correct_answer, "pregunta": this.preguntas[this.preguntaActual].question };
      this.resultados.push(datos);
      console.log("🚀 ~ file: juego.component.ts:74 ~ JuegoComponent ~ responder ~ this.resultados:", this.resultados)

      //hacer siguiente pregunta
      if(this.preguntaActual == 9){
        this.preguntaActual++;
        let opciones = JSON.parse(this._cookieService.get("opciones"));

        this.resultados[0]
        console.log("🚀 ~ file: juego.component.ts:75 ~ JuegoComponent ~ responder ~ this.resultados[0]:", this.resultados[0].pregunta)


        this.categoria = opciones.categoria;
        this.dificultad = opciones.dificultad;

      }else{
        this.preguntaActual++;
        this.respuestas = this.preguntas[this.preguntaActual].incorrect_answers;
        this.respuestas.push(this.preguntas[this.preguntaActual].correct_answer);
        this.respuestas.sort(function() { return Math.random() - 0.5 });
        this.pregunta = this.preguntas[this.preguntaActual].question;
      }
  }
}
