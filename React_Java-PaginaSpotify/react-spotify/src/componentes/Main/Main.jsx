import "./Main.css";

import card1 from "../../assets/playlist/1.jpeg";

const Main = () => {
    return (

    <div class="playlist-container">
        <div id="result-playlist">
            <div class="playlist">
                <h1 id="greeting">Boa Noite</h1>
                <h2 class="greeting-subtitle">Navegar por todas as seções</h2>
            </div>
        </div>

        <div class="offer__scroll-container">
            <div class="offer__list">
                <section class="offer__list-item">

                    <a href="" class="cards">
                        <div class="cards card1">
                            <img src={card1} alt="" />
                            <span>Boas festas</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card2">
                            <img src={card2} alt="" />
                            <span>Feitos para você</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card3">
                            <img src={card3} alt="" />
                            <span>Lançamentos</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card4">
                            <img src={card4} alt="" />
                            <span>Creators</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card5">
                            <img src={card5} alt="" />
                            <span>Para treinar</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card6">
                            <img src={card6} alt="" />
                            <span>Podcasts</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card7">
                            <img src={card7} alt="" />
                            <span>Sertanejo</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card8">
                            <img src={card8} alt="" />
                            <span>Samba e pagode</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card9">
                            <img src={card9} alt="" />
                            <span>Funk</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card10">
                            <img src={card10} alt="" />
                            <span>MPB</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card11">
                            <img src={card11} alt="" />
                            <span>Rock</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card12">
                            <img src={card12} alt="" />
                            <span>Hip Hop</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card13">
                            <img src={card13} alt="" />
                            <span>Indie</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card14">
                            <img src={card14} alt="" />
                            <span>Relax</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card15">
                            <img src={card15} alt="" />
                            <span>Música Latina</span>
                        </div>
                    </a>
                </section>
            </div>
        </div>

        <div id="result-artist" class="hidden">
            <div class="grid-container">
                <div class="artist-card" id="">
                    <div class="card-img">
                        <img id="artist-img" class="artist-img" />
                    </div>
                    
                    <div class="card-text">
                        <a title="Foo Fighters" class="vst" href=""></a>
                        <span class="artist-name" id="artist-name"></span>
                        <span class="artist-categorie">Artista</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
};

export default Main;

{/*}
<script type='text/javascript' src="./src/scripts/search.js"></script>
<script type='text/javascript' src="./src/scripts/greeting.js"></script>
*/}