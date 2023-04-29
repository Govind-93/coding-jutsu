import illustrable from "./assets/illustrable.gif";
import arrayDS from "./assets/arrayDS.png";
import classificationofDataStructure from "./assets/classificationofDataStructure.jpg";
// Stub Lesson
const lesson_md = {
  id: null,
  name: "Sample Article",
  text: `

### Sub Heading 1

Nisi consectetur nulla occaecat excepteur excepteur veniam enim aliquip. Cillum aliqua occaecat nulla laboris magna ex fugiat nostrud magna. Commodo excepteur elit cupidatat ad quis est qui voluptate incididunt proident do.
  
  
#### Sub Sub Heading

Nostrud est deserunt ea officia sunt est nulla labore. Est excepteur dolore pariatur in sint. Eiusmod minim quis velit aliqua cillum. Do ad fugiat nulla amet excepteur esse cillum esse tempor duis minim. Nulla aute exercitation officia sunt aute consectetur sit laboris ipsum reprehenderit culpa. Dolor nisi et do adipisicing exercitation voluptate. Dolor elit ut excepteur adipisicing do voluptate deserunt adipisicing adipisicing est ut.

${"```some language"}
Laboris culpa ex aliquip eiusmod sit do culpa magna cillum deserunt. Cillum consequat pariatur ex ex laboris voluptate ipsum. Mollit amet aliqua ad irure in nostrud occaecat officia eu laborum. Enim irure ipsum consectetur proident consectetur ad dolore.
${"```"}

### Sub Heading 2

Deserunt ex aliqua cillum minim ad esse dolore consectetur consequat ex veniam nostrud. Dolor officia reprehenderit dolor ut exercitation velit Lorem duis ipsum aliqua exercitation dolore Lorem. Eiusmod elit occaecat elit cupidatat reprehenderit voluptate aute consequat dolore proident consequat Lorem in. Consectetur sint consequat ipsum magna sint officia quis tempor cillum sint ea mollit labore. Magna aliquip nulla officia ipsum est consectetur consequat officia commodo.

${"```note"}
Velit officia magna amet ipsum. Commodo reprehenderit ullamco est eiusmod cillum. Sunt nostrud cillum amet exercitation incididunt et veniam duis duis commodo velit tempor pariatur elit.
${"```"}
`,
};

const lessons = [
  {
    id: "welcometocpp",
    name: "Welcome to C++",
    text: `
A C++ program is a collection of __commands or statements__.  
  
Below is a simple program template.
${"```"}c++
#include <iostream>
using namespace std;

int main() {
  return 0;
}
${"```"}
![C++](${illustrable} "C++ Illustration")
You will learn what each of the statements does in the upcoming lessons.

For now, remember that the entry point of every C++ program is the __main()__ function, irrespective of what the program does.
${"```"}note
__Curly brackets__ { } indicate the beginning and end of a function, which can also be called the __function's body__. The information inside the brackets indicates what the function does when executed.
${"```"}
`,
  },
  {
    id: "dsa",
    name: "Data Structures and Algorithms",
    text: `
### What is Data Structure

> A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.

A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. 

### Classification of Data Structures

![Classification of DS Chart](${classificationofDataStructure} "Classification of Data Structure")

- __Linear data structure:__ Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure. 
_Examples of linear data structures are array, stack, queue, linked list, etc._
  - __Static data structure:__ Static data structure has a fixed memory size. It is easier to access the elements in a static data structure. 
  _An example of this data structure is an array._
  - __Dynamic data structure:__ In dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code. 
  _Examples of this data structure are queue, stack, etc._
- Non-linear data structure: Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non-linear data structure, we can’t traverse all the elements in a single run only. 
_Examples of non-linear data structures are trees and graphs._
__For example__, we can store a list of items having the same data-type using the array data structure.

![Array Data Structure Diagram](${arrayDS} "Array Data Structure")

__Types of Data Structures:__

- [Array](/resources/dsa/arrayds)
- [Linked List](/resources/dsa/linked_list)
- [Stack](/resources/dsa/some_link)
- [Queue](/resources/dsa/some_link)
- [Binary Tree](/resources/dsa/some_link)
- [Binary Search Tree](/resources/dsa/some_link)
- [Heap](/resources/dsa/some_link)
- [Hashing](/resources/dsa/some_link)
- [Graph](/resources/dsa/some_link)
- [Matrix](/resources/dsa/some_link)
- [Misc](/resources/dsa/some_link)
- [Advanced Data Structure](/resources/dsa/some_link)
`,
  },
  {
    id: "arrayds",
    name: "Array Data Structure",
    text: `
### What is Array ?

> An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

![Array Data Structure Diagram](${arrayDS} "Array Data Structure")

__Array Introduction:__

- [What is Array](/resources/dsa/arrayds/some_link)
- [Introduction to Arrays – Data Structure and Algorithm Tutorials](/resources/dsa/arrayds/some_link)
- [Applications, Advantages and Disadvantages of Array](/resources/dsa/arrayds/some_link)
- __Introduction of Array in Different languages:__

  - [Arrays in C/C++](/resources/dsa/arrayds/some_link)
  - [Arrays in Java](/resources/dsa/arrayds/some_link)
  - [Arrays in Python](/resources/dsa/arrayds/some_link)
  - [Arrays in C#](/resources/dsa/arrayds/some_link)
  - [Arrays in Javascript](/resources/dsa/arrayds/some_link)

__Basic Operations:__

- [Searching in Array](/resources/dsa/arrayds/some_link)
- [Write a program to reverse an array](/resources/dsa/arrayds/some_link)
- [Left Rotate an Array](/resources/dsa/arrayds/some_link)
- [Right rotate an Array](/resources/dsa/arrayds/some_link)
- [Search, insert and delete in an unsorted array](/resources/dsa/arrayds/some_link)
- [Search, insert and delete in a sorted array](/resources/dsa/arrayds/some_link)
- [Sort an Array](/resources/dsa/arrayds/some_link)
- [Generate all subarrays](/resources/dsa/arrayds/some_link)

`,
  },
];

const modules = [
  {
    name: "Arrays",
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
  {
    name: "Heaps",
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire tincidunt scripserit frinicus efficitur meliore unum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
  {
    name: "Trees",
    lessons: [
      "invenireere porro",
      "invenireanum aperiri an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
      "invenire imi an maiestatis vidisse et fabellas adipiscing ubique eloquentiam sanctus legere porro",
    ],
  },
];
const data = [
  {
    id: 1,
    name: "Latest Articles",
    link: "latest_articles",
    linkName: "",
    data: [
      [
        "CSS Text Indent",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
    ],
    modules: modules,
  },

  {
    id: 2,
    name: "DSA",
    link: "dsa",
    linkName: "",
    data: [
      [
        "CSS Text Indent",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
    ],
    modules: modules,
  },

  {
    id: 3,
    name: "Web Development",
    link: "web_development",
    linkName: "",
    data: [
      [
        "CSS Text Indent",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
    ],
    modules: modules,
  },

  {
    id: 4,
    name: "Tutorials",
    link: "tutorials",
    linkName: "",
    data: [
      [
        "CSS Text Indent",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
      [
        "CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#A55",
      ],
      [
        "Templates in C++",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#5A5",
      ],
      [
        "map in Javascript",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#55A",
      ],
      [
        "Spread in JS",
        "doming et invenire luctus evertitur litora melius accusata sodales accusata persius",
        "#AA5",
      ],
    ],
    modules: modules,
  },
];

export default data;
export { lesson_md, lessons };
