import React, {useRef, useState} from 'react';
import './App.css';

function App() {

  const paino : any = useRef<HTMLInputElement>();

  const pituus : any = useRef<HTMLInputElement>();

  const [aliyli, setAliYli] = useState<string>("");

  const [indeksi, setIndeksi] = useState<any>();

  const [tyyli, setTyyli] = useState<string>("");

  const viesti = () : void => {
    let vastaus = (parseInt(paino.current.value) / (parseInt(pituus.current.value)/100 * parseInt(pituus.current.value)/100)).toFixed(2)
    if (parseInt(vastaus) <= 18.5){
      setAliYli("Sinulla on alipainoa")
      setTyyli("punainen")
    } 
    if (parseInt(vastaus) > 18.5 && parseInt(vastaus) <= 25){
      setAliYli("Olet normaalipainoinen")
      setTyyli("vihrea")
    } 
    if (parseInt(vastaus) > 25 && parseInt(vastaus) <= 30){
      setAliYli("Sinulla on lievää lihavuutta")
      setTyyli("keltainen")
    } 
    if (parseInt(vastaus) > 30 && parseInt(vastaus) <= 35){
      setAliYli("Sinulla on merkittävää lihavuutta")
      setTyyli("keltainen")
    } 
    if (parseInt(vastaus) > 35 && parseInt(vastaus) < 40){
      setAliYli("Sinulla on vaikeaa lihavuutta")
      setTyyli("punainen")
    } 
    if (parseInt(vastaus) >= 40){
      setAliYli("Sinulla on sairaalloista lihavuutta")
      setTyyli("punainen")
    } 
    setIndeksi(`Painoindeksisi on ${vastaus}`)
  }


  return (
    <>
      <div className="wrapper">
        <h1>Painoindeksilaskuri</h1>

        <input 
        ref={pituus}
        type="text" 
        placeholder="Anna pituus(cm)..."
         />
         <br></br>
        <input 
        ref={paino}
        type="text"
        placeholder="Anna paino(kg)..."
         />
         <br></br>
        <button onClick={viesti}>Laske painoindeksi</button>

        <div className={tyyli}>
          <p>{indeksi}</p>
          <p>{aliyli}</p>
        </div>
      </div>
    </>
  );
}

export default App;
