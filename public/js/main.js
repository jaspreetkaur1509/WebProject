const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');
// const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');


const getinfo =async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&lat=44.34&lon=10.99&units=metric&appid=ce85ac4c9851f5bf0a5a1c579ac23010`;
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp.innerHTML = `${arrData[0].main.temp} <sup>o</sup>C`;

            const tempMood = arrData[0].weather[0].main;
            // console.log(data);


            //condition to check sunny or cloudy
            if(tempMood == "clear"){
                temp_status.innerHTML= 
                "<i class='fas fa-sun style= 'color: #eccc68;'></i>";
            } else if(tempMood == "clouds"){
                temp_status.innerHTML= 
                "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>";
            } else if(tempMood == "Rain"){
                temp_status.innerHTML= 
                "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
        } else {
            temp_status.innerHTML= 
                "<i class='fas fa-sun' style= 'color: #eccc68;'></i>";
        }
        datahide.classList.remove('data_hide');
        
    }catch{
            city_name.innerText = `plz enter the city  name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click', getinfo);