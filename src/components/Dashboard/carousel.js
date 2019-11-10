import React, {Component} from 'react';

class Carousel extends Component{

    render(){
        return(
            <div className="row">
                
                <div className="col-xl-10 mx-auto">
                    
                    <div className="card card-signup flex-row my-5">
            
                        <div className="card-body">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-9/s960x960/75392681_103597947766790_3701718328285331456_o.png?_nc_cat=101&_nc_oc=AQl7-iK-t5zruUWaRqO7zJQQfJbHhbnRsyi_ytj7ryOP7ZJjPDcBO0yKhuL-ctA8zFc&_nc_ht=scontent.fmga6-1.fna&oh=413a9ee7f74b42d3eef2ab3c919f96ea&oe=5E454B05" class="d-block w-100" alt="..." height="540px"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-9/s960x960/75311422_103597901100128_4866701449679077376_o.png?_nc_cat=105&_nc_oc=AQlhXFnRqLRVIVWA5EhGCt8K9Vk-mVzyD9mHDlYu0SA3rNLZNsGYyA1UKjJPoTXgNDc&_nc_ht=scontent.fmga6-1.fna&oh=14b859143500533478e77400763e5fda&oe=5E46224E" class="d-block w-100" alt="..." height="540px"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-9/s960x960/73349233_103597827766802_8020379829280964608_o.png?_nc_cat=109&_nc_oc=AQmbiA9q5aHVX_RB-maLrUaTO5jsZ_QdF0N0yk-WkzsIgiluR0MBVqQ0gDzsReOB6IY&_nc_ht=scontent.fmga6-1.fna&oh=8a08fc7540f11867142db85494822f8c&oe=5E601E06" class="d-block w-100" alt="..." height="540px"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-9/s960x960/75043223_103575071102411_8794781158807175168_o.png?_nc_cat=100&_nc_oc=AQmma7oSg4oIwk25ZrYVtoFGYSWpL2ZGBdYCIf1768FY0YyvjClTPsXGfQV6tQzYn28&_nc_ht=scontent.fmga6-1.fna&oh=e5e76e41616721d5660d7939e801c390&oe=5E55C9E6" class="d-block w-100" alt="..." height="540px"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-0/p180x540/75323255_103537067772878_9132871213297696768_o.jpg?_nc_cat=101&_nc_oc=AQl3hZdUH9ceGN9sg35JYUkOgrPMCQVp3NN0e4HT9v8JOwEyzPzIyZGyXVQM_bmjm4I&_nc_ht=scontent.fmga6-1.fna&oh=502538a6aadccabf0b683e27b8800722&oe=5E453260" class="d-block w-100" alt="..." height="540px"/>
                                        </div>
                                </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            
        )
    }
    
}
export default Carousel