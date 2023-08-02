import React , { useState } from "react";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import SignIn from "./entry/SignIn";
import SignUp from './entry/SignUp';
import Genre from './pages/genre/Genre'
import Checkout from "./pages/checkout/Checkout";
import Homes from "./new/Homes";
import Footer from "./new/Footer";
 

// article
import AHome from './pages/Article/article/AHome'
import Health from "./pages/Article/article/Health";
import War from "./pages/Article/article/War";
import Struggle from './pages/Article/article/Struggle'
import Game from "./pages/Article/article/Game";
import Skill from "./pages/Article/article/Skill";
import Law from './pages/Article/article/Law'
import Travel from './pages/Article/article/Travel'
import Question from './pages/Article/article/Question'
// book 
import HBook from "./pages/books/horrorbook/HBook";
import TBook from "./pages/books/travelbooks/TBook";
import RBook from "./pages/books/romancebook/RBook";
import ABook from "./pages/books/animebook/ABook";
import SCBook from "./pages/books/scifibook/SCBook";
import FBook from './pages/books/fictionbook/FBook'
import MBook from "./pages/books/mysterybook/MBook";
import SBook from "./pages/books/suspensebook/SBook";
import PBook from "./pages/books/poetrybook/PBook";
import CBook from "./pages/books/crimebook/CBook";
import BBook from "./pages/books/biographybook/BBook";
import HIBook from "./pages/books/historybook/HBook";
import ADBook from "./pages/books/adventurebook/ADBook";
import TPBook from "./pages/books/toppicks/TPBook";
import FABook from "./pages/books/fantasybook/FABook";
import NBook from "./pages/books/novelbook/NBook";
import ForgotPassword from "./entry/ForgotPassword";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          >
            
          <Navbar />
          
          
          <Routes>
            <Route exact path="/" element={<Homes />} />
            {/* navbar */}
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/genre" element={<Genre />} />
            <Route exact path="/article" element={<AHome />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/aa" element={<ForgotPassword />} />
            {/* article */}
            <Route path="/article/rwar" element={<War/>} />
            <Route path="/article/virus" element={<Health/>} />
            <Route path="/article/growth-requires-struggle" element={<Struggle/>} />
            <Route path="/article/game" element={<Game/>} />
            <Route path="/article/Skill" element={<Skill/>} />
            <Route path="/article/Law" element={<Law/>} />
            <Route path="/article/Travel" element={<Travel/>} />
            <Route path="/article/Question" element={<Question/>} />

          {/* books */}
            <Route exact path="/horror" element={<HBook />} />
            <Route exact path="/mystery" element={<MBook />} />
            <Route exact path="/romance" element={<RBook />} />
            <Route exact path="/fiction" element={<FBook />} />
            <Route exact path="/travel" element={<TBook />} />
            <Route exact path="/scifi" element={<SCBook />} />
            <Route exact path="/poetry" element={<PBook />} />
            <Route exact path="/suspense" element={<SBook />} />
            <Route exact path="/crime" element={<CBook />} />
            <Route exact path="/anime" element={<ABook />} />
            <Route exact path="/history" element={<HIBook />} />
            <Route exact path="/adventure" element={<ADBook />} />
            <Route exact path="/biography" element={<BBook />} />
            <Route exact path="/novel" element={<NBook />} />
            <Route exact path="/toppicks" element={<TPBook />} />
            <Route exact path="/fantasy" element={<FABook />} />

          
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </SnackbarProvider>
        <Footer/>
      </Router>
    
  )
  )
};

export default App;
