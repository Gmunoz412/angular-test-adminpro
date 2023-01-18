import { Component, OnInit } from '@angular/core';
import { resolveObjectKey } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
    this.getUsusarios().then(usuarios=>{
      console.log(usuarios)
    })

    // const promesa = new Promise((resolve,reject)=>{
    //   if(true){
    //     resolve('Hola mundo')
    //   }
    //   else{
    //     reject('algo salio mal')
    //   }

    // });
    
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);

    // })
    // .catch(error => console.log('error en mi promesa', error))
  }
getUsusarios(){
  const promesa = new Promise(resolve =>{
    fetch('https://reqres.in/api/users')
    .then(resp => resp.json() )
    .then(body => console.log(body.data))
  });
return promesa;
}
  
}
