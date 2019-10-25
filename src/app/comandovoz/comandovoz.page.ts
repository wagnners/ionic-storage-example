import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-comandovoz',
  templateUrl: './comandovoz.page.html',
  styleUrls: ['./comandovoz.page.scss'],
})
export class ComandovozPage implements OnInit {
   textoaserfalado: string ='Olá mundo!';
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar(){
    this.tts.speak({
      text: this.textoaserfalado,
      locale: 'pt-BR',
      rate: 0.75,

    }).then(()=>{
      alert("Falou com sucesso");
    })
    .catch((erro:any)=>{
      alert(erro);
    })
  }



}
