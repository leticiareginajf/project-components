import { Component } from '@angular/core';


interface IPlano {
  infos : IInfos;
}

interface IInfos {
  tipo : string;
  preco : number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  //@ts-ignore
  plano : IPlano = {
    infos : {

      tipo : 'Simples',
      preco : 100,

    }
    //undefined,
    //preco : 100
  };

  /*plano = {
    //@ts-ignore
    //tipo :'Simples',
    //preco : 100,

    /*infos : {
      tipo : 'Simples',
      preco : 100
    }
  }*/


  //tipo = 'Simples';
  //preco = 100;

  /*getFullPrice () {
    setTimeout(()=> {

      console.log('Set Timeout');
      this.tipo = 'Simples';

    }, 4000);

    return 'R$' + this.preco + ',00/Mês'

  }*/

}
