interface Book {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
  }

  const books: Book[] = [
    {
      id: 1,
      title: 'Programming in C',
      image: 'https://cdn.geekboots.com/geek/c-language-popularity-meta-1656157189121.jpg',
      description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
      link: 'https://drive.google.com/file/d/1B36OGR_QVEFnJvcH3NiBa0tcBaa2po6W/view?usp=drive_link',
    },
    {
      id: 2,
      title: 'Programming in C++',
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png',
      description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
      link: 'https://drive.google.com/file/d/1asF5MoWe2o5eDAG3o_OeA_f5vf9AKKy9/view?usp=drive_link',
    },
    {
      id: 3,
      title: 'Programming in Java',
      image: 'https://1.bp.blogspot.com/-bIgZGyzK51I/XyzniiD0JYI/AAAAAAAH7W0/dFGu48SV2I4Yg9--YNhAZ4Z6RiNbcWbuwCLcBGAsYHQ/s1600/java.jpg',
      description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
      link: 'https://drive.google.com/file/d/1Yzw0HDlQ4dECk04hb-1P81xR5dwEBM_k/view?usp=drive_link',
    },
    {
      id: 4,
      title: 'Programming in Python',
      image: 'https://1.bp.blogspot.com/-WFlTDRQ5nZI/XqMED_-aV8I/AAAAAAAB1NM/X4mEmbLbylYotlO25v8f6v4RM2zQobmVgCLcBGAsYHQ/s1600/image2%2B-%2B2020-04-24T172119.147.jpg',
      description: 'Python is an interpreted high-level general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
      link: 'https://drive.google.com/file/d/1NTzQFX47JqjQtFUMMscL264wqpUwIwGT/view?usp=drive_link',
    },
  ];

  export default books;