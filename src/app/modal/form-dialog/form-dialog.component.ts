import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MyService } from '../../my.service';
import { FormPagoComponent } from '../form-pago/form-pago.component';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})


export class FormDialogComponent implements OnInit {
  usuarioselecinado: any;
  dadoscartao;
  dadosselecionado: any;

   cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ];
// funcao para mascara no valor do input
  q: any;

  maskSearch(event) {

    if (event.keyCode == 8 && this.q != "") {
      this.q = "";
    }

    if (this.q == undefined) {
      this.q ="";
    }

    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
      console.log('Um numero')

      this.q = this.q + event.key;
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1');
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      console.log(this.q)
    }
  }
   maskSearchDown(event) {
     event.preventDefault();
   }

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent, FormPagoComponent>,
    public dialog: MatDialog,
    private myService: MyService
  ) { }
    // captura usuários do outro componente
  ngOnInit(): void {
    console.log(this.myService.getUsuarioselecionado());
    this.usuarioselecinado = this.myService.getUsuarioselecionado()
  }

  enviarPosts() {
    //console.log(this.myService.adicionarProduto());
    //this.usuarioselecinado = +this.cards;
    console.log(this.dadoscartao)
    this.myService.adicionarProduto(this.dadoscartao);


  }

  // botão modal de form-pago
  //   enviarDados(item) {

  //     this.myService.setUsuarioselecionado(item);
  //      const dialogRef = this.dialog.open(FormPagoComponent, {
  //       width: '60%',
  //       height: '40%',
  //   });
  // }
}

