
// get API Using Axios JS By Cities In Egypt
function GetDateOfSalaah(myCity){
    axios.get("http://api.aladhan.com/v1/timingsByCity",{
    params:{
        country:"EG",
        city: myCity
    }
})
.then((response)=>{
    console.log(response.data);
    let timeOfSalaah = response.data.data.timings;
    document.querySelector(".fjr h4").innerHTML = timeOfSalaah.Fajr;
    document.querySelector(".shorouck h4").innerHTML = timeOfSalaah.Sunrise;
    document.querySelector(".dohr h4").innerHTML =timeOfSalaah. Dhuhr;
    document.querySelector(".asr h4").innerHTML = timeOfSalaah.Asr;
    document.querySelector(".maghreb h4").innerHTML = timeOfSalaah.Maghrib;
    document.querySelector(".eshaa h4").innerHTML = timeOfSalaah.Isha;
    document.querySelector(".contry-city h4").innerHTML = response.data.data.date.hijri.date +" "+response.data.data.date.hijri.weekday.ar;
    
    

});
}

//Build options Of Select (City Name Arabic And English )
let list =   document.querySelector(".list");
const cities = [
    {
        ArabicName:"القاهرة",
        name:"Cairo"
    },
    {
        ArabicName:"أسيوط",
        name:"Asyut"
    },
    {
        ArabicName:"المنيا",
        name:"Minya"
    },
    {
        ArabicName:"الدقهلية",
        name:"Sohag"
    },
    {
        ArabicName:"سوهاج",
        name:"Dakahlia"
    },
    {
        ArabicName:"البحر الأحمر",
        name:"Red Sea"
    },
    {
        ArabicName:"البحيرة",
        name:"Beheira"
    },
    {
        ArabicName:"الفيوم",
        name:"Faiyum"
    },
    {
        ArabicName:"الغربية",
        name:"Gharbia"
    },
    {
        ArabicName:"الإسكندرية",
        name:"Alexandria"
    },
    {
        ArabicName:"الإسماعيلية",
        name:"Ismailia"
    },
    {
        ArabicName:"الجيزة",
        name:"Giza"
    },
    {
        ArabicName:"المنُوفيّة",
        name:"Monufia"
    },
    {
        ArabicName:"القليوبية",
        name:"Qalyubia"
    },
    
    {
        ArabicName:"الأقصر",
        name:"Luxor"
    },
    {
        ArabicName:"الوادي الجديد",
        name:"New Valley"
    },
    {
        ArabicName:"السويس",
        name:"Suez"
    },
    {
        ArabicName:"الشرقية",
        name:"Al Sharqia"
    },
    {
        ArabicName:"أسوان",
        name:"Aswan"
    },
    {
        ArabicName:"بني سويف",
        name:"Beni Suef"
    },
    {
        ArabicName:"بورسعيد",
        name:"Port Said"
    },
    {
        ArabicName:"دمياط",
        name:"	Damietta"
    },
    {
        ArabicName:"جنوب سيناء",
        name:"South Sinai"
    },
    {
        ArabicName:"كفر الشيخ",
        name:"Kafr el-Sheikh"
    },
    {
        ArabicName:"مطروح",
        name:"Matrouh"
    },
    {
        ArabicName:"قنا",
        name:"Qena"
    },
    {
        ArabicName:"شمال سيناء",
        name:"North Sinai"
    }
  
    
    ];
for(city of cities){
 
  list.innerHTML +=`
    <option>${city.ArabicName}</option>`;
}
GetDateOfSalaah("Cairo");

list.addEventListener("change",()=>{
     document.querySelector(".cont ").classList.add("hide");
     
     for(mycitys of cities)
     {
        if(mycitys.ArabicName == list.value)
        {
            GetDateOfSalaah(mycitys.name);
            document.querySelector(".mycity").innerHTML = mycitys.ArabicName
        }
   
     }
     document.querySelector(".loader").classList.remove("hide");
     setTimeout(() => {
        document.querySelector(".loader").classList.add("hide");
        document.querySelector(".cont ").classList.remove("hide");
     }, 1500);
});


