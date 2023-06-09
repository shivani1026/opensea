import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Tabs from "./Tabs";
import Carousel from "./Carousel";
import Trending from "./Trending";
import Footer from "./Footer";
import TrendingGrid from "./TrendingGrid";
// import Test from "./Test";
import axios from "axios";
import Card from "./Card";
import allvideo1 from "./videos/video.mp4";
import allvideo3 from "./videos/video2.mp4";
// import allvideo2 from "./videos/video1.mp4";
import ArtCarousel from "./ArtCarousel";
import artimage1 from "./images/art/image1.avif"
import artimage2 from "./images/art/image2.avif"
import artimage3 from "./videos/video5.webp"
import gameimage1 from "./images/gaming/image1.avif"
import gameimage2 from "./images/gaming/image2.avif"
import gameimage3 from "./images/gaming/image3.avif"
import gameimage4 from "./images/gaming/image4.avif"
import memimage1 from "./images/memberships/image1.avif"
import memimage2 from "./images/memberships/image2.avif"
import memimage3 from "./images/memberships/image3.avif"
import pfpimage1 from "./images/pfp/image1.avif"
import pfpimage2 from "./images/pfp/image2.avif"
import pfpimage3 from "./images/pfp/image3.avif"
import picimg1 from "./images/photography/image1.avif"
import picimg2 from "./images/photography/image2.avif"
import picimg3 from "./images/photography/image3.avif"
import GamingCarousel from "./GamingCarousel";
import MemshipCarousel from "./MemshipCarousel";
import PfpCarousel from "./PfpCarousel";
import PhotoCarousel from "./PhotoCarousel";

const App = () => {

  const [artData, setArtData] = useState([]);
  const [gamingData, setGamingData] = useState([]);
  const [memshipData, setMemshipData] = useState([]);
  const [pfpData, setPfpData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setArtData(response.data[0].art[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setGamingData(response.data[0].Gaming[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setMemshipData(response.data[0].Membership[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setPfpData(response.data[0].PFPs[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setPhotoData(response.data[0].Photography[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const alls = [
    allvideo1, allvideo3, allvideo1, allvideo3  
  ]

  const art = [
    artimage1, artimage2, artimage3
  ]
  const gamin = [
    gameimage1, gameimage2, gameimage3, gameimage4
  ]
  const memships = [
    memimage1, memimage2, memimage3
  ]
  const pfp = [
    pfpimage1, pfpimage2, pfpimage3
  ]
  const photo = [
    picimg1,picimg2,picimg3
  ]

  console.log(artData,"artdata")
   const tabs = [
     {
       id: 1,
       label: 'All',
       content:<Carousel videos={alls}/>,
     },
     {
      id: 2,
       label: 'Art',
       content: <ArtCarousel videos={art}/>,
     },
     {
       id: 3,
       label: 'Gaming',
       content: <GamingCarousel videos={gamin}/>,
     },
     {
       id: 4,
       label: 'Memberships',
       content: <MemshipCarousel videos={memships}/>,
     },
     {
       id: 5,
       label: 'PFPs',
       content: <PfpCarousel videos={pfp}/>,
     },{
       id: 6,
       label: 'Photography',
       content: <PhotoCarousel videos={photo}/>,
     }
   ];

  return (
    <div className="App">
      <NavBar/>
      <div className="m-3">
      <Tabs tabs={tabs}/>
      {/* <Carousel videos={carouselVideos}/> */}
      {/* <Trending/> */}
      {/* <TrendingGrid data={artData}/>
      <TrendingGrid data={gamingData}/>
      <TrendingGrid data={memshipData}/>
      <TrendingGrid data={pfpData}/>
      <TrendingGrid data={photoData}/> */}
      {/* <Card image={artData}/> */}
      {/* <Card image={gamingData}/>
      <Card image={memshipData}/>
      <Card image={pfpData}/>
      <Card image={photoData}/> */}
      </div>
      <Footer/>
      {/* <Test image={artData}/> */}
    </div>
  );
}

export default App;
