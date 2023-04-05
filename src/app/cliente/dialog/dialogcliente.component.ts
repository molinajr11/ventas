import { ApiClienteService } from './../../services/api-cliente.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ICliente } from 'src/app/models/cliente';


@Component({
  templateUrl: 'dialogcliente.component.html',
})
export class DialogClienteComponent {
  public nombre!: string;
  constructor(
    public dialogRef: MatDialogRef<DialogClienteComponent>,
    public apiCliente: ApiClienteService,
    public snackBar: MatSnackBar
  ) {}

  close(){
    this.dialogRef.close();
  }

  addCliente(){
    const cliente: ICliente = {
      nombre: 'pascal',
      clienteId: ''
    };
    this.apiCliente.addClientes(cliente).subscribe(response=>{
      if(response.exito == 1){
        this.dialogRef.close();
        this.snackBar.open('cliente save','',{
          duration:3000
        });
      }
    });
  }
}

