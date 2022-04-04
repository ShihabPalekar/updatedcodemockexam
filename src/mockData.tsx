const dataEnglish = [
  {
    id: 1,
    type: "mcq",
    que: "2+2 = ?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    type: "boolean",
    que: "2+2 = 4?",
    answer: "true",
  },
  {
    id: 3,
    type: "fill-up",
    que: "____ is the capital of India.",
    answer: "Delhi",
  },
  {
    id: 4,
    type: "multi-select",
    que: "Which of these are animals?",
    answer: ["Dog", "Cat"],
    options: ["Dog", "Chair", "Cat", "Apple"],
  },
  {
    id: 5,
    type: "match-up",
    que: "Match the following",
    colA: [
      { id: "Q1", opt: "Dog", answer: "Animal" },
      { id: "Q2", opt: "Ball", answer: "Object" },
      { id: "Q3", opt: "Crow", answer: "Bird" },
      { id: "Q4", opt: "Pacific", answer: "Ocean" },
    ],
    colB: ["Ocean", "Animal", "Bird", "Object"],
  },
];

const dataHindi = [
  {
    id: 1,
    type: "mcq",
    que: "2+2 = ?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    type: "boolean",
    que: "2+2 = 4?",
    answer: "true",
  },
  {
    id: 3,
    type: "fill-up",
    que: "____ is the capital of India.",
    answer: "delhi",
  },
  {
    id: 4,
    type: "multi-select",
    que: "Which of these are animals?",
    answer: ["Dog", "Cat"],
    options: ["Dog", "Chair", "Cat", "Apple"],
  },
  {
    id: 5,
    type: "match-up",
    que: "Match the following",
    colA: [
      { id: "Q1", opt: "Dog", answer: "Animal" },
      { id: "Q2", opt: "Ball", answer: "Object" },
      { id: "Q3", opt: "Crow", answer: "Bird" },
      { id: "Q4", opt: "Pacific", answer: "Ocean" },
    ],
    colB: ["Ocean", "Animal", "Bird", "Object"],
  },
];

const dataSpanish = [
  {
    id: "1",
    type: "mcq",
    que: "2+2 = ?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: "2",
    type: "boolean",
    que: "2+2 = 4?",
    answer: "true",
  },
  {
    id: "3",
    type: "fill-up",
    que: "____ is the capital of India.",
    answer: "Delhi",
  },
  {
    id: "4",
    type: "multi-select",
    que: "Which of these are animals?",
    answer: ["Dog", "Cat"],
    options: ["Dog", "Chair", "Cat", "Apple"],
  },
  {
    id: "5",
    type: "match-up",
    que: "Match the following",
    colA: [
      { id: "Q1", opt: "Dog", answer: "Animal" },
      { id: "Q2", opt: "Ball", answer: "Object" },
      { id: "Q3", opt: "Crow", answer: "Bird" },
      { id: "Q4", opt: "Pacific", answer: "Ocean" },
    ],
    colB: ["Ocean", "Animal", "Bird", "Object"],
  },
];

export { dataEnglish, dataHindi, dataSpanish };
