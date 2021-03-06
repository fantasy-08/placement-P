import React,{ useEffect, useState} from 'react'
import Header from './Header'
import Student from './Student';
import Frame from './Frame';
import Stats from './Stats';
import Company from './Company';

const server_data = {
  success: true,
  placements: [
    {
      _id: "5f84233af9ee943a27d13bcd",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "HARDIK PANDYA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84233af9ee943a27d13bce",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "NIKHIL SHARMA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84233af9ee943a27d13bcf",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "DEEPAK JAKHU",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84233af9ee943a27d13bd0",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "NAMAN SANGHI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84233af9ee943a27d13bd1",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "NIHARIKA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84233af9ee943a27d13bd2",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-08T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "AASHISH VERMA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8423a5f9ee943a27d13bd3",
      passout_batch: "2021",
      company_name: "Nokia",
      job_profile: "Get",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-04T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "MUSKAAN SAMTANI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8423a5f9ee943a27d13bd5",
      passout_batch: "2021",
      company_name: "Nokia",
      job_profile: "Get",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-04T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "PRANAV KULSHRESTHA",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8423a5f9ee943a27d13bd4",
      passout_batch: "2021",
      company_name: "Nokia",
      job_profile: "Get",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-04T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "HARSHIYA MAHESHWARI",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8423a5f9ee943a27d13bd6",
      passout_batch: "2021",
      company_name: "Nokia",
      job_profile: "Get",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-04T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "RAVI NAPIT",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8423a5f9ee943a27d13bd7",
      passout_batch: "2021",
      company_name: "Nokia",
      job_profile: "Get",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-10-04T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "SHISHANT KUMAR",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f846899f9ee943a27d13bd9",
      passout_batch: "2021",
      company_name: "Zs Associates",
      job_profile: "Business Operations Associate",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-29T18:30:00.000Z",
      package: "8.93",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "UPASANA MISHRA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f846899f9ee943a27d13bda",
      passout_batch: "2021",
      company_name: "Zs Associates",
      job_profile: "Business Operations Associate",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-29T18:30:00.000Z",
      package: "8.93",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "DIVYAMAN",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f846899f9ee943a27d13bdb",
      passout_batch: "2021",
      company_name: "Zs Associates",
      job_profile: "Decision Analytics Associate",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-29T18:30:00.000Z",
      package: "8.93",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "MOIN ASHRAF SIDDIQUI",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f846899f9ee943a27d13bdc",
      passout_batch: "2021",
      company_name: "Zs Associates",
      job_profile: "Decision Analytics Associate",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-29T18:30:00.000Z",
      package: "8.93",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "UDIT PRATAP SINGH TANWAR",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f842148f9ee943a27d13bbf",
      passout_batch: "2021",
      company_name: "Evosys",
      job_profile: "Associate Consultant",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-28T18:30:00.000Z",
      package: "5.5",
      students: [
        {
          student_name: "SARTHAK DWIVEDI",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f842148f9ee943a27d13bc0",
      passout_batch: "2021",
      company_name: "Evosys",
      job_profile: "Associate Consultant",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-28T18:30:00.000Z",
      package: "5.5",
      students: [
        {
          student_name: "PARAM PREET SINGH",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7219489299c0e689ed0675",
      passout_batch: "2021",
      company_name: "Bajaj",
      job_profile: "Graduate Trainee Engineer Gte",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "SAGAR RAWAL",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7219489299c0e689ed0676",
      passout_batch: "2021",
      company_name: "Bajaj",
      job_profile: "Graduate Trainee Engineer Gte",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "VINAY KUMAR",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721f6e9299c0e689ed0691",
      passout_batch: "2022",
      company_name: "Bajaj",
      job_profile: "Gte Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "20000",
      students: [
        {
          student_name: "YASHSWINI KABRA",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721f6e9299c0e689ed0692",
      passout_batch: "2022",
      company_name: "Bajaj",
      job_profile: "Gte Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "20000",
      students: [
        {
          student_name: "RISHIKA AGRAWAL",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f842190f9ee943a27d13bc1",
      passout_batch: "2021",
      company_name: "Cvent",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      package: "13.6",
      students: [
        {
          student_name: "RAHUL TUTEJA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f842190f9ee943a27d13bc2",
      passout_batch: "2021",
      company_name: "Cvent",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-24T18:30:00.000Z",
      package: "13.6",
      students: [
        {
          student_name: "RAHUL JAIN",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721def9299c0e689ed068c",
      passout_batch: "2021",
      company_name: "College Dunia",
      job_profile: "Business Development Manager",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "DEVANSHU KHANDAL",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721def9299c0e689ed068d",
      passout_batch: "2021",
      company_name: "College Dunia",
      job_profile: "Business Development Manager",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "HIMANSHU YADAV",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721def9299c0e689ed068f",
      passout_batch: "2021",
      company_name: "College Dunia",
      job_profile: "Business Development Manager",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "MOHIT MANOJ JAISWAL",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721def9299c0e689ed068e",
      passout_batch: "2021",
      company_name: "College Dunia",
      job_profile: "Business Development Manager",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "ANUJ SRIVASTAVA",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721def9299c0e689ed0690",
      passout_batch: "2021",
      company_name: "College Dunia",
      job_profile: "Business Development Manager",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "YAGESH AGRAWAL",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8421ddf9ee943a27d13bc3",
      passout_batch: "2021",
      company_name: "Barclays",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "8.5",
      students: [
        {
          student_name: "ABHISHEK CHATURVEDI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8421ddf9ee943a27d13bc4",
      passout_batch: "2021",
      company_name: "Barclays",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "8.5",
      students: [
        {
          student_name: "SANTOSHI MANVITA KARUTURI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f842225f9ee943a27d13bc5",
      passout_batch: "2021",
      company_name: "Tata Aig",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9.1",
      students: [
        {
          student_name: "RAKESH KUMAR TELI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84225ff9ee943a27d13bc6",
      passout_batch: "2021",
      company_name: "Tata Aig",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9.1",
      students: [
        {
          student_name: "DHRUV GOEL",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f84225ff9ee943a27d13bc7",
      passout_batch: "2021",
      company_name: "Tata Aig",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-23T18:30:00.000Z",
      package: "9.1",
      students: [
        {
          student_name: "MOHIT ARORA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74433f9299c0e689ed0e1c",
      passout_batch: "2022",
      company_name: "Johndheere",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-22T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "15000",
      students: [
        {
          student_name: "SOMYA GUPTA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74433f9299c0e689ed0e1d",
      passout_batch: "2022",
      company_name: "Johndheere",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-22T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "15000",
      students: [
        {
          student_name: "KAPIL KANSAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74433f9299c0e689ed0e1e",
      passout_batch: "2022",
      company_name: "Johndheere",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-22T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "15000",
      students: [
        {
          student_name: "NIDHI HEMANT MITKARI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722cb19299c0e689ed06dc",
      passout_batch: "2021",
      company_name: "Johndheere",
      job_profile: "SDE",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-21T18:30:00.000Z",
      package: "11",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "PRIYANSHI AJMERA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8422dcf9ee943a27d13bc8",
      passout_batch: "2021",
      company_name: "Capgemini",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-19T18:30:00.000Z",
      package: "6.8",
      students: [
        {
          student_name: "YAMINI KALYANI EDIGA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8422dcf9ee943a27d13bc9",
      passout_batch: "2021",
      company_name: "Capgemini",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-19T18:30:00.000Z",
      package: "6.8",
      students: [
        {
          student_name: "SNIGDHA PRASAD",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8422dcf9ee943a27d13bca",
      passout_batch: "2021",
      company_name: "Capgemini",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-19T18:30:00.000Z",
      package: "6.8",
      students: [
        {
          student_name: "SAHIL TRIPATHI",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8422dcf9ee943a27d13bcb",
      passout_batch: "2021",
      company_name: "Capgemini",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-19T18:30:00.000Z",
      package: "6.8",
      students: [
        {
          student_name: "ADITYA MUDGAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f8422dcf9ee943a27d13bcc",
      passout_batch: "2021",
      company_name: "Capgemini",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-19T18:30:00.000Z",
      package: "6.8",
      students: [
        {
          student_name: "ANMOL MITTAL",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7226669299c0e689ed06ac",
      passout_batch: "2021",
      company_name: "Urban Company",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "18",
      students: [
        {
          student_name: "HARSH GARG",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7226669299c0e689ed06ad",
      passout_batch: "2021",
      company_name: "Urban Company",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "18",
      students: [
        {
          student_name: "LAVISH NAGAR",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7226669299c0e689ed06ae",
      passout_batch: "2021",
      company_name: "Urban Company",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "18",
      students: [
        {
          student_name: "SHRUTI NIKOSE",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7226669299c0e689ed06af",
      passout_batch: "2021",
      company_name: "Urban Company",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "18",
      students: [
        {
          student_name: "SHUBHAM GUPTA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722bd29299c0e689ed06cf",
      passout_batch: "2021",
      company_name: "Airtel",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "RADHIKA JUNEJA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722bd29299c0e689ed06d0",
      passout_batch: "2021",
      company_name: "Airtel",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "KUSHAGRA GUPTA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722bd29299c0e689ed06d1",
      passout_batch: "2021",
      company_name: "Airtel",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "HARDIK BANTHIA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722bd29299c0e689ed06d2",
      passout_batch: "2021",
      company_name: "Airtel",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "ANIRUDH MAHESHWARI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722bd29299c0e689ed06d3",
      passout_batch: "2021",
      company_name: "Airtel",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-18T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "SUMIT KUMAR",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722e299299c0e689ed06e7",
      passout_batch: "2021",
      company_name: "Transorg",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-16T18:30:00.000Z",
      package: "7",
      students: [
        {
          student_name: "TARANG NIGAM",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0677",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "EKANSH CHOUDHARY",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0679",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "VEDASHREE UMESH BHIDE",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0678",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SUSHANT GIRI",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067a",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "HARSHIT GARG",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067b",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "VALIUDDIN QURESHI",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067c",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "HIMANSHU YADAV",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067d",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "ISHIT AGARWAL",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067e",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "MANVENDRA SINGH RATHORE",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed067f",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "RIYA S NATH",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0680",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "NIKITA AGRAWAL",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0681",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SANKEERTH DHARMAPURI",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0682",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SRISTI GANGWAR",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0683",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "ANAND SHARMA",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0684",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "PRATIK ROHILA",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0685",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "ASHRAY GUPTA",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0686",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SAURABH",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0687",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "ANSHUL MAHESHWARI",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0688",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "VAIBHAV SHARMA",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed0689",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "MRIDUL SINGHAL",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed068a",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "PRAGYANSHU PANDEY",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f721cb79299c0e689ed068b",
      passout_batch: "2021",
      company_name: "Deloitte",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-14T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "TANISHK DUDI",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220549299c0e689ed0693",
      passout_batch: "2021",
      company_name: "Gep",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-13T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SIDDHARTH PANDEY",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220549299c0e689ed0694",
      passout_batch: "2021",
      company_name: "Gep",
      job_profile: "Analyst",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-13T18:30:00.000Z",
      package: "8",
      students: [
        {
          student_name: "SUBHAM JAJOO",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c7a9299c0e689ed06da",
      passout_batch: "2021",
      company_name: "Wissen",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-10T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "JATIN",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c7a9299c0e689ed06db",
      passout_batch: "2021",
      company_name: "Wissen",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-10T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "RISHAV KUMAR",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722d889299c0e689ed06e3",
      passout_batch: "2021",
      company_name: "Union Bank Of Switzerland",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-09T18:30:00.000Z",
      package: "10",
      students: [
        {
          student_name: "SAMIR AMITKUMAR GUPTA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f743fe29299c0e689ed0e0e",
      passout_batch: "2022",
      company_name: "Flipkart",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-05T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "50000",
      students: [
        {
          student_name: "PRANAY KANJOLIA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7227879299c0e689ed06b1",
      passout_batch: "2021",
      company_name: "Flipkart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-03T18:30:00.000Z",
      package: "27",
      students: [
        {
          student_name: "RAHUL GOSWAMI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722df49299c0e689ed06e5",
      passout_batch: "2021",
      company_name: "Publicis Sapient",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-03T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "AYUSH JAIN",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722df49299c0e689ed06e6",
      passout_batch: "2021",
      company_name: "Publicis Sapient",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-03T18:30:00.000Z",
      package: "9",
      students: [
        {
          student_name: "MOHAMMAD FAIZAN",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7228e69299c0e689ed06b4",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "TAPAN GOYAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7228e69299c0e689ed06b3",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "HARSHIT SONI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7228e69299c0e689ed06b5",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "PURVANSH GOURH",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7228e69299c0e689ed06b7",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "SHOMIL MAURYA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7228e69299c0e689ed06b6",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "HIMANSHU LAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7440309299c0e689ed0e0f",
      passout_batch: "2022",
      company_name: "Deutsche Bank",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "PRATEEK SHARMA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7440309299c0e689ed0e10",
      passout_batch: "2022",
      company_name: "Deutsche Bank",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "S KRISHNA KISHORE",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7440309299c0e689ed0e12",
      passout_batch: "2022",
      company_name: "Deutsche Bank",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "AKSHIT AGARWAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7440309299c0e689ed0e11",
      passout_batch: "2022",
      company_name: "Deutsche Bank",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "VEDANT GOYAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74418a9299c0e689ed0e15",
      passout_batch: "2022",
      company_name: "Salesforce",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "90000",
      students: [
        {
          student_name: "HARSHA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74418a9299c0e689ed0e17",
      passout_batch: "2022",
      company_name: "Salesforce",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "90000",
      students: [
        {
          student_name: "NITIN SINGH BHADORIYA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f74418a9299c0e689ed0e16",
      passout_batch: "2022",
      company_name: "Salesforce",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "90000",
      students: [
        {
          student_name: "VAIBHAV AGARWAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f79f48e9299c0e689ed0ea6",
      passout_batch: "2022",
      company_name: "Jpmc",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "50000",
      students: [
        {
          student_name: "SONAL AGRAWAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f79f48e9299c0e689ed0ea8",
      passout_batch: "2022",
      company_name: "Jpmc",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "50000",
      students: [
        {
          student_name: "DIVYA KRIPLANI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f79f48e9299c0e689ed0ea7",
      passout_batch: "2022",
      company_name: "Jpmc",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-09-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "50000",
      students: [
        {
          student_name: "ANUSHA JAIN",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722afb9299c0e689ed06c0",
      passout_batch: "2021",
      company_name: "Societe Generales",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "KRISHAN AGARWAL",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722afb9299c0e689ed06c1",
      passout_batch: "2021",
      company_name: "Societe Generales",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "AKSHAT GARG",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722afb9299c0e689ed06c3",
      passout_batch: "2021",
      company_name: "Societe Generales",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "PAARTH BIR",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722afb9299c0e689ed06c2",
      passout_batch: "2021",
      company_name: "Societe Generales",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "ANURAG SRIGYAN",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d4",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "PULKIT SHARMA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d5",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "ARJUN SINGH RATHORE",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d6",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "DIPESH GARG",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d7",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "NEERAJ KUMAR",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d9",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "KANZARIYA VIRAL MAHESHBHAI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722c2d9299c0e689ed06d8",
      passout_batch: "2021",
      company_name: "Oracle",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-31T18:30:00.000Z",
      package: "11",
      students: [
        {
          student_name: "BHAWANA SOLANKI",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7227e89299c0e689ed06b2",
      passout_batch: "2021",
      company_name: "Commvault",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-27T18:30:00.000Z",
      package: "24",
      students: [
        {
          student_name: "JASKARAN SINGH KAINTH",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7229e19299c0e689ed06bf",
      passout_batch: "2021",
      company_name: "Quadeye Securities",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-26T18:30:00.000Z",
      package: "17",
      students: [
        {
          student_name: "DILPREET SINGH",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722db79299c0e689ed06e4",
      passout_batch: "2021",
      company_name: "Ln T Infotech",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-26T18:30:00.000Z",
      package: "9",
      intern_duration: "NaN",
      intern_stipend: "NaN",
      students: [
        {
          student_name: "SAMYAK SRIVASTAVA",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed0695",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "KAPIL VARMA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed0696",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "HARSH CHAUDHARY",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed0698",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "KHUSHBOO GOUR",
          department: "METALLURGICAL AND MATERIALS ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed0697",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "MOKSH AHUJA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed0699",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "AANCHAL JAIN",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed069b",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "CHARU",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7220f79299c0e689ed069a",
      passout_batch: "2022",
      company_name: "Goldman Sachs",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-24T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "75000",
      students: [
        {
          student_name: "SHUBHANGI",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72256a9299c0e689ed06aa",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-23T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "SUDHANSHU KUMAR SINGH",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72256a9299c0e689ed06ab",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-23T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "PRATIKSHA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7227419299c0e689ed06b0",
      passout_batch: "2021",
      company_name: "Flipkart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-23T18:30:00.000Z",
      package: "27",
      students: [
        {
          student_name: "DIXIT KUMAR JAIN",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f743f9c9299c0e689ed0e0c",
      passout_batch: "2022",
      company_name: "Arcesium",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-23T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "150000",
      students: [
        {
          student_name: "SHUBHAM KHANDELWAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f743f9c9299c0e689ed0e0d",
      passout_batch: "2022",
      company_name: "Arcesium",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-23T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "150000",
      students: [
        {
          student_name: "DHRUV GOYAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72224a9299c0e689ed069c",
      passout_batch: "2021",
      company_name: "Salesforce",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-11T18:30:00.000Z",
      package: "40",
      students: [
        {
          student_name: "DIVYA SODANI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72224a9299c0e689ed069d",
      passout_batch: "2021",
      company_name: "Salesforce",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-11T18:30:00.000Z",
      package: "40",
      students: [
        {
          student_name: "PRANSHU KHANDELWAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72224a9299c0e689ed069e",
      passout_batch: "2021",
      company_name: "Salesforce",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-11T18:30:00.000Z",
      package: "40",
      students: [
        {
          student_name: "HIMANSHU GWALANI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72224a9299c0e689ed069f",
      passout_batch: "2021",
      company_name: "Salesforce",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-11T18:30:00.000Z",
      package: "40",
      students: [
        {
          student_name: "SALONI GOYAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7225349299c0e689ed06a6",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-06T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "ISHIKA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7225349299c0e689ed06a7",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-06T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "BHUVANAGIRI VENKATA SRIVIDYA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7225349299c0e689ed06a8",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-06T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "KAUSTUBH MANI KANAUJIA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7225349299c0e689ed06a9",
      passout_batch: "2021",
      company_name: "Goldman Sachs",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-06T18:30:00.000Z",
      package: "23",
      students: [
        {
          student_name: "KRISHNA AGARWAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722d459299c0e689ed06df",
      passout_batch: "2021",
      company_name: "Jpmc",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "GAURAB DAHIT",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722d459299c0e689ed06e1",
      passout_batch: "2021",
      company_name: "Jpmc",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "YUKTI KHURANA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722d459299c0e689ed06e0",
      passout_batch: "2021",
      company_name: "Jpmc",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "MANDEEP SINGH GOYAT",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722d459299c0e689ed06e2",
      passout_batch: "2021",
      company_name: "Jpmc",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      package: "12",
      students: [
        {
          student_name: "DHRUV SURESH GOLANI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f743f499299c0e689ed0e08",
      passout_batch: "2022",
      company_name: "De Shaw",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "150000",
      students: [
        {
          student_name: "ESHAAN GUPTA",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f743f499299c0e689ed0e09",
      passout_batch: "2022",
      company_name: "De Shaw",
      job_profile: "Sde Intern",
      recruitment: "Internship",
      recruitment_type: "On-Campus",
      recruitment_date: "2020-08-02T18:30:00.000Z",
      intern_duration: "2",
      intern_stipend: "150000",
      students: [
        {
          student_name: "PRANSHU VYAS",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7229a49299c0e689ed06bb",
      passout_batch: "2021",
      company_name: "Walmart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-27T18:30:00.000Z",
      package: "19",
      students: [
        {
          student_name: "ABHINAV BANSAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7229a49299c0e689ed06bc",
      passout_batch: "2021",
      company_name: "Walmart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-27T18:30:00.000Z",
      package: "19",
      students: [
        {
          student_name: "JITESH MEGHWAL",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7229a49299c0e689ed06bd",
      passout_batch: "2021",
      company_name: "Walmart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-27T18:30:00.000Z",
      package: "19",
      students: [
        {
          student_name: "SHIVANSHU GUPTA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7229a49299c0e689ed06be",
      passout_batch: "2021",
      company_name: "Walmart",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-27T18:30:00.000Z",
      package: "19",
      students: [
        {
          student_name: "SAHIL KHANDELWAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224ae9299c0e689ed06a4",
      passout_batch: "2021",
      company_name: "De Shaw",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-26T18:30:00.000Z",
      package: "38",
      students: [
        {
          student_name: "SURYAPRAKASH AGARWAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224ae9299c0e689ed06a5",
      passout_batch: "2021",
      company_name: "De Shaw",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-26T18:30:00.000Z",
      package: "38",
      students: [
        {
          student_name: "RITIKA RAJESH MOR",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722cf79299c0e689ed06dd",
      passout_batch: "2021",
      company_name: "Optum",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-24T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "SHUBHAM KALLA",
          department: "ELECTRICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722cf79299c0e689ed06de",
      passout_batch: "2021",
      company_name: "Optum",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-24T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "HIMANSHU RAWAT",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224069299c0e689ed06a0",
      passout_batch: "2021",
      company_name: "Amazon",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "30",
      students: [
        {
          student_name: "ANIKET JAIN",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224069299c0e689ed06a1",
      passout_batch: "2021",
      company_name: "Amazon",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "30",
      students: [
        {
          student_name: "AKSHIT MEHTA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224069299c0e689ed06a2",
      passout_batch: "2021",
      company_name: "Amazon",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "30",
      students: [
        {
          student_name: "KHIMRAJ",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f7224069299c0e689ed06a3",
      passout_batch: "2021",
      company_name: "Amazon",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "30",
      students: [
        {
          student_name: "RAVI SARASWAT",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c5",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "G PREETI",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c7",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "RAJAT RATANLAL GEDAM",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c8",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "MAYANK CHHIPA",
          department: "MECHANICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06cb",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "ADITI SINGHAL",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06cd",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "YASH AGARWAL",
          department: "CIVIL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06cc",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "AMISH RAJ",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c4",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "PRATIBHA YADAV",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c9",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "AAKASH GOPAL VACHHANI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06ce",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "AKASH SRIVASTAV",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06c6",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "SHIVANSH BHARDWAJ",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f722b729299c0e689ed06ca",
      passout_batch: "2021",
      company_name: "Fidelity",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-22T18:30:00.000Z",
      package: "13",
      students: [
        {
          student_name: "PRIYA KANODIA",
          department: "CHEMICAL ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72294d9299c0e689ed06b9",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-20T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "SHREYA MODI",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72294d9299c0e689ed06b8",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-20T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "AMISHA SINGLA",
          department: "COMPUTER SCIENCE AND ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
    {
      _id: "5f72294d9299c0e689ed06ba",
      passout_batch: "2021",
      company_name: "Deutsche Bank",
      job_profile: "Sde",
      recruitment: "Placement",
      recruitment_type: "PPO",
      recruitment_date: "2020-07-20T18:30:00.000Z",
      package: "20",
      students: [
        {
          student_name: "JAYESH KUMAR SUTHAR",
          department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
          degree: "B.Tech",
        },
      ],
    },
  ],
};

function App() {

  const [info, setInfo] = useState([]);
  const [condition, setCondition] = useState({
    year: "0",
    Increasing: false,
    HOF: true,
    old: false,
  });
  const [subtask, setSubtask] = useState(false);

  function SetCondition(name, val) {
    if (name === "HOF")
    {
      setCondition((prevData) => {
        var V = prevData.HOF ? false : true;
        return {
          ...prevData,
          [name] : V
        }
      })
    }
    else
    {
      setCondition((prevData) => {
        return {
          ...prevData,
          [name] : val
        }
      });
    }
    if (name==="Increasing" && val===true)
    {
      setInfo((prevInfo) => {
        var NewInfo = prevInfo;
        NewInfo.sort((A, B) => {
          var AP;
          if (A.recruitment === "Internship") AP = parseFloat(A.intern_stipend);
          else AP = parseFloat(A.package);

          var BP;
          if (A.recruitment === "Internship") BP = parseFloat(B.intern_stipend);
          else BP = parseFloat(B.package);

          return AP - BP;
        })
        NewInfo.reverse();
        return NewInfo;
      })  
    }
    else
    {
      setInfo((prevInfo) => {
        var NewInfo = prevInfo;
        NewInfo.sort(()=>Math.random()-0.5);
        return NewInfo;
      })  
    }
  };

  useEffect(() => {
    function fetchData() {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://placements.mnit.ac.in/api/placements/getAll",
        { method: "POST" }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
          setInfo(data.placements);
        })
        .catch((error) => {
          setInfo(server_data.placements);
          setCondition((prevdata) => {
            return {...prevdata,old:true}
          })
        });
      return null;
    }
    fetchData();
  }, [server_data]);

  return (
    <div >
      <h1 style={{textAlign:"center",fontFamily:'Dancing Script'}}>E-Placement Portal</h1> 
      <Header className="container" change={SetCondition} hall_of_fame={condition.HOF} subtask={subtask} old={condition.old}/>
      {
        condition.HOF ?
          <Frame info={info}/> :
          <div></div>
      }      
      <br />
      <hr />
      <br />
      <div className="container">
      <div className="row">
      {
        (function ()
          {
          if (condition.year==="0")
          {
            return info.map((item) => {
              const name = item.students[0].student_name;
              const branch = item.students[0].department;
              const company = item.company_name;
              const profile = item.job_profile;
              var Package=0;
              if (item.recruitment === "Placement") {
                Package = item.package;
              }
              else {
                Package = item.intern_stipend;
              }
              const department = item.students.department;
              const date = item.recruitment_date;
              var isSecond = item.passout_batch==="2021"?false:true
              return(
              <div className="col-sm-4">
                  <Student name={name}
                    branch={branch}
                    company={company}
                    profile={profile}
                    Package={Package}
                    department={department}
                    date={date}
                    isSecond={isSecond}
                  />
                </div>
              )
              })
          } 
          else if (condition.year === "4")
          {
            return (
              <div className="container">
                <Stats info={info}/>
              </div>  
            )
          }  
          else if (condition.year === "2")
          {
            return info.map((item) => {
              if(item.passout_batch==="2022"){
                const name = item.students[0].student_name;
                const branch = item.students[0].department;
                const company = item.company_name;
                const profile = item.job_profile;
                const Package = item.intern_stipend;
                const department = item.students.department;
                const date = item.recruitment_date;
                return (
                  <div className="col-sm-4">
                    <Student name={name}
                            branch={branch}
                            company={company}
                            profile={profile}
                            Package={Package}
                            department={department} 
                            isSecond={true}
                            date={date}
                    />
                    </div>
                  )
              }
              return;
            })
          }
          else if (condition.year === "3")
          {
            return info.map((item) => {
              if(item.passout_batch==="2021"){
                const name = item.students[0].student_name;
                const branch = item.students[0].department;
                const company = item.company_name;
                const profile = item.job_profile;
                const Package = item.package;
                const department = item.students.department;
                const date = item.recruitment_date;
                return (
                  <div className="col-sm-4">
                    <Student name={name}
                            branch={branch}
                            company={company}
                            profile={profile}
                            Package={Package}
                            department={department} 
                            isSecond={false}
                            date={date}/>
                    </div>
                  )
              }
              return;
            })
          }
          else if (condition.year === "5") {
            return (
              <div className="container">
                <Company info={info}/>
              </div>  
            )
          }
        })()
        }
      </div>
      </div>
    </div>
  )
}

export default App
