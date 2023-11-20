import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { Veiculo } from '../../models/Veiculo';
import { Modelo } from 'src/app/models/Modelo';
import { ModelosService } from 'src/app/services/modelos.service';
import { Observer} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent implements OnInit {

  formulario: any;
  tituloFormulario: string = '';
  listamodelos: Array<Modelo> | undefined;
  


  constructor(private veiculosService : VeiculosService, 
    private modelosService : ModelosService,
    private router: Router) { }


    
  ngOnInit(): void {

    this.tituloFormulario = 'Cadastro Veiculo';

    this.modelosService.listar().subscribe(modelos => {
      console.log(modelos);
      this.listamodelos = modelos;
      if (this.listamodelos && this.listamodelos.length > 0) {
        this.formulario.get('_idModelo')?.setValue(this.listamodelos[0]._idModelo);
      }
    });
    
    this.formulario = new FormGroup({
      
      _Placa: new FormControl(null, [Validators.required]),
      _Cor: new FormControl(null, [Validators.required]),
      _idModelo: new FormControl(null)
      
    })
  }

    enviarFormulario(): void {
      const veiculo: Veiculo = this.formulario.value;
      console.log(veiculo);
      const observer: Observer<Veiculo> = {
        next(_result): void {
          alert('Veiculo salvo com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    
    if (veiculo._Placa && !isNaN (Number(veiculo._Placa))){
      this.veiculosService.alterar(veiculo).subscribe(observer);
      setTimeout(()=> this.router.navigate(["/servico"]), 3000)
    }else{
      this.veiculosService.cadastrar(veiculo).subscribe(observer);
      setTimeout(()=> this.router.navigate(["/servico"]), 3000)
    }
  }
}
