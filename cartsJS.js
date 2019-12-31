window.onload = function(){

    var transferData = JSON.parse(localStorage.getItem('temporary'));
    var retrievedCart = JSON.parse(localStorage.getItem('Cart'));

  my_if: if(transferData == null){
   	break my_if;

   }else{
    var object = transferData.reduce(
		  (obj, item) => Object.assign(obj, { ['id']: item.id
		  ,['Name']:item.Name
		  ,['Image']:item.Image
		  ,['Price']:item.Price
		  ,['Quantity']:item.Quantity
		   }), {}
		  );
   		retrievedCart.push(object);
   		console.log(object);
}
	
	var fahmy = [];
	
	for(let key in retrievedCart){

		var div1 = document.createElement('div');
		var div2 = document.createElement('div');
		var div3 = document.createElement('div');
		var totalDivs = document.createElement('div');
		var rowss = document.createElement('div');


		div1.setAttribute('class' , 'col-md-3');
		div2.setAttribute('class' , 'col-md-2');
		div3.setAttribute('class' , 'col-md-3');
		totalDivs.setAttribute('class' , 'col-md-12');
		rowss.setAttribute('class' , 'row');


		var div5 = document.createElement('div');
		var div6 = document.createElement('div');
		//var div7 = document.createElement('div');
		var totDiv = document.createElement('div');

		totDiv.setAttribute('class' , 'row');
		
		div5.setAttribute('class' , 'col-md-2 text-right pt-4');
		div6.setAttribute('class' , 'col-md-2 text-center pt-4');
		//div7.setAttribute('class' , 'row mt-4');
		// totDiv.setAttribute('class' , '');

		var images = document.createElement('img');
		var proName = document.createElement('h5');
		var number = document.createElement('h5');
		var quantit = document.createElement('input');
		var total = document.createElement('h5');
		var btnsDelete = document.createElement('button');
		//totDiv.setAttribute('id' , retrievedCart[key].id);
		images.setAttribute('src' , retrievedCart[key].Image);
		images.setAttribute('width' , '80px');
		images.setAttribute('height' , '80px');
		quantit.setAttribute('data' , retrievedCart[key].Price);
		quantit.setAttribute('class' , retrievedCart[key].id);
		quantit.setAttribute('type' , 'number');
		quantit.setAttribute('min' , '1');
		quantit.setAttribute('max' , retrievedCart[key].Quantity);
		$(quantit).css('width' , '200px');
		total.setAttribute('id' , retrievedCart[key].id);
		total.innerHTML = 0;
		btnsDelete.innerHTML = 'Delete';
		btnsDelete.setAttribute('id', retrievedCart[key].id);
		//$(btnsDelete).css({'margin-left':'100px' , 'border-radius':'30px'});

		$(quantit).css({'border-radius':'30px' , 'margin-top':'30px'});
		$(div1).css('display' , 'flex');
		$(number).css({'margin-left' : '90px' , 'margin-top':'30px'});
		$(proName).css({'margin-left':'50px' , 'margin-top':'30px'});
		//$(total).css({'margin-top':'30px'});
		proName.innerHTML = retrievedCart[key].Name;
		number.innerHTML = retrievedCart[key].Price;
		quantit.value = retrievedCart[key].Quantity;

		

		
		//total.innerHTML = retrievedCart[key].Price;
		//console.log(fahmy);
		//var totalChanges = 0;
		
		$(btnsDelete).on('click' , function(ev){
			var idd = ev.target.getAttribute('id');
			var pprr = document.getElementById(retrievedCart[key].id);
			var totalsss = parseInt(pprr.innerHTML);
			console.log(totalsss);

			//console.log(totOfTotals);
		    var totOfTotals = document.getElementById('finale').innerHTML;
		   
				totOfTotals = parseInt(totOfTotals) - totalsss;

			document.getElementById('finale').innerHTML = totOfTotals;
				var hh = this.parentNode.parentNode;
				console.log(hh)
				hh.remove();
				var ssss = JSON.parse(localStorage.getItem('Cart'));
			 var afterFilter =	ssss.filter(function(el){
					return el.id != idd;
				});
				localStorage.setItem('Cart' , JSON.stringify(afterFilter));
				

		});

	
		/*$(quantit).on('mousemove' , function(ev){
			var res = ev.target.value;
			var prices = ev.target.getAttribute('data');
			//var ids = ev.target.className;
			var ff = document.getElementById(retrievedCart[key].id);
			ff.innerHTML = res*prices;
			fahmy.push(ff.innerHTML);
			//console.log(sum(fahmy));
			//console.log(fahmy);
			//console.log(getUnique(fahmy));
			document.getElementById('finale').innerHTML = getUnique(fahmy);
			//console.log(ids);
			console.log(res);
			console.log(prices);
			
		});
		$(quantit).on('input' , function(ev){
			var res = ev.target.value;
			var prices = ev.target.getAttribute('data');
			//var ids = ev.target.className;
			var ff = document.getElementById(retrievedCart[key].id);
			ff.innerHTML = res*prices;
			fahmy.push(ff.innerHTML);
			//console.log(sum(fahmy));
			//console.log(fahmy);
			//console.log(getUnique(fahmy));
			document.getElementById('finale').innerHTML = getUnique(fahmy);
			//console.log(ids);
			console.log(res);
			console.log(prices);
			
		});
		$(quantit).on('keyup' , function(ev){
			var res = ev.target.value;
			var prices = ev.target.getAttribute('data');
			//var ids = ev.target.className;
			var ff = document.getElementById(retrievedCart[key].id);
			ff.innerHTML = res*prices;
			fahmy.push(ff.innerHTML);
			//console.log(sum(fahmy));
			//console.log(fahmy);
			//console.log(getUnique(fahmy));
			document.getElementById('finale').innerHTML = getUnique(fahmy);
			//console.log(ids);
			console.log(res);
			console.log(prices);
			
		});*/
		$(quantit).on('change' , function(ev){
			
			var res = ev.target.value;
			var prices = ev.target.getAttribute('data');
			var newPrices = parseInt(prices);
			//var ids = ev.target.className;
			var ff = document.getElementById(retrievedCart[key].id);

			ff.innerHTML = res*newPrices;
			fahmy.push(ff.innerHTML);

			//console.log(sum(fahmy));
			console.log(fahmy);
			//console.log(getUnique(fahmy));
			document.getElementById('finale').innerHTML = getUnique(fahmy);
			//console.log(ids);
			console.log(res);
			console.log(prices);
			
		});
		

		div1.appendChild(images);
		div1.appendChild(proName);
		div2.appendChild(number);
		div3.appendChild(quantit);
		div5.appendChild(total);
		div6.appendChild(btnsDelete);
		rowss.appendChild(div1);
		rowss.appendChild(div2);
		rowss.appendChild(div3);
		rowss.appendChild(div5);
		rowss.appendChild(div6);
		/*div4.appendChild(div5);
		div4.appendChild(div6);
		totDiv.appendChild(div1);
		totDiv.appendChild(div2);
		totDiv.appendChild(div3);
		totDiv.appendChild(div4);*/
		/*div7.appendChild(div5);
		div7.appendChild(div6);
		div4.appendChild(div7);*/
		//div4.appendChild(div7);
		totalDivs.appendChild(rowss)
		$('#row1').append(totalDivs);
		// totDiv.appendChild(div1);
		// totDiv.appendChild(div2);
		// totDiv.appendChild(div3);
		// totDiv.appendChild(div4);
		// totDiv.appendChild(div5);
		// totDiv.appendChild(div7);
		// $('#row1').append(totDiv);
		
	


		// $('#row1').append(div1);
		// $('#row1').append(div2);
		// $('#row1').append(div3);
		// $('#row1').append(div4);



	}
	/*var sum = 0;
	for(let i = 0 ; i < fahmy.length ; i++){
		sum += parseInt(fahmy[i]);
		console.log(sum);
			document.getElementById('finale').innerHTML = sum;
		}*/
		/*fahmy.forEach(number=>{
			document.getElementById('finale').innerHTML += number;
		});*/
/*function sum(input){
             var uniqueArray = [];
    var total =  0;
    for(var i=0;i<input.length;i++)
      {                  
        
        if(uniqueArray.indexOf(input[i]) === -1){

         	uniqueArray.push(input[i]);
         	console.log(uniqueArray);
         	total += parseInt(uniqueArray[i]);
         	if(isNaN(uniqueArray[i])){
         	//total += parseInt(uniqueArray[i]);
         	//console.log(total);
         	continue;
         }

}
          
       }
     return total;
    }*/

    function getUnique(array){
        var uniqueArray = [];
        var sum = 0;
        // Loop through array values
        for(let i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
                 sum += Number(uniqueArray[i]);
                
            }
            console.log(sum)
        }
        return sum;
    }

}

var dd = document.getElementById('btnRefres');
$(dd).on('click' , function(){
	window.location.href = "carts.php";
});