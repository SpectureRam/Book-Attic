import React from 'react'
import './home.css'
import img from '../images/4.jpg'
import img1 from '../images/1.1.jpg'
import img2 from '../images/1.2.gif'
import img3 from '../images/1.3.gif'
import img4 from '../images/1.4.gif'
import img5 from '../images/1.5.gif'
import img6 from '../images/1.6.png'
import img7 from '../images/1.7.png'
import img8 from '../images/1.8.png'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
  <div className='a1icon' style={{backgroundImage: `url(${img})`}}>

    <div className='a1head'><h1>THE ARCHIVE</h1></div>
    <div className='a1sub'>Welcome to the archive. Here you'll find number of pages of life advice on personal values, science, relationships, finding purpose, and much more. You can browse the archive based on the category below. Enjoy.</div>
    </div>

    <div className='a1art'><h2>Most Popular Articles</h2></div>
<br></br>
<br></br>
<br></br>
    <div className='a1art1'>
    <img style={{marginTop:"-10%"}} src={img1} alt='img1'/> 
    <h4 ><Link style={{color: 'black'}} to="growth-requires-struggle">Why Growth Requires Struggle</Link></h4>
    <div className='a1info'><h2>Too much pain will lead to trauma and helplessness. Too little pain will lead to entitlement and selfishness. So then what’s the Goldilocks Zone of pain?</h2>
    </div><br></br>
    <div className='a1dash'><h2>______________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='a1art1'>
    <img src={img2} alt='a1img2'/> 
    
    <h4><Link style={{color: 'black'}} to="rwar">Ukraine's nuclear plants face uncertain future after Russian attacks</Link></h4>
    <div className='a1info'><h2>Attacks on Ukraine's power grid took all 15 of the nation's nuclear reactors offline for the first time ever. Russia also retains control of Zaporizhzhia Nuclear Power Plant, the largest nuclear power station in Europe.</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='a1art1'>
    <img src={img3} alt='img3'/> 
    <h4><Link style={{color: 'black'}} to="virus">48,500-year-old zombie virus revived by scientists in Russia</Link></h4>
    <div className='a1info'><h2>The thawing of ancient permafrost due to climate change may pose a new threat to humans, according to researchers who revived nearly two dozen viruses – including one frozen under a lake more than 48,500 years ago.</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='a1art1'>
    <img src={img4} alt='img4'/> 
    <h4><Link style={{color: 'black'}}to="game">Life Is a Video Game Here Are the Cheat Codes</Link></h4>
    <div className='a1info'><h2>The goal of Life is simple: it is to Level Up as much as possible. Each Level in life presents a particular challenge that you must overcome. Once you overcome that challenge, you get to move on to the next Level. The goal is to complete as many levels as possible.</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    <div className='a1art1'>
    <img src={img5} alt='img5'/> 
    <h4><Link style={{color: 'black'}}to="skill">The Most Important Skill in Life</Link></h4>
    <div className='a1info'><h2>If you think back to when you were a slobbering, drooling kid, life was pretty simple. Mom told you to say “thank you” so you said thank you. Dad told you to clean your room, so you cleaned your room. Teacher told you to stop picking your nose, so you stopped picking your nose (in public, at least).</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    <div className='a1art1'>
    <img src={img6} alt='img6'/> 
    <h4><Link style={{color: 'black'}}to="law">The Backwards Law—Why the Best Things in Life Must Be Let Go</Link></h4>
    <div className='a1info'><h2>here’s a part of Navy SEAL training called “drown-proofing” where they bind your hands behind your back, tie your feet together, and dump you into a 9-foot-deep pool.

Your job is to survive for five minutes.

Like most of SEAL training, the vast majority of cadets who attempt drown-proofing fail.</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    <div className='a1art1'>
    <img src={img7} alt='img7'/> 
    <h4><Link style={{color: 'black'}}to="travel">5 Life Lessons From 5 Years of Traveling the World</Link></h4>
    <div className='a1info'><h2>Almost five years ago today, my apartment lease expired, I shipped a few boxes to my mom’s house, packed a suitcase to (hopefully) last me a few months, and took off across the Atlantic. I had less than $1,000 in my bank account.

The first stop was Paris, where, still reeling from breaking up with my girlfriend, selling all of my possessions, and maintaining an online business that was hardly making any money</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    <div className='a1art1'>
    <img src={img8} alt='img8'/> 
    <h4><Link style={{color: 'black'}}to="question">The Most Important Question of Your Life</Link></h4>
    <div className='a1info'><h2>Everybody wants what feels good. Everyone wants to live a carefree, happy and easy life, to fall in love and have amazing sex and relationships, to look perfect and make money, and be popular and well-respected and admired and a total baller to the point that people part like the Red Sea when you walk into the room.

Everyone would like that—it’s easy to like that.</h2>
    </div><br></br>
    <div className='a1dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>

    </>

  )
}

export default Home