window.onload = function(){
	var retrievedObject = JSON.parse(localStorage.getItem('Data'));
	let arr = [];
	for(let key in retrievedObject){
		var divs1 = document.createElement('div');
		var divs2 = document.createElement('div');
		var divs3 = document.createElement('div');

		divs1.setAttribute('class' , 'col-md-4');
		divs2.setAttribute('class' , 'col-md-4');
		divs3.setAttribute('class' , 'col-md-4');

		var image2 = document.createElement('img');

		var productName = document.createElement('h1');
		var desc = document.createElement('p');


		var available = document.createElement('h5');
		var prices = document.createElement('h3');
		var quant = document.createElement('h4');
		var quantNum = document.createElement('input');
		var btns = document.createElement('button');
		var line = document.createElement('hr');

		$(divs3).css({'border':'2px solid black'
			, 'border-radius':'30px'
			, 'height':'320px'
		});

		divs3.setAttribute('width' , '300px');
		divs3.setAttribute('height' , '100px');

		image2.setAttribute('src' , retrievedObject[key].Image);
		productName.innerHTML = retrievedObject[key].Name;
		desc.innerHTML = retrievedObject[key].Description;
		quantNum.setAttribute('type' , 'number');
		quantNum.setAttribute('min' , '1');
		quantNum.setAttribute('max' , retrievedObject[key].Quantity);
		available.innerHTML = "Available: In Stock";
		line.setAttribute('size' , '30px');
		line.setAttribute('color' , 'green');
		prices.innerHTML = '$'+retrievedObject[key].Price;
		quant.innerHTML = "Quantity";
		quantNum.value = retrievedObject[key].Quantity;
		btns.innerHTML = "Add To Cart";
		$(available).css('color' , 'green');
		$(desc).css('marginTop' , '100px');
		$(prices).css('color' , 'red');
		$(quantNum).css({'border-radius' : '20px' , 'display':'block' , 'marginTop':'10px' , 'width':'100px'});
		$(btns).css({'border-radius' : '30px' , 'background-color':'white' , 'marginTop':'10px' , 'display':'block'});
		
		$(btns).on('click' , function(){
			/*********/
			arr.push({
				id:retrievedObject[key].ID
				,name:retrievedObject[key].Name
				,image:retrievedObject[key].Image
				,Price:retrievedObject[key].Price
				,Quantity:retrievedObject[key].Quantity
			});
			var newData3 = [];
			for(let key in arr){

				newData3.push({
					 id:arr[key].id
					,Name:arr[key].name
					,Image:arr[key].image  
					,Price:arr[key].Price 
					,Quantity:arr[key].Quantity
				});

				localStorage.setItem('temporary' , JSON.stringify(newData3));
			}
			/**********/

			
		});

		divs1.appendChild(image2);
		divs2.appendChild(productName);
		divs2.appendChild(desc);
		divs3.appendChild(available);
		divs3.appendChild(line);
		divs3.appendChild(prices);
		divs3.appendChild(quant);
		divs3.appendChild(quantNum);
		divs3.appendChild(btns);


		$('.row').append(divs1);
		$('.row').append(divs2);
		$('.row').append(divs3);

		
	}

}