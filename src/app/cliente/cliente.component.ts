import { ApiClienteService } from './../services/api-cliente.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '../models/response';
import { DialogClienteComponent } from './dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  public lst: any[] = [];
  public columnas: string[] = ['id', 'nombre'];
  constructor(
    private clienteService: ApiClienteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((response) => {
      this.lst = response.data;
    });
  }

  openAdd() {
    const dialogref = this.dialog.open(DialogClienteComponent, {
      width: '300',
    });
    dialogref.afterClosed().subscribe((result) => this.getClientes());
  }
}
