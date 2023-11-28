import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrl: './listproduits.component.css'
})
export class ListproduitsComponent {
  constructor(private prserv:ProductsService){}
  produits:Product[]=[]
  columns: string[] = ['imageart','designation','marque','prix'];
ngOnInit(){
  this.loadarticles()
}
loadarticles=()=>{
  this.prserv.getallArticles().subscribe((data:Product[])=>
  this.produits=data)
}

}
