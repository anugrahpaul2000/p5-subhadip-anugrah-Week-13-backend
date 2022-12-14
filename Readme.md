# Assignment Weather App
* Create a backend service in NodeJs.
* Design the architecture of your service.
* Understand what all Design Patterns you are gonna use in the service.
* Review above 2 points by your mentor.
* Start Creating following Api's:
    *  Data of Multiple cities
        * Api which returns weather data of multiple cities.
        * Api also filters the result by city name or city code.
        * Api should return the data in pagination.
    * Detailed Forecast for the next X days.
        * X days should be decided by the user.
        * Data should be very detailed.
    * Filter the data by any particular city, any particular date, any particular moment.
    * Current weather conditions of any particular city.
* For Weather free api, please visit any of below free services
> * https://openweathermap.org/api
    >   * Api Docs - https://openweathermap.org/api
    >   * How to use - https://openweathermap.org/appid

>* https://www.weatherapi.com/
    >    * Api Docs -https://www.weatherapi.com/docs/
    >    * How to use -https://www.weatherapi.com/docs/

## Guidelines:
---
* Before creating an api's review architect of your service and design pattern by your Mentor.
* Push all your code in a separate Github repo.
* Don't push all your code in a single go.
* Don't push your code in the master branch. Create a separate branch for your code.
* Push your code every part wise.
* Get reviewed all your code by your mentor.
* After review, get your code merged by your mentor.

---
# How to Use:

> Create a **.env** file in the root directory.  
> * __**NODE_ENV**__ with value being **`production`** or **`development`** as per use.
## Note: By Default goes into the Development Mode.

## ENDPOINTS:
---

### Base URL Production: `localhost:4000`
### Base URL Development: `localhost:6000`

### Required Params:  
* latitude (`XX.XX`)
* longitude (`XX.XX`)

> ## **Current**
> Required Params:  
> * date (YYYY-MM-DD)

* `/current/summary`
* `/current/hourly`

> ## **Forecast**
> Required Params:  
> * start_date (YYYY-MM-DD)
> * end_date (YYYY-MM-DD)

* `/forecast/summary`
* `/forecast/hourly`

> ## **History**
> Required Params:  
> * start_date (YYYY-MM-DD)
> * end_date (YYYY-MM-DD)

* `/history/summary`
* `/history/hourly`

> Required Params:  
> * past_days (int)

* `/history/days/summary`
* `/history/days/hourly`