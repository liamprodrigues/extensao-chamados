import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario = '';

  computador = '';

  titulo = '';

  observacao = '';

  historico = JSON.parse(
    localStorage.getItem('historico') || '[]'
  );

  salvar(status: string) {

    if (
      !this.usuario.trim() ||
      !this.computador.trim()
    ) {
      alert('Preencha usuário e computador');
      return;
    }

    if (!this.titulo.trim()) {
      alert('Digite um título');
      return;
    }

    localStorage.setItem(
      'usuario',
      this.usuario
    );

    localStorage.setItem(
      'computador',
      this.computador
    );

    const item = {

      titulo: this.titulo,

      observacao: this.observacao,

      status,

      usuario: this.usuario,

      computador: this.computador,

      data: new Date().toLocaleString()
    };

    this.historico.unshift(item);

    localStorage.setItem(
      'historico',
      JSON.stringify(this.historico)
    );

    this.titulo = '';

    this.observacao = '';
  }
}