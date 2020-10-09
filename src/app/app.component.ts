import { Component } from '@angular/core';
import { MyService } from './my.service';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './modal/form-dialog/form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagamento';

  mostrarlista: boolean = true;
  usuarioselecionado: any;
   public dadosusuarios = [];

   constructor (
    public dialog: MatDialog,
    private myService: MyService) {

  }


  ngOnInit() {
    this.myService.getDados().subscribe((dados => {
      this.dadosusuarios = Array.from(Object.keys(dados), k=>dados[k]);
      console.log(this.dadosusuarios)
    }))
  }

  openDialog(item) {
    this.myService.setUsuarioselecionado(item);
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '60%',
      height: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechado');
    });
   }
}
