export const WeatherApp = () => {

    const urlBase = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "081ebcc8304309f816fa1678d0ccc229"
    const difKelvin = 273.15

    
 
    return (
        <div  className="container">
            <h1>Weather React App</h1>
            <form>
                <input type="text" placeholder="Ingresa una ciudad" />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

