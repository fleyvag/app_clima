function modaldatos(){
    Swal.fire({
        html:
        'Desarrollador por <b>Frank Anthony Leyva Gomez  </b><br>, ' +
        'Api usada '+
        '<a href="https://openweathermap.org/">openweather</a> ' +
        'Deseas ver el código fuente?',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<a href="https://github.com/fleyvag/app_clima" class="botonbuscar"><i class="fas fa-arrow-left"></i> ir!!!</a>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'cerrar',
        cancelButtonAriaLabel: 'Thumbs down'
      })}


// api del clima


const API_KEY=`3b8251219f3964408f0b2f21acfb80c2`
    const fetchData = position => {
        const {latitude , longitude} = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response =>response.json())//pasamos a  json
        .then(data=>setWeatherData(data)) //mostramos en consola
        // console.log(position);
        }
    const setWeatherData = data =>{
      console.log(data)
      const weatherData={
        location:data.name,
        temperature:data.main.temp,
        humidity:data.main.humidity,
        pressure:data.main.pressure,
      }
      console.log(weatherData)
      Object.keys(weatherData).forEach(key =>{
        document.getElementById(key).textContent=weatherData[key];
      });
    }
    const onload = () => {
        navigator.geolocation.getCurrentPosition(fetchData);
        
    }
  
    
  