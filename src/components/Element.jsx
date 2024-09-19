import React, { useState } from "react";

function Element() {
    const [popup, SetpopUp] = useState(false);
    const [guessInput, SetguessInput] = useState("");
    const [correctNumber, setCorrectNumber] = useState(
        Math.floor(Math.random() * 15) + 1
    );
    const [feedback, setFeedback] = useState("Best Of Luck. 😊");
    const [guess_counter, set_guess_couter] = useState(0);
    const [guess_no, set_guess_no] = useState(0);

    const [intial_guess, setintial_guess] = useState("Guess numbers is");
    const [no_of_guess, setno_of_guess] = useState("No. of Guess");
    const [popMsg, set_popMsg] = useState("Empty Value");

    const [darkmode, setDarkMode] = useState(true);

    const dark_mode_logo_link =
        "https://icons.iconarchive.com/icons/custom-icon-design/mono-business/128/bulb-icon.png";
    const light_mode_logo_link =
        "https://icons.iconarchive.com/icons/pixelkit/swanky-outlines/128/15-Light-Bulb-icon.png";

    const toggleDarkMode = () => {
        setDarkMode((darkmode) => !darkmode);
        // alert(darkmode?'light mode' : "dark Mode");
    };

    const popUpShow = (bool, msg) => {
        SetpopUp(bool);
        set_popMsg(msg);
    };

    const handle_reset_btn = () => {
        if (feedback === "CONGRATULATION 🏆 😇 😍") {
            SetguessInput("");
            set_guess_couter(0);
            set_guess_no(0);
            setCorrectNumber(Math.floor(Math.random() * 15) + 1);
            setFeedback("Best Of Luck. 😊");
        } else {
            popUpShow(true, "Try To Guess");
        }
    };

    const handle_Guess = () => {

        console.log(correctNumber);
        if (guessInput.length > 15) {
            popUpShow(true, "Length Error");
            SetguessInput("");
            return;
        }

        if (guessInput == "") {
            popUpShow(true, "Empty Value");
            return;
        }

        const guess = parseInt(guessInput);

        if (guess < 1) {
            popUpShow(true, "Guess Number Must Be Positive");
            return;
        }

        if (correctNumber === guess) setFeedback("CONGRATULATION 🏆 😇 😍");
        else if (guess > correctNumber)
            setFeedback(" GUESS NUMBER IS GREATER 😂 🤫 ");
        else if (guess < correctNumber)
            setFeedback(" GUESS NUMBER IS LESS : 😅 🤭 🤥");

        set_guess_couter((prev) => prev + 1);
        set_guess_no(guess);
        setintial_guess("Guess Attempt");
        setno_of_guess("Guess number ");


    };

    let className_popUP = `w-screen h-screen   justify-center items-center z-10 fixed   backdrop-blur-md  flex ${popup ? "" : "hidden"
        } `;
    let className_main_Container = `${darkmode ? "bg-slate-950" : "bg-[#2AC0DA]"
        }  w-screen h-screen `;
    let popup_Class = `z-10 w-[60%] h-28 md:h-32  md:w-[30%] border-2  ${darkmode ? "border-black" : "border-white"
        }    ${darkmode ? "bg-red-950" : "bg-red-600"} rounded-md `;
    let popup_class_text = `${darkmode ? "text-slate-300" : "text-white"}`;

    return (

        <div id="main_container" className={className_main_Container}>

            <div id="wrapper_popup" className={className_popUP}>
                <div id="popup" className={popup_Class}>
                    <div
                        id="symbol"
                        className="flex justify-end   hover:cursor-pointer  pr-5 pt-2"
                    >
                        <p
                            onClick={() => SetpopUp(false)}
                            className={`text-xl md:text-2xl font-bold ${popup_class_text}  hover:text-[#2ABFD9]`}
                        >
                            X
                        </p>
                    </div>

                    <div
                        id="wrapper"
                        className="flex justify-center mt-2 md:mt-5  h-auto items-center"
                    >
                        <div
                            className={`${popup_class_text} text-lg md:text-xl text-center font-bold`}
                        >
                            {popMsg}
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="wrapper"
                className="flex justify-center flex-col items-center z-[-1] h-screen"
            >

                <div
                    id="container_title"
                    className="w-[80%] md:w-[50%] mb-2 md:mb-5 h-10"
                >
                    <div
                        id="title"
                        className={`${darkmode ? "bg-[#8ddad531]" : "bg-[#8DDAD5]"
                            }  rounded-xl flex justify-between items-center md:px-20 px-8`}
                    >
                        <p
                            className={`text-xl  font-semibold px-10 py-1 md:text-2xl md:px-16 md:font-bold md:py-[6px]  ${darkmode ? "text-yellow-100" : "text-black"
                                }`}
                        >
                            Number Guessing Game
                        </p>

                        <div
                            id="img_wrapper"
                            className="text-white bg-white w-[30px] h-[30px]  md:w-[35px] md:h-[35px] hover:cursor-pointer rounded-lg"
                        >
                            <img
                                onClick={toggleDarkMode}
                                src={darkmode ? dark_mode_logo_link : light_mode_logo_link}
                            />
                        </div>
                    </div>
                </div>

                <div
                    id="container_element"
                    className={`w-[70%] h-[55%] md:w-[40%] md:h-[66%]  rounded-lg ${darkmode ? "bg-slate-700" : "bg-[#FFFFFF]"
                        } `}
                >
                    <div id="box" className="flex justify-center flex-col items-center">
                        <div
                            id="title_name"
                            className={`${darkmode ? "text-white" : "text-black"
                                } mt-5  md:text-2xl  md:font-bold md:mt-16 text-lg font-semibold `}
                        >
                            Guess the number between 1-15
                        </div>

                        <div id="input" className="mt-5">
                            <input
                                onChange={(e) => SetguessInput(e.target.value)}
                                type="number"
                                value={guessInput}
                                className={`md:border-2 md:h-8 md:px-3 md:mt-2 rounded-lg border-2 pl-[15px] 
                                 py-[2px] w-40 md:w-56 h-7  font-bold
                                 ${darkmode ? "border-white" : "border-black"
                                    } ${darkmode ? "bg-slate-400" : ""}  no-spinner
                                `}
                            />
                        </div>

                        <div
                            id="button"
                            className="mt-5  flex flex-col justify-center items-center md:justify-around md:flex-row w-80"
                        >
                            <div
                                id="guess"
                                onClick={() => handle_Guess(guessInput)}
                                className="text-white  text-xl w-32 md:text-lg bg-[#2944CE] 
                  p-2 rounded-xl md:w-32 text-center uppercase
                
                 hover:bg-[#2AC0DA] hover:cursor-pointer hover:text-black 
                 font-semibold hover:transition-all hover:ease-in hover:duration-75"
                            >
                                Guess
                            </div>

                            <div
                                id="reset"
                                onClick={() => handle_reset_btn()}
                                className="text-white text-xl mt-3 md:mt-0 w-32  bg-[#2944CE] p-2 uppercase   
                 md:text-lg md:w-32 text-center 
                
                hover:cursor-pointer rounded-xl hover:bg-[#2AC0DA] hover:text-black font-semibold
                 hover:transition-all hover:ease-in hover:duration-75"
                            >
                                Reset
                            </div>
                        </div>
                    </div>

                    <div
                        id="container_result"
                        className="w-[90%]  mt-5 ml-5  md:mt-8 md:ml-4 md:w-[90%] h-auto"
                    >
                        <div
                            id="title"
                            className={`${darkmode ? "bg-slate-600" : "bg-white"
                                }  shadow-2xl p-1 md:p-3 rounded-md flex flex-col justify-center items-center`}
                        >
                            <p
                                className={`text-xl md:text-2xl ${darkmode ? "text-white" : "text-black"
                                    }  font-semibold`}
                            >
                                {intial_guess} : {guess_counter}
                            </p>

                            <p
                                className={`text-xl md:text-2xl ${darkmode ? "text-white" : "text-black"
                                    } font-semibold`}
                            >
                                {no_of_guess} : {guess_no}
                            </p>
                        </div>
                    </div>

                    <div
                        id="feedback"
                        className={`rounded-lg w-[90%]  ${darkmode ? "bg-slate-600" : ""
                            } flex justify-center ml-5 mt-3 md:mt-5`}
                    >
                        <p
                            className={` text-[17px] font-semibold md:text-2xl  ${darkmode ? "text-white" : "text-[#2944CE]"
                                } md:font-bold p-3 shadow-2xl`}
                        >
                            {feedback}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Element;
