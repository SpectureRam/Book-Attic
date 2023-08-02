import React from 'react'
import './health.css'
import image from "../images/backlaw.jpg"
import image1 from "../images/law.jpg"
import image2 from "../images/graph.png"
function Health() {
  return (
    <>
    <div className='hhicon'><img src={image1} alt='img1'/></div>
    <br></br><h1 className='hhhead'>The Backwards Law—Why the Best Things in Life Must Be Let Go</h1>
    <div className='hhimage'><img src={image} alt='img'/></div>
    <div className='hhsub'><h3>written by MARK MANSON – filed under HAPPINESS | MOTIVATION</h3></div>
    <div className='hhmain'><h2>There’s a part of Navy SEAL training called “drown-proofing” where they bind your hands behind your back, tie your feet together, and dump you into a 9-foot-deep pool.

Your job is to survive for five minutes.

Like most of SEAL training, the vast majority of cadets who attempt drown-proofing fail. Upon being tossed into the water, many of them panic and scream to be lifted back out. Some struggle until they slip underwater where they proceed to lose consciousness and have to be fished out and resuscitated. Over the years, a number of trainees have even died during the exercise.

But some people make it. And they do so because they understand two counterintuitive lessons.

The first lesson of drown-proofing is paradoxical: the more you struggle to keep your head above water, the more likely you are to sink.

With your arms and legs bound, it’s impossible to maintain yourself at the surface for the full five minutes. Even worse, your limited attempts to keep your body afloat will only cause you to sink faster. The trick to drown-proofing is to actually let yourself sink to the bottom of the pool. From there, you lightly push yourself off the pool floor and let your momentum carry you back to the surface. Once there, you can grab a quick breath of air and start the whole process over again.1

Strangely, surviving drown-proofing requires no superhuman strength or endurance. It doesn’t even require that you know how to swim. On the contrary, it requires the ability to not swim. Instead of resisting the physics that would normally kill you, you must surrender to them and use them to save your own life.</h2></div>
    <div className='hhimage'><img src={image2} alt='img'/></div>
<div className='hhnext'><h2>The second lesson of drown-proofing is a bit more obvious, but also paradoxical: the more you panic, the more oxygen you will burn and the more likely you are to fall unconscious and drown.2 In a sick and twisted way, the exercise turns your survival instinct against you: the more intense your desire to breathe, the less you will be able to breathe. The more intense your will to live, the greater the chance you will die.

More than a test of physical will, drown-proofing is a test of each cadet’s emotional self-control in situations of extreme danger. Can he control his own impulses? Can he relax in the face of potential death? Can he willingly risk his life in the service of some higher value or goal?

These skills are far more important than any cadet’s ability to swim. They’re more important than his resilience, his physical toughness, or his ambition. They’re more important than how smart he is, what school he went to, or how damn good he looks in a crisp Italian suit.

This skill—the ability to let go of control when one wants it most—is one of the most important skills anyone can develop. And not just for SEAL training. For life.

Most people assume the relationship between effort and reward is one-to-one. We think that working twice as long will produce twice the results. That caring about a relationship twice as much will make everyone feel twice as loved. That yelling your point twice as loud will make you twice as right.</h2></div>
    </> 
  )
}

export default Health;
