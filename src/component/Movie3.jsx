import jhon from '../image/jhon-wick.jpg'
import Common from './common';

const Movie3 = () =>{
    let link ='https://drive.google.com/u/1/uc?id=1utH8EUnlZ-QH92v217fqRPc3woEakGfa&export=download'
    return(
        <Common link={link} imgsrc={jhon} header={'This is Movie3'} mheader={'jhon-wick'} mtitle={'The story focuses on John Wick (Reeves) searching for the men who broke into his home, stole his vintage car and killed his puppy'} />
    )
}

export default Movie3;