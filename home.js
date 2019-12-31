window.onload = function(){
		var getCounter = JSON.parse(localStorage.getItem('Counter'));
		for(let key in getCounter){
		var resultFromLocalCounter = document.getElementById('res');
		resultFromLocalCounter.innerHTML = "Counter: " + getCounter[key].numberCount + ",Total: " + getCounter[key].TotalSales;
		
		
		sayed :if(localStorage.getItem('Cart') == null){
			break sayed;
		}else{
			var fahmico = JSON.parse(localStorage.getItem('Cart'));
			let arrs = [];
			for(let key in fahmico){
				arrs.push({
					id:fahmico[key].id
					,Name:fahmico[key].Name
					,Image:fahmico[key].Image
					,Price:fahmico[key].Price
					,Quantity:fahmico[key].Quantity
				});
			}
			//console.log(arrs);
			localStorage.setItem('OldCart' , JSON.stringify(arrs));
				
		}

		countersss: if(localStorage.getItem('Counter') == null){
			break countersss;
		}else{
			var fahmico2 = JSON.parse(localStorage.getItem('Counter'));
			let arrs2 = [];
			console.log(fahmico2);
			for(let key in fahmico2){
				arrs2.push({
					numberCount:fahmico2[key].numberCount,
					TotalSales:fahmico2[key].TotalSales
				});
			}
			console.log(arrs2);
			localStorage.setItem('OldCounter' , JSON.stringify(arrs2));
		}

	}
	}
let xhr = new XMLHttpRequest();

xhr.open('GET' , 'https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json' , true);

xhr.send();

