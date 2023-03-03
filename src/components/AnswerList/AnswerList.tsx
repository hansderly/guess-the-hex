import React from 'react'
import Answer from '../Answer/Answer'

import styles from './AnswerList.module.css'
import { IQuiz } from '../../App'

interface IAnswerList {
  quiz: IQuiz | undefined,
  onClick: (code: string) => boolean,
}

const AnswerList = ({ quiz, onClick }: IAnswerList) => {

  return (
    <div className={styles.answerList}>
      {
        quiz?.hexCodes.map(hexCode => (
          <Answer key={hexCode} onClick={onClick} code={hexCode} />
        ))
      }
    </div>
  )
}

export default AnswerList
