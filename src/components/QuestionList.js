import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateCorrect }) {
  const questionItems = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDelete={onDeleteQuestion}
      onUpdateCorrect={onUpdateCorrect}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
