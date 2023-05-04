import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>
        Tell us the differences between uncontrolled and controlled components?
      </h2>
      <h4>
        Controlled components refer to components that have their state and
        behavior controlled by the parent component. These components rely on
        props passed down from the parent component to update their state and
        behavior.
      </h4>
      <br />
      <h2>How to validate React props using PropTypes?</h2>
      <h4>
        propTypes is used for props validation. If some of the props aren't
        using the correct type that we assigned, we will get a console warning.
      </h4>
      <br />
      <h2>Tell us the difference between nodejs and express js.?</h2>
      <h4>
        NodeJS is the package, which provides the JavaScript run-time
        environment, whereas Express is a framework that sits on top of NodeJS
        and helps us to handle requests and responses.
      </h4>
      <br />
      <h2>What is a custom hook, and why will you create a custom hook?</h2>
      <h4>
        Custom hook can be reused easily, which makes the code cleaner and
        reduces the time to write the code. It also enhances the rendering speed
        of the code as a custom hook does not need to be rendered again and
        again while rendering the whole code.
      </h4>
    </div>
  );
};

export default Blog;
