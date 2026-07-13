import { GoogleApp } from './types';

export const expandedCurriculum: Partial<Record<string, GoogleApp['lesson']>> = {
  intro: {
    objectives: [
      "Understand what Google Apps are.",
      "Learn how a Google Account connects everything together.",
      "Discover how the Cloud helps us access our apps anywhere."
    ],
    warmupQuestion: "Have you ever wondered how you can watch YouTube on a phone, then continue the same video on a TV?",
    story: {
      title: "The Magic Key to the Internet",
      content: "Abhishek Sir held up a giant, glowing key. 'Imagine,' he said, 'you have one magic key that opens the school library, the playground, your classroom, and the cafeteria!' The students were amazed. 'That's exactly what a Google Account is! It is one key that unlocks YouTube, Gmail, Maps, and a dozen other magical tools, all connected together in the cloud.'"
    },
    realLifeProblem: "You need a map to find a place, a notebook to write, and a calculator for math. Carrying all of these is heavy! How can we have them all in one place?",
    explanation: {
      title: "The Google Universe",
      steps: [
        {
          heading: "1. The Magic Key",
          detail: "Your Google Account (like a Gmail address) is your magic key. It lets you into all of Google's apps."
        },
        {
          heading: "2. The 'Waffle' Menu",
          detail: "In the top-right corner of Google, there is a grid of 9 dots. We call it the Waffle! Click it, and you will see all your apps."
        },
        {
          heading: "3. Working Together",
          detail: "Google Apps talk to each other. You can start drawing an image in Drawings, and magically put it inside a Doc!"
        }
      ]
    },
    funFact: "Google's very first computer storage was built using colorful Lego bricks!",
    didYouKnow: "The word 'Google' is a misspelling of 'Googol', which is a math term for the number 1 followed by 100 zeros!",
    tips: [
      "Always sign out of your Google Account if you are using a public computer or a friend's phone.",
      "Click the 9-dot 'Waffle' menu to switch between any Google App instantly."
    ],
    commonMistakes: [
      "Sharing your password with friends. Your magic key should stay a secret!",
      "Thinking Google is only for searching. It is a whole universe of tools."
    ],
    challenge: "Log in to Google, click the 9-dot Waffle menu, and count how many apps you see!",
    homework: "Ask your parents how many Google Apps they use every day for their work.",
    badgeName: "Explorer",
    badgeEmoji: "🔍",
    xpReward: 50
  },
  drive: {
    objectives: [
      "Understand what Cloud Storage is.",
      "Learn how to upload and save files in Google Drive.",
      "Discover how to organize files into folders.",
      "Learn how to share files safely with friends or teachers."
    ],
    warmupQuestion: "If your computer breaks today, will you lose all your photos and school projects?",
    story: {
      title: "The Mystery of the Missing Homework",
      content: "Once upon a time, Rohan spent three days making a beautiful science project on his laptop. He was so proud! But the night before submission, his laptop crashed. The screen went black. Rohan cried because his project was lost forever. Then, Abhishek Sir smiled and said, 'Rohan, if you had used a magical backpack called Google Drive, your project would be safe in the clouds!' Let's find out how this magic works."
    },
    realLifeProblem: "Computers can break, phones can get lost, and pen drives can catch viruses. How do we keep our important files 100% safe forever?",
    explanation: {
      title: "Google Drive is Your Digital Backpack",
      steps: [
        {
          heading: "1. The Magic Cloud",
          detail: "Google Drive doesn't save files inside your laptop. It saves them on Google's super-computers (called the Cloud). You can open them from any phone or computer!"
        },
        {
          heading: "2. Unlimited Folders",
          detail: "Just like you have different pockets in your school bag for different books, you can create folders in Drive for Science, Math, and Photos."
        },
        {
          heading: "3. Easy Sharing",
          detail: "Instead of copying a movie to a pen drive, you can just send a secret 'link' to your friend, and they can see it instantly."
        }
      ]
    },
    funFact: "Google Drive gives you 15 GB of free space. That's enough to store 4,500 photos or 3,000 songs for free!",
    didYouKnow: "You can use your phone's camera to scan paper documents directly into your Google Drive as PDFs!",
    tips: [
      "Always give your files clear names like 'Science_Project_Final' instead of 'Untitled123'.",
      "Use colors on your folders to find them faster (e.g., Red for Math, Green for Science)."
    ],
    commonMistakes: [
      "Sharing a file with 'Anyone on the internet' when it contains personal information.",
      "Forgetting to check the 'Trash' bin if you accidentally delete a file (it stays there for 30 days!)."
    ],
    challenge: "Create a new folder in Google Drive called 'My Secret Base', color it Blue, and upload one picture into it.",
    homework: "Ask your parents how they back up their important photos. Teach them about Google Drive if they don't know!",
    badgeName: "Cloud Master",
    badgeEmoji: "☁️",
    xpReward: 100
  },
  docs: {
    objectives: [
      "Understand how Google Docs is different from normal paper.",
      "Learn to type, format, and color text.",
      "Discover how to collaborate (work together) with friends at the exact same time."
    ],
    warmupQuestion: "Have you ever tried writing a story with a friend, but you both had to take turns using the same pen?",
    story: {
      title: "The Teamwork Trouble",
      content: "Maya, Leo, and Sam had to write a group essay. Maya wrote her part on paper and gave it to Leo. Leo lost the paper! They had to start all over again. Abhishek Sir laughed and showed them Google Docs. 'Watch this,' he said. Maya typed from her house, Leo typed from his house, and Sam added pictures—all on the same page, at the exact same time! It looked like magic ghosts were typing."
    },
    realLifeProblem: "Working on group projects is hard when everyone lives in different houses. How can you write a report together without meeting?",
    explanation: {
      title: "The Smartest Paper in the World",
      steps: [
        {
          heading: "1. Real-Time Typing",
          detail: "When you share a Doc with a friend, you can see their cursor moving and typing on your screen in real-time."
        },
        {
          heading: "2. Auto-Save Magic",
          detail: "There is no 'Save' button in Google Docs. Every single letter you type is saved automatically every second. You can never lose your work!"
        },
        {
          heading: "3. Voice Typing",
          detail: "Tired of typing? You can click the microphone icon and just talk. Google Docs will write down everything you say!"
        }
      ]
    },
    funFact: "Google Docs can automatically translate your entire document into over 100 different languages with one click!",
    didYouKnow: "If you make a mistake and delete everything, you can use 'Version History' to go back in time and get your old work back.",
    tips: [
      "Use 'Headings' from the text style menu to make your document look like a real book.",
      "Press Ctrl+Z (or Cmd+Z) to instantly undo any mistake!"
    ],
    commonMistakes: [
      "Using fonts that are too crazy or hard to read for important school work.",
      "Forgetting to change the share settings so your teacher can actually read your homework."
    ],
    challenge: "Open a new Google Doc, turn on Voice Typing, and say 'Hello Abhishek Sir, I am learning Google Docs!'.",
    homework: "Write a short 5-line story about your favorite animal in Google Docs and change the color of every sentence.",
    badgeName: "Word Wizard",
    badgeEmoji: "📝",
    xpReward: 100
  },
  slides: {
    objectives: [
      "Learn what a presentation is and when to use it.",
      "Understand how to add text, images, and shapes to a slide.",
      "Discover how to add exciting animations and transitions."
    ],
    warmupQuestion: "If you had to teach the whole class about Dinosaurs, would you rather just talk, or show them giant moving pictures?",
    story: {
      title: "The Boring Presentation",
      content: "Raju was giving a speech about Mars. He read from a piece of paper for 10 minutes. Everyone fell asleep! Then, Abhishek Sir showed Raju Google Slides. Raju made a slide deck with pictures of red rocks, a video of a rocket taking off, and text that zoomed onto the screen. This time, the whole class clapped and cheered! He turned a boring speech into a movie."
    },
    realLifeProblem: "Standing in front of people to talk can be scary, and people might get bored. How can we make our speeches exciting and visual?",
    explanation: {
      title: "Your Personal Movie Screen",
      steps: [
        {
          heading: "1. The Canvas",
          detail: "Each 'Slide' is like a blank movie screen. You can put words, pictures, or even YouTube videos right onto it."
        },
        {
          heading: "2. Themes",
          detail: "Don't know how to make it look pretty? Pick a Theme! It automatically gives your slides beautiful colors and fonts."
        },
        {
          heading: "3. Animations",
          detail: "You can make a picture of a rocket ship physically fly across the screen using the 'Animate' button."
        }
      ]
    },
    funFact: "You can use a laser pointer on your screen while presenting Google Slides just by clicking a button!",
    didYouKnow: "You can let your audience ask questions from their phones, and the questions will appear on your screen using Q&A mode!",
    tips: [
      "Don't put too many words on one slide. Use pictures to tell the story instead!",
      "Use the 'Explore' button (the little star at the bottom right) to get magic design suggestions."
    ],
    commonMistakes: [
      "Reading every single word off the slide instead of just talking to your audience.",
      "Using too many crazy animations that make people dizzy!"
    ],
    challenge: "Create a 3-slide presentation about your favorite food. Add one picture and make it spin!",
    homework: "Find a YouTube video about animals and embed it into a blank Google Slide.",
    badgeName: "Showman",
    badgeEmoji: "🎬",
    xpReward: 100
  },
  sheets: {
    objectives: [
      "Understand what a spreadsheet is.",
      "Learn how to enter data into rows and columns.",
      "Discover how to make the computer do math for you.",
      "Learn how to create colorful charts and graphs."
    ],
    warmupQuestion: "If you had a list of 1,000 numbers, how long would it take you to add them all up?",
    story: {
      title: "The Ice Cream Shop Trouble",
      content: "Priya started a summer ice cream shop. She wrote down every sale in a notebook. At the end of the week, she tried to count her money but kept making mistakes! Abhishek Sir opened Google Sheets. He typed her numbers into the little boxes. With one click, the computer added everything up perfectly. Then, it magically turned her numbers into a giant, colorful pie chart showing which flavor was the most popular!"
    },
    realLifeProblem: "Math can be hard when there are too many numbers. How can we track our pocket money without making mistakes?",
    explanation: {
      title: "The Magical Math Grid",
      steps: [
        {
          heading: "1. Rows and Columns",
          detail: "A sheet is made of tiny boxes called 'Cells'. They are organized in columns (A, B, C) and rows (1, 2, 3)."
        },
        {
          heading: "2. Magic Formulas",
          detail: "If you type '=SUM(A1:A5)', the computer will instantly add up all the numbers in those boxes for you!"
        },
        {
          heading: "3. Instant Charts",
          detail: "Select your numbers, click 'Insert Chart', and watch your boring numbers turn into beautiful bar graphs or pie charts."
        }
      ]
    },
    funFact: "Google Sheets can automatically translate text. If you type =GOOGLETRANSLATE('Hello', 'en', 'es'), it will magically say 'Hola'!",
    didYouKnow: "A single Google Sheet can hold up to 10 million cells of data! That's a lot of ice cream sales.",
    tips: [
      "Double-click the line between two columns (like A and B) to automatically make it the perfect width.",
      "Use 'Fill Color' (the paint bucket icon) to color-code your data."
    ],
    commonMistakes: [
      "Forgetting to type the equals sign (=) before a math formula.",
      "Deleting a row by accident (Remember, Ctrl+Z or Cmd+Z is your best friend!)."
    ],
    challenge: "Make a list of 5 of your friends and their ages in a Google Sheet. Create a bar chart showing who is the oldest!",
    homework: "Ask your parents if they use spreadsheets for their budget, and ask them to show you!",
    badgeName: "Data Wizard",
    badgeEmoji: "📊",
    xpReward: 150
  },
  forms: {
    objectives: [
      "Learn how to create digital surveys and quizzes.",
      "Understand different types of questions (Multiple choice, text, etc.).",
      "Discover how to look at the answers you receive."
    ],
    warmupQuestion: "If you wanted to find out the favorite color of all 50 kids in your class, how would you do it quickly?",
    story: {
      title: "The Pizza Party Vote",
      content: "The principal said the class could have a pizza party, but they had to agree on the toppings. Rahul walked around with a notepad asking everyone, but it took hours! Abhishek Sir showed them Google Forms. In 2 minutes, Rahul made a digital poll and sent it to everyone's tablets. Instantly, a colorful pie chart popped up showing that 80% of the class wanted cheese pizza. The party was saved!"
    },
    realLifeProblem: "Asking a lot of people the same question takes forever. How can we collect answers quickly and automatically?",
    explanation: {
      title: "Your Personal Question Machine",
      steps: [
        {
          heading: "1. Adding Questions",
          detail: "You can ask any kind of question! You can let people type short answers, pick from a dropdown, or choose multiple boxes."
        },
        {
          heading: "2. Custom Themes",
          detail: "You can change the colors and add a big header image at the top of your form to make it look cool."
        },
        {
          heading: "3. Viewing Responses",
          detail: "As soon as someone hits 'Submit', their answer appears in the 'Responses' tab as a beautiful chart."
        }
      ]
    },
    funFact: "You can turn a Google Form into a self-grading quiz! It will automatically tell students their score right after they finish.",
    didYouKnow: "You can add YouTube videos directly into your form and ask questions about the video!",
    tips: [
      "Always add a question asking for the person's 'Name', or you won't know who sent the answers!",
      "Click the 'Eye' icon at the top to preview your form and see exactly what it looks like to others."
    ],
    commonMistakes: [
      "Making all questions required even when they shouldn't be.",
      "Sending the 'Edit' link to friends instead of the 'Send' link. (They might accidentally delete your questions!)"
    ],
    challenge: "Create a simple Google Form asking 'What is your favorite ice cream flavor?' and send it to your parents.",
    homework: "Make a 3-question quiz about your favorite video game using Google Forms.",
    badgeName: "Quiz Master",
    badgeEmoji: "📋",
    xpReward: 100
  },
  drawings: {
    objectives: [
      "Learn how to use digital canvas tools.",
      "Understand how to combine shapes, lines, and text.",
      "Discover how to create diagrams and posters."
    ],
    warmupQuestion: "How do you think scientists make those cool diagrams of plant cells or space rockets?",
    story: {
      title: "The Science Fair Diagram",
      content: "Sita had a great idea for the science fair: a water filter! But she couldn't draw very well on paper. Her circles looked like potatoes. Abhishek Sir introduced her to Google Drawings. She dragged perfect circles, straight arrows, and typed neat labels. Her final diagram looked so professional that the judges thought it was printed from a textbook!"
    },
    realLifeProblem: "Drawing straight lines and perfect circles is hard by hand. How can we make professional-looking diagrams for school?",
    explanation: {
      title: "Your Digital Art Studio",
      steps: [
        {
          heading: "1. The Tool Palette",
          detail: "You have tools for shapes, arrows, scribbles, and text boxes. You can drag and drop them anywhere."
        },
        {
          heading: "2. Layering",
          detail: "You can put shapes on top of each other. Put a star on top of a circle, change the colors, and you have a custom badge!"
        },
        {
          heading: "3. Transparent Backgrounds",
          detail: "You can save your drawing without a white background, so it looks like a perfect sticker when you paste it into Docs or Slides."
        }
      ]
    },
    funFact: "You can use the 'Polyline' tool to click and draw your own custom geometric shapes!",
    didYouKnow: "You can insert Google Drawings directly inside a Google Doc without ever leaving the document!",
    tips: [
      "Hold down the 'Shift' key while drawing a circle or square to make it perfectly even.",
      "Use the alignment lines (the red lines that pop up) to make sure your shapes are perfectly centered."
    ],
    commonMistakes: [
      "Forgetting to group objects together before moving them, causing pieces to get left behind.",
      "Making text boxes too small so the words get cut off."
    ],
    challenge: "Create a Google Drawing of a simple house using only squares, triangles, and rectangles.",
    homework: "Design a poster for a 'Missing Pet Robot' using shapes and text in Google Drawings.",
    badgeName: "Digital Artist",
    badgeEmoji: "🎨",
    xpReward: 100
  },
  other: {
    objectives: [
      "Discover the wider universe of Google Apps.",
      "Learn how Maps helps you explore the world.",
      "Understand how Translate breaks down language barriers."
    ],
    warmupQuestion: "If you wanted to visit the Eiffel Tower in Paris right now, without an airplane, how could you do it?",
    story: {
      title: "A Trip Around the World",
      content: "Abhishek Sir told the class they were going on a field trip to Japan! But they didn't leave the room. He opened Google Earth, zoomed out to space, and zoomed all the way down into a street in Tokyo. Then, he used Google Translate to say 'Hello' in Japanese. The class realized they had the whole world right in their computers!"
    },
    realLifeProblem: "The world is huge, and people speak thousands of languages. How can we explore the globe and understand each other?",
    explanation: {
      title: "Exploring the World with Google",
      steps: [
        {
          heading: "1. Google Maps & Earth",
          detail: "These tools let you find directions, see satellite images of your house, or walk on virtual streets using Street View."
        },
        {
          heading: "2. Google Translate",
          detail: "Type or speak a word, and the computer instantly translates it into over 100 languages. It can even read it out loud!"
        },
        {
          heading: "3. Google Meet",
          detail: "A magical video window where you can see and talk to friends or teachers from anywhere in the world."
        }
      ]
    },
    funFact: "If you ask Google Maps for walking directions from 'The Shire' to 'Mordor', it will give you a funny warning!",
    didYouKnow: "Google Translate has a camera feature on phones that can instantly translate signs written in other languages just by looking at them!",
    tips: [
      "In Google Maps, drag the little yellow 'Pegman' onto a street to enter Street View.",
      "In Google Meet, you can change your background so it looks like you are sitting on the beach or in space!"
    ],
    commonMistakes: [
      "Using Google Translate for entire essays—sometimes the grammar gets confused!",
      "Forgetting to mute your microphone in a Google Meet when you are not speaking."
    ],
    challenge: "Open Google Maps and find the distance between your school and the Taj Mahal.",
    homework: "Use Google Translate to learn how to say 'Thank You' in 5 different languages.",
    badgeName: "Global Citizen",
    badgeEmoji: "🌍",
    xpReward: 150
  }
};
