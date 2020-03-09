import React,{Component} from 'react'
import Intro from '../../components/Intro/Index.js'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader/index.js'
class Series extends Component 
{
      //Similar to a javascript object rendered by the component
  state = {
    series : [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount(){
    //Function invoked immediately after the component has been rendered

    /*const series = ["Vikings", "Game Of Thrones"];

    //setstate takes object as the first argument
    //setstate tells react that the component and its children have to be rerendered with its updated state
    //here we assign series of the state object with the series array created inside the fucntion

    setTimeout(()=>{this.setState({series:series})},2000);
  //now this can also be done using a statement such as below since same name is used in the state object too
  //setTimeout(()=>{this.setState({series}),2000})
*/

}
onSeriesInputChange = (e)=>{
this.setState({seriesName: e.target.value, isFetching:true});
    //tv maze api gives info about different series
fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
//.then((response) => {console.log(response)})
//taking the json format of response object 
.then(response => response.json())
//taking the json object alone 
//.then(json => console.log(json))
.then(json => this.setState({series: json, isFetching:false}))

    console.log(e);
 console.log(e.target.value);   
}

   render(){
       const {series, seriesName, isFetching} = this.state;
       return(
           <div>
        <Intro pass={0} message="Here you can find everything"/>
        

           <p>The length of series array - {this.state.series.length} </p>
           
               <input value={seriesName}
               type="text" onChange={this.onSeriesInputChange} />
           
           
           
           { !isFetching && series.length === 0 && seriesName.trim() === ''
           &&
           <p> Please enter name into the series text box</p>
           }
           {
               !isFetching && series.length === 0 && seriesName.trim() !== ''
               &&
               <p>No Tv Series has been found in this name</p>
           }
           {
               isFetching && <Loader/>

           }
           {
               !isFetching &&  <SeriesList list={this.state.series} />

           }
           </div>
       )
   } 
}

export default Series;