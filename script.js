
//function to call the Google sheets api
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



//function to process the submited location on the search box

function processform(e) {
  //alert('hi');
  e.preventDefault();

 const userInput = document.getElementById("search").value;
 //alert(userInput);

 const filteredData = alldata.filter(tableRow => 
  tableRow.location && tableRow.location.toLowerCase().trim() === userInput.toLowerCase().trim());
  
 makeTable(filteredData)

 }




let form = document.getElementById("submit-form")
form.addEventListener("submit", processform);




//function to make the table


const mytable = document.getElementById("myTable");

function makeTable(data) {

      mytable.innerHTML = "";

      data.forEach((row) => {
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

  const mapData =  [

    {
      position: { lat: 50.86721503284581, lng: -0.1237472981288431 },
      map,
      title: "Roots and Hoots",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
    }},
  
    {
     position: { lat: 50.82512876580611, lng:-0.1509608153426121  },
      map,
      title: "The Source Bulk Foods Brighton",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
      }
   },
  
   {
     position: { lat: 50.84290045197619, lng:-0.13464338622990235 },
      map,
      title: "Store Brighton",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
      }}
  
  
  ]


mapData.forEach(store => {
  new google.maps.Marker({
    ...store
  })

}) 




  //  new google.maps.Marker({
  //   position: { lat: 50.86721503284581, lng: -0.1237472981288431 },
  //   map,
  //   title: "Roots and Hoots",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.82512876580611, lng:-0.1509608153426121  },
  //   map,
  //   title: "The Source Bulk Foods Brighton",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.84290045197619, lng:-0.13464338622990235 },
  //   map,
  //   title: "Store Brighton",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.82902551424537,  lng:-0.13559555739461235 },
  //   map,
  //   title: "HISBE Food",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.8316584829648,  lng:-0.13596955924413806 },
  //   map,
  //   title: "Wastenot",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat:50.832060828827935,  lng:-0.1479950906622019 },
  //   map,
  //   title: "Kindly of Brighton",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.84310081811435, lng:-0.13520352022029417 },
  //   map,
  //   title: "Store Brighton",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat:50.83140640555994,  lng:-0.17511621032042837 },
  //   map,
  //   title: "Harriet's of Hove",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat:50.826700981422995,  lng:-0.1394284418225979 },
  //   map,
  //   title: "Infinity Foods",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });


  // new google.maps.Marker({
  //   position: { lat:50.833035216521694, lng:-0.18408650568399562},
  //   map,
  //   title: "Down To Earth",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });

  // new google.maps.Marker({
  //   position: { lat: 50.83371282597678, lng:-0.1853947011360502},
  //   map,
  //   title: "Barnes + Binns General Store",
  //   icon: {
  //     url:"images/shop-svg.svg",
  //     scaledSize:  new google.maps.Size(38, 31)
  //   }
  // });


}