xhr.onload = function(){
	if(xhr.status != 200){
		alert('Failed');
		console.log(xhr.status)
	}else{
		var temp = JSON.parse(xhr.response);
		temp = temp.ProductCollection;
		console.log(temp);
		var array = [];
		var array2 = [];
		var arrayPrices = [];
		//var uniquePrices = [];
		for(let key in temp){
			
			var divBoot = document.createElement('div');
			var img = document.createElement("img");
			var fullName = document.createElement('h3');
			var prices = document.createElement('h4');
			//var links = document.createElement('a');
			var btns = document.createElement('button');
			var line = document.createElement('hr');
			
			divBoot.setAttribute('class' , 'col-md-4');
			
			//links.setAttribute('href' , '#');
			//links.setAttribute('data-id' , temp[key].ProductId);
			$(btns).css({'borderRadius':'50px' , 'marginLeft':'320px'});
			btns.setAttribute('data' , temp[key].Price);
			//btns.setAttribute('id' , temp[key].ProductId);
			img.setAttribute('src', temp[key].ProductPicUrl);
			img.setAttribute('width' , '200px');
			img.setAttribute('height' , '200px');
			//img.setAttribute('data-id' , temp[key].ProductId);
			$(img).css('cursor' , 'pointer');
			line.setAttribute('size' , '70px');
			line.setAttribute('color' , 'green');
			btns.innerHTML = 'C';
			fullName.innerHTML = temp[key].Name;
			$(prices).css('color' , 'red');
			prices.innerHTML = '$' + temp[key].Price;
			
			$(img).on('click' , function(ev){
				//console.log(temp[key].ProductPicUrl);
				/*var id = ev.target.getAttribute('data-id');
				console.log(id)*/
				//console.log(temp[key]);
				//window.location.href = 'showData.php?id=' + temp[key].ProductId;
				array.push({
					id:temp[key].ProductId,
					name:temp[key].Name,
					image:temp[key].ProductPicUrl,
					Description:temp[key].Description,
					Price:temp[key].Price,
					Quantity:temp[key].Quantity
				});
				//console.log(array)
				
				var newData = [];
				for(let key in array){
					//console.log(array[key].image)
				//console.log(arr[key].data);
				//console.log(JSON.stringify(arr[key].color));
				
				/*newArray.push(arr[key].data + "<br>");*/
				newData.push({
					ID:array[key].id
					,Name:array[key].name
					,Image:array[key].image 
					, Description:array[key].Description 
					, Price:array[key].Price 
					, Quantity: array[key].Quantity});
				console.log(newData)
				localStorage.setItem('Data', JSON.stringify(newData));
				}
				window.location.href = 'showData.php?id=' + temp[key].ProductId;

		});
			// var counter = 1;
			 var counter = 0;
			 var FinalResult = 0;
		        $(btns).on('click' , function(ev){
		        	var ffffff = ev.target;
		        	ffffff.setAttribute('disabled' , null);
		        	//console.log(temp[key]);
		        	var priceData = ev.target.getAttribute('data');
		        	var priceData1 = Number(priceData);
		        	/*arrayPrices.push(
		        		priceData1
		        	);*/

		        	//console.log(arrayPrices)
		        	/*******Array******/
		        	array2.push({
		        	id:temp[key].ProductId,
					name:temp[key].Name,
					image:temp[key].ProductPicUrl,
					Price:temp[key].Price,
					Quantity:temp[key].Quantity
				});
		       /**********/
		      	
				/*var result = {};
					for (var i = 0; i < transferData.length; i++) {
					result[transferData[i].id];
					 result[transferData[i].name];
					 result[transferData[i].image];
					result[transferData[i].Price];
					 result[transferData[i].Quantity];
				}
				console.log(result);*/
					
		       var newData2 = [];
				for(let key in array2){
					
					/*******Array******/
				newData2.push({
					 id:array2[key].id
					,Name:array2[key].name
					,Image:array2[key].image  
					,Price:array2[key].Price 
					,Quantity: array2[key].Quantity
				});
					/*************/
		       
				console.log(newData2);

				const arrayUniqueByKey = [...new Map(newData2.map(item =>
				  [item['id'], item])).values()];

				

				localStorage.setItem('Cart', JSON.stringify(arrayUniqueByKey));

				var keke = JSON.parse(localStorage.getItem('OldCart'));
				let arrs = [];
				for(let key in keke){

					arrs.push({
					  id:keke[key].id,
					  Name:keke[key].Name,
					  Image:keke[key].Image,
					  Price:keke[key].Price,
					  Quantity:keke[key].Quantity
					});

					oldcart :if(arrs == null){
					break oldcart;
				}else{
					var object = arrs.reduce(
					  (obj, item) => Object.assign(obj, { ['id']: item.id
					  ,['Name']:item.Name
					  ,['Image']:item.Image
					  ,['Price']:item.Price
					  ,['Quantity']:item.Quantity
					   }), {}
					  );
			   		newData2.push(object);
					const arrayUniqueByKey1 = [...new Map(newData2.map(item =>
				  	[item['id'], item])).values()];
			   		localStorage.setItem('Cart' , JSON.stringify(arrayUniqueByKey1));
			   		console.log(object);
				}

				}
				//console.log(arrs);
				
				

				
				/* if(localStorage.getItem('Cart') == null){
					var drophistory = JSON.parse(localStorage.getItem("Cart"));
				    drophistory.push(newData2);
				    localStorage.setItem("Cart", JSON.stringify(drophistory));
				}*/
				
			    //document.getElementById("result").innerHTML = localStorage.getItem("hash");
				//newData2.push(object);
				}

				//window.location.href = 'cartPHP.php;
				counter++;

				/*for(let i = 0 ; i < arrayPrices.length ; i++){
					FinalResult += arrayPrices[i];

				}*/
					
				/*$.each(arrayPrices, function(i, el){
					    if($.inArray(el, uniquePrices) === -1) uniquePrices.push(el);
				});
				console.log(uniquePrices);
				*/
				/* arrayPrices.reduce(function(a, b){
				 	
			        return FinalResult += b;
			    }, 0);*/
				/*uniquePrices.forEach(number=>{
					FinalResult += number;
				});*/
				
				var pricesInCounter = FinalResult+=priceData1;
				var result = document.getElementById('res');
				result.innerHTML = "Counter: " + counter + ",Total:" + pricesInCounter;
				console.log(counter);

				var counterArr = [];
				counterArr.push({
					numberCount:counter,
					TotalSales:pricesInCounter
				});
				//console.log(counterArr);
				/*const arrayUniqueByCounter = [...new Map(counterArr.map(item =>
				  [item['numberCount'], item])).values()];*/

				localStorage.setItem('Counter' , JSON.stringify(counterArr));
				var keke2 = JSON.parse(localStorage.getItem('OldCounter'));
				let arrss2 = [];
				for(let key in keke2){

					arrss2.push({
					  numberCount:keke2[key].numberCount,
					  TotalSales:keke2[key].TotalSales
					});

					oldcounter :if(arrss2 == null){
					break oldcounter;
				}else{
					var object2 = arrss2.reduce(
					  (obj, item) => Object.assign(obj, { ['numberCount']: item.numberCount
					  ,['TotalSales']:item.TotalSales
					   }), {}
					  );
					//console.log(object2);
					counterArr.push(object2);

					    var total1 = 0;
					    var total2 = 0;
					  for (let i = 0; i < counterArr.length; i++) {
					    total1 += counterArr[i].numberCount;
					    total2 += counterArr[i].TotalSales;
					  }
					  var result = document.getElementById('res');
					  result.innerHTML = "Counter: " + total1 + ",Total:" + total2;
					 let newCounterArr = [];

					 newCounterArr.push({
					 	numberCount:total1,
					 	TotalSales:total2
					 });


					const arrayUniqueByKey2 = [...new Map(newCounterArr.map(item =>
				  	[item['numberCount'], item])).values()];

			   		localStorage.setItem('Counter' , JSON.stringify(arrayUniqueByKey2));
			   		console.log(object2);
				}

				}
				//var pricesInCounter = FinalResult+=priceData1;
				
				
		        });
				document.getElementById('res').addEventListener('click' , function(){
					window.location.href = 'carts.php';
				});
			divBoot.appendChild(fullName);
			//links.appendChild(img)
			divBoot.appendChild(img);
			divBoot.appendChild(prices);
			divBoot.appendChild(btns);
			divBoot.appendChild(line);
			
			

			$('.row').append(divBoot);

			
		}

	}
}

function uniqueArray3(a) {
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  // usage
  var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

  return unique;
}
/*function sumObjectsByKey(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k))
        a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}*/