import React,{Component} from 'react';
import Carousel from './carousel';



class Dashboard extends Component{
    render() {
        
        
        return(
            <div className="p-3 mb-2 text-white">
                <Carousel/>
            </div>
        )
      
    }
}
export default Dashboard