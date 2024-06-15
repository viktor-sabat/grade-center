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
      grade: "12",
      backgroundBannerUrl: "https://www.unomaha.edu/college-of-arts-and-sciences/mathematics/_files/images/maths-ftr.jpg"
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
      grade: "10",
      backgroundBannerUrl: "https://study.com/cimages/course-image/pennsylvania-grades-4-8-science-subject-concentration-practice-study-guide_338165_large.jpeg"
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
      grade: null,
      backgroundBannerUrl: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5725858/world_map2.jpg"
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
      grade: "8",
      backgroundBannerUrl: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483338.jpg"
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
      grade: "9",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/water-palette-near-painting_23-2147863714.jpg?t=st=1718472062~exp=1718475662~hmac=8be9033eaa33bd5d160fd00dd9a9fb00b864ba7667e62dfa794417ec8f71cdf3&w=2000"
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
      grade: null,
      backgroundBannerUrl: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252443.jpg?t=st=1718472254~exp=1718475854~hmac=6eb31f4e4c0e90c3517f0de83b898e6b813bdf8c1ce77f84d94e0b8aad2d7365&w=2000"
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
      grade: "11",
      backgroundBannerUrl: "https://www.unomaha.edu/college-of-arts-and-sciences/mathematics/_files/images/maths-ftr.jpg"
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
      grade: "7",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1718472378~exp=1718475978~hmac=025112d9cfebf71097a42c3b8e37dce6a4790e29d27868932dd1671eb131173a&w=2000"
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
      grade: "6",
      backgroundBannerUrl: "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg"
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
      grade: null,
      backgroundBannerUrl: "https://www.unomaha.edu/college-of-arts-and-sciences/mathematics/_files/images/maths-ftr.jpg"
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
      grade: "9",
      backgroundBannerUrl: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483338.jpg"
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
      grade: "8",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/water-palette-near-painting_23-2147863714.jpg?t=st=1718472062~exp=1718475662~hmac=8be9033eaa33bd5d160fd00dd9a9fb00b864ba7667e62dfa794417ec8f71cdf3&w=2000"
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
      grade: null,
      backgroundBannerUrl: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252443.jpg?t=st=1718472254~exp=1718475854~hmac=6eb31f4e4c0e90c3517f0de83b898e6b813bdf8c1ce77f84d94e0b8aad2d7365&w=2000"
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
      grade: "7",
      backgroundBannerUrl: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5725858/world_map2.jpg"
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
      grade: "6",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1718472378~exp=1718475978~hmac=025112d9cfebf71097a42c3b8e37dce6a4790e29d27868932dd1671eb131173a&w=2000"
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
      grade: null,
      backgroundBannerUrl: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483338.jpg"
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
      grade: null,
      backgroundBannerUrl: "https://img.freepik.com/free-photo/water-palette-near-painting_23-2147863714.jpg?t=st=1718472062~exp=1718475662~hmac=8be9033eaa33bd5d160fd00dd9a9fb00b864ba7667e62dfa794417ec8f71cdf3&w=2000"
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
      grade: "10",
      backgroundBannerUrl: "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg"
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
      grade: "11",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252443.jpg?t=st=1718472254~exp=1718475854~hmac=6eb31f4e4c0e90c3517f0de83b898e6b813bdf8c1ce77f84d94e0b8aad2d7365&w=2000"
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
      grade: "9",
      backgroundBannerUrl: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1718472378~exp=1718475978~hmac=025112d9cfebf71097a42c3b8e37dce6a4790e29d27868932dd1671eb131173a&w=2000"
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
      grade: null,
      backgroundBannerUrl: "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg"
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
      grade: null,
      backgroundBannerUrl: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252443.jpg?t=st=1718472254~exp=1718475854~hmac=6eb31f4e4c0e90c3517f0de83b898e6b813bdf8c1ce77f84d94e0b8aad2d7365&w=2000"
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
      grade: null,
      backgroundBannerUrl: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5725858/world_map2.jpg"
    }
];
  
