import React from 'react'

const Question = ({question,handlequizquestions}) => {
  console.log(question);



  return (
    <div>
      <h1>{question.question}</h1>
      {
        question.options.map((option)=>{
          return(

            <button key={option} onClick={()=>handlequizquestions(option)}>{option}</button>
            )

        
        })
      }

    </div>
  )
}

export default Question