
//function to call the Google sheets api
let alldata = [];
let tableData = [];
let url = 'https://api.sheety.co/3d408acfbea2c1fd2fc688d1b38bdd28/plasticFreeme/sheet1';
let list = document.querySelector(".main-table-container");
let currentPage = 1;
let itemsPerPage = 10;
let numberOfPages = Math.ceil(alldata.length / itemsPerPage);

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let page = document.getElementById("page");




//reset counting

function resetPaging(arrayLength = alldata.length) {
    currentPage = 1;  
  numberOfPages = Math.ceil(arrayLength / itemsPerPage);
  doPaging();
}


function getRows() {
 fetch(url)
 .then(response => response.json())
  .then(data => {
    alldata = data["sheet1"];
    tableData = [...alldata];
    resetPaging();
   });
}



//filter data

function processform(e) {
  e.preventDefault();
 const userInput = document.getElementById("search").value;
 const filteredData = alldata.filter(tableRow => 
  tableRow.location && tableRow.location.toLowerCase().trim() === userInput.toLowerCase().trim());
  
  tableData = [...filteredData];
  resetPaging(filteredData.length);
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
  makeTable(tableData.slice((currentPage - 1) * itemsPerPage, 
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



let autocomplete;
function initAutocomplete() {
 autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ['establishment'],
      componentRestrictions : {'country' : ['UK']},
      fields: ['place_id', 'geometry', 'name']

    });
}


//creating the google map and positioning the markers for every shop on the map

// function initMap() {
//   const brighton = { lat:50.888212725751195 , lng: -0.20438173195189485 };
//    const map = new google.maps.Map(document.getElementById("map"), {
//     mapId: "576aba331fc3dae5",
//     zoom: 13,
//     center: brighton,
//   });


  function initMap() {
    const london = { lat:  51.51261285783822, lng: -0.09126810397204964 };
     const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "576aba331fc3dae5",
      zoom: 13,
      center: london,
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
 }}, 

                       
  {

  position: { 
      lat: 52.591695510305826,  
       lng:-1.984273607955484
          },
          map,
          title: "Earth Refills",
           icon: {
            url:"images/shop-svg.svg",
           scaledSize:  new google.maps.Size(38, 31)
    }},


    {

      position: { 
              lat:  52.447282841495465,  
              lng:  -1.8877931613630108  
               },
                map,
                title: "The Clean Kilo",
                icon: {
                   url:"images/shop-svg.svg",
                   scaledSize:  new google.maps.Size(38, 31)
   }},


  {

      position: { 
                lat:   52.33395734229335, 
                lng:   -2.0617892386369894
                 },
                   map,
                   title: "Nature's Intention",
                   icon: {
                       url:"images/shop-svg.svg",
                       scaledSize:  new google.maps.Size(38, 31)
      }},
      
  
   {

          position: { 
                      lat:    52.53493297903672,
                      lng:   -1.9019355255933532
                        },
                           map,
                               title: "Pedalling Pantry",
                                icon: {
                                     url:"images/shop-svg.svg",
                                     scaledSize:  new google.maps.Size(38, 31)
              }}, 

     {      
       
    position: { 
                lat:  55.85911193888026, 
                lng:   -4.217777410806558
                  },
                     map,
                         title: "Zero Waste Market",
                          icon: {
                               url:"images/shop-svg.svg",
                               scaledSize:  new google.maps.Size(38, 31)
        }},    
                 
  {      
       
    position: { 
                  lat: 55.827931874570474, 
                  lng: -4.257410363073656
                      },
                          map,
                              title: "THE GOOD CHOICE",
                              icon: {
                                     url:"images/shop-svg.svg",
                                     scaledSize:  new google.maps.Size(38, 31)
              }},           
   
    {      
       
        position: { 
             lat: 55.838623599521874,
              lng:   -4.264071684659248  
                  },
                  map,
                  title: "Locavore Govanhill",
                  icon: {
                    url:"images/shop-svg.svg",
                     scaledSize:  new google.maps.Size(38, 31)
            }},
            
  {
                          
      position: { 
            lat: 55.87132720762599,
            lng: -4.305115684659248   
              },
              map,
              title: "Ecomart",
              icon: {
                  url:"images/shop-svg.svg",
                  scaledSize:  new google.maps.Size(38, 31)
        }},

    {
                          
         position: { 
              lat:  53.39472115942309,
              lng:  -2.9698216460222584  
              },
                 map,
                 title: "Refill",
                    icon: {
                        url:"images/shop-svg.svg",
                        scaledSize:  new google.maps.Size(38, 31)
    }},                                                        


      {
                          
        position: { 
              lat: 53.39312810875887,
              lng:  -3.017660561363011 
                  },
                      map,
                      title: "Waste Not Want Not",
                      icon: {
                          url:"images/shop-svg.svg",
                          scaledSize:  new google.maps.Size(38, 31)
         }},

