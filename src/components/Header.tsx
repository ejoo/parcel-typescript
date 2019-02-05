import * as React from "react";

const C = ({name}) => {
    return (
        <p>My Name is {name}</p>
    )
}


const names = ['anita', 'shakila', 'alia', 'nosheen'];

const Arr = () => {
    return names.map(item => {
        return <C name={item} />
    });
    // return [
    //     <p>Pakistan</p>,
    //     <p>India</p>,
    //     <p>USA</p>,
    //     <C name='ejaz' />,
    // ]
}

export default ({ children, Todos }) => {
    
  return (
    <div>
      <h1>Header</h1>
        <Arr />
        <hr />
      {children}
      <hr />
    <Todos />
    </div>
  );
};
