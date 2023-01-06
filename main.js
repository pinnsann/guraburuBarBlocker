window.onload = () =>{
    barblock();
}

const barblock = async() =>{
    barClassName="_3CTtyx1weTpsYWGGPfcPYc z5cwqEHi5T8D9u8TPHH6m"
    marginClassName="SdEyhW_kE0xoDznTZ5Wr-"
    
    for(let i=0;i<100;i++){
        Array.prototype.slice.call(document.getElementsByClassName(marginClassName)).forEach((el)=>{el.style.margin='0px';});
        Array.prototype.slice.call(document.getElementsByClassName(barClassName)).forEach((el)=>{el.remove();});
        await wait(1);
    }
}

const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));