{
                          
      position: { 
          lat: 53.48367733194922,
          lng: -2.965897322726021  
              },
               map,
              title: "Little World",
              icon: {
                 url:"images/shop-svg.svg",
                scaledSize:  new google.maps.Size(38, 31)
     }},                                
                                                                                                                
{
                          
   position: { 
          lat: 53.379496593296174,
          lng: -2.949264453977741 
              },
                map,
                title: "Windmill Wholefoods",
                icon: {
                   url:"images/shop-svg.svg",
                  scaledSize:  new google.maps.Size(38, 31)
   }},
           

  {
                          
      position: { 
          lat: 53.40311578878101,
          lng: -2.9765800778441935 
               },
                 map,
                 title: "Shared Earth",
                  icon: {
                   url:"images/shop-svg.svg",
                   scaledSize:  new google.maps.Size(38, 31)
         }},

{
                          
    position: { 
        lat:  50.790469612921555,
        lng: -1.0869863687482795 
            },
               map,
                title: "The Package Free Larder",
                icon: {
               url:"images/shop-svg.svg",
                scaledSize:  new google.maps.Size(38, 31)
    }},

    {
                          
      position: { 
          lat:  50.78421806205957,
          lng: -1.0879883318219354
              },
                 map,
                  title: "Wild Thyme Wholefoods",
                  icon: {
                 url:"images/shop-svg.svg",
                  scaledSize:  new google.maps.Size(38, 31)
      }},
             
    {
                          
        position: { 
            lat: 50.838840077985815,
            lng: -0.7785911772739786   
                },
                   map,
                    title: "Refilled Chichester",
                    icon: {
                   url:"images/shop-svg.svg",
                    scaledSize:  new google.maps.Size(38, 31)
    }},
             
