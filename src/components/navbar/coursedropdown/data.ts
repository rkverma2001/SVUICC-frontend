import {DropdownCategory} from "./dropdown.types";



const courseData: DropdownCategory[] = [
  {
    categoryName: "IT / Computer Science (IT/CS)",
    subCategories: [
      {
        subCategoryName: "Apple",
        courses: [
          {
            name: "App Development with Swift - Certified User",
            slug: "/APPLE-SWIFT-CERTIFIED-101",
          },
          {
            name: "App Development with Swift - Associate",
            slug: "/APPLE-SWIFT-ASSOCIATE-102",
          },
        ],
      },
      {
        subCategoryName: "Cisco",
        courses: [
          {
            name: "Cisco Certified Support Technician - Networking",
            slug: "/CISCO-NETWORKING-102",
          },
          {
            name: "Cisco Certified Support Technician - Cybersecurity",
            slug: "/CISCO-CYBERSECURITY-101",
          },
        ],
      },
      {
        subCategoryName: "IT Specialist",
        courses: [
          { name: "Artificial Intelligence", slug: "/ITS-AI-101" },
          { name: "Cloud Computing", slug: "/ITS-CLOUDCOMPUTING-102" },
          {
            name: "Computational Thinking",
            slug: "/ITS-COMPUTATIONALTHINKING-103",
          },
          { name: "Cybersecurity", slug: "/ITS-CYBERSECURITY-104" },
          { name: "Data Analytics", slug: "/ITS-DATAANALYTICS-105" },
          { name: "Databases", slug: "/ITS-DATABASES-106" },
          {
            name: "Device Configuration and Management",
            slug: "/ITS-DEVICECONFIG-107",
          },
          { name: "HTML and CSS", slug: "/ITS-HTMLCSS-108" },
          { name: "HTML5 Application Development", slug: "/ITS-HTML5-109" },
          { name: "Java", slug: "/ITS-JAVA-110" },
          { name: "JavaScript", slug: "/ITS-JAVASCRIPT-111" },
          { name: "Networking", slug: "/ITS-NETWORKING-112" },
          { name: "Network Security", slug: "/ITS-NETWORKSECURITY-113" },
          { name: "Python", slug: "/ITS-PYTHON-114" },
          {
            name: "Software Development",
            slug: "/ITS-SOFTWAREDEVELOPMENT-115",
          },
        ],
      },
      {
        subCategoryName: "Microsoft",
        courses: [
          {
            name: "Microsoft Azure Fundamentals (AZ-900)",
            slug: "/MCF-AZUREFUNDAMENTALS-101",
          },
          {
            name: "Microsoft 365 Fundamentals (MS-900)",
            slug: "/MCF-365FUNDAMENTALS-102",
          },
          {
            name: "Microsoft Azure AI Fundamentals (AI-900)",
            slug: "/MCF-AZUREAIFUNDAMENTALS-103",
          },
          {
            name: "Microsoft Azure Data Fundamentals (DP-900)",
            slug: "/MCF-DATAFUNDAMENTALS-104",
          },
          {
            name: "Microsoft Power Platform Fundamentals (PL-900)",
            slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105",
          },
          {
            name: "Microsoft Dynamics 365 Fundamentals CRM (MB-910)",
            slug: "/MCF-DYNAMICS365FUNDAMENTALSCRM-106",
          },
          {
            name: "Microsoft Dynamics 365 Fundamentals ERP (MB-920)",
            slug: "/MCF-DYNAMICS365FUNDAMENTALSERP-107",
          },
          {
            name: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
            slug: "/MCF-SECURITYCOMPLIANCE-108",
          },
          { name: "MOS - Word", slug: "/MOS-WORD-105" },
          { name: "MOS - Excel", slug: "/MOS-EXCEL-104" },
          { name: "MOS - PowerPoint", slug: "/MOS-POWERPOINT-103" },
          { name: "MOS - Word Expert", slug: "/MOS-WORDEXPERT-102" },
          { name: "MOS - Excel Expert", slug: "/MOS-EXCELEXPERT-101" },
        ],
      },
      {
        subCategoryName: "IBM",
        courses: [
          {
            name: "Artificial Intelligence Fundamentals",
            slug: "courses/aifundamentals",
          },
          {
            name: "Business Analysis Fundamentals",
            slug: "courses/businessanalysisfundamentals",
          },
          {
            name: "Cybersecurity Fundamentals",
            slug: "courses/cybersecurityfundamentals",
          },
          {
            name: "Data Analysis with Python",
            slug: "courses/dataanalysiswithpython",
          },
          { name: "Data Science 101", slug: "courses/datascience101" },
          {
            name: "Data Visualization with Python",
            slug: "courses/datavisualizationwithpython",
          },
          {
            name: "Deep Learning with TensorFlow",
            slug: "courses/deeplearningwithtensorflow",
          },
          {
            name: "IBM DevOps Fundamentals",
            slug: "courses/devopsfundamentals",
          },
          {
            name: "IBM Generative AI Essentials",
            slug: "courses/genaiessentials",
          },
          {
            name: "Introduction to Cloud Computing",
            slug: "courses/cloudcomputing",
          },
          {
            name: "Introduction to Quantum Computing",
            slug: "courses/quantumcomputing",
          },
          {
            name: "Machine Learning with Python",
            slug: "courses/machinelearningusingpython",
          },
          { name: "Scala 101", slug: "courses/scala101" },
          {
            name: "Software Engineering Fundamentals",
            slug: "courses/softwareengineeringfundamentals",
          },
          {
            name: "Prompt Engineering Essentials",
            slug: "courses/promptengineeringessentials",
          },
          {
            name: "SQL and Relational Databases 101",
            slug: "courses/sqlandrelationaldatabase101",
          },
        ],
      },
      {
        subCategoryName: "IC3",
        courses: [
          {
            name: "IC3 Digital Literacy - Global Standard 6 Level 1",
            slug: "/IC3-GS1-101",
          },
          {
            name: "IC3 Digital Literacy - Global Standard 6 Level 2",
            slug: "/IC3-GS2-102",
          },
          {
            name: "IC3 Digital Literacy - Global Standard 6 Level 3",
            slug: "/IC3-GS3-103",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Accounting and Finance",
    subCategories: [
      {
        subCategoryName: "Tally",
        courses: [
          {
            name: "Tally Essential Level 1",
            slug: "courses/tallyessentialslevel1",
          },
          {
            name: "Tally Essential Level 2",
            slug: "courses/tallyessentialslevel2",
          },
          {
            name: "Tally Essential Level 3",
            slug: "courses/tallyessentialslevel3",
          },
          {
            name: "Tally Essential Comprehensive",
            slug: "courses/tallyessentialscomprehensive",
          },
          { name: "GST using TallyPrime", slug: "courses/gstusingtallyprime" },
          { name: "TallyProfessional", slug: "courses/tallyprofessional" },
        ],
      },
      {
        subCategoryName: "Microsoft",
        courses: [
          {
            name: "Microsoft Power Platform Fundamentals (PL-900)",
            slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105",
          },
          { name: "MOS - Excel", slug: "/MOS-EXCEL-104" },
        ],
      },
      {
        subCategoryName: "Intuit QuickBooks",
        courses: [
          {
            name: "Intuit - QuickBooks Certified User Online",
            slug: "/INTUIT-QUICKBOOKS-101",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Business and Management",
    subCategories: [
      {
        subCategoryName: "Microsoft",
        courses: [
          {
            name: "Microsoft Power Platform Fundamentals (PL-900)",
            slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105",
          },
          { name: "MOS - Excel", slug: "/MOS-EXCEL-104" },
        ],
      },
      {
        subCategoryName: "Tally",
        courses: [
          {
            name: "Tally Essential Level 1",
            slug: "courses/tallyessentialslevel1",
          },
          {
            name: "Tally Essential Level 2",
            slug: "courses/tallyessentialslevel2",
          },
          {
            name: "Tally Essential Level 3",
            slug: "courses/tallyessentialslevel3",
          },
          {
            name: "Tally Essential Comprehensive",
            slug: "courses/tallyessentialscomprehensive",
          },
          { name: "GST using TallyPrime", slug: "courses/gstusingtallyprime" },
          { name: "TallyProfessional", slug: "courses/tallyprofessional" },
        ],
      },
      {
        subCategoryName: "Intuit QuickBooks",
        courses: [
          {
            name: "Intuit - QuickBooks Certified User Online",
            slug: "/INTUIT-QUICKBOOKS-101",
          },
        ],
      },
      {
        subCategoryName: "Meta",
        courses: [
          {
            name: "Meta Certified: Digital Marketing Associate",
            slug: "/META-DIGITALMARKETING-101",
          },
        ],
      },
      {
        subCategoryName: "PMI",
        courses: [
          {
            name: "Project Management Ready™",
            slug: "/PMI-PROJECTMANAGEMENTREADY-101",
          },
        ],
      },
      {
        subCategoryName: "Critical Career Skills",
        courses: [
          { name: "Professional Communication", slug: "/CCS-PROFCOM-102" },
        ],
      },
      {
        subCategoryName: "ESB",
        courses: [
          {
            name: "Entrepreneurship Small Business",
            slug: "/ESB-ENTREPRENEURSHIPSMALLBUSINESS-101",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Arts and Design",
    subCategories: [
      {
        subCategoryName: "Adobe",
        courses: [
          { name: "Photoshop", slug: "/ADOBE-PHOTO-102" },
          { name: "Illustrator", slug: "/ADOBE-ILLUSTRATOR-108" },
          { name: "Indesign", slug: "/ADOBE-INDESIGN-107" },
          { name: "After Effects", slug: "/ADOBE-AFTER-101" },
          { name: "Premier Pro", slug: "/ADOBE-PREMIER-104" },
          { name: "Animate", slug: "/ADOBE-ANIMATE-105" },
          { name: "Dreamweaver", slug: "/ADOBE-DREAMWEAVER-109" },
        ],
      },
      {
        subCategoryName: "Meta",
        courses: [
          {
            name: "Meta Certified: Digital Marketing Associate",
            slug: "/META-DIGITALMARKETING-101",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Civil/Mechanical/Electronics",
    subCategories: [
      {
        subCategoryName: "Autodesk",
        courses: [
          { name: "Autocad", slug: "/AUTODESK-AUTOCAD-101" },
          { name: "Fusion 360", slug: "/AUTODESK-FUSION-103" },
          { name: "Inventor", slug: "/AUTODESK-INVENTOR-102" },
          { name: "Revit Architecture", slug: "/AUTODESK-REVIT-106" },
          { name: "3ds Max", slug: "/AUTODESK-3DSMAX-104" },
          { name: "Maya", slug: "/AUTODESK-MAYA-105" },
        ],
      },
      {
        subCategoryName: "Adobe",
        courses: [
          { name: "Photoshop", slug: "/ADOBE-PHOTO-102" },
          { name: "Illustrator", slug: "/ADOBE-ILLUSTRATOR-108" },
          { name: "Indesign", slug: "/ADOBE-INDESIGN-107" },
          { name: "After Effects", slug: "/ADOBE-AFTER-101" },
          { name: "Premier Pro", slug: "/ADOBE-PREMIER-104" },
          { name: "Animate", slug: "/ADOBE-ANIMATE-105" },
          { name: "Dreamweaver", slug: "/ADOBE-DREAMWEAVER-109" },
        ],
      },
    ],
  },
  {
    categoryName: "Gaming and Animation",
    subCategories: [
      {
        subCategoryName: "Apple",
        courses: [
          {
            name: "App Development with Swift - Certified User",
            slug: "/APPLE-SWIFT-CERTIFIED-101",
          },
          {
            name: "App Development with Swift - Associate",
            slug: "/APPLE-SWIFT-ASSOCIATE-102",
          },
        ],
      },
      {
        subCategoryName: "Adobe",
        courses: [
          { name: "Photoshop", slug: "/ADOBE-PHOTO-102" },
          { name: "Illustrator", slug: "/ADOBE-ILLUSTRATOR-108" },
          { name: "Indesign", slug: "/ADOBE-INDESIGN-107" },
          { name: "After Effects", slug: "/ADOBE-AFTER-101" },
          { name: "Premier Pro", slug: "/ADOBE-PREMIER-104" },
          { name: "Animate", slug: "/ADOBE-ANIMATE-105" },
          { name: "Dreamweaver", slug: "/ADOBE-DREAMWEAVER-109" },
        ],
      },
      {
        subCategoryName: "Unity Certified User",
        courses: [
          { name: "Programmer Certification", slug: "/UNITY-PROGRAMMER-101" },
          {
            name: "VR Developer Certification",
            slug: "/UNITY-VRDEVELOPER-102",
          },
          { name: "Artist Certification", slug: "/UNITY-ARTIST-103" },
        ],
      },
    ],
  },
  {
    categoryName: "Educator",
    subCategories: [
      {
        subCategoryName: "Microsoft Certified Educator",
        courses: [
          {
            name: "Technology Literacy for Educators (62-193)",
            slug: "/MCE-CERTIFIEDEDUCATOR-101",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Language",
    subCategories: [
      {
        subCategoryName: "Critical Career Skills",
        courses: [
          {
            name: "Professional Communication",
            slug: "/CCS-PROFCOM-102",
          },
        ],
      },
    ],
  },
];

export default courseData;
