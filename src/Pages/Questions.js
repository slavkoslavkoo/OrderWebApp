import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionCard from '../Components/Questions/QuestionCard';

import styles from './Questions.module.scss';

const Questions = () => {
  const questions = useLoaderData();

  return (
    <ul className={styles.questions}>
      {questions.map((question, key) => {
        return <QuestionCard key={key} question={question} />;
      })}
    </ul>
  );
};

export default Questions;
