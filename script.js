            document.addEventListener("DOMContentLoaded", function() {
                console.log("The document is ready");
                const display = document.getElementById("calc-display");
                console.log(display);
                const buttons = document.getElementsByClassName("btn");
                let currentValue = "";

                function evaluateResult() {
                    const convertedValue = currentValue
                                                    .replace("x","*")
                                                    .replace('Sin','Math.sin')
                                                    .replace('Cos','Math.cos')
                                                    .replace('π','Math.PI')
                                                    .replace('ln','Math.log')
                    const result = eval(convertedValue);
                    currentValue = result;
                    currentValue = result.toString();
                    display.value = currentValue;
                }



                for (let i=0; i<buttons.length; i++) {
                    const button = buttons[i];
                    button.addEventListener('click',function() {
                        const value = button.innerText;
                        if (value == 'AC') {
                            currentValue = "";
                            display.value = currentValue;
                        }else if(value == '='){
                            evaluateResult();
                        }
                        else{
                            currentValue+=value;
                            display.value = currentValue;
                        }

                    })
                }
            })