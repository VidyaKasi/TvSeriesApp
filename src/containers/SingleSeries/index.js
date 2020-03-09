import React, {Component } from 'react';
import Loader from '../../components/Loader/index.js';
class SingleSeries extends Component{

    state={
        show:null
    }

    componentDidMount()
    {
        const { id} = this.props.match.params;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = ""; // site that doesn’t send Access-Control-*
        
     
        fetch(proxyurl+`http://api.tvmaze.com/search/shows/${id}?embed=episodes`)
//.then((response) => {console.log(response)})
//taking the json format of response object 
.then(response => response.json())
//taking the json object alone 
//.then(json => console.log(json))
.then(json => this.setState({show: json}))


    }
    render()
    {
        const {show} = this.state;
        console.log(show);
        return(
            <div>
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <p>show has been loaded</p>

                }
            <p> Single Series - the show id will be {this.props.match.params.id}</p>
            </div>
    

        )
    }
}

export default SingleSeries;