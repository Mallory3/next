import { FaRegPaperPlane } from "react-icons/fa"; //email


export const SubmitButton = ({ onClick }) => {
  return (
    <button
      className={`button primary submit`}
      type="submit"
      onClick={onClick}
    >
      Send&nbsp;&nbsp;
      <FaRegPaperPlane />
    </button>
  )
};