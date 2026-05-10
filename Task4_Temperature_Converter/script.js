function convertTemperature(){

    const temperature =
        parseFloat(
            document.getElementById("temperature").value
        );

    const fromUnit =
        document.getElementById("fromUnit").value;

    const toUnit =
        document.getElementById("toUnit").value;

    const result =
        document.getElementById("result");

    if(isNaN(temperature)){

        result.innerText =
            "Please enter a valid number.";

        return;
    }

    let convertedTemp;

    if(fromUnit === toUnit){

        convertedTemp = temperature;

    }else{

        switch(fromUnit){

            case "celsius":

                if(toUnit === "fahrenheit"){

                    convertedTemp =
                        (temperature * 9/5) + 32;

                }else if(toUnit === "kelvin"){

                    convertedTemp =
                        temperature + 273.15;
                }

                break;

            case "fahrenheit":

                if(toUnit === "celsius"){

                    convertedTemp =
                        (temperature - 32) * 5/9;

                }else if(toUnit === "kelvin"){

                    convertedTemp =
                        ((temperature - 32) * 5/9)
                        + 273.15;
                }

                break;

            case "kelvin":

                if(toUnit === "celsius"){

                    convertedTemp =
                        temperature - 273.15;

                }else if(toUnit === "fahrenheit"){

                    convertedTemp =
                        ((temperature - 273.15)
                        * 9/5) + 32;
                }

                break;
        }
    }

    result.innerText =
        `${convertedTemp.toFixed(2)} °`;
}