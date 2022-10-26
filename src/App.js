import React, { useState } from 'react';
import './App.css';
import iconStar from './images/icon-star.svg';
import thankYou from './images/illustration-thank-you.svg';

function App() {
  const [submit, setSubmit] = useState(false);
  const [grade, setGrade] = useState(0);

  const checkGradeAndSubmit = () => {
    if (grade === 0) {
      alert('Please, choose a grade!');
      return;
    }
    setSubmit(true);
  }

  if (submit) {
    return (
      <main className="card tku">
        <picture>
          <img src={thankYou} alt="thank-you" className="thankyou" />
        </picture>
        <span className="grade">{`You selected ${grade} out of 5`}</span>
        <h1 className="title">Thank You!</h1>
        <p className="text tku">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </main>
    );
  }
  return (
    <main className="card">
      <picture>
        <img src={iconStar} alt="icon-star" className="star" />
      </picture>
      <h1 className="title">How did we do?</h1>
      <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <section className="buttons">
        <button type="button" onClick={() => setGrade(1)}>
          1
        </button>
        <button type="button" onClick={() => setGrade(2)}>
          2
        </button>
        <button type="button" onClick={() => setGrade(3)}>
          3
        </button>
        <button type="button" onClick={() => setGrade(4)}>
          4
        </button>
        <button type="button" onClick={() => setGrade(5)}>
          5
        </button>
      </section>
      <button type="button" className="submit-btn" onClick={checkGradeAndSubmit}>
        S U B M I T
      </button>
    </main>
  );
}

export default App;
