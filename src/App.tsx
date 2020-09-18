import React, { useState } from 'react';
//Components
import QuestionCard from './components/QuestionCard';

import { fetchQuizQuestions } from './API';
//Types
import { Difficulty, QuestionState } from './API';

//styles
import { GlobalStyle, Wrapper } from './App.styles';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correactAnswer: string;
}
const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loanding, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);


  const startQuiz = async () => {
    setLoading(true);
    setgameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //userName
      const answer = e.currentTarget.value;
      //checkAnswer correct
      const correct = questions[number].correct_answer === answer;
      // add score
      if (correct) setScore((prev) => prev + 1);


      //save answer
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correactAnswer: questions[number].correct_answer,
      }

      setUserAnswers((prev) => [...prev, AnswerObject])
    }

  }

  const nextQuestion = () => {
    //move to next
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setgameOver(true);

    } else {
      setNumber(nextQuestion);
    }



  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>EUREKA</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          < button className="start" onClick={startQuiz}> START</button> : null
        }


        {!gameOver ? <p className="score"> Score: {score} </p> : null}
        {loanding && <p> Loading Questions ...</p>}
        {!loanding && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}

          />
        )}

        {!gameOver && !loanding && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}> Next Question </button>
        ) : null
        }
      </Wrapper>
    </>
  );


}

export default App;
