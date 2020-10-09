import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyService {
  usuarioselecionado: any;


  public getUsuarioselecionado (){
    return this.usuarioselecionado;
  }

  public setUsuarioselecionado (avaliable){
    this.usuarioselecionado = avaliable;
  }

  private apiurl = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

  private apipost = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  constructor(private http: HttpClient) { }
  showToday(){
    return new Date();
  }

  getDados() {
    return this.http.get(this.apiurl)
  }

  adicionarProduto(cards) {
    //var cards = { card_number : "", cvv: "", expiry_date: "" };

    this.http.post( this.apipost , cards)
      .subscribe(
          resultado => {
            console.log(resultado)
          },
          erro => {
            if(erro.status == 400) {
              console.log(erro);
            }
          }
      );
  }

}
