import React from 'react'
import './health.css'
import image1 from "../images/1.png"
import image from "../images/6.png"
function Health() {
  return (
    <>
    <div className='hhicon'><img src={image1} alt='img1'/></div>
    <br></br><h1 className='hhhead'>WHY GROWTH REQUIRES STRUGGLE</h1>
    <div className='hhimage'><img src={image} alt='img'/></div>
    <div className='hhsub'><h3>Too much pain will lead to trauma and helplessness. Too little pain will lead to entitlement and selfishness. So then what’s the Goldilocks Zone of pain?</h3></div>
    <div className='hhmain'><h2>Last month’s email about trigger warnings was an unexpected hit. I can’t remember the last time I got such an overwhelmingly positive response from people about a subject.
But I also got a lot of questions about pain, trauma, challenge, and struggle. Most of these questions were some variation of, “Is there such a thing as being exposed to too much pain?” or “Are there situations where pain and struggle aren’t helpful but only hurtful?” or “What about trauma? Clearly trauma is a thing.”
These are all great questions. And for this month’s newsletter, I’m going to knock them all out with a deep dive into the psychology of pain, trauma, healing, and building resilience. In the words of the great Tom Brady: let’s fucking go.</h2></div>
    <div className='hhnext'><h2>Everyone remembers the children’s story of Goldilocks and the Three Bears. You know, this porridge is too hot, this one is too cold, this one is just right.

Well, pain kinda works in the same way. Too much pain will lead to trauma and helplessness. Too little pain will lead to entitlement and selfishness.

But just the right amount of pain and struggle: that’s what allows us to feel a sense of accomplishment and meaning in our lives, which then builds up our sense of autonomy and self-worth—the bedrock of a mentally healthy and happy person.

So, how do you define the Goldilocks Zone of Pain? How do you know how much pain is “just right?”<br></br>
Throughout history, people erred on the side of subjecting each other to more pain. This is because most of human history fucking blew. War, famine, plagues, slavery, tyranny were the norms of the human condition, not the exception. So people were hard on their kids, hard on each other, and had little sympathy.

This changed about a hundred years ago with the rise of Freud and widespread acceptance of psychology. These days, you could argue that in some ways, we are probably too soft. And the reason I think this happens is a confusion between sympathy and compassion.</h2></div>
    </> 
  )
}

export default Health;
