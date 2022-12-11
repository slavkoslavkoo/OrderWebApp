import React from 'react';
import { FiUser, FiMail } from 'react-icons/fi';

import styles from './QuestionCard.module.scss';

const QuestionCard = ({ question }) => {
  return (
    <div className={styles.card}>
      <p className={styles.date}>{question.id}</p>
      <div className={styles.title}>
        <p className={styles.name}>
          <FiUser />
          {question.name}
        </p>
        <a href={`mailto:${question.email}`} className={styles.mail}>
          <FiMail />
          {question.email}
        </a>
      </div>
      <div className={styles.text}>
        <p className={styles.question}>{question.question}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
