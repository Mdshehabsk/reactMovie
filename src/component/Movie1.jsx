import mazeRunner from '../image/Maze-Runner.jpg'
import Common from './common';

const Movie1 = () =>{
    const link='https://drive.google.com/u/1/uc?id=13SJqqEu0WLfodNJCjHDCug7NICO3-scS&export=download'
    return(
        <>
        <Common link={link} imgsrc={mazeRunner} header={'This is Movie1'} mheader={'maze runner'} mtitle={'The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball'} />
        </>
    )
}

export default Movie1;