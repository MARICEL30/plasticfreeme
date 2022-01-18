
//function to process the submited location on the search box

function processform(e) {
  //alert('hi');
  e.preventDefault();

 const userInput = document.getElementById("search").value;
 alert(userInput);

 //const searchLocation = e.target.value.toLowerCase()
 }


 

let form = document.getElementById("submit-form")
form.addEventListener("submit", processform);



//function to call the api
let alldata = [];
let url = 'https://api.sheety.co/3d408acfbea2c1fd2fc688d1b38bdd28/plasticFreeme/sheet1';
function getRows() {
  fetch(url)
 .then(response => response.json())
  .then(data => {
    alldata = data["sheet1"];
    makeTable(alldata)
   });

}





//function to make the table


const mytable = document.getElementById("myTable");

function makeTable() {
      alldata.forEach((row) => {
      const sheetRows = document.createElement("tr");

      let myshop = document.createElement("td");
          myshop.innerHTML = row["shop"];

      let mywebsite = document.createElement("td");
          mywebsite.innerHTML = row["website"];


      let myaddress = document.createElement("td");
          myaddress.innerHTML = row["address"];


      sheetRows.appendChild(myshop);
      sheetRows.appendChild(mywebsite);
      sheetRows.appendChild(myaddress);
      mytable.append(sheetRows);
    
    });

 
}

window.addEventListener("load", getRows);



//creating the google map and positioning the markers for every shop on the map

function initMap() {
  const brighton = { lat:50.888212725751195 , lng: -0.20438173195189485 };
   const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "576aba331fc3dae5",
    zoom: 12,
    center: brighton,
  });

   new google.maps.Marker({
    position: { lat: 50.86721503284581, lng: -0.1237472981288431 },
    map,
    title: "Roots and Hoots",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }
  });

  new google.maps.Marker({
    position: { lat: 50.82512876580611, lng:-0.1509608153426121  },
    map,
    title: "The Source Bulk Foods Brighton",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }
  });

  new google.maps.Marker({
    position: { lat: 50.84290045197619, lng:-0.13464338622990235 },
    map,
    title: "Store Brighton",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }
  });

  new google.maps.Marker({
    position: { lat: 50.82902551424537,  lng:-0.13559555739461235 },
    map,
    title: "HISBE Food",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }
  });

  new google.maps.Marker({
    position: { lat: 50.8316584829648,  lng:-0.13596955924413806 },
    map,
    title: "Wastenot",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }
  });


}






