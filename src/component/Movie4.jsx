import pirtes from '../image/Pirates.jpg'
import Common from './common';
const Movie4 = () =>{
   const link ='https://drive.google.com/u/1/uc?id=14cC_GhhAuXpf0nbxqAwE8jAmlcDLgEMM&export=download'
    return(
        <Common link={link} imgsrc={pirtes} header={'This is Movie4'} mheader={'pirates of the carbbean'} mtitle={'Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer'} />
    )
}

export default Movie4;