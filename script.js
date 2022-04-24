
//function to call the Google sheets api
let alldata = [];
let url = 'https://api.sheety.co/3d408acfbea2c1fd2fc688d1b38bdd28/plasticFreeme/sheet1';
let list = document.querySelector(".main-table-container");
let currentPage = 1;
let itemsPerPage = 10;
let numberOfPages = Math.ceil(alldata.length / itemsPerPage);

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let page = document.getElementById("page");

function getRows() {
 fetch(url)
 .then(response => response.json())
  .then(data => {
    alldata = data["sheet1"];
    numberOfPages = Math.ceil(alldata.length / itemsPerPage);
    makeTable(alldata.slice(0, 10));
   });
 
}



//function to filter the submited location on the search box

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


 window.addEventListener("load", getRows)



//Pagination



function nextPage() {
  if(currentPage < numberOfPages) {
  currentPage += 1;
   updatePage(currentPage);
    doPaging();
}
  }


function prevPage() {
  if(currentPage > 1 ) {
   currentPage -= 1;
   updatePage(currentPage)
    doPaging();
  }
  
}


function updatePage(page) {
     if(page < 1) {
     page = 1;
   }
  if(page > numberOfPages) {
    page = numberOfPages;
  }
}


  function doPaging() {
  list.innerHTML = "";
  makeTable(alldata.slice((currentPage - 1) * itemsPerPage, 
  currentPage * itemsPerPage));

  if (page == 1) {
  prevBtn.style.visibility = "hidden";
   } else {
  prevBtn.style.visibility = "visible";
   }
   if (page == numberOfPages) {
    nextBtn.style.visibility = "hidden";
    } else {
    nextBtn.style.visibility = "visible";
      }
    page.innerHTML = currentPage;
  }

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);




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
      position: { 
        lat: 50.86721503284581, 
        lng: -0.1237472981288431 
      },
      map,
      title: "Roots and Hoots",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
    }},
  
    {
     position: { 
       lat: 50.82512876580611, 
       lng:-0.1509608153426121  
      },
      map,
      title: "The Source Bulk Foods Brighton",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
      }},
  {
     position: { 
       lat: 50.84290045197619, 
       lng:-0.13464338622990235 
      },
      map,
      title: "Store Brighton",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
      }},

     {
      position: { 
        lat: 50.82902551424537,  
        lng:-0.13559555739461235 
      },
      map,
      title: "HISBE Food",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
       }},

     {
       position: { 
         lat: 50.8316584829648,  
         lng:-0.13596955924413806 
        },
       map,
  title: "Wastenot",
  icon: {
    url:"images/shop-svg.svg",
    scaledSize:  new google.maps.Size(38, 31)
  }},

{
  position: { 
    lat:50.832060828827935,  
    lng:-0.1479950906622019 
  },
  map,
  title: "Kindly of Brighton",
  icon: {
    url:"images/shop-svg.svg",
    scaledSize:  new google.maps.Size(38, 31)
  }},

{

  position: { 
    lat: 50.84310081811435, 
    lng:-0.13520352022029417 
  },
  map,
  title: "Store Brighton",
  icon: {
    url:"images/shop-svg.svg",
    scaledSize:  new google.maps.Size(38, 31)
  }},

{

  position: { 
    lat:50.83140640555994,  
    lng:-0.17511621032042837 
  },
    map,
    title: "Harriet's of Hove",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }},

{
  position: { 
    lat:50.826700981422995,  
    lng:-0.1394284418225979 
  },
  map,
  title: "Infinity Foods",
  icon: {
    url:"images/shop-svg.svg",
    scaledSize:  new google.maps.Size(38, 31)
  }},

{
  position: { 
    lat:50.833035216521694, 
    lng:-0.18408650568399562
  },
  map,
  title: "Down To Earth",
  icon: {
    url:"images/shop-svg.svg",
    scaledSize:  new google.maps.Size(38, 31)
  }},

{

  position: { 
    lat: 50.83371282597678, 
    lng:-0.1853947011360502
  },
    map,
    title: "Barnes + Binns General Store",
    icon: {
      url:"images/shop-svg.svg",
      scaledSize:  new google.maps.Size(38, 31)
    }},

    {

    position: { 
      lat: 51.44139347378321,
      lng:  -2.603859839777419
    },
      map,
      title: "Zero Green",
      icon: {
        url:"images/shop-svg.svg",
        scaledSize:  new google.maps.Size(38, 31)
      }},

   {

      position: { 
        lat: 51.493221691942836,
        lng: -2.61675970114043
        },
          map,
        title: "Preserve Foods",
        icon: {
            url:"images/shop-svg.svg",
            scaledSize:  new google.maps.Size(38, 31)
          }},

   {
       position: { 
             lat: 51.473658517272554,
            lng: -2.589293047732903
            },
              map,
              title: "Scoopaway",
              icon: {
                url:"images/shop-svg.svg",
                scaledSize:  new google.maps.Size(38, 31)
          }},

  
      {

          position: { 
              lat: 51.471250880227316,
              lng: -2.5920108551181715
            },
              map,
              title: "Harvest Bristol",
              icon: {
                  url:"images/shop-svg.svg",
                  scaledSize:  new google.maps.Size(38, 31)
        }},
      
        {

        position: { 
              lat: 51.469353270146485,
              lng: -2.6129042922843677
            },
              map,
              title: "Wild Oats Natural Foods",
              icon: {
                  url:"images/shop-svg.svg",
                  scaledSize:  new google.maps.Size(38, 31)
        }},    

        {

          position: { 
                lat: 51.45386358353394,
                lng: -2.6174994159109666
              },
                map,
                title: "Smaller Footprints",
                icon: {
                    url:"images/shop-svg.svg",
                    scaledSize:  new google.maps.Size(38, 31)
          }}, 

      {

        position: { 
              lat:  51.433706862591855,
              lng: -2.756953223148547
                },
                  map,
                  title: "Simply Green Zero Waste",
                  icon: {
                      url:"images/shop-svg.svg",
                      scaledSize:  new google.maps.Size(38, 31)
        }},     
  
        {

         position: { 
              lat:  51.36238066196539,
              lng: -2.76380076448543
                  },
                    map,
                  title: "Zero Waste Pantry",
                  icon: {
                       url:"images/shop-svg.svg",
                      scaledSize:  new google.maps.Size(38, 31)
          }},

      {

           position: { 
                lat:51.47458921364087, 
                lng:  -2.490700261933226 
                     },
                       map,
                     title: "The Plastic Free Shop",
                     icon: {
                          url:"images/shop-svg.svg",
                         scaledSize:  new google.maps.Size(38, 31)
             }},       
             
      {

         position: { 
                lat: 51.46768031155858, 
                lng: -2.612656769325274
                    },
                      map,
                      title: "Scoop Wholefoods",
                      icon: {
                             url:"images/shop-svg.svg",
                            scaledSize:  new google.maps.Size(38, 31)
            }}, 

       {

        position: { 
                  lat: 51.44268771466949,  
                  lng:-2.5792914306815056 
                         },
                          map,
                          title: "bloop",
                          icon: {
                                  url:"images/shop-svg.svg",
                                 scaledSize:  new google.maps.Size(38, 31)
            }},

     {

          position: { 
                      lat:51.46922180273486,   
                      lng:-2.5780361005702144 
                          },
                           map,
                          title: "Better Food",
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

}




