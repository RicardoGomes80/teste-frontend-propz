import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/produtos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})



export class CarrouselComponent implements OnInit{ 

  produtos: Array<any> = new Array();
  
  constructor(private produtosService: ProdutosService){}

  ngOnInit(): void {
    this.listarProdutos();
    
    
  }

  listarProdutos(){
      this.produtosService.listarProdutos().subscribe(produtos => {
        this.produtos = produtos;
      },err =>{
        console.log('Erro ao listar os produtos' , err);
      })
  }
  customOptions: OwlOptions = {
   loop: true,
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 600,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 2
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   nav: true
 }
}