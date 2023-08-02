import React from 'react'
import './health.css'
import image from "../images/skill.jpg"
import image1 from "../images/business.png"
function Skill() {
  return (
    <>
    <div className='hhicon'><img src={image1} alt='img1'/></div>
    <br></br><h1 className='hhhead'>The Most Important Skill in Life</h1>
    <div className='hhimage'><img src={image} alt='img'/></div>
    <div className='hhmain'><h2>If you think back to when you were a slobbering, drooling kid, life was pretty simple. Mom told you to say “thank you” so you said thank you. Dad told you to clean your room, so you cleaned your room. Teacher told you to stop picking your nose, so you stopped picking your nose (in public, at least).

Life was algorithmic. Do X and be rewarded with Y. The X was always clear and given while the Y reward was dependable. You could count on it. You could expect it.

Most of life passed this way. Teachers deigned assignments upon you and you knew that completing them in a certain way would earn you specific rewards. Your friends told you what was cool and what was lame and you followed accordingly. Your boss told you that if you didn’t stop falling asleep during important client meetings, he’d fire your ass (and now look at you, lazy sack of shit).

And so it goes: Do X; expect Y result. Everything is predictable. Everything is understood. Whenever you do something, you always know what result to expect.</h2></div>
    <div className='hhmain'><h2>See, I write a bunch of big, long, sexy articles for everybody, those are probably some of the articles that you know and love. They are big and beautiful and long and full of funny cat GIFs. But sometimes when I want to diverge into a niche topic or dive deep on a specific problem my readers are having, I write something exclusively for my subscribers. Like this one.

You can read this extra content yourself too. You just have to subscribe. It's easy and takes 60 seconds.</h2></div>
    <div className='hhnext'><h2>6 core courses to improve your life:
Healthy Relationships - Find out why your relationships all fail or succeed in the way they do—and what you can do about it.
Emotional Mastery - Get a better handle on your emotions and learn how to channel them more productively in your life.
Resilience - Take on life’s most important challenges and live with tenacity and purpose.
Finding Purpose - Find a purpose that gives your life meaning and take action on the things most important to you.
Bonus: Social Connection - Learn how to connect more deeply with the people in your life, one conversation at a time.
Challenging Beliefs - Dig deep into your beliefs and figure out if they’re helping or hurting you in life.
Bonus: Overcoming Anxiety - Get down to the root of your anxieties and learn to overcome them, one painful step at a time.
Build a Better Life - Create an actionable plan to finally live the life you’ve always wanted.
Bonus: Healthy Dating - Get a solid grasp on the principles that make for a successful dating life and fulfilling relationships.</h2></div>
    </> 
  )
}

export default Skill;
