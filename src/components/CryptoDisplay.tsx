import { useMemo } from "react";
import { useCryptoStore } from "../store"
import Spinner from "./Spinner";


export default function CryptoDisplay() {


  const result = useCryptoStore(state => state.result);
  const loading = useCryptoStore(state => state.loading);
  const hasResult = useMemo( ()=> !Object.values(result).includes('') , [result])

  console.log(loading)

  return (
    <div className="result-wraper">
      { loading ? <Spinner/> : hasResult && (
        <>
          <h2>Cotizacion</h2>
          <div className="result">
              <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt='Image Compare' />
            <div>
              <p>El precio es de <span>{result.PRICE}</span></p>
              <p>El mas alto del dia   <span>{result.HIGHDAY}</span></p>
              <p>El mas bajo del dia  <span>{result.LOWDAY}</span></p>
              <p>El cambio en las ultimas 24 horas es de <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Ultima actualizacion <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        
        </>
      )}
    </div>
  )
}
