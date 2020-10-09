import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component'

@Component({
  selector: 'app-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.css']
})
export class FormPagoComponent implements OnInit {

  constructor(
    public dialogRefs: MatDialogRef<FormPagoComponent>
  ) { }

  ngOnInit(): void {
  }

}
