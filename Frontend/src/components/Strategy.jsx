import React, { useEffect, useState } from "react";
import banner from "../../public/img/banner.png";
import def1 from "../../public/img/def1.jpg";
import def2 from "../../public/img/def2.jpg";
import def3 from "../../public/img/def3.jpg";
import def4 from "../../public/img/def4.jpg";
import def5 from "../../public/img/def5.jpg";
import def6 from "../../public/img/def6.jpg";
import def7 from "../../public/img/def7.jpg";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Strategy() {
  const [defense, setDefense] = useState([]);
  useEffect(() => {
    const getDefense = async () => {
      try {
        const res = await axios.get("http://localhost:4001/defense");
        console.log(res.data);
        setDefense(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDefense();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you Defence Techniques{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            In the sanctuary of self-defense training, martial art becomes a
            language of empowerment, each technique a word in the narrative of
            personal safety and confidence. <br /><br />Self-defense can be
            defined as ancient knowledge taught throughout many ages to enhance
            surviving instincts in humans, but every other creature that lives on
            the planet has a self-defense mechanism of its own. Self-defense
            techniques were mainly taught to protect oneself and not to do harm
            without reason. Learning martial arts is very useful, as it can get
            you out of bad situations, so do adopt to learn new hobbies.
            <br /><br />Embracing the artful dance of self-defense, where
            self-defense techniques are the brushstrokes that paint a portrait of
            resilience, transforms vulnerability into strength. We’ve carefully
            hand-picked up these moves and broken them down further to avoid
            complexities in the learning process.
          </p>
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {defense.map((item) => (
              <Cards key={item.id} item={item} />
            ))}

          </div> */}
          <Link to="/">
            <div className="p-4">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
            </div>
          </Link>
          <div className="pb-4 flex flex-col md:gap-10 gap-3">
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def1}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">1. Finding Weak Spots</h2>
              <p>
                Eyes, knees, and groin are the most vulnerable parts of the body,
                but if you’re feeling adventurous enough and ready to throw a punch,
                then you can include the nose in the above-mentioned line-up. These
                parts are sensitive and easy to reach in case of an attack. However,
                it’s not easy to understand the attacker’s approach; it could be
                straight up or without your knowledge from behind, but just be
                ready! (An elbow to their face is a great option if the attack is
                from the backside.)
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def2}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">2. Twist and Turn</h2>
              <p>
              There are simple moves you can master to cause pain to your
            attacker, the first of which is grabbing their hand and twisting
            their fingers. In this self-defense, especially take hold of their
            little and the ring finger and pull them hard away from the other
            fingers. The second move would be to hit them with your fist or poke
            their throat as hard as possible (use your long and middle fingers).
            This, in turn, will leave your attacker spaced out, giving you
            enough time to escape.
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def3}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">3. Aim lower</h2>
              <p>
              If the attack is upfront and the attacker has locked your hands,
            then head-butt their nose with some force. It’s easy, but it’s not
            yet over. This act will loosen their grip on you, but now use your
            knee and smash their groin area; usually kicking them in the
            epicenter will be fruitful, causing disorientation or paralyzing the
            attacker. In another situation of self-defense, if your hands are
            free, keep one hand on the face of your attacker to create distance,
            push him away, and kick him in the groin area with all your energy.
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def4}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">4. Free your hands</h2>
              <p>
              The rule of thumb is best known and is the most basic skill taught
            in self-defense training. If the attacker has a tight grip on your
            arm, rotate the arm to the side of your attacker's thumb. If he has
            lost grip, then rotate your wrist towards the thumb, and once the
            arm is under the attacker, pull away as strongly as possible. <br />
            On a journey of self-discovery through the mastery of self-defense,
            where each self-defense technique is a brushstroke on the canvas of
            personal empowerment.
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def5}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">5. Dealing with Surprise- Attacks</h2>
              <p>
              Now if you’re grabbed from behind, that is both obvious and the most
            convenient option for any attacker to lock your arms, bend your head
            a little, and then hit the attacker from the back of your head. It’s
            a powerful skill and fatal if done right. The second option is to
            bend down quickly, grab the attacker’s leg, and get up, pulling it
            with you. The attacker will lose his balance and, most of the time,
            end up on the floor, giving you a chance to escape. <br />
            In the dojo of self-defense, the artistry of martial arts techniques
            transforms fear into empowerment, crafting a shield of confidence
            that transcends physical boundaries.
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def6}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">6. Use your Elbow</h2>
              <p>
              If the attacker approaches you from the side, use your elbow without
            hesitation; elbow hits are powerful, and landing one on your
            attacker's face will blank them out. The jaw, nose, and chest are
            easy to reach and well within range to cause some serious damage to
            the attacker.
              </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 items-center  md:px-5 px-2 md:flex-col lg:flex-row flex-col">
              <div >
                <img className="md:max-w-screen-md" src={def7}  alt="banner" />
              </div>
              <div className="text-start p-4">
              <h2 className="font-bold text-xl pb-2">7. Hit them hard and they shall run</h2>
              <p>
              In the self-defense technique Most attackers commonly corner their
            victims into an empty space or push them up against a wall. If this
            is the case, it’s better to remember the weak spots and hit one of
            them before their next move. If the attacker’s hands are on the
            wall, then hit them near the armpit area or near their chest, jaw,
            or neck, depending on your position. <br />The most fatal blow
            Self-defense is a hit with your head; move down like you’re going to
            the ground, and then jump up and use your forehead against the
            attacker's jaw or chin. This move can disorient any attacker,
            regardless of their size or strength.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Strategy;
