// in package.json wordt via type="module" aangegeven dat we ES6 module syntax gebruiken
import express from "express";
import { join } from "path";
import cors from "cors";

import __dirname from "./__dirname.js";

const app = express();

// De poort is niet meer hardgecodeerd: de de host van deze server kan zelf bepalen op welke poort het moet draaien.
// Als er geen poort wordt doorgegeven dan zal de server standaard op poort 2024 draaien.
const port = process.env.PORT ? process.env.PORT : 2024;

// De static files middleware registreren
app.use("/", express.static(join(__dirname, 'public')));

/***************************
 *      ENDPOINTS
 ***************************/

const assignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      description: "This is the first math assignment which covers algebra and geometry.",
      dueDate: "30.06.2024",
      uploadDate: "30.06.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "12"
    },
    {
      id: 2,
      title: "Science Assignment 1",
      description: "This is the first science assignment which covers basic physics.",
      dueDate: "15.07.2024",
      uploadDate: "10.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "10"
    },
    {
      id: 3,
      title: "History Assignment 1",
      description: "This is the first history assignment which covers ancient civilizations.",
      dueDate: "30.05.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: true,
      grade: null
    },
    {
      id: 4,
      title: "English Assignment 1",
      description: "This is the first English assignment which covers literature.",
      dueDate: "30.06.2024",
      uploadDate: "25.06.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "8"
    },
    {
      id: 5,
      title: "Art Assignment 1",
      description: "This is the first art assignment which covers painting techniques.",
      dueDate: "05.07.2024",
      uploadDate: "01.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "9"
    },
    {
      id: 6,
      title: "Computer Science Assignment 1",
      description: "This is the first computer science assignment which covers programming basics.",
      dueDate: "10.07.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: true,
      grade: null
    },
    {
      id: 7,
      title: "Math Assignment 2",
      description: "This is the second math assignment which covers calculus and trigonometry.",
      dueDate: "15.07.2024",
      uploadDate: "12.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "11"
    },
    {
      id: 8,
      title: "Physical Education Assignment 1",
      description: "This is the first physical education assignment which covers fitness training.",
      dueDate: "15.07.2024",
      uploadDate: "14.07.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "7"
    },
    {
      id: 9,
      title: "Music Assignment 1",
      description: "This is the first music assignment which covers classical music history.",
      dueDate: "10.07.2024",
      uploadDate: "09.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "6"
    },
    {
      id: 10,
      title: "Math Assignment 3",
      description: "This is the third math assignment which covers statistics.",
      dueDate: "10.08.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: false,
      grade: null
    },
    {
      id: 11,
      title: "English Assignment 2",
      description: "This is the second English assignment which covers grammar and composition.",
      dueDate: "15.07.2024",
      uploadDate: "15.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "9"
    },
    {
      id: 12,
      title: "Art Assignment 2",
      description: "This is the second art assignment which covers sculpture.",
      dueDate: "20.07.2024",
      uploadDate: "19.07.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "8"
    },
    {
      id: 13,
      title: "Computer Science Assignment 2",
      description: "This is the second computer science assignment which covers algorithms.",
      dueDate: "25.07.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: true,
      grade: null
    },
    {
      id: 14,
      title: "History Assignment 2",
      description: "This is the second history assignment which covers modern history.",
      dueDate: "15.06.2024",
      uploadDate: "14.06.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "7"
    },
    {
      id: 15,
      title: "Physical Education Assignment 2",
      description: "This is the second physical education assignment which covers sports rules.",
      dueDate: "30.07.2024",
      uploadDate: "29.07.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "6"
    },
    {
      id: 16,
      title: "English Assignment 3",
      description: "This is the third English assignment which covers creative writing.",
      dueDate: "10.08.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: false,
      grade: null
    },
    {
      id: 17,
      title: "Art Assignment 3",
      description: "This is the third art assignment which covers digital art.",
      dueDate: "15.08.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: false,
      grade: null
    },
    {
      id: 18,
      title: "Music Assignment 2",
      description: "This is the second music assignment which covers musical theory.",
      dueDate: "25.07.2024",
      uploadDate: "25.07.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "10"
    },
    {
      id: 19,
      title: "Computer Science Assignment 3",
      description: "This is the third computer science assignment which covers data structures.",
      dueDate: "20.08.2024",
      uploadDate: "18.08.2024",
      uploaded: true,
      reviewed: false,
      expired: false,
      grade: "11"
    },
    {
      id: 20,
      title: "Physical Education Assignment 3",
      description: "This is the third physical education assignment which covers health education.",
      dueDate: "15.08.2024",
      uploadDate: "14.08.2024",
      uploaded: true,
      reviewed: true,
      expired: false,
      grade: "9"
    },
    {
      id: 21,
      title: "Music Assignment 3",
      description: "This is the third music assignment which covers music composition.",
      dueDate: "20.08.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: false,
      grade: null
    },
    {
      id: 22,
      title: "Computer Science Assignment 4",
      description: "This is the fourth computer science assignment which covers advanced algorithms.",
      dueDate: "05.09.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: false,
      grade: null
    },
    {
      id: 23,
      title: "History Assignment 3",
      description: "This is the third history assignment which covers world wars.",
      dueDate: "10.07.2024",
      uploadDate: null,
      uploaded: false,
      reviewed: false,
      expired: true,
      grade: null
    }
];
  
const subjects = [
  {
    id: 1,
    title: "Math",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 2,
    title: "Science",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 3,
    title: "History",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 4,
    title: "English",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 5,
    title: "Art",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 6,
    title: "Computer Science",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 7,
    title: "Physical Education",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  },
  {
    id: 8,
    title: "Music",
    bgImageUrl: "https://cdn.discordapp.com/avatars/467310209312882709/da5e78a63f714e1932fdb42fb30e324e.png"
  }
];

app.get('/student/assignments', cors(),(req, res) => {
    res.json(assignments);
  });

app.get('/student/subjects', cors(),(req, res) => {
  res.json(subjects);
});

app.listen(port, () => {
    console.log(`Node-Express server listening on port ${port}`);
});