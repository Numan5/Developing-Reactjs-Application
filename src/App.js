import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import Header from "./componenets/Header";


let randomNum =Math.floor(Math.random()*100) +1;

export default function App() {
    const[userGuess,setUserGuess]=useState("");
    const[userCount,setUserCount]=useState(0)
    const[userAllGuessesVal,setUserAllGuessesVal]=useState([])
    const[randomnumber,setRandomnumber]=useState(randomNum)
    const[msg,setMsg]=useState("")
    const[disbaled,setDisbaled]=useState(false)
    const[LowHighMsg,setLowHighMsg]=useState("")
    const handlerValueChange= (e)=>{
        setUserGuess(e.target.value)
    };

    const submitHandler =( )=>{
        if(+randomnumber === +userGuess){
            setMsg(" Tebrikler kazandınız")
            setDisbaled(true)
            setLowHighMsg(" Tahmininiz başarılı")
        }else if(userCount==6){
            setMsg("Oyun Bitti Kazanamadınız");
            setDisbaled(true)
            setLowHighMsg(" Tahminleriniz başarısız")
        }else{
            setMsg("Yanlış Değer Girdiniz")
            if(randomNum<userGuess){
                setLowHighMsg("büyük sayı girdiniz küçültün")
            }if (randomNum>userGuess) {
                setLowHighMsg("küçük sayı girdiniz büyültün")
            }{

            }
        }
        setUserCount(userCount+1)
        setUserAllGuessesVal([...userAllGuessesVal,userGuess])
    }
    const restartAgain =() =>{
        setDisbaled(false)
        setMsg("")
        setUserAllGuessesVal([])
        setUserCount(0)
        setRandomnumber(Math.floor(Math.random()*100) +1)
        setUserGuess("")
        setLowHighMsg("")
    }
  return (

      <div style={{
        display:"flex",
        alignItems:"center",
         flexDirection:"column",
        justifyContent:"center",
        width:"100%",
        height:"100vh",


      }}

      >
          <Header/>
        <h1>SAYI TAHMİN OYUNU </h1>

          <br />
          <input disabled={disbaled} value={userGuess} type="text" onChange={handlerValueChange}/>
          <br />
          <button disabled={disbaled} onClick={submitHandler}>Submit</button>
          {disbaled && <button onClick={restartAgain}>Yeniden Oyna</button> }
          <div>

              <p>Mesaj:{msg}</p>
              <p>Tahmin Ettiğiniz Sayı:{LowHighMsg}</p>
              <p>Toplam Girdiğiniz Değer Sayısı: {userCount} </p>

              <p>Senin tahminin:
                  {userAllGuessesVal?.map((item,index) => {
                      return <span key={index}>{item},{ }</span>

                  })}
                      </p>
                  </div>
                  </div>
  );
}


