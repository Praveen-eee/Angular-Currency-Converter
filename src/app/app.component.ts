import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrencyConvo';
  num!:number;
  res?:number;
  sub(val1:string,val2:string){
    //INR
    if(val1=="inr" && val2=="usd"){
      this.res=this.num*0.012;
    }
    else if(val1=="inr" && val2=="eur"){
      this.res=this.num*0.013;
    }
    else if(val1=="inr" && val2=="aud"){
      this.res=this.num*0.019;
    }
// USD
    else if(val1=="usd" && val2=="inr"){
      this.res=this.num*82.32;
    }
    else if(val1=="usd" && val2=="eur"){
      this.res=this.num*1.03;
    }
    else if(val1=="usd" && val2=="aud"){
      this.res=this.num*1.60;
    }
// EURO
    else if(val1=="eur" && val2=="inr"){
      this.res=this.num*79.82;
    }
    else if(val1=="eur" && val2=="usd"){
      this.res=this.num*0.97;
    }
    else if(val1=="eur" && val2=="aud"){
      this.res=this.num*1.55;
    }
// AUD
    else if(val1=="aud" && val2=="inr"){
      this.res=this.num*51.69;
    }
    else if(val1=="aud" && val2=="usd"){
      this.res=this.num*0.63;
    }
    else if(val1=="aud" && val2=="eur"){
      this.res=this.num*0.65;
    }
    else if((val1=="inr" && val2=="inr")||(val1=="usd" && val2=="usd")||(val1=="eur" && val2=="eur")||(val1=="aud" && val2=="aud"))
    {
      this.res=this.num;
    }
  }

}
