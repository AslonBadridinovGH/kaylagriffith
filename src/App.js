import './App.css';
import girl from "./fotos/women.webp"
import facebook from "./fotos/facee.webp"
import tvit from "./fotos/tvit.webp"
import swan from "./fotos/swan.webp"
import untenlinks from "./fotos/untenlinks.png"
import womencircle from "./fotos/womencircle.webp"


function App() {
  return (

    <div className="App">
        
        <div className="top">

          <header>
            <div className="griff">  K. Griffith  </div>
            <div className="appear">
               <p>APPEARANCES</p>
               <p>BOOKS</p>
               <p>NEWS</p>
               <p>ABOUT ME</p>
               <p>CONTACT</p>
            </div>       
          </header>
         
          <div className="kayla">
             <p>Kayla Griffith</p>
             <p>Preisgekrönte Autorin</p>
          </div>
       
          <div className="fotosDiv">           
               <img src={girl} alt="girl" /> 
          </div>

        </div>

        <div className = "twitFace">
                 <a href="https://twitter.com/wix"><img src={tvit} alt="tw" /></a>      
                 <a href="https://www.facebook.com/wix"><img className="fff" src={facebook} alt="face" /></a>
          </div>

       <section className="secondSection">

        <div className="row">

              <div className="rowDiv">

                 <div className="swan">
                     <p>The Swan Isle</p>
                     <p>(2035)</p>
                 </div>

                 <div className="divP">        
                    <p>I am a paragraph of text. Click here and edit me. Just click Edit Text or double-click to add content and change the font. It's the ideal place to tell visitors a little more about yourself.</p>
                 </div>

                 <div className="pOrder">
                   <p>Order for a fee</p>
                 </div>

                 <div className="social">
                      <button>Amazon</button>
                      <button>Google</button>
                      <button>ibooks</button>
                 </div>

              </div>

              <div>
                  <img src={swan} alt="swan"/>
              </div>

        </div>

       </section>

       <section className="thirdSection">

             <div className="secDiv">

                <p className="lob">Lob & Reviews</p>

                <div className="underLob">

                   <div className="card">
                      <div><img src={untenlinks} alt="untenlinks" /></div>  
                      <p className="iamp">I am a paragraph of text. Click here and edit me. Just click Edit Text or double-click to add content and change the font. It's the ideal place to tell visitors a little more about yourself.</p>
                      <p className="swisla">„‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review</p>
                      <p className="linie"></p>
                   </div>
                   <div className="card">
                      <div><img src={untenlinks} alt="untenlinks" /></div>  
                      <p className="iamp">I am a paragraph of text. Click here and edit me. Just click Edit Text or double-click to add content and change the font. It's the ideal place to tell visitors a little more about yourself.</p>
                      <p className="swisla">„‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review</p>
                      <p className="linie"></p>
                   </div>
                   <div className="card">
                      <div><img src={untenlinks} alt="untenlinks" /></div>  
                      <p className="iamp">I am a paragraph of text. Click here and edit me. Just click Edit Text or double-click to add content and change the font. It's the ideal place to tell visitors a little more about yourself.</p>
                      <p className="swisla">„‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review</p>
                      <p className="linie"></p>
                   </div>

                </div>

             </div>

       </section>

       <section className="forthSection">

          <div className="forthSecDiv">
             <p className="firstP">View upcoming performances</p>
             <p className="secondP">I am a paragraph of text. Click here and edit me easily.</p>
          </div>

          <div className="forthSecondDivs">
             <div className="forthSecondDiv">
                <p className="janv">January 18, 2035, The Breakfast Club, Swan Isle Virtual Book Reading, 7-8pm CET</p>
                <button>log on</button>
             </div>
             <div className="forthSecondDiv">
                <p className="janv">January 31, 2035, The Good Readers Club, online conversation with Kayla Griffith, 8 p.m. - 9 p.m. CET</p>
                <button>log on</button>
             </div>
             <div className="forthSecondDiv">
                <p className="janv">March 2, 2035, Café Otto, online book reading with Kayla Griffith, 3 - 4 p.m. CET</p>
                <button>log on</button>
             </div>

          </div>

          <div className="uber">

            <div><img className="womencircle" src={womencircle} alt="womencircle"/></div>  
             <div className="fifthDiv">            
                <p className="uKayla">About Kayla Griffith</p>
                <p className="iampar">I am a paragraph of text. Click here and edit me. Just click Edit Text or double-click to add content and change the font. It's the ideal place to tell visitors a little more about yourself.</p>
                <button>Continue reading</button>
             </div>

          </div>


       </section>

       <footer>
            <div className="container">
                <div className="impressum">
                    <p>Cookies</p>
                    <p>Impressum</p>
                    <p>Data protection</p>   
                </div>
                <div>
                    <p>© 2035 K.Griffith. Erstellt mit <a href="https://de.wix.com/?utm_campaign=vir_created_with">Wix.com</a></p>
                </div>
            </div>
       </footer>

    </div>

    

  );
}

export default App;
