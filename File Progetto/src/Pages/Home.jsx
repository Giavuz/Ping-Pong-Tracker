const Home = () => {
  return (
    <>
      {/* <p className="grandeTesto">THE BEST PING PONG TRACKER</p> */}
      <div id="divideo">
        <video autoPlay muted loop id="videoback">
          <source src={require("../video/video_Trim.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="divDescr">
        <p className="pDescr">Un metodo <font color="#508CA4">rivoluzionario</font> di vedere il Ping Pong. Non lasciarti sfuggire l'opportunità di diventare un giocatore <font color="#508CA4">migliore</font></p>
      </div>
      <div className="divDescr2">
        <p className="pDescr2">È facile da utilizzare!</p>
        <p className="pDescr2"><b>Il Tracking si adatta a qualsiasi tavolo da Ping Pong</b> Inoltre il nostro sistema rende il gioco <b>più preciso e avvincente che mai.</b> Non devi essere un esperto di tecnologia per utilizzarlo!</p>
      </div>

      <div className="divProdotti">
        <h2 className="h2Prodotti">LE SUE APPLICAZIONI</h2>
        <div className="fakeScroll2"></div>
        <div className="fakeScroll"></div>
      </div>

      <div className="divImmagini">
        <table>
          <tr>
            <td>
              <div className="divCont">
                <a className="aHome" href="#">
                  <h1 className="h1Titolo">Allenamento<br />Guidato</h1>
                </a>
                <img className="imgProd" src="../img1.jpeg" />
                <p className="pProd">Migliora le tue skills, sia a casa, sia con il tuo coach!</p>
              </div>
            </td>

            <td>
              <div className="divCont">
                <a className="aHome" href="#">
                  <h1 className="h1Titolo">Arbitraggio<br />Automatico</h1>
                </a>
                <img className="imgProd" src="../img2.jpeg" />
                <p className="pProd">È possibile segnale in modo preciso e istantaneo l'assegnazione dei punti.</p>
              </div>
            </td>

            <td>
              <div className="divCont">
                <a className="aHome" href="#">
                  <h1 className="h1Titolo">Mappatura della<br />Pallina</h1>
                </a>
                <img className="imgProd" src="../img3.jpeg" />
                <p className="pProd">Grazie ad esso è possibile stabilire in tempo reale la posizione della pallina, facilitando anche l'arbitraggio!</p>
              </div>
            </td>

            <td>
              <div className="divCont">
                <a className="aHome" href="#">
                  <h1 className="h1Titolo">Utilizzabile<br />Ovunque</h1>
                </a>
                <img className="imgProd" src="../img4.jpeg" />
                <p className="pProd">Non solo nel Ping Pong! Il tracking è applicabile in ambiti nel quale seguire i movimenti degli oggetti nello spazio è utile, basti pensare ai magazzini! .</p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <img className="imgPerf" src="../group.jpg" />
      <div className="divPerf">
        <h2 className="h2Perf">IL PROGRESS ROUTE</h2>
        <h1 className="h1Perf"><font color="#508CA4">COME È NATA L'IDEA DEL PROGETTO </font>?</h1>
        <p className="pPerf">Spesso, durante le partite, si verificavano discussioni sul fatto che la pallina fosse dentro o fuori dal campo. Abbiamo quindi ideato un sistema di tracking basato sulla famosa libreria in Python "OpenCV" e tecnologia di riconoscimento visivo per tracciare con precisione la posizione della pallina. Questo Tracker registra automaticamente i punti, eliminando qualsiasi ambiguità e garantendo una competizione più equa e divertente per tutti i giocatori.</p>
        {/*<button className="buttonPerf" type="button"><a className="aPerf" href="#">SCOPRI DI PIÙ</a></button>*/}
      </div>

    </>
  )
}

export default Home;
