			    var x = -1 ;
			    var demo = [];
			    var d1 = 0 ; var d2 = 0;  var d3 = 0; var d4 = 0; var d5 = 0; var d6 = 0;
			
	//		function myFunction() {
			 for ( i = 0 ; i < 3 ; i++ ) {
			          var s = $("input[name='radio']").eq(i).prop('checked');
			          if ( s ) {
			              x = i 
			          }
			      };  
			 
			   switch ( x ) {
			    case -1 :
			        $("#report").text("請選擇彩券種類? The Lottory must be choiced out");
			        break;
			    case 0 : 
			      d1 = Math.floor(Math.random()*49+1);
			      d2 = Math.floor(Math.random()*49+1);
			      d3 = Math.floor(Math.random()*49+1);
			      d4 = Math.floor(Math.random()*49+1);
			      d5 = Math.floor(Math.random()*49+1);
			      d6 = Math.floor(Math.random()*49+1);
			      
			// SORTING 
			      demo[0] = d1; demo[1] = d2; demo[2] = d3; demo[3] = d4; demo[4] = d5; demo[5] = d6;
			      demo.sort(function(a, b){return a-b} ) ;
			      $("input[name='radio1']").prop('checked','checked');
			      console.log("demo1 = "+demo);
			       
			// DELETE DUPLICATE
			      console.log($("input[name='radio1']").prop('checked'));
			         while ($("input[name='radio1']").prop('checked')) {
			            $("input[name='radio1']").prop('checked','');
			            d1 = demo[0] ; d2 = demo[1] ; d3 = demo[2] ; d4 = demo[3] ; d5 = demo[4] ; d6 = demo[5] ;
			            
			             while ( d1 == d2  ) {
			                d2 = Math.floor(Math.random()*49+1); 
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			             while ( d2 == d3  ) {
			                d3 = Math.floor(Math.random()*49+1);
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			            while ( d3 == d4  ) {
			                d4 = Math.floor(Math.random()*49+1);   
			                $("input[name='radio1']").prop('checked','checked');
			                  } ;
			            while ( d4 == d5  ) {
			                d5 = Math.floor(Math.random()*49+1);
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			            while ( d5 == d6  ) {
			                d6 = Math.floor(Math.random()*49+1); 
			                $("input[name='radio1']").prop('checked','checked');
			                } ;
			
			         if ($("input[name='radio1']").prop('checked')) {
			             console.log($("input[name='radio1']").prop('checked'));
			            // SORTING AGAIN     
			            demo[0] = d1; demo[1] = d2; demo[2] = d3; demo[3] = d4; demo[4] = d5; demo[5] = d6;
			            demo.sort(function(a, b){return a-b} ) ;
			        } else {
			                w = 0;
			                $("input[name='radio1']").prop('checked','');
			        }
			//        console.log("demo2 = "+demo);
			      }
			
			        $("#report").text("大樂透 :"+demo);
			        demo = [" "];
			        break;
			    case 1 :
			      d1 = Math.floor(Math.random()*39+1);
			      d2 = Math.floor(Math.random()*39+1);
			      d3 = Math.floor(Math.random()*39+1);
			      d4 = Math.floor(Math.random()*39+1);
			      d5 = Math.floor(Math.random()*39+1);
			      
			// SORTING 
			      demo[0] = d1; demo[1] = d2; demo[2] = d3; demo[3] = d4; demo[4] = d5;
			      demo.sort(function(a, b){return a-b} ) ;
			      $("input[name='radio1']").prop('checked','checked');
			      console.log("demo1 = "+demo);
			       
			// DELETE DUPLICATE
			      console.log($("input[name='radio1']").prop('checked'))
			         while ($("input[name='radio1']").prop('checked')) {
			            $("input[name='radio1']").prop('checked','');
			            d1 = demo[0] ; d2 = demo[1] ; d3 = demo[2] ; d4 = demo[3] ; d5 = demo[4] ; 
			            
			             while ( d1 == d2  ) {
			                d2 = Math.floor(Math.random()*39+1); 
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			             while ( d2 == d3  ) {
			                d3 = Math.floor(Math.random()*39+1);
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			            while ( d3 == d4  ) {
			                d4 = Math.floor(Math.random()*39+1);   
			                $("input[name='radio1']").prop('checked','checked');
			                  } ;
			            while ( d4 == d5  ) {
			                d5 = Math.floor(Math.random()*39+1);
			                $("input[name='radio1']").prop('checked','checked');
			                 } ;
			
			         if ($("input[name='radio1']").prop('checked')) {
			             console.log($("input[name='radio1']").prop('checked'));
			            // SORTING AGAIN     
			            demo[0] = d1; demo[1] = d2; demo[2] = d3; demo[3] = d4; demo[4] = d5;
			            demo.sort(function(a, b){return a-b} ) ;
			        } else {
			                w = 0;
			                $("input[name='radio1']").prop('checked','');
			        }
			//        console.log("demo2 = "+demo);
			      }
			
			        $("#report").text("今彩539 :"+demo);
			        demo = [" "];
			        break;
			    case 2 :
			        alert("x=2");
			        break;
			   }
			  
			
	// myfunc		}