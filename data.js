const appData = {
    subjects: {
        accountancy: {
            name: "Accountancy",
            icon: "ph-calculator",
            pyq: [
                { year: "2023", link: "assets/pyq/accountancy/67_1_1_Accountancy_cl12.pdf", title: "Board Paper Set 1 (2023)" },
                { year: "2023", link: "assets/pyq/accountancy/67_2_1_Accountancy_cl12.pdf", title: "Board Paper Set 2 (2023)" }
            ],
            mocktest: [
                { 
                    title: "Mega Mock: Partnership & Companies", 
                    desc: "Full Interactive Quiz", 
                    time: "15 Mins", 
                    id: "quiz_acc_1",
                    questions: [
                        { q: "In the absence of a Partnership Deed, interest on partner's loan is allowed at:", options: ["6% p.a.", "9% p.a.", "12% p.a.", "No interest"], answer: 0 },
                        { q: "Goodwill is an ____________ asset.", options: ["Tangible", "Intangible", "Fictitious", "Current"], answer: 1 },
                        { q: "Securities Premium Reserve can be used for:", options: ["Paying dividends", "Issuing bonus shares", "Writing off bad debts", "Partner salary"], answer: 1 },
                        { q: "A company can issue its shares at a discount under Section:", options: ["52", "53", "54 (Sweat Equity)", "78"], answer: 2 },
                        { q: "Which of the following is not a cash inflow?", options: ["Sale of fixed asset", "Issue of shares", "Cash sales", "Purchase of machinery"], answer: 3 },
                        { q: "Current ratio is 2.5:1, Current liabilities are 40,000. What are Current Assets?", options: ["1,00,000", "80,000", "20,000", "1,20,000"], answer: 0 },
                        { q: "Interest on capital is generally provided on:", options: ["Opening Capital", "Closing Capital", "Average Capital", "None of these"], answer: 0 }
                    ]
                }
            ],
            quizzes: [
                { 
                    title: "Partnership Fundamentals", 
                    qcount: 5,
                    id: "quiz_acc_fund",
                    questions: [
                        { q: "Partnership requires minimum how many persons?", options: ["1", "2", "3", "50"], answer: 1 },
                        { q: "Maximum number of partners allowed in banking business (historically)?", options: ["10", "20", "50", "100"], answer: 0 },
                        { q: "Current accounts of partners are maintained under:", options: ["Fluctuating Capital Method", "Fixed Capital Method", "Both", "None"], answer: 1 },
                        { q: "Rent paid to a partner is a charge against:", options: ["Profits", "Appropriation", "Capital", "Goodwill"], answer: 0 },
                        { q: "Drawings are generally charged interest for:", options: ["6 months average", "12 months", "No interest", "1 month"], answer: 0 }
                    ]
                }
            ],
            youtube: [
                { title: "Fundamentals of Partnership", channel: "Rajat Arora", videoId: "5j6wK2vN28Y" },
                { title: "Issue of Shares", channel: "Sunil Panda", videoId: "mX4LpS_o6-o" },
                { title: "Cash Flow Statement", channel: "Commerce Wallah", videoId: "P_zKqM8mUVE" }
            ]
        },
        business_studies: {
            name: "Business Studies",
            icon: "ph-briefcase",
            pyq: [
                { year: "2023", link: "assets/pyq/business_studies/66_1_1_Business Studies.pdf", title: "Board Paper Set 1 (2023)" }
            ],
            mocktest: [
                { 
                    title: "Management & Marketing Mock", 
                    desc: "Includes Case Studies", 
                    time: "15 Mins", 
                    id: "quiz_bs_1",
                    questions: [
                        { q: "Management is:", options: ["An Art", "A Science", "Both Art and Science", "Neither"], answer: 2 },
                        { q: "Which level of management determines the objectives of the business?", options: ["Top", "Middle", "Lower", "Supervisory"], answer: 0 },
                        { q: "Marketing Mix does not include:", options: ["Product", "Price", "Production", "Promotion"], answer: 2 },
                        { q: "Capital structure means the proportion of:", options: ["Debt and Equity", "Current Assets and Liabilities", "Fixed Assets", "Shares"], answer: 0 },
                        { q: "SEBI was established in:", options: ["1988", "1992", "1990", "1985"], answer: 1 }
                    ]
                }
            ],
            quizzes: [
                { 
                    title: "Principles of Management", 
                    qcount: 4,
                    id: "quiz_bs_prin",
                    questions: [
                        { q: "Father of Scientific Management?", options: ["Henri Fayol", "F.W. Taylor", "Peter Drucker", "Elton Mayo"], answer: 1 },
                        { q: "Esprit De Corps means:", options: ["Union is strength", "Order", "Equity", "Division of work"], answer: 0 },
                        { q: "Scalar chain relates to:", options: ["Communication", "Production", "Marketing", "Finance"], answer: 0 },
                        { q: "Gang Plank permits direct communication between:", options: ["Same level employees", "Top and Bottom", "Customers", "Suppliers"], answer: 0 }
                    ]
                }
            ],
            youtube: [
                { title: "Nature of Management", channel: "Rajat Arora", videoId: "zXQ5jU4-P1Q" },
                { title: "Marketing Management", channel: "Sunil Panda", videoId: "vLg4y_X33U0" }
            ]
        },
        economics: {
            name: "Economics",
            icon: "ph-chart-line-up",
            pyq: [
                { year: "2023", link: "assets/pyq/economics/58_3_3_Economics.pdf", title: "Board Paper Set 3 (2023)" }
            ],
            mocktest: [
                { 
                    title: "Macroeconomics Full Test", 
                    desc: "Interactive Concept Quiz", 
                    time: "15 Mins", 
                    id: "quiz_eco_1",
                    questions: [
                        { q: "Which of the following is a stock variable?", options: ["Income", "Investment", "Capital", "Depreciation"], answer: 2 },
                        { q: "Value Added equals:", options: ["Value of output - Intermediate consumption", "Sales - Purchases", "Profit", "Income"], answer: 0 },
                        { q: "Central Bank of India is:", options: ["SBI", "RBI", "PNB", "BOI"], answer: 1 },
                        { q: "MPC + MPS = ?", options: ["0", "1", "Infinity", "Depends on income"], answer: 1 }
                    ]
                }
            ],
            quizzes: [
                { 
                    title: "Indian Economy", 
                    qcount: 4,
                    id: "quiz_eco_ied",
                    questions: [
                        { q: "TISCO was incorporated in:", options: ["1907", "1853", "1947", "1950"], answer: 0 },
                        { q: "First five-year plan started in:", options: ["1947", "1951", "1956", "1960"], answer: 1 },
                        { q: "Green Revolution mainly benefited which crops?", options: ["Wheat and Rice", "Cotton", "Jute", "Sugarcane"], answer: 0 },
                        { q: "NITI Aayog replaced:", options: ["Planning Commission", "Finance Commission", "RBI", "SEBI"], answer: 0 }
                    ]
                }
            ],
            youtube: [
                { title: "National Income", channel: "Sunil Panda (SPCC)", videoId: "bO2tH-P9K1I" },
                { title: "Aggregate Demand", channel: "Rajat Arora", videoId: "kL_K8D1_B_w" }
            ]
        },
        english_core: {
            name: "English Core",
            icon: "ph-book-open-text",
            pyq: [
                { year: "2023", link: "assets/pyq/english/1_1_1_English Core.pdf", title: "Board Paper Set 1 (2023)" }
            ],
            mocktest: [
                { 
                    title: "Literature Interactive Quiz", 
                    desc: "MCQs from Flamingo & Vistas", 
                    time: "10 Mins", 
                    id: "quiz_eng_1",
                    questions: [
                        { q: "Who is the author of 'The Last Lesson'?", options: ["Alphonse Daudet", "Anees Jung", "Louis Fischer", "William Douglas"], answer: 0 },
                        { q: "What was M. Hamel teaching on his last day?", options: ["German", "French", "History", "Math"], answer: 1 },
                        { q: "Who is the poet of 'My Mother at Sixty-Six'?", options: ["Kamala Das", "Pablo Neruda", "John Keats", "Robert Frost"], answer: 0 },
                        { q: "What does Saheb look for in the garbage dumps?", options: ["Silver", "Gold", "Toys", "Food"], answer: 1 }
                    ]
                }
            ],
            quizzes: [
                { 
                    title: "Writing Skills Format", 
                    qcount: 3,
                    id: "quiz_eng_write",
                    questions: [
                        { q: "Word limit for a Notice is usually:", options: ["50 words", "100 words", "150 words", "200 words"], answer: 0 },
                        { q: "Formal Invitation is written in which person?", options: ["First person", "Second person", "Third person", "Any"], answer: 2 },
                        { q: "Article writing requires a:", options: ["Heading/Title", "Date", "Salutation", "Enclosure"], answer: 0 }
                    ]
                }
            ],
            youtube: [
                { title: "The Last Lesson", channel: "Shipra Mishra", videoId: "bY3Q-xM9N8w" },
                { title: "My Mother at Sixty Six", channel: "Dear Sir", videoId: "Y3eYJ-Fk2hE" }
            ]
        }
    }
};
