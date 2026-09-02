/* QUESTION = For a given array with prices of 5 items → [250, 645, 300, 900, 50]  
All items have an offer of 10% OFF on them.
Change the array to store the final price after applying the offer.*/

 let price = [250, 645, 300, 900, 50];
 for(let i = 0; i<price.length;i++){
    dis = price[i]/10
    price[i] -= dis;

    
 }

 console.log(price);

