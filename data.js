const appData = {
    subjects: {
        accountancy: {
            name: "Accountancy",
            icon: "ph-calculator",
            pyq: [
                { year: "2023", link: "assets/pyq/accountancy/67_1_1_Accountancy_cl12.pdf", title: "Board Paper Set 1 (2023)" },
                { year: "2023", link: "assets/pyq/accountancy/67_2_1_Accountancy_cl12.pdf", title: "Board Paper Set 2 (2023)" },
                { year: "2022", link: "assets/pyq/accountancy/67-1-1 Accountancy.pdf", title: "Board Paper 2022" }
            ],
            mocktest: [
                { 
                    title: "Live Interactive Mock: Fundamentals", 
                    desc: "Interactive 2025 Pattern Quiz", 
                    time: "10 Mins", 
                    id: "quiz_acc_1",
                    questions: [
                        { q: "In the absence of a Partnership Deed, what is the rate of interest on a partner's loan to the firm?", options: ["6% p.a.", "9% p.a.", "12% p.a.", "No interest"], answer: 0 },
                        { q: "Goodwill is an ____________ asset.", options: ["Tangible", "Intangible", "Fictitious", "Current"], answer: 1 },
                        { q: "Securities Premium Reserve can be used for:", options: ["Paying dividends", "Issuing fully paid bonus shares", "Writing off bad debts", "Paying partner salary"], answer: 1 }
                    ]
                },
                { title: "Partnership & Companies Mock", desc: "Sectional Test PDF", time: "1.5 Hrs", id: "acc_mock_2" }
            ],
            quizzes: [
                { title: "Partnership Fundamentals", qcount: 10 },
                { title: "Company Accounts - Issue of Shares", qcount: 15 }
            ],
            youtube: [
                { title: "Fundamentals of Partnership - One Shot", channel: "Rajat Arora", videoId: "5j6wK2vN28Y" },
                { title: "Issue of Shares | Full Chapter Revision", channel: "Sunil Panda", videoId: "mX4LpS_o6-o" },
                { title: "Cash Flow Statement (Masterclass)", channel: "Commerce Wallah", videoId: "P_zKqM8mUVE" }
            ]
        },
        business_studies: {
            name: "Business Studies",
            icon: "ph-briefcase",
            pyq: [
                { year: "2023", link: "assets/pyq/business_studies/66_1_1_Business Studies.pdf", title: "Board Paper Set 1 (2023)" },
                { year: "2023", link: "assets/pyq/business_studies/66_2_1_Business Studies.pdf", title: "Board Paper Set 2 (2023)" },
                { year: "2022", link: "assets/pyq/business_studies/66-1-1 Business Studies.pdf", title: "Board Paper 2022" }
            ],
            mocktest: [
                { title: "Full Syllabus Mock 1", desc: "Includes Case Studies (2025 Pattern)", time: "3 Hrs", id: "bs_mock_1" }
            ],
            quizzes: [
                { title: "Nature and Significance of Management", qcount: 10 },
                { title: "Marketing Management", qcount: 20 }
            ],
            youtube: [
                { title: "Nature & Significance of Management", channel: "Rajat Arora", videoId: "zXQ5jU4-P1Q" },
                { title: "Marketing Management | 100% Board Guaranteed", channel: "Sunil Panda", videoId: "vLg4y_X33U0" },
                { title: "Financial Management - One Shot", channel: "Adda247 Commerce", videoId: "kL_K8D1_B_w" }
            ]
        },
        economics: {
            name: "Economics",
            icon: "ph-chart-line-up",
            pyq: [
                { year: "2023", link: "assets/pyq/economics/58_3_3_Economics.pdf", title: "Board Paper Set 3 (2023)" },
                { year: "2023", link: "assets/pyq/economics/58_4_1_Economics.pdf", title: "Board Paper Set 4 (2023)" },
                { year: "2023", link: "assets/pyq/economics/58_5_1_Economics.pdf", title: "Board Paper Set 5 (2023)" }
            ],
            mocktest: [
                { title: "Macroeconomics Full Test", desc: "Long and Short Answer Type", time: "2 Hrs", id: "eco_mock_1" },
                { title: "Indian Economic Development Test", desc: "Data Interpretation Focus", time: "1.5 Hrs", id: "eco_mock_2" }
            ],
            quizzes: [
                { title: "National Income", qcount: 15 },
                { title: "Indian Economic Development", qcount: 15 }
            ],
            youtube: [
                { title: "National Income - Detailed One Shot", channel: "Sunil Panda (SPCC)", videoId: "bO2tH-P9K1I" },
                { title: "Aggregate Demand & Related Concepts", channel: "Rajat Arora", videoId: "kL_K8D1_B_w" }
            ]
        },
        english_core: {
            name: "English Core",
            icon: "ph-book-open-text",
            pyq: [
                { year: "2023", link: "assets/pyq/english/1_1_1_English Core.pdf", title: "Board Paper Set 1 (2023)" },
                { year: "2023", link: "assets/pyq/english/1_2_1_English Core.pdf", title: "Board Paper Set 2 (2023)" },
                { year: "2023", link: "assets/pyq/english/1_3_1_English Core.pdf", title: "Board Paper Set 3 (2023)" }
            ],
            mocktest: [
                { title: "Complete English Core Board Mock", desc: "Reading, Writing & Literature sections", time: "3 Hrs", id: "eng_mock_1" }
            ],
            quizzes: [
                { title: "Flamingo - Prose & Poetry", qcount: 20 },
                { title: "Vistas - Supplementary", qcount: 15 }
            ],
            youtube: [
                { title: "The Last Lesson | Full Explanation", channel: "Shipra Mishra", videoId: "bY3Q-xM9N8w" },
                { title: "My Mother at Sixty Six | Poem", channel: "Dear Sir", videoId: "Y3eYJ-Fk2hE" }
            ]
        }
    }
};
