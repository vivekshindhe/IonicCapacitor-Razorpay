import { Component } from '@angular/core';
import { Checkout } from 'capacitor-razorpay';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async payWithRazorpay(){
    var options = {
      description: 'You care for health, we care for quality',
      image: 'https://admin.medicapp.in/app_logo.jpeg',
      currency: 'INR',
      key:'rzp_test_KKhCX5R4KaGUPW',
      amount:"100",
      name: 'Digital Healthcare',
      prefill: {
        email: "a@a.com",
        contact: 8888888888,
      },
      theme: {
        color: '#4bd1bb'
      }
    };
    console.log("Payload :: ");
    console.log(JSON.stringify (options));
      
      
    // const options = {
    //   key: 'rzp_live_ILgsfZCZoFIKMb', // Your api key
    //   amount: '100',
    //   description: 'Great offers',
    //   image: 'https://i.imgur.com/3g7nmJC.png',
    //   currency: 'INR',
    //   name: 'Acme Corp',
    //   prefill: {
    //     email: 'gaurav.kumar@example.com',
    //     contact: '9191919191'
    //   },
    //   theme: {
    //     color: '#3399cc'
    //   }
    // };
    try {
      let data = (await Checkout.open(options));
      console.log(data.response);
      alert(JSON.stringify(data.response));

    } catch (error) {
      console.log(JSON.stringify(error))

      let respObj = JSON.parse(error.code)
      alert(JSON.stringify(error))
      if(respObj.metadata['payment_id'] !== undefined){
        console.log(`${respObj.metadata['payment_id']}: METADATA`);
      }
     
    // }
  }
}

}
