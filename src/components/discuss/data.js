export const queries = [
  {
    id: "query1",
    question: "Pass by reference vs pass by pointer ?",
    description: `We can pass a vector to a function to change its actual members by two ways:
1:
void func(vector<int>*ptr)
...
func(&vec);
2:
void func(vector<int>& vec)
...
func(vec);

But what's the difference between the two? Which one shall I choose and which one is better/faster?`,
    posterName: "Govind",
    posterPic: null,
    upvotes: 3,
    responseCount: 12,
    views: 216,
    datetime: 1677060897000,
    tags: ["c++"],
  },
  {
    id: "query2",
    question: "What is react router ?",
    description:
      "while learning react i was search for navigation methods and stumbled upon a package name react router, so i want to know about it and with some examples.",
    posterName: "John Titor",
    posterPic: null,
    upvotes: 10,
    responseCount: 46,
    views: 126,
    datetime: 1676984397000,
    tags: ["react.js", "javascript", "web"],
  },
  {
    id: "query3",
    question: "How to boost my moral while coding ?",
    description: null,
    posterName: "Anjali",
    posterPic: null,
    upvotes: 33,
    responseCount: 17,
    views: 1027,
    datetime: 1679081581000,
    tags: ["code", "health"],
  },
  {
    id: "query4",
    question: "What is oops ?",
    description: null,
    posterName: "Binod",
    posterPic: null,
    upvotes: 50,
    responseCount: 11,
    views: 503,
    datetime: 1673751285000,
    tags: ["oops", "code"],
  },
];

export const discussion = [
  {
    id: "query1",
    responses: [
      {
        text: `References are the preferred way in C++. Whenever possible one should favour ref over pointer.
I am not sure about performances, but I would not expect a significant differemce. But I would have to research that...`,
        responderName: "Binod",
        responderPic: null,
        upvotes: 50,
        datetime: 1673751285000,
      },
      {
        text: `Both passing a pointer and passing a reference allow you to modify the contents of a vector in a function, but they have some differences in terms of syntax and behavior.\n
When you pass a pointer to a function, you are passing the memory address of the vector, and the function can modify the vector through this address. This requires the use of the dereferencing operator "*" to access the vector elements. For example, if you want to access the first element of the vector, you would use (*ptr)[0]. This can be less intuitive and more error-prone, especially for beginners.\n
When you pass a reference to a function, you are essentially passing an alias of the vector, and the function can modify the vector directly using normal dot notation. For example, if you want to access the first element of the vector, you would use vec[0]. This syntax is usually considered more natural and less error-prone.\n
In terms of performance, passing a reference is usually faster than passing a pointer because there is no need to dereference the pointer. However, the performance difference is usually negligible for small vectors.\n
In general, if you are not dealing with legacy code or special cases, it is recommended to pass a reference to modify the contents of a vector in a function, as it is more intuitive and less error-prone.`,
        responderName: "Vimal Kesaria",
        responderPic: null,
        upvotes: 137,
        datetime: 1672935925000,
      },
      {
        text: `To answer your first question, the difference between passing by reference and passing by pointer isn't so obvious.
 I would say that pointers are objects i.e they have a location address in memory that hold the address of another object. However a reference is not an object... A reference is just a nickname for an object that is existing. 
In your example,  the first function that uses int* ptr will create like a local variable then copy the value of the argument passed to it when called... You can imagine it as something like this 
// Outside the function 
int* mainPTR = &obj;
// Inside the function 
int* ptr = mainPTR; 
So technically, you're just creating a local variable of int* ptr in the first example \n
However, the second example does not create any variable, it just give a nickname to the existing variable   it's a reference \n
Now without a doubt, it's obvious references are better and will be faster. Imagine having to create a local instance for heavy classes`,
        responderName: "John Punjabi",
        responderPic: null,
        upvotes: 33,
        datetime: 1672721275000,
      },
    ],
  },
  {
    id: "query2",
    responses: [
      {
        text: `React Router is a library that allows you to handle routing in a React application. It provides a way to map URLs to React components, allowing you to create a single-page application with multiple views.  

Here's a brief example of how to use React Router:  

1. First, you need to install React Router. You can do this by running the following command in your terminal:  

${"```null"}
npm install react-router-dom
${"```"}

2. Import the necessary components from the React Router package:  

${"```javascript"}
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
${"```"}

3. Wrap your app with the Router component:  

${"```javascript"}
<Router>
  {/* Your app goes here */}
</Router>
${"```"}

4. Define your routes using the Route component:  

${"```javascript"}
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
</Switch>
${"```"}

In this example, we have three routes: one for the home page, one for the about page, and one for the contact page. Each route specifies the path and the component to render when that path is matched.  

5. Use the Link component to create links between pages:  

${"```javascript"}
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
${"```"}

These links will navigate to the corresponding routes when clicked.  

And that's it! With React Router, you can easily create a multi-page application with dynamic routing.`,
        responderName: "Vimal Kesaria",
        responderPic: null,
        upvotes: 137,
        datetime: 1672935925000,
      },
    ],
  },
  {
    id: "query3",
    responses: [
      {
        text: `Maintaining consistency in learning coding can be challenging, but there are a few strategies that can help boost your motivation and stay on track:

Set clear goals: Define what you want to achieve and set specific, measurable goals. Make a plan that outlines what you want to learn, by when, and how.

Break it down: Break down your learning into small, manageable tasks. This can help you to avoid feeling overwhelmed and increase your sense of accomplishment.

Make a schedule: Schedule your learning time and stick to it. Set aside a regular time each day or week for coding, and make it a priority.

Find a study buddy: Find someone who shares your interest in coding and who can hold you accountable for your progress. This can help you to stay motivated and engaged.

Practice regularly: Regular practice is essential for improving your coding skills. Practice coding every day, even if it's just for a short time.

Celebrate your successes: Celebrate your accomplishments and milestones. This can help to boost your confidence and motivation.

Seek help: Don't be afraid to ask for help when you get stuck. Join online communities, attend coding meetups, and ask for feedback from more experienced coders.

Remember that consistency is key, and it takes time and effort to develop coding skills. Stay patient, persistent, and keep pushing yourself to learn and grow.`,
        responderName: "Vimal Kesaria",
        responderPic: null,
        upvotes: 137,
        datetime: 1616935925000,
      },
      {
        text: `Never give up. Read and understand the lessons, and you’ll be a great programmer. Use sololearn courses, they are great explained. If you have any question, ask it here.`,
        responderName: "Vimal Kesaria",
        responderPic: null,
        upvotes: 17,
        datetime: 1672285925000,
      },
      {
        text: `Thank you ❤️ it helped a lot.`,
        responderName: "Anjali",
        responderPic: null,
        upvotes: 2,
        datetime: 1672925525000,
      },
    ],
  },
];
