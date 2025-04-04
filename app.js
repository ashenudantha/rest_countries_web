loadCountries();

let array = [];

function loadCountries() {
  let countriesList = document.getElementById("card");

  let body = "";

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((dataList) => {
      array = dataList;
      console.log(array);
      //console.log(dataList);
      dataList.forEach((element,index) => {
        body += `
                               <div class="col" id="" >
                        <div class="card shadow-sm"  style="background-color:chocolate" >
                        
                            <img src="${element.flags.png}" alt="" style="height:15rem;">
                            <div class="card-body">
                            <div> <h3>${element.name.common}</h3></div>
                                <p class="card-text">
                                                               

                               Capital : ${element.capital}
                               
                                    </p> <p class="card-text">
                                region : ${element.region}
                               
                                    </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                       <button type="button" onclick="loadModalData(${index})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View More ></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            `;
      });

      countriesList.innerHTML = body;
    });
}

async function loadModalData(index){

  let countriesList = document.getElementById("card");

  let body = "";
   

      body += `
    <div class="col" id="">
<div class="card shadow-sm" style="background-color:chocolate">

 <img src="${array[index].flags.png}" alt="">
 <div class="card-body">
 <div> <h3>${array[index].name.common}</h3></div>
     <p class="card-text">
                                    

    Capital : ${array[index].capital}
    
         </p> 
         <p class="card-text">
     region : ${array[index].region}
    
         </p>

         <p class="card-text">
     continent : ${array[index].continents
     }
    
         </p>
         <p class="card-text">
     time zones : ${array[index].timezones}
    
         </p>
         <p class="card-text">
     location-google : ${array[index].maps.googleMaps}
    
         </p>
    
 </div>
</div>
</div>
`;
    

  countriesList.innerHTML = body;
}






function search() {
  let countriesList = document.getElementById("card");

  let searchInput = document.getElementById("searchtxt").value;
  let body = "";
  array.forEach((element) => {
    if (element.name.common === searchInput) {
      console.log(element.name.common);
      let index = array.findIndex(
        (country) => country.name.common === searchInput
      );
      console.log(array[index]);

      body += `
    <div class="col" id="">
<div class="card shadow-sm" style="background-color:chocolate">

 <img src="${array[index].flags.png}" alt="">
 <div class="card-body">
 <div> <h3>${array[index].name.common}</h3></div>
     <p class="card-text">
                                    

    Capital : ${array[index].capital}
    
         </p> <p class="card-text">
     region : ${array[index].region}
    
         </p>
     <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
            <button type="button" onclick="loadModalData(${index})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View More-></button>
         </div>
         
     </div>
 </div>
</div>
</div>
`;
    }
  });
  countriesList.innerHTML = body;
}
