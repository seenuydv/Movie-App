import MovieBanner from "../Components/MovieBanner";
import MovieCards from "../Components/MovieCards";
import MovieFooter from "../Components/MovieFooter";
import MovieNav from "../Components/MovieNav";
import MovieSlides from "../Components/MovieSlides";
import TvShowCards from "../Components/TvShowCards";
import WebSeriesCards from "../Components/WebSeriesCards"; 


function Home (){
    return(
        <>
        <MovieNav/>
        <MovieBanner/> 
        <MovieSlides/>
        <MovieCards/>
        <WebSeriesCards/>
        <TvShowCards/>
        <MovieFooter/>
        </>

    );
}

export default Home;
