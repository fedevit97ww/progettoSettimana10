import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarrelloService } from 'src/app/service/carrello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  constructor(private carrelloSrv:CarrelloService, private router: Router ) { }

  checkout = new FormGroup({
  nome : new FormControl(''),
  indirizzo : new FormControl('')
  });

  prodotti = this.carrelloSrv.getItems()

  ngOnInit(): void {
  }

  svuotaCart(){
    this.carrelloSrv.clearCart()
  }

  removeItem(id:number){
    this.carrelloSrv.remove(id)
  }
  onSubmit(){
    if(this.checkout.value.nome == 0 || this.checkout.value.indirizzo == 0){
      alert('Compila tutti i campi!')
    }else{
    this.carrelloSrv.clearCart()
    console.log(this.checkout.value)
    alert('Grazie per l\'acquisto '+this.checkout.value.nome+ '!')
    this.router.navigate([''])
    }
  }
}
