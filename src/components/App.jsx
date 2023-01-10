

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import MyContainer from './MyContainer/MyContainer';
import Section from './Section/Section';
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { useState } from "react";



const App = () => {
  const [ good, setGood ] = useState (0);
  const [ neutral, setNeutral ] = useState (0);
  const [ bad, setBad ] = useState (0);

const state = {good, neutral, bad};

const countTotalFeedback = () => good + neutral + bad;

const total = countTotalFeedback();

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()) * 100);
};

const positiveFeedbackPercentage = countPositiveFeedbackPercentage();


const handleClick = event => {
  setGood(prevState => {
    return event.target.textContent === 'Good' ? prevState + 1 : prevState;
  });
  setNeutral(prevState => {
    return event.target.textContent === 'Neutral' ? prevState + 1 : prevState;
  });
  setBad(prevState => {
    return event.target.textContent === 'Bad' ? prevState + 1 : prevState;
  });
};

return (
  <>
    <MyContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options = { state } 
          onLeaveFeedback = { handleClick } 
        />
        {total !== 0 ? (
          <Statistics 
            good = {good} 
            neutral = {neutral} 
            bad = {bad} 
            total = {total} 
            positivePercentage = {positiveFeedbackPercentage}
          />
        ) : (
          <Notification message = "There is no feedback" />
        )}
      </Section>
    </MyContainer>
  </>
)
}



export default App;
