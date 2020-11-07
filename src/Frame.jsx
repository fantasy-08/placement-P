import React from 'react'

function Frame({info}) {
    const URL = "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1110&&h=470&q=80";
    
    return (
    <div className="container">
        {
            info.length
                ?
                
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src={URL}
                                alt="new"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{info[0].students[0].student_name}</h5>
                                <p>{info[0].company_name}</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                    src={URL}
                                    alt="new"
                            /><div class="carousel-caption d-none d-md-block">
                                <h5>{info[1].students[0].student_name}</h5>
                                <p>{info[1].company_name}</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                    src={URL}
                                    alt="new"
                            /><div class="carousel-caption d-none d-md-block">
                                <h5>{info[2].students[0].student_name}</h5>
                                <p>{info[2].company_name}</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                :
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Frame
