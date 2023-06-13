import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.scss']
})
export class ProdutosListarComponent implements OnInit{
  produtos: Array<any> = new Array();
  
  constructor(private produtosService: ProdutosService){}

  ngOnInit(): void {
    this.listarProdutos();
    
  }

  listarProdutos(){
      
  }
}
