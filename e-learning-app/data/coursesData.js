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
    }
];

export default courses;