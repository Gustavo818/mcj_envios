
import { Component } from '@angular/core';
import { Dato } from './../../interfaces/dato'; 


@Component({
  selector: 'app-origen-lista',
  templateUrl: './origen-lista.component.html',
  styleUrl: './origen-lista.component.css'
})
export class OrigenListaComponent {



  datos: Dato[] = [
    { codigo: '001', fecha: '2024-03-12', producto: 'Producto A' },
    { codigo: '002', fecha: '2024-03-12', producto: 'Producto B' },
    { codigo: '003', fecha: '2024-03-12', producto: 'Producto C' },
    { codigo: '004', fecha: '2024-03-12', producto: 'Producto D' },
    { codigo: '005', fecha: '2024-03-12', producto: 'Producto E' },
    { codigo: '006', fecha: '2024-03-12', producto: 'Producto F' },
    { codigo: '007', fecha: '2024-03-12', producto: 'Producto G' },
    // ... más datos ...
  ];

  public actualizarTabla(): void {


    this.limpiarColoresFilas();
    
    const tablaBody = document.getElementById('form2')?.getElementsByTagName('tbody')[0];
    const totalRegistros = document.getElementById('totalRegistros');

    // Verificar si los elementos existen
    if (!tablaBody || !totalRegistros) {
      return;
    }

    // Limpiar el cuerpo de la tabla
    tablaBody.innerHTML = '';

    

    // Llenar la tabla con datos
    for (let i = 0; i < this.datos.length; i++) {
      const fila = tablaBody.insertRow(i);
      const celdaNo = fila.insertCell(0);
      const celdaCodigo = fila.insertCell(1);
      const celdaFecha = fila.insertCell(2);
      const celdaProducto = fila.insertCell(3);

      // Configurar el número de fila y los datos
      celdaNo.textContent = String(i + 1);
      celdaCodigo.textContent = this.datos[i].codigo;
      celdaFecha.textContent = this.datos[i].fecha;
      celdaProducto.textContent = this.datos[i].producto;
    }

    // Actualizar el total de registros en el footer
    totalRegistros.textContent = `Total registros: ${this.datos.length}`;

    this.aplicarColoresFilas();
  }


  private limpiarColoresFilas(): void {
    const filas = document.querySelectorAll('tr[data-index]');
    filas.forEach((fila) => {
      fila.classList.remove('even-row', 'odd-row');
    });
  }

  private aplicarColoresFilas(): void {
    const filas = document.querySelectorAll('tr[data-index]');
    filas.forEach((fila, index) => {
      fila.classList.add(index % 2 === 0 ? 'even-row' : 'odd-row');
    });
  }

}
