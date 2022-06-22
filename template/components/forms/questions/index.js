import { useState } from 'react'
import { FaRegPaperPlane } from "react-icons/fa"; //email
import Button from '../../atoms/button'

export const QuestionsForm = () => {
  //Hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  //onChange Handlers
  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value)
  const questionChange = (e) => setQuestion(e.target.value)
  //Submit
  function handleSubmit(e) {
    // TODO: Hook up form to send to email
    alert('A name was submitted: ' + name + email + question);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Name:</label>
      <input 
        type="text"
        name="Name"
        value={name} 
        placeholder="Name"
        onChange={nameChange} />
      <label htmlFor="email">Email:</label>
      <input 
        type="text"
        name="Email"
        value={email} 
        placeholder="Email"
        onChange={emailChange} />
      <label htmlFor="email">Email:</label>
      <textarea 
        type="text"
        name="Question"
        rows="3"
        value={question} 
        placeholder="Ask a question..."
        onChange={questionChange} />
        <Button
          className={`button primary submit`}
          type="submit"
          label="Send&nbsp;&nbsp;"
        >
          <FaRegPaperPlane />
        </Button>
    </form>
  )
};