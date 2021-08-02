function modaldatos(){
    Swal.fire({
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<a href="www.google.com" class="botonbuscar"><i class="fas fa-search"></i> Buscar!</a>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'cerrar',
        cancelButtonAriaLabel: 'Thumbs down'
      })}


// api del clima


const API_KEY=`3b8251219f3964408f0b2f21acfb80c2`
    const fetchData = position => {
        const {latitude , longitude} = position.coords;
        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
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
  
    
  