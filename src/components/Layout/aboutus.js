import React,{Component} from 'react';



class Aboutus extends Component{


    render() {
       
        return(
            <div className="row">

                
                <div className="col-lg-10 col-xl-5 mx-auto">
                    
                    
                    <div className="card card-signup flex-row my-5">
                    
                        <div className=" d-md-flex">
                            <img src="https://scontent.fmga6-1.fna.fbcdn.net/v/t1.0-9/p720x720/74469725_1622315367911627_6353661402917371904_o.jpg?_nc_cat=103&_nc_oc=AQlb21nYR8VmwMa9Vmnn6M3uwLmQXOQKLYnS6SKuRUsefDb-wIRY1lhjjQG5s5GoESI&_nc_ht=scontent.fmga6-1.fna&oh=113a4746254f67ef087ac70ea96808d0&oe=5E479299" height="190px"></img>
                        </div>
                        
                            <div className="card-body">
                            <div className="card-title text-danger text-center">Sobre Nosotros</div>
                                <p>Aplicacion multiplataforma dirigida tanto a las mujeres como el resto de la ciudadania con el fin de brindar herramientas para informar, detectar y denunciar la violencia de genero. Al mismo tiempo proporcionar diversos metodos de apoyo a las mujeres en el proceso de pasar de victimas a supervivientes de malos tratos y la prevencion y educacion como clave para luchar contra los maltratos.</p>
                        </div>
                    </div>
                        
                    
                </div>
               
                
            </div>
        )
    }
}

export default (Aboutus)