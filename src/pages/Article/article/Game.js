import React from "react";
import './game.css';
import image from "../images/5.png"
import image1 from "../images/game.jpg"
function Game(){
    return(
        <>
        <div className='hhicon'><img src={image1} alt='img1'/></div>
        <div className="gamehead"><h1>Life Is a Video Game—Here Are the Cheat Codes</h1>
        <h3>written by MARK MANSON – filed under DECISION MAKING | PERSONAL VALUES</h3></div>
        <div className='hhimage'><img src={image} alt='img'/></div>
        <div className="gamebody"><h3>Welcome, Player One, to a strategy guide for the game known as Life.
  As you’ve undoubtedly discovered, the game of Life is often quite difficult. You will face unexpected challenges and long periods of frustration. You will often struggle with self-doubt, feel overwhelmed by helplessness and loss, and sometimes take a shit when you’re out of toilet paper.</h3></div>
        <div className="gamehead1"><h2>HOW TO WIN AT LIFE</h2></div>
        <div className="gamebody1"><h3>The goal of Life is simple: it is to Level Up as much as possible. Each Level in life presents a particular challenge that you must overcome. Once you overcome that challenge, you get to move on to the next Level. The goal is to complete as many levels as possible. At the end of the game, the person at the highest level gets to have the best funeral.
        Level 1 just means you’re not homeless and/or starving. This is a prerequisite for just about everything else. Chances are, if you’re stuck on Level 1, you aren’t even reading this right now.

Level 2 gets a bit more complicated, because a lot of people do have a nice bed to sleep in every night, but they can’t sleep because of gunshots outside or bombs exploding over their city, or maybe Dad’s a drunk and keeps trying to set the house on fire.

None of these things are cool. Level 2 requires that you find a secure and stable home to base yourself out of. Getting past Level 2 requires finding a way to successfully remove yourself from these dangerous situations.

Level 3 means relationships, finding the right people to love and the right people who love you.

This sounds way easier and more fun than it is. Mainly because, as you’ve likely found out by now, most people suck.

Navigating to the ones who don’t is a whole tricky matter that I’ll get to in a bit.

Level 4 means building up some skill or knowledge or ability that adds value to the world around you and also makes you feel like kind of a badass in the process.

Level 5 just means making sure your life mattered when you’re dead. Good luck with that champ.

Most of us get a nice head start due to our parents. If you’re lucky, your parents will have successfully guided you through Levels 1-3 and even give you a nice boost in achieving Level 4.

If your parents took care of you but they were kind of emotional fuck ups, then you’ll have Levels 1 and 2 down pat but be totally on your own for Level 3.

If you were raised by wolves, a) congratulations on figuring out how to read, and b) please refrain from chewing on your mobile device.</h3></div>
        
        
        
        
        
        </>
    )
}
export default Game