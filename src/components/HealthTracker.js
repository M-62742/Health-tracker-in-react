import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../";

const HealthTracker = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    distance: '',
    exercise: '',
    water: '',
    bedtime: '',
    wakeTime: '',
    mood: 'Happy',

    heartRate: '',
    bloodPressure: '',
    bloodSugar: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const distance = [
    "Obesity", "Cardiovascular Diseases (e.g., Heart Disease, Stroke)", "Type 2 Diabetes", "Osteoporosis (Weak Bones)",
    "Mental Health Issues (e.g., Depression, Anxiety)", "Muscle Weakness and Reduced Mobility", "Chronic Fatigue Syndrome or Fibromyalgia",
    "High Blood Pressure (Hypertension)", "Sleep Disorders (e.g., Insomnia)", "Metabolic Syndrome", "Joint Pain and Arthritis"
  ];
  const exercise = [
    "Heart Disease", "Obesity", "Type 2 Diabetes", "Mental Health Issues (e.g., Anxiety, Depression)", "Weak Muscles and Bones (e.g., Osteoporosis)",
    "Poor Metabolic Health (e.g., Metabolic Syndrome)", "Weaker Immune System"
  ];
  const water = [
    "Kidney Stones", "Urinary Tract Infections (UTIs)", "Constipation", "Dehydration", "Kidney Damage", "Dry Skin and Poor Skin Health",
    "Joint Pain", "Poor Cognitive Function"
  ];
  const heart = [
    "Kidney Stones", "Urinary Tract Infections (UTIs)", "Constipation", "Dehydration", "Kidney Damage", "Dry Skin and Poor Skin Health",
    "Joint Pain", "Poor Cognitive Function"
  ];
  const bloodPressureDiseases = [
    "Heart attack", "Stroke", "Kidney disease", "Aneurysm", "Hypertensive retinopathy", "Dementia", "Shock", "Organ damage",
    "Fainting and falls", "Sepsis"
  ];

  const stepsToOvercomeD = [
    "Follow a balanced diet rich in vegetables, fruits, lean proteins, and whole grains.", "Engage in regular physical activity, like brisk walking or swimming, for at least 150 minutes a week.",
    "Stay hydrated by drinking plenty of water.", "Maintain 7–9 hours of quality sleep per night.", "Consult a dietitian or healthcare provider for personalized advice."
  ];

  const stepsToOvercomeW = [
    "Drink 8–12 cups of water daily to stay hydrated.", "Maintain a balanced diet rich in fiber, fruits, and vegetables.", "Limit high-sodium and high-oxalate foods.",
    "Incorporate citrus, like lemon water, to prevent kidney stones.", "Practice good personal hygiene to reduce UTI risks.", "Exercise regularly to improve digestion and joint health.",
    "Use moisturizers and consume omega-3-rich foods for skin health.", "Monitor dehydration signs like fatigue and dark urine.", "Manage chronic conditions like diabetes and high blood pressure.",
    "Include anti-inflammatory foods like turmeric and fish oil."
  ];

  const stepsToOvercomeE = [
    "Healthy diet", "Regular exercise", "Manage stress", "Take prescribed medications", "Monitor health (e.g., blood sugar, blood pressure)", "Maintain healthy weight",
    "Get enough sleep", "Quit smoking", "Stay hydrated", "Build a support system"
  ];

  const stepsToOvercomeH = [
    "Stay hydrated", "Eat a balanced diet", "Exercise regularly", "Manage stress", "Get enough sleep", "Regular medical check-ups", "Practice good hygiene",
    "Limit alcohol and caffeine", "Avoid smoking", "Use skin moisturizers"
  ];

  const stepsToOvercomeB = [
    "Monitor blood pressure regularly", "Adopt a heart-healthy diet (e.g., low sodium, high potassium)", "Exercise regularly (e.g., walking, cycling)", "Limit alcohol consumption",
    "Quit smoking", "Manage stress (e.g., meditation, yoga)", "Take prescribed medications", "Maintain healthy weight", "Get enough sleep", "Regular check-ups with healthcare provider"
  ];

  const appendListItems = (list, items) => {
    return items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  const handleSubmit = () => {
    setIsFormVisible(true);
    // Validate and process data here
  };

  return (
    <div className="app">
      <h1>Health Tracker</h1>
      <h3>Track Today, Thrive Tomorrow.</h3>
      <div className="inputs">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Distance Traveled (in km)</label>
          <input
            type="number"
            value={formData.distance}
            onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Exercise Duration (in min)</label>
          <input
            type="number"
            value={formData.exercise}
            onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Water Intake (in ml)</label>
          <input
            type="number"
            value={formData.water}
            onChange={(e) => setFormData({ ...formData, water: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Bedtime</label>
          <input
            type="time"
            value={formData.bedtime}
            onChange={(e) => setFormData({ ...formData, bedtime: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Wake-Up Time</label>
          <input
            type="time"
            value={formData.wakeTime}
            onChange={(e) => setFormData({ ...formData, wakeTime: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Mood</label>
          <select
            value={formData.mood}
            onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
            required
          >
            <option value="Happy">Happy</option>
            <option value="Stressed">Stressed</option>
            <option value="Anxious">Anxious</option>
            <option value="Calm">Calm</option>
          </select>
        </div>
        <div>
          <label>Resting Heart Rate (in bpm)</label>
          <input
            type="number"
            value={formData.heartRate}
            onChange={(e) => setFormData({ ...formData, heartRate: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Blood Pressure (in mmHg)</label>
          <input
            type="text"
            value={formData.bloodPressure}
            onChange={(e) => setFormData({ ...formData, bloodPressure: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Blood Sugar Level (in mg/dL)</label>
          <input
            type="number"
            value={formData.bloodSugar}
            onChange={(e) => setFormData({ ...formData, bloodSugar: e.target.value })}
            required
          />
        </div>
      </div>
      <button id="submit" onClick={handleSubmit}>Submit</button>

      {isFormVisible && (
        <div className="form">
          <div className="top">
            <div id="savePDF">Save</div>
            <button className="can" onClick={() => setIsFormVisible(false)}>x</button>
          </div>
          <h3 id="h2">Your Results</h3>
          <div className="data">
            <p>Name: {formData.name}</p>
            <p>Age: {formData.age}</p>
            <p>Gender: {formData.gender}</p>
            <p>Distance: {formData.distance} km</p>
            <p>Exercise: {formData.exercise} min</p>
            <p>Water Intake: {formData.water} ml</p>
            <p>Bedtime: {formData.bedtime}</p>
            <p>Wake-Up Time: {formData.wakeTime}</p>
            <p>Mood: {formData.mood}</p>
            <p>Heart Rate: {formData.heartRate} bpm</p>
            <p>Blood Pressure: {formData.bloodPressure} mmHg</p>
            <p>Blood Sugar: {formData.bloodSugar} mg/dL</p>
          </div>

          <div id="disease">
            <h3>Possible Conditions</h3>
            <ul className="remedies">{appendListItems(distance, distance)}</ul>
            <ul className="remedies">{appendListItems(exercise, exercise)}</ul>
            <ul className="remedies">{appendListItems(water, water)}</ul>
            <ul className="remedies">{appendListItems(heart, heart)}</ul>
            <ul className="remedies">{appendListItems(bloodPressureDiseases, bloodPressureDiseases)}</ul>
          </div>

          <div className="listof">
            <h2>Steps to Overcome These Conditions</h2>
            <ul>{appendListItems(stepsToOvercomeD, stepsToOvercomeD)}</ul>
            <ul>{appendListItems(stepsToOvercomeW, stepsToOvercomeW)}</ul>
            <ul>{appendListItems(stepsToOvercomeE, stepsToOvercomeE)}</ul>
            <ul>{appendListItems(stepsToOvercomeH, stepsToOvercomeH)}</ul>
            <ul>{appendListItems(stepsToOvercomeB, stepsToOvercomeB)}</ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthTracker;