{
                          
   position: { 
        lat: 53.46444299230638,
        lng: -2.232001507385269
          },
             map,
             title: "Want Not Waste",
             icon: {
                url:"images/shop-svg.svg",
                scaledSize:  new google.maps.Size(38, 31)
  }},
  
  {
                          
    position: { 
         lat: 53.43269193417791,
         lng:  -2.2347471312517206
           },
              map,
              title: "Lentils and Lather",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.48341238662724, 
         lng: -2.2382307159109676
           },
              map,
              title: "McCall's Organics",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:  53.48291773012466, 
         lng: -2.2360357153407526
           },
              map,
              title: "Earth Friendly Rocker",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.447529895735045,
         lng: -2.196725453977742
           },
              map,
              title: "The Sustainable Shed, Levenshulme",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.447367051943885,
         lng: -2.276648100570215
           },
              map,
              title: "Unicorn Grocery",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.4493883161502,
         lng: -2.3529947153407527
           },
              map,
              title: "Goodness Zero Waste",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.412768943012615,
         lng: -2.205827284659247
           },
              map,
              title: "The Good Life",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.52628195977584,
         lng: -2.4004112778441935
           },
              map,
              title: "The Dispensary - Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.45368891173461,
         lng: -0.0979230329623655
           },
              map,
              title: "Jarr Market - Zero-waste shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.551378295173365,
         lng: -0.07232425397774192
           },
              map,
              title: "Fin And Earth",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:   51.45649550976293,
         lng:  0.011982492044516142
           },
              map,
              title: "Shop WithOut Packaging",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.55528703833717, 
         lng:  -0.06748437670376346
           },
              map,
              title: "Re:Store | Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.4682473794737,
         lng: -0.07228668465924731 
           },
              map,
              title: "Gather",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.55974318997415,
         lng: -0.12076843125172042
           },
              map,
              title: "Kilo | Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.58434505804645,
         lng: -0.11396411762161282
           },
              map,
              title: "Harmless Store Hornsey",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.45596069864345,
         lng: -0.09910087727397848
           },
              map,
              title: "Naked Larder",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.46382396726147,
         lng: -0.11102644659247311
           },
              map,
              title: "Sustenance Zero Waste Groceries",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.552624876669256,
         lng: -0.19198934602225806
           },
              map,
              title: "The Source Bulk Foods",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},
 
  
   {
                          
    position: { 
         lat:  51.64259775816292,
         lng:  -0.09601075397774192
           },
              map,
              title: "Refill@thegrange",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.476653279542596,
         lng: -0.20465133863698923 
           },
              map,
              title: "BYGRAM",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.54458594404806,
         lng: -0.025131338636989242
           },
              map,
              title: "Refill Therapy",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:  51.42896519266989,
         lng: -0.16579223068150536
           },
              map,
              title: "BYO",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.4188888336221,
         lng: -0.08276888522946235
           },
              map,
              title: "The Store Cupboard",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.48224478292816,
         lng: -0.008933784659247315
           },
              map,
              title: "Art of Zero Living",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.5320816901386,
         lng: -0.06614390795548386
           },
              map,
              title: "Get Loose Foods",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.60149496821715,
         lng: -0.19342213863698923
           },
              map,
              title: "Impact Store",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.45624825380855,
         lng:  -0.07605443863698924 
           },
              map,
              title: "Karavan Eco",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.452480345999966,
         lng:  -0.006760769318494618
           },
              map,
              title: "Mission Green",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:   51.51973415351984,
         lng:   -0.20765673068150542
           },
              map,
              title: "Liberté Chérie",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.43534271458803,
         lng:  -0.1279994846592473
           },
              map,
              title: "Healthier Without",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:   51.49126307457699,
         lng:   -0.10004703863698924
           },
              map,
              title: "Fareshares",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:   51.46601971350405,
         lng:   -0.05777487727397849
           },
              map,
              title: "BYO Grocery",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:  51.40926764192497,
         lng:  -0.038945861933225794
           },
              map,
              title: "Alexander Stores",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat: 51.52422907685081,
         lng: -0.03932419999999999
           },
              map,
              title: "Queen Mary - Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.4630412136061,
         lng:  -0.11159892329623657
           },
              map,
              title: "Weigh and Pay - Zero Waste",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.566504793308894,
         lng: -0.12086017727397848
           },
              map,
              title: "Forrist",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.42759719738504,
         lng: -0.33260208465924734
           },
              map,
              title: "The Refill Larder",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 51.54359562596094,
         lng: -0.14814408522946235
           },
              map,
              title: "Organico Camden",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.51827491016798,
         lng: -0.1313273698887097
           },
              map,
              title: "Planet Organic",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  51.565435918935236,
         lng: -0.3535685227260215
           },
              map,
              title: "Hero Market",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:  53.38104077121887,
         lng:  -1.4876660693184944
           },
              map,
              title: "Our Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


   {
                          
    position: { 
         lat:  53.38444823242503,
         lng:  -1.5081141767037634
           },
              map,
              title: "Unwrapped Ltd",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.36104458810318,
         lng:  -1.479206007955484
           },
              map,
              title: "The Bare Alternative",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},
 
  {
                          
    position: { 
         lat: 53.327010665702616,
         lng:  -1.539902638636989
           },
              map,
              title: "It\'s All About ECO",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.37646163590927,
         lng: -1.4747954232962366
           },
              map,
              title: "Grape Tree",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.38578583584569,
         lng: -1.4934736625034406
           },
              map,
              title: "Beanies Wholefoods",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat: 53.391181478307004,
         lng: -1.4724775232962364
           },
              map,
              title: "Anything But Plastic",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }}, 


   {
                          
    position: { 
         lat: 53.391181478307004,
         lng: -1.4724775232962364
           },
              map,
              title: "Anything But Plastic",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},
   
   {
                          
    position: { 
         lat: 53.364598677032156,
         lng: -1.5080530232962366
           },
              map,
              title: "Porter Valley",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.797005082427916,
         lng: -1.5406371170513977
           },
              map,
              title: "ecoTopia Leeds",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }}, 

   {
                          
    position: { 
         lat: 53.831535642824065,
         lng: -1.5367299170513975
           },
              map,
              title: "The Refilling Station",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }}, 

  {
                          
    position: { 
         lat:  53.815431588610714,
         lng:  -1.5610244386369896
           },
              map,
              title: "Leeds Refills Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.79745277246896,
         lng:  -1.5371390477329032
           },
              map,
              title: "Panda Refills - Zero Waste Shop",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},

   {
                          
    position: { 
         lat:  53.79480291422627,
         lng:  -1.387671046592473
           },
              map,
              title: "Refill and go",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }}, 

   {
                          
    position: { 
         lat: 53.83241644190296,
         lng: -1.6407584465924734
           },
              map,
              title: "Zerø Muda",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }}, 

  {
                          
    position: { 
         lat:  55.938966182592175,
         lng: -3.1784617539777424
           },
              map,
              title: "The Refillery",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},


 {
                          
    position: { 
         lat:  55.97082725083714, 
         lng: -3.207311439207204
           },
              map,
              title: "The Good Store Edinburgh",
              icon: {
                 url:"images/shop-svg.svg",
                 scaledSize:  new google.maps.Size(38, 31)
   }},
  
  
 {
                          
  position: { 
       lat:  55.96405080456445,
       lng:  -3.177626323296237
         },
            map,
            title: "Weigh To Go",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 55.94615844639029,
       lng: -3.2028302323921505
         },
            map,
            title: "Zero Waste Hub (by SHRUB Coop)",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 55.97754023488941,
       lng: -3.171121200570215
         },
            map,
            title: "Bambú Living Sustainably",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 52.20558224989846,
       lng:  0.13448531534075267
         },
            map,
            title: "Full Circle",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 52.214449062430646,
       lng: 0.12565811534075272
         },
            map,
            title: "Radmore Farm Shop",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat:  52.201971893238344,
       lng:  0.13355556136301075
         },
            map,
            title: "Arjuna Wholefoods",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 52.233053113114565, 
       lng: 0.13507033863698922
         },
            map,
            title: "Daily Bread Co-operative",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.758457194234026,
       lng: -1.2623109005702149
         },
            map,
            title: "OxUnboxed",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.736727896976774,
       lng: -1.2226007852294623
         },
            map,
            title: "Flo's Refill Shop",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.81642451859905,
       lng: -1.3107947778441933
         },
            map,
            title: "The Village Refill & Zero Waste Shop",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat:  51.76021919989746,
       lng: -1.2125906073852688
         },
            map,
            title: "Headington Fairtrade",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 50.82921304280056,
       lng: -0.3748372693184946
         },
            map,
            title: "Best Health Food Shop",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 50.81168571851699,
       lng: -0.37214031591096774
         },
            map,
            title: "HISBE Food",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.61894743101191,
       lng: -3.983192747162688
         },
            map,
            title: "balance - responsible living (Zero Waste)",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.727250548255185,
       lng: -3.9908093771279174
         },
            map,
            title: "Root Zero",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }}, 


 {
                          
  position: { 
       lat: 51.57612424109878,
       lng: -4.000035453977742
         },
            map,
            title: "The Health Shop",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }}, 

 {
                          
  position: { 
       lat:  51.49458583465194,
       lng:  -3.1651002926147314
         },
            map,
            title: "Ripple Living",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},
 
 {
                          
  position: { 
       lat: 51.482444706574015,
       lng: -3.2022084926147314
         },
            map,
            title: "Little Green Stores",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.512583618365255,
       lng: -3.2181545693184948
         },
            map,
            title: "Iechyd da @ CF14",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.439603292817274,
       lng: -3.173658738636989
         },
            map,
            title: "Zero Penarth",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 51.572251321127546,
       lng: -3.2189366465924727
         },
            map,
            title: "plant2plate",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 54.582025673239514,
       lng: -5.947648239207204
         },
            map,
            title: "Refill Quarter",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 54.582025673239514,
       lng: -5.947648239207204
         },
            map,
            title: "Refill Quarter",
            icon: {
               url:"images/shop-svg.svg",
               scaledSize:  new google.maps.Size(38, 31)
 }},

 {
                          
  position: { 
       lat: 54.55760888356946,
       lng: -5.90976897116481
         },
            map,
            title: "Do Your Bit",
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




