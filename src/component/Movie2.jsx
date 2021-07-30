import Common from "./common";
import inception from '../image/inception.jpg'

const Movie2 = () =>{
    const link ='https://drive.google.com/u/1/uc?id=1b7cBjIoWnnUM0BrA92MRze0zrcnQ0C6z&export=download'
    return(
        <Common link={link} imgsrc={inception} header={'This is Movie2'} mheader={'inception'} mtitle={'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas'} />
    )
}

export default Movie2;