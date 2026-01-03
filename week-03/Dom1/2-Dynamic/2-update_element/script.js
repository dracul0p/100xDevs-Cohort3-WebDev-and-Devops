
      //  var name ="asheesh";
      // console.log(document); // refrence to whole page
       //abailable inside browser only

      //  function addTodo(){
      //   const inputElement = document.querySelector("input");
      //  const val = inputElement.value;
      //  console.log(val);
       
      // }

      let count = 0;
      
     

      
      setInterval(function(){
        
        document.querySelectorAll(".todo")[1].innerHTML = count;
              console.log(count);

        count++;
      } , 1000);
      

             

       
       
