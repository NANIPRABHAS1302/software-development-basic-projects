function generatePattern(){

    const pattern =
        document.getElementById("patternType").value;

    const size =
        parseInt(document.getElementById("size").value);

    const output =
        document.getElementById("output");

    let result = "";

    switch(pattern){

        case "pyramid":

            for(let i=1;i<=size;i++){

                result += " ".repeat(size-i);

                result += "* ".repeat(i);

                result += "\n";
            }

            break;

        case "reverse":

            for(let i=size;i>=1;i--){

                result += "* ".repeat(i);

                result += "\n";
            }

            break;

        case "diamond":

            for(let i=1;i<=size;i++){

                result += " ".repeat(size-i);

                result += "* ".repeat(i);

                result += "\n";
            }

            for(let i=size-1;i>=1;i--){

                result += " ".repeat(size-i);

                result += "* ".repeat(i);

                result += "\n";
            }

            break;

        case "number":

            for(let i=1;i<=size;i++){

                for(let j=1;j<=i;j++){

                    result += j + " ";
                }

                result += "\n";
            }

            break;

        case "hollow":

            for(let i=1;i<=size;i++){

                for(let j=1;j<=2*size-1;j++){

                    if(
                        j === size-i+1 ||
                        j === size+i-1 ||
                        i === size
                    ){
                        result += "*";
                    }else{
                        result += " ";
                    }
                }

                result += "\n";
            }

            break;
    }

    output.innerText = result;
}