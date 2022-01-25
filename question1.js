var qus = {
    "surveyQuestions": [
      {
        "status": 100,
        "questions": [
          {
            "id": 1,
            "loop": 0,
            "post": "আপনি প্রতিদিন কত শলাকা (primary brand) ধূমপান করেন ? (In sticks)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "2",
            "question": "আপনি প্রতিদিন কত শলাকা (primary brand) ধূমপান করেন ? (In sticks)",
            "required": true
          },
          {
            "id": 2,
            "loop": 0,
            "post": "আপনি প্রতিদিন কত শলাকা (secondary brand) ধূমপান করেন ? (In sticks)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "3",
            "question": "আপনি প্রতিদিন কত শলাকা (secondary brand) ধূমপান করেন ? (In sticks)",
            "required": true
          },
          {
            "LG": "4",
            "WE": "4",
            "id": 3,
            "HTC": "4",
            "Asus": "4",
            "Lava": "4",
            "Oppo": "4",
            "Sony": "4",
            "Vivo": "4",
            "loop": 0,
            "post": "আপনার ফোন টি কোন ব্র্যান্ড এর ?",
            "skip": "-1",
            "type": "dropdown+condition",
            "Apple": "4",
            "Helio": "4",
            "Intex": "4",
            "Nokia": "4",
            "Huawei": "4",
            "Lenovo": "4",
            "Okapia": "4",
            "Others": "5",
            "Realme": "4",
            "Walton": "4",
            "Xiaomi": "4",
            "OnePlus": "4",
            "Samsung": "4",
            "options": [
              "Samsung",
              "Apple",
              "OnePlus",
              "Xiaomi",
              "Symphony",
              "Huawei",
              "Walton",
              "Realme",
              "Nokia",
              "Sony",
              "HTC",
              "LG",
              "Oppo",
              "WE",
              "Micromax",
              "Vivo",
              "Asus",
              "Lenovo",
              "Lava",
              "Helio",
              "Okapia",
              "Google Phone",
              "BlackBerry",
              "Motorola",
              "Intex",
              "Others"
            ],
            "Micromax": "4",
            "Motorola": "4",
            "Symphony": "4",
            "question": "আপনার ফোন টি কোন ব্র্যান্ড এর ?",
            "required": true,
            "BlackBerry": "4",
            "Google Phone": "4"
          },
          {
            "id": 4,
            "loop": 0,
            "post": "আপনার ফোন টি কোন Model এর ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "6",
            "question": "আপনার ফোন টি কোন Model এর ?",
            "required": true
          },
          {
            "id": 5,
            "loop": 0,
            "post": "আপনার ফোন টি কোন ব্র্যান্ড এর ?  (Others)",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "4",
            "question": "আপনার ফোন টি কোন ব্র্যান্ড এর ?  (Others)",
            "required": true
          },
          {
            "id": 6,
            "1 GB": "7",
            "3 GB": "7",
            "5 GB": "7",
            "None": "9",
            "loop": 0,
            "post": "How much internet do you use per month in average ? (In MB)",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "1.5 GB": "7",
            "100 MB": "7",
            "250 MB": "7",
            "options": [
              "None",
              "Below 100 MB",
              "100 MB",
              "250 MB",
              "1 GB",
              "1.5 GB",
              "3 GB",
              "5 GB",
              "More than 5 GB"
            ],
            "referTo": "7",
            "question": "How much internet do you use per month in average ? (In MB)",
            "required": true,
            "Below 100 MB": "7",
            "More than 5 GB": "7"
          },
          {
            "id": 7,
            "loop": 0,
            "post": "How much money do you spend on internet per month in average ? (In BDT)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "8",
            "question": "How much money do you spend on internet per month in average ? (In BDT)",
            "required": true
          },
          {
            "id": 8,
            "loop": 0,
            "post": "Do you use wifi in home ?",
            "skip": "-1",
            "type": "multipleChoice",
            "options": ["Yes", "No"],
            "referTo": "9",
            "question": "Do you use wifi in home ?",
            "required": true
          },
          {
            "id": 9,
            "HSC": "10",
            "Phd": "10",
            "SSC": "10",
            "None": "11",
            "loop": 0,
            "post": "What is your last educational degree ?",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "options": [
              "None",
              "Below SSC",
              "SSC",
              "HSC",
              "BSC/Honours",
              "MSC/MBA/Masters",
              "Phd"
            ],
            "question": "What is your last educational degree ?",
            "required": true,
            "Below SSC": "10",
            "BSC/Honours": "10",
            "MSC/MBA/Masters": "10"
          },
          {
            "id": 10,
            "loop": 0,
            "post": "What was your last educational institutions ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "11",
            "question": "What was your last educational institutions ?",
            "required": true
          },
          {
            "id": 11,
            "loop": 0,
            "post": "Social Media Pressence",
            "skip": "-1",
            "type": "checkbox",
            "options": [
              "Facebook",
              "Instagram",
              "Tiktok",
              "Snapchat",
              "Whatsapp",
              "IMO",
              "Linkedin",
              "others"
            ],
            "referTo": "submit",
            "question": "Social Media Pressence",
            "required": true
          }
        ]
      },
      {
        "status": 101,
        "questions": [
          {
            "id": 1,
            "1 GB": "2",
            "3 GB": "2",
            "5 GB": "2",
            "None": "4",
            "loop": 0,
            "post": "How much internet do you use per month in average ? (In MB)",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "1.5 GB": "2",
            "100 MB": "2",
            "250 MB": "2",
            "options": [
              "Below 100 MB",
              "100 MB",
              "250 MB",
              "1 GB",
              "1.5 GB",
              "3 GB",
              "5 GB",
              "More than 5 GB"
            ],
            "referTo": "2",
            "question": "How much internet do you use per month in average ? (In MB)",
            "required": true,
            "Below 100 MB": "2",
            "More than 5 GB": "2"
          },
          {
            "id": 2,
            "loop": 0,
            "post": "How much money do you spend on internet per month in average ? (In BDT)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "3",
            "question": "How much money do you spend on internet per month in average ? (In BDT)",
            "required": true
          },
          {
            "id": 3,
            "loop": 0,
            "post": "Do you use wifi in home ?",
            "skip": "-1",
            "type": "multipleChoice",
            "options": ["Yes", "No"],
            "referTo": "4",
            "question": "Do you use wifi in home ?",
            "required": true
          },
          {
            "id": 4,
            "HSC": "5",
            "Phd": "5",
            "SSC": "5",
            "None": "6",
            "loop": 0,
            "post": "What is your last educational degree ?",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "options": [
              "None",
              "Below SSC",
              "SSC",
              "HSC",
              "BSC/Honours",
              "MSC/MBA/Masters",
              "Phd"
            ],
            "question": "What is your last educational degree ?",
            "required": true,
            "Below SSC": "5",
            "BSC/Honours": "5",
            "MSC/MBA/Masters": "5"
          },
          {
            "id": 5,
            "loop": 0,
            "post": "What was your last educational institutions ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "6",
            "question": "What was your last educational institutions ?",
            "required": true
          },
          {
            "id": 6,
            "loop": 0,
            "post": "Social Media Pressence",
            "skip": "-1",
            "type": "checkbox",
            "options": [
              "Facebook",
              "Instagram",
              "Tiktok",
              "Snapchat",
              "Whatsapp",
              "IMO",
              "Linkedin",
              "others"
            ],
            "referTo": "submit",
            "question": "Social Media Pressence",
            "required": true
          }
        ]
      }
    ]
  }

// for(let x=0; x<qus.surveyQuestions.length; x++)
// {
//     if(qus.surveyQuestions[x].status == 100)
//     {
//         for(let y=0; y<qus.surveyQuestions[x].questions.length; y++)
//         {
//             if(qus.surveyQuestions[x].questions[y].referTo != undefined)
//             console.log(qus.surveyQuestions[x].questions[y].id);

//         }
//     }
// }


let ans = qus.surveyQuestions.filter((x) => x.status == 100)

ans.forEach(element => {
    let a =  element.questions.filter((y) => y.referTo != undefined)
    if(a != undefined)
    {
        a.forEach(e => console.log(e.id))
    }

});




