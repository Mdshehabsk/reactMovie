const Common = (props) =>{

    return(
        <>
        <h1 className='text-center header'>{props.header}</h1>
        <div className="container">
            <div className="movie">
                <div className="movie-img">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div className="title">
                    <h2>{props.mheader}</h2>
                    <p>{props.mtitle}</p>
                    <div className="btn">
                        <a href={props.link} target='_'>
                            Download Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Common;