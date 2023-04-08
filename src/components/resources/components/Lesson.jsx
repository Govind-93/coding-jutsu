import "./lesson.css";
import info_logo from "../assets/info.svg"

const Text = ({ children }) => {
  return (
    <div className="text">
      <p>{children}</p>
    </div>
  );
};

const Note = ({ children }) => {
  return (
    <div className="note">
      <img src={info_logo} alt="Note" />
      <p>{children}</p>
    </div>
  );
};

const Snippet = ({ children }) => {
  return (
    <div className="snippet">
      <pre>{children}</pre>
    </div>
  );
};

function Lesson() {
  return (
    <div className="lesson">
      <h3 className="heading">Welcome to C++</h3>
      <Text>
        A C++ program is a collection of commands or statements.
        <br />
        <br />
        Below is a simple program template.
      </Text>
      <Snippet>{`#include <iostream>
using namespace std;

int main()
{

  return 0;
}`}</Snippet>
      <Text>
        You will learn what each of the statements does in the upcoming lessons.
        <br />
        For now, remember that the entry point of every C++ program is the
        main() function, irrespective of what the program does.
      </Text>

      <Note>
        Curly brackets {} indicate the beginning and end of a function, which
        can also be called the function's body. The information inside the
        brackets indicates what the function does when executed.
      </Note>
    </div>
  );
}

export default Lesson;
