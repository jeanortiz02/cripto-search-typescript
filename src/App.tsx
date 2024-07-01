import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoDisplay from "./components/CryptoDisplay";

function App() {

  const fetchCryptos = useCryptoStore( state => state.fetchCryptos);

  useEffect( () => {
      fetchCryptos();
  })
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span className="">Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm/>
          <CryptoDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
