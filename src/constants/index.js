export const PAGES = {
    LANDING: "LANDING",
    CODING: "Coding",
    ADVANCE_DSA: "Advance DSA",
    THEORY: "Theory",
    RESUME: "Resume",
    PUZZLES: "Puzzles",
    GMAT: "GMAT"
}

export const HEADERS = {
    [PAGES.LANDING]: "Interview Guide",
    [PAGES.CODING]: "Coding",
    [PAGES.ADVANCE_DSA]: "Advance DSA",
    [PAGES.THEORY]: "Theory",
    [PAGES.RESUME]: "Resume",
    [PAGES.PUZZLES]: "Puzzles",
    [PAGES.GMAT]: "GMAT"
}

export const FIELDS = {
    page: "page"
}

export const basePath = "/interview-guide"

export const GMAT_TOPICS = {
    DATA_INSIGHTS: {
        name: "Data Insights",
        img: "https://e-gmat.com/blogs/wp-content/uploads/2023/08/blog-image-2.png"
    },
    VERBAL: {
        name: "Verbal Reasoning",
        img: "https://e-gmat.com/blogs/wp-content/uploads/2022/10/26.2_DM_1.jpg",
        subtopics: [
            {
                name: "Reading Comprehension",
                docLink: "https://docs.google.com/document/d/1w6jITPQaMmGKCyY3Uhloue5J3_e3WDGXLDglJFFtWuM/preview"
            },
            {
                name: "Critical Reasoning",
                docLink: ""
            }
        ]
    },
    QUANT: {
        name: "Quantitative Reasoning",
        img: ""
    }
}