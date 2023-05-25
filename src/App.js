import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Tabs from "./Tabs";
import Carousel from "./Carousel";
import butterfly from "./images/butterfly.jpeg";
import parrot from "./images/parrot.jpeg";
import tulips from "./images/tulips.jpeg";
import Trending from "./Trending";
import Footer from "./Footer";
import TrendingGrid from "./TrendingGrid";
import Test from "./Test";
import axios from "axios";

const App = () => {

  const [artData, setArtData] = useState([]);
  
  useEffect(()=>{
    axios.get('https://crudcrud.com/api/4cf3858fc5e14f2f8c5e5d79665e9db7/newdata')
    .then(res => {
      setArtData(res)
    }).catch(err => {
        console.log(err)
    })
  },[])
  const Data = artData.data[0].art[0]
  const tabs = [
    {
      id: 1,
      label: 'All',
      content: "hellooo",
    },
    {
      id: 2,
      label: 'Art',
      content: <div>Tab 2 Content</div>,
    },
    {
      id: 3,
      label: 'Gaming',
      // content: <div>Tab 3 Content</div>,
    },
    {
      id: 4,
      label: 'Memberships',
      // content: <div>Tab 2 Content</div>,
    },
    {
      id: 5,
      label: 'PFPs',
      // content: <div>Tab 3 Content</div>,
    },{
      id: 6,
      label: 'Photography',
      // content: <div>Tab 2 Content</div>,
    }
  ];
  const carouselImages = [
    butterfly, parrot, tulips
  ]
  return (
    <div className="App">
      <NavBar/>
      <Tabs tabs={tabs}/>
      <Carousel images={carouselImages}/>
      <Trending/>
      <TrendingGrid data={Data}/>
      <Footer/>
      <Test/>
    </div>
  );
}

export default App;
