const courses = [
    {
        id: 1,
        title: "Automata Theory",
        description: "Study of abstract machines and computational problems. Covers finite automata, regular expressions, context-free grammars, and Turing machines.",
        category: "cs",
        progress: 75,
        status: "in-progress",
        isAdded: true,
        thumbnail: "/thumbnails/automata.jpg",
        lessons: [
            {
                id: 101,
                title: "Finite Automata Basics",
                status: "not-started",
                videoId: "dQw4w9WgXcQ",
                duration: "12:45",
                description: "Introduction to DFA and NFA concepts",
                quiz: [
                    {
                        question: "What does DFA stand for?",
                        options: ["Determined Finite Automaton", "Deterministic Finite Automaton", "Digital Finite Analysis"],
                        answer: 1
                    },
                    {
                        question: "Which of the following is true about NFAs?",
                        options: ["They can have multiple transitions for the same input", "They are more powerful than DFAs", "They require backtracking"],
                        answer: 0
                    }
                ]
            },
            {
                id: 102,
                title: "Regular Expressions",
                status: "not-started",
                videoId: "Wpz0bKk0vzE",
                duration: "10:30",
                description: "Pattern matching using formal languages",
                quiz: [
                    {
                        question: "What does the regex pattern 'a+' match?",
                        options: ["Zero or more 'a's", "One or more 'a's", "Exactly one 'a'"],
                        answer: 1
                    }
                ]
            },
            {
                id: 103,
                title: "Context-Free Grammars",
                status: "not-started",
                videoId: "L_MUlSHYTKc",
                duration: "14:20",
                description: "Understanding CFGs and parse trees",
                quiz: []
            }
        ]
    },
    {
        id: 2,
        title: "Machine Learning Fundamentals",
        description: "Introduction to machine learning algorithms, supervised and unsupervised learning, and practical applications in data science.",
        category: "ai",
        progress: 45,
        status: "in-progress",
        isAdded: true,
        thumbnail: "/thumbnails/ml.jpg",
        lessons: [
            {
                id: 201,
                title: "Introduction to ML",
                status: "not-started",
                videoId: "ukzFI9rgwfU",
                duration: "11:00",
                description: "Overview of machine learning concepts",
                quiz: [
                    {
                        question: "Which type of learning uses labeled data?",
                        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning"],
                        answer: 1
                    }
                ]
            },
            {
                id: 202,
                title: "Linear Regression",
                status: "not-started",
                videoId: "nk2CQITm_eo",
                duration: "13:15",
                description: "Understanding linear relationships in data",
                quiz: []
            }
        ]
    },
    {
        id: 3,
        title: "Web Development with React",
        description: "Modern web development using React.js, including hooks, state management, and component architecture.",
        category: "web",
        progress: 90,
        status: "in-progress",
        isAdded: true,
        thumbnail: "/thumbnails/react.jpg",
        lessons: [
            {
                id: 301,
                title: "React Basics",
                status: "not-started",
                videoId: "SqcY0GlETPk",
                duration: "15:00",
                description: "Components, JSX, and props",
                quiz: [
                    {
                        question: "What is JSX?",
                        options: ["JavaScript XML", "Java Syntax Extension", "JSON XML"],
                        answer: 0
                    }
                ]
            },
            {
                id: 302,
                title: "React Hooks",
                status: "not-started",
                videoId: "TNhaISOUy6Q",
                duration: "16:20",
                description: "useState, useEffect, and custom hooks",
                quiz: [
                    {
                        question: "Which hook is used for side effects?",
                        options: ["useState", "useEffect", "useContext"],
                        answer: 1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Database Design & SQL",
        description: "Comprehensive guide to database design principles, normalization, and advanced SQL queries for data management.",
        category: "database",
        progress: 100,
        status: "completed",
        isAdded: true,
        thumbnail: "/thumbnails/sql.jpg",
        lessons: [
            {
                id: 401,
                title: "Database Fundamentals",
                status: "not-started",
                videoId: "HXV3zeQKqGY",
                duration: "13:40",
                description: "ER diagrams and normalization",
                quiz: [
                    {
                        question: "What is the primary key?",
                        options: ["A unique identifier for records", "The first column in a table", "A foreign key reference"],
                        answer: 0
                    }
                ]
            },
            {
                id: 402,
                title: "Advanced SQL",
                status: "not-started",
                videoId: "M-55BmjOuXY",
                duration: "17:10",
                description: "Joins, subqueries, and optimization",
                quiz: [
                    {
                        question: "Which JOIN returns all records from both tables?",
                        options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN"],
                        answer: 2
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Introduction to Cloud Computing",
        description: "Fundamentals of cloud services, deployment models, and cloud architecture using AWS, Azure, and Google Cloud.",
        category: "cloud",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/cloud.jpg",
        lessons: [
            {
                id: 501,
                title: "Cloud Computing Basics",
                status: "not-started",
                videoId: "M988_fsOSWo",
                duration: "09:50",
                description: "IaaS, PaaS, and SaaS models",
                quiz: [
                    {
                        question: "What does IaaS stand for?",
                        options: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service"],
                        answer: 1
                    }
                ]
            },
            {
                id: 502,
                title: "AWS Fundamentals",
                status: "not-started",
                videoId: "ulprqHHWlng",
                duration: "12:30",
                description: "EC2, S3, and basic AWS services",
                quiz: []
            }
        ]
    },
    {
        id: 6,
        title: "Data Structures & Algorithms",
        description: "Essential data structures and algorithms for competitive programming and technical interviews.",
        category: "cs",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/dsa.jpg",
        lessons: [
            {
                id: 601,
                title: "Arrays and Strings",
                status: "not-started",
                videoId: "pkYVOmU3MgA",
                duration: "10:10",
                description: "Basic data structures and operations",
                quiz: [
                    {
                        question: "What is the time complexity of accessing an array element?",
                        options: ["O(1)", "O(n)", "O(log n)"],
                        answer: 0
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Cybersecurity Fundamentals",
        description: "Introduction to cybersecurity principles, threat analysis, and security best practices for modern applications.",
        category: "security",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/security.jpg",
        lessons: [
            {
                id: 701,
                title: "Security Basics",
                status: "not-started",
                videoId: "inWWhr5tnEA",
                duration: "08:55",
                description: "CIA triad and common threats",
                quiz: [
                    {
                        question: "What does CIA stand for in cybersecurity?",
                        options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Computer Internet Access"],
                        answer: 1
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications using React Native and Flutter frameworks.",
        category: "mobile",
        progress: 0,
        status: "not-started",
        isAdded: false,
        thumbnail: "/thumbnails/mobile.jpg",
        lessons: [
            {
                id: 801,
                title: "React Native Basics",
                status: "not-started",
                videoId: "0-S5a0eXPoc",
                duration: "11:25",
                description: "Setting up and basic components",
                quiz: []
            }
        ]
    }
];

export default courses;