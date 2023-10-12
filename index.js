const clock=document.querySelector(".clock");

let sec=0,min=0,hr=0;
let intervalId;

const startWatch=()=>{
     intervalId=setInterval(()=>{
        if(sec<59){
            sec++;
        }else if(min>=59){
            hr++;
            min=0;
        }else{
            sec=0;
            min++;
        };

        const second=String(sec).padStart(2,"0");
        const minute=String(min).padStart(2,"0");
        const hour=String(hr).padStart(2,"0");

        

        clock.innerText=`${hour}:${minute}:${second}`;


    },1000);
}

const stopWatch=()=>{
    clearInterval(intervalId);
};

const reset=()=>{
  
    clock.innerText="00:00:00";
    sec="00";
    min="00";
    hr="00";

};