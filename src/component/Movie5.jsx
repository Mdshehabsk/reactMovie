import Common from "./common";
import dragon2 from '../image/dragon-2.jpg'

const Movie5 = () =>{
    const link ='https://drive.google.com/u/1/uc?id=1gxixHbDMnvswrezneSygVmjneMAMRPwA&export=download'
    return(
        <Common link={link} imgsrc={dragon2} header={'This is Movie5'} mheader={'How to Train Your Dragon'} mtitle={' is a 2010 American computer-animated action fantasy film loosely based on the 2003 book of the same name by Cressida Cowel'}/>
    )
}

export default Movie5;