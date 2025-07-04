const courses = [
    {
        id: 1,
        title: "Automata Theory",
        description: "Covers foundational skills on DFA, NFA, and automata logic",
        category: "cs",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/automata.jpg",
        lessons: [
            {
                id: 101,
                title: "What is Automata?",
                status: "not-started",
                videoId: "WQ8bJooiEeQ",
                duration: "12:45",
                description: "Intro to machines that accept languages.",
                quiz: [
                    {
                        question: "What is the main function of an automaton?",
                        options: [
                            "To generate languages",
                            "To recognize patterns",
                            "To perform calculations",
                            "To store data"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which type of automaton recognizes regular languages?",
                        options: [
                            "Finite Automaton",
                            "Pushdown Automaton",
                            "Turing Machine",
                            "None of the above"
                        ],
                        answer: 0
                    },
                    {
                        question: "What is the primary difference between DFA and NFA?",
                        options: [
                            "Number of states",
                            "Transition function",
                            "Input alphabet",
                            "Output function"
                        ],
                        answer: 1
                    },
                    {
                        question: "What is the purpose of the pumping lemma?",
                        options: [
                            "To prove a language is regular",
                            "To prove a language is not regular",
                            "To generate regular languages",
                            "To recognize patterns"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which automaton recognizes context-free languages?",
                        options: [
                            "Finite Automaton",
                            "Pushdown Automaton",
                            "Turing Machine",
                            "None of the above"
                        ],
                        answer: 1
                    }
                ]
            },
            {
                id: 102,
                title: "DFA vs NFA",
                status: "not-started",
                videoId: "Iww3pI4PI1s",
                duration: "10:30",
                description: "Differences between DFA and NFA.",
                quiz: []
            }
        ]
    },
    {
        id: 2,
        title: "Computer Networks",
        description: "Core concepts of physical computer networks",
        category: "cs",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/network.jpg",
        lessons: [
            {
                id: 201,
                title: "OSI Model Explained",
                status: "not-started",
                videoId: "qBXmbJZQ5rY",
                duration: "15:00",
                description: "Overview of all 7 layers of OSI.",
                quiz: [
                    {
                        question: "What is the primary function of a router?",
                        options: [
                            "To connect devices within a LAN",
                            "To connect multiple networks together",
                            "To provide network security",
                            "To manage network traffic"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following is a type of network topology?",
                        options: ["Bus", "Star", "Ring", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What is the purpose of DNS in a network?",
                        options: [
                            "To translate domain names to IP addresses",
                            "To assign IP addresses to devices",
                            "To manage network traffic",
                            "To provide network security"
                        ],
                        answer: 0
                    },
                    {
                        question: "Which layer of the OSI model is responsible for routing?",
                        options: ["Physical", "Data Link", "Network", "Transport"],
                        answer: 2
                    },
                    {
                        question: "What is the difference between TCP and UDP?",
                        options: [
                            "TCP is connection-oriented, UDP is connectionless",
                            "TCP is connectionless, UDP is connection-oriented",
                            "TCP is faster, UDP is slower",
                            "TCP is slower, UDP is faster"
                        ],
                        answer: 0
                    }
                ]
            },
            {
                id: 202,
                title: "IP Addressing",
                status: "not-started",
                videoId: "Kx6i9gwNS3w",
                duration: "13:15",
                description: "Basics of IPv4 and IPv6.",
                quiz: []
            }
        ]
    },
    {
        id: 3,
        title: "Database Management",
        description: "Learn DBMS with SQL Workbench",
        category: "database",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/sql.jpg",
        lessons: [
            {
                id: 301,
                title: "What is a Database?",
                status: "not-started",
                videoId: "6Iu45VZGQDk",
                duration: "13:40",
                description: "Definition and real-world examples.",
                quiz: [
                    {
                        question: "What is the primary purpose of a database?",
                        options: [
                            "To store data",
                            "To manage data",
                            "To retrieve data",
                            "All of the above"
                        ],
                        answer: 3
                    },
                    {
                        question: "Which of the following is a type of database model?",
                        options: ["Relational", "Hierarchical", "Network", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What is a primary key in a database?",
                        options: [
                            "A unique identifier for each record",
                            "A foreign key in another table",
                            "A composite key",
                            "A candidate key"
                        ],
                        answer: 0
                    },
                    {
                        question: "What is normalization in DBMS?",
                        options: [
                            "Reducing data redundancy",
                            "Increasing data redundancy",
                            "Improving data security",
                            "Enhancing data performance"
                        ],
                        answer: 0
                    },
                    {
                        question: "Which of the following is a benefit of using a DBMS?",
                        options: [
                            "Improved data sharing",
                            "Reduced data redundancy",
                            "Enhanced data security",
                            "All of the above"
                        ],
                        answer: 3
                    }
                ]
            },
            {
                id: 302,
                title: "SQL Basics",
                status: "not-started",
                videoId: "HXV3zeQKqGY",
                duration: "17:10",
                description: "Simple SQL queries and data types.",
                quiz: []
            }
        ]
    },
    {
        id: 4,
        title: "Software Engineering",
        description: "Covers fundamentals of software development",
        category: "se",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/software-eng.jpg",
        lessons: [
            {
                id: 401,
                title: "SDLC Overview",
                status: "not-started",
                videoId: "Fi3_BjVzpqk",
                duration: "11:00",
                description: "Software Development Life Cycle models.",
                quiz: [
                    {
                        question: "What is the primary goal of software engineering?",
                        options: [
                            "To write code",
                            "To design software",
                            "To test software",
                            "To manage software projects"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following is a software development life cycle model?",
                        options: ["Waterfall", "Agile", "V-Model", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What is requirements gathering in software development?",
                        options: [
                            "Designing software",
                            "Testing software",
                            "Understanding customer needs",
                            "Implementing software"
                        ],
                        answer: 2
                    },
                    {
                        question: "What is software design?",
                        options: [
                            "Writing code",
                            "Testing software",
                            "Creating a software architecture",
                            "Managing software projects"
                        ],
                        answer: 2
                    },
                    {
                        question: "What is unit testing?",
                        options: [
                            "Testing individual components",
                            "Testing entire systems",
                            "Testing user interfaces",
                            "Testing databases"
                        ],
                        answer: 0
                    }
                ]
            },
            {
                id: 402,
                title: "Agile vs Waterfall",
                status: "not-started",
                videoId: "5RocT_OdQcA",
                duration: "16:20",
                description: "Comparison of two popular methods.",
                quiz: []
            }
        ]
    },
    {
        id: 5,
        title: "Computer Systems",
        description: "Introduction to computer systems and components",
        category: "cs",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/default.jpg",
        lessons: [
            {
                id: 501,
                title: "Hardware vs Software",
                status: "not-started",
                videoId: "vG_qmtdBPTU",
                duration: "09:50",
                description: "Understanding the basics.",
                quiz: [
                    {
                        question: "What is a computer system?",
                        options: [
                            "A programming tool",
                            "A combination of hardware and software",
                            "A set of applications",
                            "A network device"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which component is known as the brain of the computer?",
                        options: ["RAM", "Hard Drive", "CPU", "GPU"],
                        answer: 2
                    },
                    {
                        question: "What type of memory is volatile?",
                        options: ["ROM", "Hard Drive", "SSD", "RAM"],
                        answer: 3
                    },
                    {
                        question: "Which of the following is an input device?",
                        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
                        answer: 1
                    },
                    {
                        question: "Which device stores data permanently?",
                        options: ["RAM", "Cache", "Hard Drive", "Register"],
                        answer: 2
                    }
                ]
            },
            {
                id: 502,
                title: "System Components",
                status: "not-started",
                videoId: "peas75zRolo",
                duration: "12:30",
                description: "CPU, RAM, storage, etc.",
                quiz: []
            }
        ]
    },
    {
        id: 6,
        title: "OOAD",
        description: "Covers OOP and object-oriented modeling",
        category: "se",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/software-eng.jpg",
        lessons: [
            {
                id: 601,
                title: "OOP Concepts",
                status: "not-started",
                videoId: "pTB0EiLXUC8",
                duration: "10:10",
                description: "Classes, objects, inheritance, etc.",
                quiz: [
                    {
                        question: "What is the main focus of OOAD?",
                        options: [
                            "Procedural flow",
                            "Object interaction",
                            "System memory",
                            "Data flow"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following best defines a class?",
                        options: [
                            "A real-world entity",
                            "A blueprint for objects",
                            "An algorithm",
                            "A package"
                        ],
                        answer: 1
                    },
                    {
                        question: "What is encapsulation?",
                        options: [
                            "Binding data and functions together",
                            "Breaking a program into functions",
                            "Sharing resources",
                            "Hiding program logic"
                        ],
                        answer: 0
                    },
                    {
                        question: "What does inheritance promote?",
                        options: [
                            "Data repetition",
                            "Code reuse",
                            "Multiple entry points",
                            "Access restriction"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following is NOT an OOP concept?",
                        options: [
                            "Encapsulation",
                            "Polymorphism",
                            "Inheritance",
                            "Compilation"
                        ],
                        answer: 3
                    }
                ]
            },
            {
                id: 602,
                title: "UML Diagrams",
                status: "not-started",
                videoId: "WnMQ8HlmeXc",
                duration: "11:25",
                description: "Types of UML diagrams and uses.",
                quiz: []
            }
        ]
    },
    {
        id: 7,
        title: "Operating Systems",
        description: "Operating system design and components",
        category: "cs",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/os.jpg",
        lessons: [
            {
                id: 701,
                title: "What is an OS?",
                status: "not-started",
                videoId: "yK1uBHPdp30",
                duration: "08:55",
                description: "Role of operating systems.",
                quiz: [
                    {
                        question: "What is an operating system?",
                        options: [
                            "Application software",
                            "System software managing hardware and software",
                            "Hardware controller",
                            "A network utility"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of these is a type of operating system?",
                        options: ["Batch", "Time-sharing", "Distributed", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What does the kernel do?",
                        options: [
                            "Manages apps",
                            "Manages system memory, processes, and hardware",
                            "Handles emails",
                            "Encrypts data"
                        ],
                        answer: 1
                    },
                    {
                        question: "What is a process?",
                        options: [
                            "An active program in execution",
                            "A data structure",
                            "A device driver",
                            "A static program"
                        ],
                        answer: 0
                    },
                    {
                        question: "What is a deadlock?",
                        options: [
                            "A program crash",
                            "When processes wait forever for resources",
                            "A file error",
                            "A virus"
                        ],
                        answer: 1
                    }
                ]
            },
            {
                id: 702,
                title: "Memory Management",
                status: "not-started",
                videoId: "RhNWpUrO5MQ",
                duration: "11:25",
                description: "How OS handles memory.",
                quiz: []
            }
        ]
    },
    {
        id: 8,
        title: "Scripting Languages",
        description: "Introduction to scripting languages and automation",
        category: "programming",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/scripting.jpg",
        lessons: [
            {
                id: 801,
                title: "Intro to Scripting",
                status: "not-started",
                videoId: "dWisUXms3Sw",
                duration: "11:25",
                description: "Why scripting matters.",
                quiz: [
                    {
                        question: "What is a scripting language?",
                        options: [
                            "A low-level language",
                            "A language used for system design",
                            "A lightweight programming language for automation",
                            "A hardware language"
                        ],
                        answer: 2
                    },
                    {
                        question: "Which of the following is a scripting language?",
                        options: ["Java", "Python", "C++", "Assembly"],
                        answer: 1
                    },
                    {
                        question: "Which scripting language is commonly used in web browsers?",
                        options: ["PHP", "Python", "JavaScript", "Ruby"],
                        answer: 2
                    },
                    {
                        question: "Which of these is a server-side scripting language?",
                        options: ["HTML", "CSS", "PHP", "XML"],
                        answer: 2
                    },
                    {
                        question: "What is the primary purpose of a scripting language?",
                        options: [
                            "Compiling software",
                            "Building hardware",
                            "Automating tasks",
                            "Creating databases"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: 802,
                title: "Writing Shell Scripts",
                status: "not-started",
                videoId: "GtovwKDemnI",
                duration: "11:25",
                description: "Basic syntax and commands.",
                quiz: []
            }
        ]
    },
    {
        id: 9,
        title: "Cloud Computing",
        description: "Explore cloud technologies and virtualization",
        category: "cloud",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/cloud.jpg",
        lessons: [
            {
                id: 901,
                title: "What is the Cloud?",
                status: "not-started",
                videoId: "RWgW-CgdIk0",
                duration: "09:50",
                description: "Cloud basics and models.",
                quiz: [
                    {
                        question: "What is cloud computing?",
                        options: [
                            "Storing data locally",
                            "Using remote servers for storage and processing",
                            "Developing software on desktop",
                            "Browsing the internet"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following is a cloud service model?",
                        options: ["IaaS", "PaaS", "SaaS", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What does IaaS stand for?",
                        options: [
                            "Internet as a Service",
                            "Infrastructure as a Service",
                            "Instance as a Service",
                            "Interface as a Service"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which company is a major cloud service provider?",
                        options: ["AWS", "Intel", "Apple", "Adobe"],
                        answer: 0
                    },
                    {
                        question: "What is a key benefit of cloud computing?",
                        options: [
                            "Manual data backups",
                            "Increased hardware requirements",
                            "Scalability and flexibility",
                            "Faster printers"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: 902,
                title: "Virtualization",
                status: "not-started",
                videoId: "FZR0rG3HKIk",
                duration: "12:30",
                description: "Using VMs and containers.",
                quiz: []
            }
        ]
    },
    {
        id: 10,
        title: "Critical Thinking",
        description: "Develop logical and critical reasoning skills",
        category: "general",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/default.jpg",
        lessons: [
            {
                id: 1001,
                title: "Intro to Critical Thinking",
                status: "not-started",
                videoId: "RyqFD5OAJ40",
                duration: "14:20",
                description: "Thinking clearly and logically.",
                quiz: [
                    {
                        question: "What is critical thinking?",
                        options: [
                            "Memorizing facts",
                            "Accepting opinions blindly",
                            "Analyzing and evaluating information",
                            "Avoiding decision making"
                        ],
                        answer: 2
                    },
                    {
                        question: "Which of these is a core skill in critical thinking?",
                        options: ["Guessing", "Assuming", "Reasoning", "Copying"],
                        answer: 2
                    },
                    {
                        question: "What is the first step in critical thinking?",
                        options: [
                            "Making conclusions",
                            "Gathering information",
                            "Choosing sides",
                            "Accepting facts"
                        ],
                        answer: 1
                    },
                    {
                        question: "Which of the following encourages critical thinking?",
                        options: [
                            "Groupthink",
                            "Questioning assumptions",
                            "Following majority opinion",
                            "Jumping to conclusions"
                        ],
                        answer: 1
                    },
                    {
                        question: "What does it mean to evaluate an argument?",
                        options: [
                            "Memorizing it",
                            "Believing it",
                            "Testing its logic and evidence",
                            "Ignoring it"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: 1002,
                title: "Logical Fallacies",
                status: "not-started",
                videoId: "vA_lM-2fpW0",
                duration: "17:10",
                description: "Common errors in reasoning.",
                quiz: []
            }
        ]
    },
    {
        id: 11,
        title: "UI/UX Design",
        description: "Master user interface and user experience design fundamentals",
        category: "design",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/uiux.jpg",
        lessons: [
            {
                id: 1101,
                title: "Introduction to UI/UX",
                status: "not-started",
                videoId: "55NvZjUZIO8",
                duration: "12:45",
                description: "Understanding what UI/UX design entails.",
                quiz: [
                    {
                        question: "What does UI stand for?",
                        options: ["User Intelligence", "User Interface", "Unique Interaction", "Universal Input"],
                        answer: 1
                    },
                    {
                        question: "Which focuses on user emotions and experience?",
                        options: ["UI", "UX", "Backend", "Frontend"],
                        answer: 1
                    },
                    {
                        question: "Which tool is commonly used for UI design?",
                        options: ["React", "Node.js", "Figma", "MySQL"],
                        answer: 2
                    }
                ]
            },
            {
                id: 1102,
                title: "Design Principles",
                status: "not-started",
                videoId: "NTmh8l-Xl4c",
                duration: "18:20",
                description: "Core design principles for effective interfaces.",
                quiz: []
            }
        ]
    },
    {
        id: 12,
        title: "Frontend Development",
        description: "Learn to build beautiful and functional web interfaces",
        category: "web development",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/frontend.jpg",
        lessons: [
            {
                id: 1201,
                title: "HTML & CSS Basics",
                status: "not-started",
                videoId: "G3e‑cpL7ofc",
                duration: "15:00",
                description: "Fundamentals of building web pages.",
                quiz: [
                    {
                        question: "What does HTML stand for?",
                        options: ["Hyper Trainer Markup Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyperlink Text Mark Language"],
                        answer: 1
                    },
                    {
                        question: "Which property changes text color in CSS?",
                        options: ["font-style", "color", "text-color", "background-color"],
                        answer: 1
                    },
                    {
                        question: "Which HTML tag is used for links?",
                        options: ["<link>", "<a>", "<href>", "<ul>"],
                        answer: 1
                    }
                ]
            },
            {
                id: 1202,
                title: "JavaScript Fundamentals",
                status: "not-started",
                videoId: "EerdGm-ehJQ",
                duration: "20:10",
                description: "Introduction to JavaScript programming.",
                quiz: []
            }
        ]
    },
    {
        id: 13,
        title: "Backend Development",
        description: "Learn to build server-side applications and APIs",
        category: "web development",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/backend.jpg",
        lessons: [
            {
                id: 1301,
                title: "Introduction to Backend",
                status: "not-started",
                videoId: "1oTuMPIwHmk",
                duration: "16:30",
                description: "What is backend development?",
                quiz: [
                    {
                        question: "Which language is popular for backend development?",
                        options: ["HTML", "CSS", "Node.js", "Figma"],
                        answer: 2
                    },
                    {
                        question: "What does API stand for?",
                        options: ["Application Programming Interface", "Advanced Programming Integration", "Applied Program Information", "Application Protocol Internet"],
                        answer: 0
                    },
                    {
                        question: "Which database is NoSQL?",
                        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
                        answer: 2
                    }
                ]
            },
            {
                id: 1302,
                title: "Node.js Basics",
                status: "not-started",
                videoId: "f2EqECiTBL8",
                duration: "19:45",
                description: "Building backend with Node.js.",
                quiz: []
            }
        ]
    },
    {
        id: 14,
        title: "Full Stack Development",
        description: "Become a full stack developer with frontend and backend skills",
        category: "web development",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/fullstack.jpg",
        lessons: [
            {
                id: 1401,
                title: "What is Full Stack?",
                status: "not-started",
                videoId: "7NaeDBTRY1k",
                duration: "13:50",
                description: "Understanding full stack development roles.",
                quiz: [
                    {
                        question: "Full stack developers work on?",
                        options: ["Frontend only", "Backend only", "Both frontend and backend", "UI design only"],
                        answer: 2
                    },
                    {
                        question: "Which stack uses MERN?",
                        options: ["MySQL, Express, React, Node", "MongoDB, Express, React, Node", "MongoDB, Ember, React, Next.js", "MongoDB, Express, Redux, Node"],
                        answer: 1
                    },
                    {
                        question: "Which of these is a frontend framework?",
                        options: ["Node.js", "Express.js", "React.js", "MongoDB"],
                        answer: 2
                    }
                ]
            },
            {
                id: 1402,
                title: "Deploying Full Stack Apps",
                status: "not-started",
                videoId: "nQdyiK7-VlQ",
                duration: "21:15",
                description: "Deploying full stack applications to the cloud.",
                quiz: []
            }
        ]
    },
    {
        id: 15,
        title: "Data Analysis",
        description: "Learn to analyze data for business insights",
        category: "data science",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/dataanalysis.jpg",
        lessons: [
            {
                id: 1501,
                title: "Introduction to Data Analysis",
                status: "not-started",
                videoId: "ziQEqGZB8GE",
                duration: "14:40",
                description: "What is data analysis and its importance?",
                quiz: [
                    {
                        question: "Which tool is popular for data analysis?",
                        options: ["Photoshop", "Excel", "HTML", "Figma"],
                        answer: 1
                    },
                    {
                        question: "What is a dataset?",
                        options: ["A set of designs", "A collection of data", "A code snippet", "A database system"],
                        answer: 1
                    },
                    {
                        question: "Which language is widely used for data analysis?",
                        options: ["JavaScript", "Python", "CSS", "PHP"],
                        answer: 1
                    }
                ]
            },
            {
                id: 1502,
                title: "Data Visualization",
                status: "not-started",
                videoId: "DwR0SZTBMTU",
                duration: "17:35",
                description: "Presenting data visually for better insights.",
                quiz: []
            }
        ]
    },
    {
        id: 16,
        title: "Augmented Reality",
        description: "Explore the world of AR and its applications",
        category: "technology",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/ar.jpg",
        lessons: [
            {
                id: 1601,
                title: "Introduction to AR",
                status: "not-started",
                videoId: "0fZBqV_yMq4",
                duration: "13:10",
                description: "What is augmented reality?",
                quiz: [
                    {
                        question: "What does AR stand for?",
                        options: ["Applied Reality", "Augmented Reality", "Artificial Reality", "Advanced Rendering"],
                        answer: 1
                    },
                    {
                        question: "Which is an AR application?",
                        options: ["WhatsApp", "Pokemon Go", "Facebook", "Gmail"],
                        answer: 1
                    },
                    {
                        question: "Which device is commonly used for AR?",
                        options: ["VR headset", "AR glasses", "Smartwatch", "Speaker"],
                        answer: 1
                    }
                ]
            },
            {
                id: 1602,
                title: "AR Development Tools",
                status: "not-started",
                videoId: "yGfQkq_pKcE",
                duration: "18:00",
                description: "Tools used to build AR applications.",
                quiz: []
            }
        ]
    }

];

export default courses;