const subjects = [
  {
    id: 1,
    title: "Math",
    bgImageUrl: "https://www.unomaha.edu/college-of-arts-and-sciences/mathematics/_files/images/maths-ftr.jpg"
  },
  {
    id: 2,
    title: "Science",
    bgImageUrl: "https://study.com/cimages/course-image/pennsylvania-grades-4-8-science-subject-concentration-practice-study-guide_338165_large.jpeg"
  },
  {
    id: 3,
    title: "History",
    bgImageUrl: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5725858/world_map2.jpg"
  },
  {
    id: 4,
    title: "English",
    bgImageUrl: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483338.jpg"
  },
  {
    id: 5,
    title: "Art",
    bgImageUrl: "https://img.freepik.com/free-photo/water-palette-near-painting_23-2147863714.jpg?t=st=1718472062~exp=1718475662~hmac=8be9033eaa33bd5d160fd00dd9a9fb00b864ba7667e62dfa794417ec8f71cdf3&w=2000"
  },
  {
    id: 6,
    title: "Computer Science",
    bgImageUrl: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252443.jpg?t=st=1718472254~exp=1718475854~hmac=6eb31f4e4c0e90c3517f0de83b898e6b813bdf8c1ce77f84d94e0b8aad2d7365&w=2000"
  },
  {
    id: 7,
    title: "Physical Education",
    bgImageUrl: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1718472378~exp=1718475978~hmac=025112d9cfebf71097a42c3b8e37dce6a4790e29d27868932dd1671eb131173a&w=2000"
  },
  {
    id: 8,
    title: "Music",
    bgImageUrl: "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg"
  }
];

const students = [
    {
      id: 1,
      name: "Wesley",
      firstName: "Tester",
      phoneNumber: "0494 123 456",
      email: "tester.wesley@gmail.com",
      dateOfBirth: "19.04.2003",
      academicYear: "2023-2024",
      address: "Teststraat 70",
      region: "Vlaams-brabant",
      group: 1,
      picture: 'profile-photo.png'
    },
    {
      id: 2,
      name: "Demol",
      firstName: "Quincy",
      phoneNumber: "0494 654 321",
      email: "quincy.demol@gmail.com",
      dateOfBirth: "01.09.2004",
      academicYear: "2023-2024",
      address: "Computerlaan 21",
      region: "Vlaams-brabant",
      group: 2,
      picture: 'profile-photo.png'
    },
    {
      id: 3,
      name: "Leribaux",
      firstName: "Mathias",
      phoneNumber: "0494 367 620",
      email: "mathias.leribaux@gmail.com",
      dateOfBirth: "08.02.2002",
      academicYear: "2023-2024",
      address: "Appelboomstraat 34",
      region: "Oost-Vlaanderen",
      group: 1,
      picture: 'profile-photo.png'
    },
    {
      id: 4,
      name: "Solia",
      firstName: "Akasha",
      phoneNumber: "0494 664 634",
      email: "akasha.solia@gmail.com",
      dateOfBirth: "06.12.2002",
      academicYear: "2023-2024",
      address: "Ooievaarstraat 52",
      region: "Oost-Vlaanderen",
      group: 3,
      picture: 'profile-photo.png'
    },
    {
      id: 5,
      name: "Sabat",
      firstName: "Viktor",
      phoneNumber: "0494 648 231",
      email: "viktor.sabat@gmail.com",
      dateOfBirth: "25.06.2002",
      academicYear: "2023-2024",
      address: "Jonkvrouwmattestraat 14",
      region: "Vlaams-Brabant",
      group: 2,
      picture: 'profile-photo-2.png'
    },
    {
      id: 6,
      name: "Johnson",
      firstName: "Alvin",
      phoneNumber: "0494 987 520",
      email: "alvin.johnson@gmail.com",
      dateOfBirth: "31.07.2004",
      academicYear: "2023-2024",
      address: "Beeldhouwersstraat 9",
      region: "Oost-Vlaanderen",
      group: 3,
      picture: 'profile-photo.png'
    }
];

const teachers = [
    {
      id: 1,
      name: "Lacroix",
      firstName: "Kenny",
      phoneNumber: "0494 926 301",
      email: "kenny.lacroix@ucll.be",
      dateOfBirth: "06.06.1998",
      academicYear: "2023-2024",
      address: "Hertogstraat 170",
      region: "Vlaams-brabant",
      picture: 'profile-photo-3.png'
    },
    {
      id: 2,
      name: "Sabat",
      firstName: "Viktor",
      phoneNumber: "0494 648 231",
      email: "viktor.sabat@gmail.com",
      dateOfBirth: "25.06.2002",
      academicYear: "2023-2024",
      address: "Jonkvrouwmattestraat 14",
      region: "Vlaams-Brabant",
      picture: 'profile-photo-2.png'
    }
];

app.get('/student', cors(),(req, res) => {
  res.json(students)
});

app.get('/teacher', cors(),(req, res) => {
  res.json(teachers)
});

app.get('/student/assignments', cors(),(req, res) => {
    res.json(assignments);
  });

app.get('/subjects', cors(),(req, res) => {
  res.json(subjects);
});

app.listen(port, () => {
    console.log(`Node-Express server listening on port ${port}`);
});