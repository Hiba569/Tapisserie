import React from "react";
import { useNavigate} from "react-router-dom";


const ArticlePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      index
    </div>
  );
};

export default ArticlePage;
