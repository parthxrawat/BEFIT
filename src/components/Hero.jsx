import React, { useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBMI(bmiValue);

      if (bmiValue < 18.5) setCategory('UNDERWEIGHT');
      else if (bmiValue < 24.9) setCategory('NORMAL WEIGHT');
      else if (bmiValue < 29.9) setCategory('OVERWEIGHT');
      else setCategory('OBESITY');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-black to-blue-950 text-white">
      {/* White Header Section */}
      <div className="w-full bg-white py-4  px-10 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="./src/assets/logo.jpg" // Replace with your logo URL
            alt="Logo"
            className="h-20 w-24 rounded-full"
          />
          <h1 className="text-4xl font-bold text-blue-900 ml-4 ">BEFIT</h1>
        </div>
        <p className="text-3xl font-medium text-gray-600 tracking-wide">
          Your Fitness. Your Health. Your Journey.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-black to-blue-950 p-10">
        <div className="w-full max-w-7xl h-[600px] flex flex-col md:flex-row items-center bg-gradient-to-b from-blue-950 to-black rounded-lg shadow-lg overflow-hidden">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 p-10 text-white">
            <h2 className="text-xl font-semibold text-blue-300 mb-4">
              UNLOCK YOUR BEAST MODE WITH
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              BE<span className="text-blue-500">FIT</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-8">
              We offer personalized diet plans, yoga routines, and workout programs tailored to your BMI, helping you achieve your fitness goals and improve overall health. Discover customized solutions designed to suit your body type, lifestyle, and wellness needs.
            </p>
            <Button
              func={() => {
                document.getElementById('bmi-section').scrollIntoView({ behavior: 'smooth' });
              }}
              text="Accept & Begin"
            />
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2">
            <div className="h-full w-full relative">
              <img
                src="https://img.freepik.com/premium-photo/dynamic-muscle-man-with-blue-neon-splash_155027-8948.jpg?w=1380"
                alt="Beast Mode"
                className="h-full w-full object-cover pr-4"
              />
              {/* Optional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen ">
  {/* BMI Section */}
  <div
    id="bmi-section"
    className="flex flex-col items-center p-10 "
  >
    <div className="flex flex-col items-center bg-black w-[20000px] h-40 ">
      <h2 className="text-lg font-medium uppercase text-blue-300 pt-4 mb-4 tracking-wide">
        Guided Plan for a Healthy Lifestyle
      </h2>
      <h1 className="text-5xl font-extrabold text-center mb-8">
        Know Your Health Guide
      </h1>
    </div>

    <div className="w-full max-w-[696px] bg-blue-800 mt-20 p-6 rounded-lg shadow-lg">

      <div className="mb-6">
        <label className="block text-blue-200 mb-2">01 Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Your Age"
          className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-200 mb-2">02 Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Your Weight in Kg"
          className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-200 mb-2">03 Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Your Height in Meter"
          className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
        />
      </div>

      <Button
        func={calculateBMI}
        text="Calculate BMI"
      />
    </div>

    {bmi && (
      <div className="mt-10 w-full max-w-4xl bg-blue-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-white mb-4">
          Your BMI Results
        </h3>
        <p className="text-sm text-gray-300 mb-4 text-center">
          BMI (Body Mass Index) is a measure that uses your weight and height to estimate body fat and assess if you're underweight, normal weight, overweight, or obese.
        </p>
        <p className="text-2xl text-center text-blue-300 font-semibold">
          Your BMI: <span className="text-white">{bmi}</span> — {category}
        </p>
      </div>
    )}
  </div>
</div>
  {/*diet section*/}
  <div className="min-h-screen ">
      <div className="flex flex-col items-center bg-black pt-5">
        <h2 className="text-lg font-medium uppercase text-blue-300 mb-4 tracking-wide">
          Choose what is best for you
        </h2>
        <h1 className="text-5xl font-extrabold text-center mb-8">
          Diet Guide
        </h1>
      </div>

      <div className="items-center flex flex-col">
        <div className="mt-10 h-60 w-full max-w-4xl bg-blue-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Breakfast
          </h3>
          <ul className="list-disc text-lg list-inside text-center pt-5 text-white">
            <li>1 boiled egg + 1 slice of whole-grain toast</li>
            <li>1 cup of spinach sautéed in 1 tsp olive oil</li>
            <li>1 small apple</li>
          </ul>
        </div>
      </div>

      <div className="items-center flex flex-col">
        <div className="mt-10 h-60 w-full max-w-4xl bg-blue-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Lunch
          </h3>
          <ul className="list-disc text-lg list-inside text-center pt-5 text-white">
            <li>1/2 cup of quinoa</li>
            <li>Grilled chicken breast (100–150g) or tofu</li>
            <li>A large mixed salad with cucumber, tomato, and lemon-olive oil dressing</li>
          </ul>
        </div>
      </div>

      <div className="items-center flex flex-col pb-5">
        <div className="mt-10  h-60 w-full max-w-4xl bg-blue-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Dinner
          </h3>
          <ul className="list-disc text-lg list-inside text-center pt-5 text-white">
            <li>Baked salmon or a vegetarian patty</li>
            <li>1/2 cup of roasted sweet potatoes</li>
            <li>Steamed broccoli and green beans</li>
          </ul>
        </div>
      </div>
      </div>
      {/*yoga*/}
      <div className="flex flex-col items-center bg-black pt-5">
        <h2 className="text-lg font-medium uppercase text-blue-300 mb-4 tracking-wide">
          Bring your mind to peace
        </h2>
        <h1 className="text-5xl font-extrabold text-center mb-8">
          Yoga Plan
        </h1>
      </div>
      <div className="flex flex-col gap-6 items-center pt-10">
        <div className=" bg-blue-800  text-white rounded-lg shadow-lg h-[420px] overflow-hidden w-full max-w-[1150px] flex">
          <img
            src="./src/assets/Tadasana2.webp"
            alt="Mountain Pose"
            className="h-[375px] w-[334px] p-4 mt-2 ml-5 object-cover"
          />
          <div className="p-5 pl-28  w-200px">
            <h1 className="text-3xl font-bold mb-2 uppercase pb-2">Mountain Pose (Tadasana)</h1>
            <p className="text-base leading-relaxed mb-4">
              FOUNDATIONAL YOGA POSTURE THAT PROMOTES BALANCE, IMPROVES POSTURE, AND
              STRENGTHENS THE LEGS AND CORE WHILE FOSTERING MINDFULNESS AND STABILITY.
            </p>
            <h2 className='font-bold pb-2'>PROCESS :</h2>
            <p className="text-base leading-relaxed">
              TO PERFORM TADASANA (MOUNTAIN POSE), STAND UPRIGHT WITH YOUR FEET TOGETHER
              AND ARMS AT YOUR SIDES, DISTRIBUTE YOUR WEIGHT EVENLY ACROSS BOTH FEET
              AND ENGAGE YOUR THIGHS AND CORE. STRETCH YOUR ARMS OVERHEAD, PALMS
              FACING EACH OTHER, AND LENGTHEN YOUR SPINE. HOLD THE POSE FOR A FEW
              BREATHS, MAINTAINING A STEADY GAZE AND RELAXED SHOULDERS.
            </p>
          </div>
        </div>

        <div className=" bg-blue-800 mt-8  text-white rounded-lg shadow-lg h-[420px] overflow-hidden w-full max-w-[1150px] flex">
          <img
            src="./src/assets/tree-pose.webp"
            alt="Tree Pose"
            className="h-[375px] w-[334px] p-4 mt-2 ml-5 object-cover"
          />
          <div className="p-5 pl-28 w-200px">
            <h1 className="text-3xl font-bold mb-2 uppercase pb-2">Tree Pose (Vrikshasana)</h1>
            <p className="text-base leading-relaxed mb-4">
               IT IS A SEATED YOGA POSTURE THAT GENTLY TWISTS THE SPINE, IMPROVING FLEXIBILITY,
              DIGESTION, AND DETOXIFICATION.
            </p>
            <h2 className='font-bold pb-2'>PROCESS :</h2>
            <p className="text-base leading-relaxed">
              TO PERFORM VRIKSHASANA (TREE POSE), STAND TALL IN MOUNTAIN POSE AND SHIFT YOUR
              WEIGHT ONTO ONE LEG. PLACE THE SOLE OF YOUR OTHER FOOT ON YOUR INNER CALF,
              CALF, OR INNER THIGH. MAINTAIN BALANCE, ENGAGE YOUR CORE. FOCUS ON A FIXED POINT
              TO MAINTAIN BALANCE, AND BRING YOUR HANDS TOGETHER IN PRAYER POSITION AT YOUR
              CHEST OR RAISE THEM OVERHEAD TO HOLD THE POSE FOR 5-10 BREATHS. THEN REPEAT ON
              THE OTHER SIDE.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-800 text-white rounded-lg shadow-lg h-[400px] overflow-hidden w-full max-w-[1150px] flex">
        <img  
            src="./src/assets/warrior.webp"
            alt="Supported Warrior"
            className="h-[375px] w-[334px] p-4 mt-2 ml-5 object-cover"
          />
        <div className="p-5 pl-28  w-200px">
            <h1 className="text-3xl font-bold mb-2 uppercase pb-2">Supported Warrior (Virabhadrasana)</h1>
            <p className="text-base leading-relaxed mb-4">
              IT IS A SEATED YOGA POSTURE THAT GENTLY TWISTS THE SPINE, IMPROVING FLEXIBILITY,
              DIGESTION, AND DETOXIFICATION.
            </p>
            <h2 className='font-bold pb-2'>PROCESS :</h2>
            <p className="text-base leading-relaxed">
              TO PERFORM VIRABHADRASANA, START BY STANDING WITH YOUR FEET WIDE APART AND TURN
              ONE FOOT OUT TO 90 DEGREES WHILE KEEPING THE OTHER FOOT EVENLY TURNED TOWARD.
              BEND YOUR FRONT KNEE SOFTLY, KEEP YOUR BACK LEG STRAIGHT, AND LET YOUR SHOULDERS
              RELAX. KEEPING YOUR GAZE FORWARD, HOLD THE POSE FOR SEVERAL BREATHS. RELEASE AND
              REPEAT ON THE OTHER SIDE.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-black pt-5 mt-8 h-40">
        <h2 className="text-lg font-medium uppercase text-blue-300 mb-4 tracking-wide">
          Bring the best version of yourself
        </h2>
        <h1 className="text-5xl font-extrabold text-center mb-8">
          Workout plan
        </h1>
      </div>
      <div className='items-center justify-center flex pb-7'>
      <div className="bg-blue-800 text-white p-6 rounded-lg w-1/2 flex flex-col text-center cent mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl text-[#60A5FA]  font-bold">01</h2>
        <h2 className="text-3xl font-bold mt-4 ml-9">Cardio (10-15 Minutes)</h2>
        <p className="text-xl font-bold   text-[#60A5FA]  ">Compound</p>
        
      </div>
      <p className="text-lg text-left font-medium mt-4 text-[#60A5FA] ">Activity</p>
      <h3 className="text-xl text-left font-bold mt-2">Marching in Place</h3>
      <ul className="list-none text-left p-0 mt-2">
        <li className="text-lg font-medium mb-2">Chair Marching: Sit on a sturdy chair and march your legs up and down.</li>
        <li className="text-lg font-medium mb-2">Step Touch: Step side-to-side, gently tapping your feet.</li>
        <li className="text-lg font-medium mb-2">Seated Jacks: While seated, open and close your arms and legs like a jumping jack.</li>
        <li className="text-lg font-medium">Walking in Place: Walk in place with exaggerated arm movements.</li>
      </ul>
    </div>
    </div>
    <div className='items-center justify-center flex pb-7'>
      <div className="bg-blue-800 text-white p-6 rounded-lg w-1/2 flex flex-col text-center cent mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl text-[#60A5FA]  font-bold">02</h2>
        <h2 className="text-3xl font-bold mt-4 ml-9">Strength Training (10–15 minutes)</h2>
        <p className="text-xl font-bold   text-[#60A5FA]  ">Compound</p>
        
      </div>
      <p className="text-lg text-left font-medium mt-4 text-[#60A5FA] ">Activity</p>
      <h3 className="text-xl text-left font-bold mt-2">Marching in Place</h3>
      <ul className="list-none text-left p-0 mt-2">
      <li className="text-lg font-medium mb-2">Wall Push-Ups: Stand facing a wall, place your palms on it, and bend your elbows to bring your chest closer to the wall.</li>
        <li className="text-lg font-medium mb-2">Seated Leg Lifts: Sit on a chair, extend one leg straight, hold, then lower it. Alternate legs.</li>
        <li className="text-lg font-medium mb-2">Chair Squats: Stand in front of a chair, lower yourself just before sitting, then stand up.</li>
        <li className="text-lg font-medium mb-2">Modified Plank: Place hands on a sturdy surface, step back slightly, and hold your body straight for 10–20 seconds.</li>
        <li className="text-lg font-medium">Arm Raises with Water Bottles: Hold light weights or water bottles, raise arms to shoulder height, and lower slowly.</li>
      </ul>
    </div>
    </div>
    <div className='items-center justify-center flex pb-7'>
      <div className="bg-blue-800 text-white p-6 rounded-lg w-1/2 flex flex-col text-center cent mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl text-[#60A5FA]  font-bold">03</h2>
        <h2 className="text-3xl font-bold mt-4 ml-9">Cool-Down (5–10 minutes)</h2>
        <p className="text-xl font-bold   text-[#60A5FA]  ">Compound</p>
        
      </div>
      <p className="text-lg text-left font-medium mt-4 text-[#60A5FA] ">Activity</p>
      <h3 className="text-xl text-left font-bold mt-2">Marching in Place</h3>
      <ul className="list-none text-left p-0 mt-2">
        <li className="text-lg font-medium mb-2">Seated Forward Bend: Sit and reach for your toes gently.</li>
        <li className="text-lg font-medium mb-2">Side Stretches: Stand or sit and lean sideways to stretch your torso.</li>
        <li className="text-lg font-medium mb-2">Cat-Cow Stretch (on Chair or Mat): Arch and round your back gently.</li>
        <li className="text-lg font-medium">Deep Breathing: Sit or lie down, breathe deeply, and relax your body.</li>
      </ul>
    </div>
    </div>

    </div>
  );
}
