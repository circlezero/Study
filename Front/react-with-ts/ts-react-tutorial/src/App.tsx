import React from "react";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

const App: React.FC = () => {
  // return <ReducerSample />;
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;
