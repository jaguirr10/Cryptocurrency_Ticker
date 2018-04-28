// Juan Aguirre


      $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++)
   {  
    if (data[i].id == "litecoin") {
      $("#price").html(data[i].price_usd);
	  $("#1hchange").html(data[i]. percent_change_1h);
      $("#24hchange").html(data[i]. percent_change_24h);
	  $("#7dchange").html(data[i]. percent_change_7d);
    }
     if (data[i].id == "bitcoin") {
      $("#bprice").html(data[i].price_usd);
	   $("#b1hchange").html(data[i]. percent_change_1h);
      $("#b24hchange").html(data[i]. percent_change_24h);
	  $("#b7dchange").html(data[i]. percent_change_7d);
    }
     if (data[i].id == "ethereum") {
      $("#eprice").html(data[i].price_usd);
	  $("#e1hchange").html(data[i]. percent_change_1h);
      $("#echange").html(data[i]. percent_change_24h);
	  $("#e7dchange").html(data[i]. percent_change_7d);
	  
    } 
      if (data[i].id == "ripple") {
      $("#rprice").html(data[i].price_usd);
	   $("#r1hchange").html(data[i]. percent_change_1h);
      $("#rchange").html(data[i]. percent_change_24h);
	  $("#r7dchange").html(data[i]. percent_change_7d);
    }  
	
	if (data[i].id == "bitcoin-cash") {
      $("#bcprice").html(data[i].price_usd);
	  $("#bc1hchange").html(data[i]. percent_change_1h);
      $("#bcchange").html(data[i]. percent_change_24h);
	  $("#bc7dchange").html(data[i]. percent_change_7d);
	  
	  
    }
     if (data[i].id == "eos") {
      $("#eosprice").html(data[i].price_usd);
	   $("#eos1hchange").html(data[i]. percent_change_1h);
      $("#eoschange").html(data[i]. percent_change_24h);
	  $("#eos7dchange").html(data[i]. percent_change_7d);
    }
     if (data[i].id == "cardano") {
      $("#caprice").html(data[i].price_usd);
	   $("#ca1hchange").html(data[i]. percent_change_1h);
      $("#cachange").html(data[i]. percent_change_24h);
	  $("#ca7dchange").html(data[i]. percent_change_7d);
    } 
      if (data[i].id == "stellar") {
      $("#stprice").html(data[i].price_usd);
	   $("#st1hchange").html(data[i]. percent_change_1h);
      $("#stchange").html(data[i]. percent_change_24h);
	  $("#st7dchange").html(data[i]. percent_change_7d);
    }  
    
     if (data[i].id == "tron") {
      $("#trprice").html(data[i].price_usd);
	   $("#tr1hchange").html(data[i]. percent_change_1h);
      $("#trchange").html(data[i]. percent_change_24h);
	  $("#tr7dchange").html(data[i]. percent_change_7d);
    } 
      if (data[i].id == "monero") {
      $("#mnprice").html(data[i].price_usd);
	   $("#mn1hchange").html(data[i]. percent_change_1h);
      $("#mnchange").html(data[i]. percent_change_24h);
	  $("#mn7dchange").html(data[i]. percent_change_7d);
    }  
	
	
  }


});
      
    

