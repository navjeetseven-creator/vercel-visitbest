export const pages = [
  {
    key: "wam",
    slug: "wam-to-gpa-calculator",
    title: "WAM to GPA Calculator",
    meta: "Estimate a 7-point GPA from your WAM. Explore worked examples, the conversion formula, reference tables and FAQs. Understand why university results can differ.",
    lead: "Turn your WAM into a 7-point GPA estimate. See the full calculation and understand what the result can tell you before comparing academic scores.",
    input: "WAM",
    output: "GPA",
    limit: 100,
    outputLimit: 7,
    sample: 72,
    quick: [60, 72, 85],
    formula: "Estimated GPA = WAM ÷ 100 × 7",
    overviewTitle: "What does a WAM to GPA calculator do?",
    overview: "It places a Weighted Average Mark on a 7-point scale using a straight-line calculation. A WAM of 72 becomes an estimated GPA of 5.04 under this assumption. The tool is useful for checking this arithmetic and comparing values within the same model.",
    inputNote: "Enter the WAM from your academic record. Use a number out of 100 rather than a single subject’s grade or an unweighted average.",
    modelNote: "This model assigns 0 WAM to 0 GPA and 100 WAM to 7 GPA. Each additional WAM point adds 0.07 estimated GPA points. That relationship belongs to this calculator’s model. It is not an institutional grading rule.",
    steps: [
      ["Find your WAM", "Use the weighted mark on your academic record. Keep its decimal places."],
      ["Enter a value out of 100", "Type your WAM or select an example. The result updates as the value changes."],
      ["Review the estimate", "Read the GPA out of 7 together with the calculation shown underneath."],
      ["Copy or compare", "Copy the labeled estimate. Select Calculate to keep the check in this page session."]
    ],
    stories: [
      [72, "Check a current WAM", "72 ÷ 100 = 0.72. Multiplying 0.72 by 7 gives an estimate of 5.04."],
      [80, "Compare a higher WAM", "80 produces 5.60 in this model. Compared with 72 WAM, the estimated GPA increases by 0.56."],
      [76.4, "Keep decimal marks", "76.4 produces 5.348 before rounding. The displayed estimate is 5.35."]
    ],
    table: [0, 40, 50, 60, 65, 70, 72, 75, 80, 85, 90, 100],
    exampleTitle: "The same WAM can lead to different GPAs",
    exampleNote: "Illustration only. Assume two equally weighted subjects with the grade-point values shown. These are hypothetical mappings rather than a named university’s policy.",
    exampleHeaders: ["Student", "Subject marks", "Assumed grade points", "WAM", "GPA"],
    exampleRows: [
      ["A", "60 and 80", "4 and 6", "70", "5.00"],
      ["B", "50 and 90", "4 and 7", "70", "5.50"]
    ],
    exampleConclusion: "Both students average 70 marks. Their assumed grade points average to different GPAs. An overall WAM alone cannot identify which subject-level result applies.",
    faq: [
      ["What is a 75 WAM as a GPA?", "The linear estimate is 5.25 out of 7. The working is 75 ÷ 100 × 7 = 5.25. An official GPA may differ."],
      ["What is an 80 WAM as a GPA?", "This tool returns 5.60 out of 7. It does not assign an official distinction or high-distinction classification."],
      ["Can this calculator produce my official GPA?", "No. It does not receive your individual subject grades or credit weights. Use the method required by your university or the institution receiving your application."],
      ["Can two students have the same WAM but different GPAs?", "Yes under a grade-band system. Marks can fall into different bands even when their weighted average is the same. The worked comparison above illustrates this."],
      ["Does it support a 4-point GPA scale?", "No. This page deliberately uses a 7-point scale. Do not read 5.25 out of 7 as a value on a 4-point scale."],
      ["Can I enter decimal WAM values?", "Yes. Enter the available decimal places. The arithmetic uses the entered value and formats the final result to two decimal places."],
      ["Does the calculator save my marks?", "Entered values and recent checks remain in this page’s memory. This calculator does not send them to a calculation server. Reloading the page clears the checks."],
      ["Can I convert the estimate back to WAM?", "The reverse calculator uses the inverse linear formula. Rounding a GPA estimate first can introduce a small difference when converting back."]
    ]
  },
  {
    key: "gpa",
    slug: "gpa-to-wam-calculator",
    title: "GPA to WAM Calculator",
    meta: "Estimate WAM from a 7-point GPA. Check the formula, worked examples, conversion table and FAQs. Learn why a GPA cannot reveal your exact university WAM result.",
    lead: "Estimate a WAM out of 100 from a GPA out of 7. Follow the calculation and see why a converted estimate can differ from the marks on an academic record.",
    input: "GPA",
    output: "WAM",
    limit: 7,
    outputLimit: 100,
    sample: 5.6,
    quick: [4.2, 5.6, 6.3],
    formula: "Estimated WAM = GPA ÷ 7 × 100",
    overviewTitle: "What does a GPA to WAM calculator do?",
    overview: "It expresses a GPA on a 0–100 scale using a straight-line assumption. A 5.6 GPA out of 7 becomes an estimated WAM of 80. The calculation rescales the number. It does not reconstruct the subject marks behind the GPA.",
    inputNote: "Confirm that the original GPA is out of 7. A 3.5 GPA out of 4 is a different input and cannot be entered here as though it were out of 7.",
    modelNote: "This model assigns 0 GPA to 0 WAM and 7 GPA to 100 WAM. A 0.1 GPA increase adds about 1.43 estimated WAM points. These are changes within the linear model rather than guaranteed changes in official marks.",
    steps: [
      ["Check the original scale", "Confirm that the GPA on the academic record is measured out of 7."],
      ["Enter the GPA", "Use the available decimal places. The accepted range is 0 through 7."],
      ["Read the WAM estimate", "Review the value out of 100 and the exact arithmetic used to produce it."],
      ["Keep the assumption", "Copy the result with its estimate label. Select Calculate to save the check for this session."]
    ],
    stories: [
      [5.6, "Convert a 5.6 GPA", "5.6 ÷ 7 = 0.8. Multiplying 0.8 by 100 gives an estimated WAM of 80.00."],
      [6, "Understand a repeating decimal", "6 ÷ 7 × 100 = 85.714285… . The calculator displays 85.71 after rounding."],
      [4.2, "Check a lower value", "4.2 ÷ 7 × 100 gives 60.00. This describes the linear estimate rather than an official pass classification."]
    ],
    table: [0, 2, 3, 3.5, 4, 4.5, 5, 5.6, 6, 6.3, 6.5, 7],
    exampleTitle: "A maximum GPA does not necessarily mean 100 WAM",
    exampleNote: "Illustration only. Assume that marks from 85 through 100 earn 7 grade points and that both subjects have equal weight.",
    exampleHeaders: ["Student", "Subject marks", "Assumed grade points", "GPA", "WAM"],
    exampleRows: [
      ["A", "85 and 87", "7 and 7", "7.00", "86"],
      ["B", "95 and 97", "7 and 7", "7.00", "96"]
    ],
    exampleConclusion: "Both students have a 7.00 GPA under the assumed rule. Their WAMs differ by 10 marks. A GPA loses detail about the numerical marks within each grade band.",
    faq: [
      ["What is a 5.6 GPA as a WAM?", "For a GPA measured out of 7, the linear estimate is 80.00. The working is 5.6 ÷ 7 × 100 = 80."],
      ["What is a 6 GPA as a WAM?", "The estimate is 85.71. The unrounded result is approximately 85.714285. The display uses two decimal places."],
      ["Does a 7 GPA mean a 100 WAM?", "Only in this linear model. A maximum official GPA can be earned by different marks within a high grade band. The worked comparison above shows why."],
      ["Can I enter a GPA from a 4-point scale?", "No. A value such as 3.5 must refer to a 7-point scale on this page. Entering 3.5 out of 4 would produce a misleading comparison."],
      ["Why can the exact WAM not be recovered?", "A grade-point value can represent a range of subject marks. Once those marks are summarized as GPA, the original marks are no longer available to reconstruct a unique WAM."],
      ["Can this estimate be used for admission or a scholarship?", "Use the figure or calculation required by the receiving institution. This estimator does not assess eligibility or replace an academic record."],
      ["Are recent calculations kept after I leave?", "No persistent storage is used by this calculator. Recent checks are held in page memory and disappear when the page is reloaded."],
      ["Why does converting back sometimes give a small difference?", "The formulas are inverses. A difference can appear if a displayed result is rounded before it becomes the input to the reverse calculation."]
    ]
  },
  {
    key: "ssc-age",
    kind: "age",
    slug: "ssc-age-calculator",
    title: "SSC Age Calculator",
    meta: "Check your exact age as on the SSC cut-off date and your eligibility for SSC CGL, CHSL, GD Constable and MTS. Official age limits and category relaxations from the SSC notices.",
    lead: "Enter your date of birth and check your exact age on the cut-off date printed in the official SSC notice. Then see whether you meet the age limit for CGL, CHSL, GD Constable or MTS, with your category relaxation applied.",
    exams: [
      {
        id: "cgl",
        name: "SSC CGL 2026",
        short: "CGL",
        notice: "Combined Graduate Level Examination, 2026 — Notice of Examination, 21 May 2026 (F. No. HQ-C11018/1/2026-C-1)",
        cutoff: "2026-08-01",
        cutoffLabel: "1 August 2026",
        bands: [
          { id: "cgl-27", label: "18–27 years", min: 18, max: 27, posts: "Auditor, Accountant, Tax Assistant, Postal Assistant, UDC" },
          { id: "cgl-30", label: "18–30 years", min: 18, max: 30, posts: "Assistant Audit Officer, Inspector (Income Tax, Central Excise), Assistant Enforcement Officer" },
          { id: "cgl-20-30", label: "20–30 years", min: 20, max: 30, posts: "Assistant Section Officer (CSS, Railways, MEA), Sub-Inspector (CBI)" },
          { id: "cgl-32", label: "18–32 years", min: 18, max: 32, posts: "Junior Statistical Officer" }
        ],
        categories: "standard"
      },
      {
        id: "chsl",
        name: "SSC CHSL 2026",
        short: "CHSL",
        notice: "Combined Higher Secondary (10+2) Level Examination, 2026 — Notice, 7 September 2026 (F. No. HQ-C1102/5/2026-C-1)",
        cutoff: "2026-08-01",
        cutoffLabel: "1 August 2026",
        bands: [
          { id: "chsl-27", label: "18–27 years", min: 18, max: 27, posts: "LDC / JSA, Data Entry Operator, DEO Grade A — all posts" }
        ],
        categories: "standard"
      },
      {
        id: "gd",
        name: "SSC GD Constable 2026",
        short: "GD",
        notice: "Constable (GD) in CAPFs and SSF, and Rifleman (GD) in Assam Rifles Examination, 2026 — Notice, 1 December 2025 (F. No. HQ-C-3007/10/2025-C-3)",
        cutoff: "2026-01-01",
        cutoffLabel: "1 January 2026",
        bands: [
          { id: "gd-23", label: "18–23 years", min: 18, max: 23, posts: "Constable (GD) in CAPFs and SSF, Rifleman (GD) in Assam Rifles" }
        ],
        categories: "gd"
      },
      {
        id: "mts",
        name: "SSC MTS & Havaldar 2025",
        short: "MTS",
        notice: "Multi-Tasking (Non-Technical) Staff and Havaldar (CBIC & CBN) Examination, 2025 — Notice, 26 June 2025 (F. No. E/15/2025-C-2)",
        cutoff: "2025-08-01",
        cutoffLabel: "1 August 2025",
        bands: [
          { id: "mts-25", label: "18–25 years", min: 18, max: 25, posts: "Multi-Tasking Staff (MTS)" },
          { id: "mts-27", label: "18–27 years", min: 18, max: 27, posts: "Havaldar in CBIC and CBN, and a few MTS posts" }
        ],
        categories: "standard"
      }
    ],
    categories: {
      standard: [
        { id: "ur", label: "UR / EWS", relax: 0 },
        { id: "obc", label: "OBC (non-creamy layer)", relax: 3 },
        { id: "scst", label: "SC / ST", relax: 5 },
        { id: "pwbd", label: "PwBD (UR / EWS)", relax: 10 },
        { id: "pwbd-obc", label: "PwBD (OBC)", relax: 13 },
        { id: "pwbd-scst", label: "PwBD (SC / ST)", relax: 15 },
        { id: "esm", label: "Ex-Serviceman", relax: 3, esm: true }
      ],
      gd: [
        { id: "ur", label: "UR / EWS", relax: 0 },
        { id: "obc", label: "OBC (non-creamy layer)", relax: 3 },
        { id: "scst", label: "SC / ST", relax: 5 },
        { id: "riot-ur", label: "Child / dependent of 1984 riot victim (UR / EWS)", relax: 5 },
        { id: "riot-obc", label: "Child / dependent of 1984 riot victim (OBC)", relax: 8 },
        { id: "riot-scst", label: "Child / dependent of 1984 riot victim (SC / ST)", relax: 10 },
        { id: "esm", label: "Ex-Serviceman", relax: 3, esm: true }
      ]
    },
    overviewTitle: "What does an SSC age calculator do?",
    overview: "It counts your exact age — years, months and days — on the crucial date printed in the SSC notice, and checks it against the age limit for the exam and post you choose. SSC counts age on that one date only. Your age on the day you apply, or on the exam day, does not decide eligibility.",
    inputNote: "Use the date of birth on your Class 10 certificate. SSC accepts that date for determining age and allows no later change.",
    modelNote: "Each notice prints the birth dates that qualify. For CGL 18–27 as on 1 August 2026 that is 2 August 1999 to 1 August 2008, both dates included. The upper limit is exclusive: you must not have attained it on the crucial date.",
    steps: [
      ["Enter your date of birth", "Use the date on your Class 10 certificate. SSC accepts no other date for determining age."],
      ["Choose the exam and post band", "CGL has four post-wise bands and MTS has two. CHSL and GD have one band each."],
      ["Check the cut-off date", "It is filled in from the latest notice. Change it only if your notice names a different crucial date."],
      ["Read the verdict", "Your exact age, the birth-date window for your category, and whether you are eligible — with the working shown."]
    ],
    stories: [
      {
        dob: "2000-03-15", cutoff: "2026-08-01", examId: "cgl", bandId: "cgl-27", categoryId: "ur",
        title: "Inside the limit with room to spare",
        body: "Born 15 March 2000, she is 26 years, 4 months and 17 days old on 1 August 2026 — inside 18–27, so eligible for CGL 18–27 posts as an unreserved candidate."
      },
      {
        dob: "1999-08-01", cutoff: "2026-08-01", examId: "cgl", bandId: "cgl-27", categoryId: "ur",
        title: "One day over the upper limit",
        body: "Born 1 August 1999, he is exactly 27 years old on 1 August 2026. He has attained 27, so he is over the 18–27 limit — but with 3 years of OBC relaxation the upper limit becomes 30, and he is eligible."
      },
      {
        dob: "2003-01-02", cutoff: "2026-01-01", examId: "gd", bandId: "gd-23", categoryId: "ur",
        title: "The last eligible birthday for GD",
        body: "Born 2 January 2003, she is 22 years, 11 months and 30 days old on 1 January 2026 — inside 18–23, so eligible for GD Constable. Born one day earlier, on 1 January 2003, she would be exactly 23 and over the limit."
      }
    ],
    compareDob: "2000-03-15",
    exampleTitle: "The same date of birth, different exams",
    exampleNote: "One birthday can pass one exam and fail another. The crucial date and the band decide — not your age today. Born 15 March 2000, checked as an unreserved candidate:",
    exampleConclusion: "The same person is eligible for CGL and CHSL, over the limit for GD Constable, and over the MTS limit but inside the Havaldar band. Always check the exam whose notice you are applying under.",
    faq: [
      ["What is the crucial date for SSC age calculation?", "It is the date printed in the notice on which your age is counted: 1 August 2026 for CGL and CHSL, 1 January 2026 for GD Constable, and 1 August 2025 for MTS and Havaldar. It is not the application date or the exam date."],
      ["I turn 27 on the crucial date. Am I eligible for an 18–27 post?", "No. The notice says you must not have attained 27 years on the crucial date. Born 1 August 1999, you are exactly 27 on 1 August 2026 and over the limit. Born 2 August 1999, you are 26 years, 11 months and 30 days old and eligible."],
      ["Does age relaxation apply to the minimum age of 18?", "No. Relaxation raises only the upper limit. The minimum age of 18 on the crucial date applies to every category, relaxed or not."],
      ["What does the Ex-Serviceman relaxation mean?", "Ex-Servicemen get 3 years beyond the upper limit after their military service is deducted from their actual age on the crucial date. Enter your service below the category box and the calculator deducts it first, then applies the 3 years."],
      ["My birthday is 29 February. How is my age counted?", "This calculator counts a 29 February birthday as turning a year older on 1 March in a non-leap year. The notices do not state a separate rule for 29 February birthdays, so if your eligibility turns on that single day, confirm it with SSC before applying."],
      ["Can I use this calculator for the next SSC cycle?", "Yes. Change the cut-off date to the crucial date in the new notice. The limits on this page come from the latest published notices; a new notice can change the crucial date, so check ssc.gov.in before you apply."],
      ["Does this check my education or physical standards?", "No. This tool checks age only. Each exam also sets education, nationality and, for GD and Havaldar, physical standards. Read the full notice before applying."],
      ["Where can I read the official age limits?", "On ssc.gov.in, in the Notice of Examination for each exam. This page names each notice with its date and file number in the methodology section below, with links to the official PDFs."]
    ]
  },
  {
    key: "cgpa",
    kind: "cgpa",
    slug: "cgpa-to-percentage-calculator",
    title: "CGPA to Percentage Calculator",
    meta: "Convert CGPA to percentage with your university's own published formula — VTU, MAKAUT, Anna University and GTU — plus Mumbai University's band table and an honest note for SPPU. Free, in your browser.",
    lead: "Enter your CGPA, pick your university, and get the percentage by that university's own published conversion. VTU, MAKAUT, Anna University and GTU use different formulas — the same CGPA gives a different percentage at each one.",
    systems: [
      {
        id: "vtu-old",
        name: "VTU — 2015, 2017 and 2018 schemes, and B.E. 2021–22",
        short: "VTU (older schemes)",
        input: "CGPA",
        kind: "formula",
        offset: 0.75,
        formula: "(CGPA − 0.75) × 10",
        rule: "VTU's CGPA standard formula page and the B.E. 2021–22 Regulations, clause 21OB."
      },
      {
        id: "vtu-pg",
        name: "VTU — 2022-scheme PG (M.Tech, MCA, MBA, M.Arch, M.Sc.)",
        short: "VTU (2022 PG)",
        input: "CGPA",
        kind: "formula",
        offset: 0,
        formula: "CGPA × 10",
        rule: "VTU's 2022-scheme PG regulations (M.Tech. 2022, MCA 2022, MBA 2024, M.Arch. 2024, M.Sc. 2023) — a sanctioned equivalence for employment and higher studies, not a percentage printed on the transcript."
      },
      {
        id: "makaut",
        name: "MAKAUT (formerly WBUT)",
        short: "MAKAUT",
        input: "DGPA",
        kind: "formula",
        offset: 0.75,
        formula: "(DGPA − 0.75) × 10",
        rule: "Exact fit to MAKAUT's published DGPA-to-percentage table (6.25→55% through 8.25→75%). The university prints the table, not the formula."
      },
      {
        id: "anna",
        name: "Anna University",
        short: "Anna",
        input: "CGPA",
        kind: "formula",
        offset: 0,
        formula: "CGPA × 10",
        rule: "Anna University B.Arch. Regulations 2023, clause 13.4, on the consolidated grade sheet. Same wording in B.Plan. 2022, B.Arch. 2021 and MBA 2019."
      },
      {
        id: "gtu",
        name: "Gujarat Technological University (GTU)",
        short: "GTU",
        input: "CGPA",
        kind: "formula",
        offset: 0.5,
        formula: "(CGPA − 0.5) × 10",
        rule: "GTU School of Engineering and Technology PG admission notice, counselling 19 October 2024."
      },
      {
        id: "mumbai",
        name: "University of Mumbai",
        short: "Mumbai",
        input: "CGPA",
        kind: "band",
        formula: "No single formula — band table",
        rule: "The university's NEP 2020 syllabi publish only a CGPA-to-percentage band table. Get the exact percentage from your conversion certificate."
      },
      {
        id: "sppu",
        name: "Savitribai Phule Pune University (SPPU)",
        short: "SPPU",
        input: "CGPA",
        kind: "none",
        formula: "No verified formula published",
        rule: "No conversion formula was found on unipune.ac.in in this pass. Check your grade card or the university's examination circulars."
      }
    ],
    mumbaiBands: [
      ["9.00–10.00", "90–100%"],
      ["8.00–<9.00", "80–<90%"],
      ["7.00–<8.00", "70–<80%"],
      ["6.00–<7.00", "60–<70%"],
      ["5.50–<6.00", "55–<60%"],
      ["5.00–<5.50", "50–<55%"],
      ["4.00–<5.00", "40–<50%"]
    ],
    makautAnchors: [
      ["6.25", "55%"],
      ["6.75", "60%"],
      ["7.25", "65%"],
      ["7.75", "70%"],
      ["8.25", "75%"]
    ],
    overviewTitle: "What does a CGPA to percentage calculator do?",
    overview: "It applies the conversion your university itself publishes, instead of one generic multiplier. A CGPA of 8.20 becomes 74.5% under VTU's older schemes, 82.0% under Anna University, and 77.0% under GTU. The university on your transcript decides the number — not the calculator.",
    inputNote: "Enter the CGPA from your consolidated grade sheet. For MAKAUT, enter your DGPA — the final degree figure — not a semester SGPA.",
    modelNote: "Each system below uses the conversion its university publishes. VTU splits by scheme: (CGPA − 0.75) × 10 for the 2015, 2017 and 2018 schemes and B.E. 2021–22, and CGPA × 10 for the 2022-scheme PG regulations. MAKAUT's figure is a fit to the university's published table. Mumbai University publishes only a band table, and SPPU has no verified formula — both are shown honestly, with no invented number.",
    steps: [
      ["Pick your university and scheme", "VTU asks for the scheme as well — older schemes and 2022 PG use different formulas."],
      ["Enter your CGPA", "Use the figure on your consolidated grade sheet. MAKAUT students enter DGPA."],
      ["Read the percentage with the working", "The formula and the arithmetic appear beside the result, so you can check it by hand."],
      ["Confirm against your transcript", "Use the conversion certificate or grade sheet for any formal application. This tool converts; it does not certify."]
    ],
    stories: [
      {
        systemId: "vtu-old",
        cgpa: 8.20,
        title: "The VTU illustration itself",
        body: "VTU's own B.E. 2021–22 regulations illustrate this exact CGPA: (8.20 − 0.75) × 10 = 74.5%. A student on a 2015, 2017 or 2018 scheme, or B.E. 2021–22, reports 74.5%."
      },
      {
        systemId: "anna",
        cgpa: 8.20,
        title: "Same CGPA, different university",
        body: "Anna University converts CGPA × 10 on the consolidated grade sheet, so the same 8.20 becomes 82.0%. The university — not the number — decides the percentage."
      },
      {
        systemId: "makaut",
        cgpa: 8.25,
        title: "On a published anchor point",
        body: "MAKAUT's own table lists DGPA 8.25 as 75%. The fit (8.25 − 0.75) × 10 = 75.0% lands exactly on the university's printed figure."
      }
    ],
    compareCgpa: 8.20,
    exampleTitle: "The same CGPA, different percentages",
    exampleNote: "One CGPA of 8.20, checked against every system on this page. The spread is 74.5% to 82.0% — and Mumbai gives a band, not a single figure.",
    exampleConclusion: "Never convert with a formula from another university. Check the system on your transcript, use its formula, and confirm the result against your conversion certificate before filing it anywhere.",
    faq: [
      ["What is 8.20 CGPA as a percentage?", "It depends on your university: 74.5% under VTU's older schemes and B.E. 2021–22, 82.0% under VTU's 2022-scheme PG regulations and Anna University, 74.5% under MAKAUT (DGPA), and 77.0% under GTU. Mumbai University gives a band (80–<90%) rather than a single figure, and SPPU has no verified formula."],
      ["Is there one formula for all Indian universities?", "No. Each university publishes its own conversion, and they disagree: (CGPA − 0.75) × 10, CGPA × 10 and (CGPA − 0.5) × 10 all appear on this page, each for a different university. A single multiplier applied everywhere gives a wrong percentage for most students."],
      ["Why does VTU have two different formulas?", "VTU's own publications split by scheme. The 2015, 2017 and 2018 schemes and the B.E. 2021–22 regulations use (CGPA − 0.75) × 10. The 2022-scheme PG regulations use CGPA × 10, described as a sanctioned equivalence for employment and higher studies. Pick the scheme on your grade sheet."],
      ["What is DGPA, and why does MAKAUT ask for it?", "DGPA is the Degree Grade Point Average — MAKAUT's final degree figure. The university publishes a DGPA-to-percentage table, not a formula in words; the (DGPA − 0.75) × 10 figure on this page is an exact fit to that table at all five printed points (6.25→55% through 8.25→75%). Enter your DGPA, not a semester SGPA."],
      ["Why does Mumbai University show a band instead of a percentage?", "Mumbai University's own NEP syllabi publish only a CGPA-to-percentage band table — for example, 8.00–<9.00 maps to 80–<90% — with no formula. A band does not fix a value inside it, so this calculator shows the band and directs you to the conversion certificate from your university or college. No aggregator formula, such as (7.1 × CGPA) + 11, is used here, because none was verified against a mu.ac.in document."],
      ["What about SPPU (Pune University)?", "No conversion formula for SPPU was verified from the university's own site in this pass. A tiered set of equations attributed to Circular 332/2020 circulates on third-party sites, but no copy of that circular was located on unipune.ac.in, and aggregators give irreconcilable figures. Until the university's own publication is found, this page shows no SPPU number — check your grade card or the university's examination circulars."],
      ["Can I use this percentage on a job or admission application?", "Use it as a checked conversion, then confirm it against your transcript or the conversion certificate your university or college issues. The formulas here are each university's own published conversion, but the certificate is the document an employer or admissions office accepts."],
      ["Why are CBSE, Delhi University and AKTU not on this page?", "Their conversions were not verified from their own publications in this pass, so they are left out rather than filled in from aggregator tables. Do not use the ×9.5 shortcut for the four universities on this page — it is not their formula. They will be added only after verification from each body's own publication."]
    ]
  },
  {
    key: "age",
    kind: "general-age",
    slug: "age-calculator",
    title: "Age Calculator",
    meta: "Calculate your exact age in years, months and days from your date of birth. See total days lived, the weekday you were born and your next birthday. Free, in your browser.",
    lead: "Enter your date of birth and see your exact age — years, months and days — on any date you choose. The calculator also shows your total days lived, the weekday you were born and when your next birthday falls.",
    sampleDob: "2000-03-15",
    overviewTitle: "What does an age calculator do?",
    overview: "It counts the exact time between your date of birth and a date you choose — complete years first, then complete months, then the remaining days — using real calendar month lengths and leap years. A person born 15 March 2000 is exactly 26 years old on 15 March 2026, and 26 years, 4 months and 17 days old on 1 August 2026.",
    inputNote: "Use the date of birth on your birth certificate. The calculator counts from that date, not from the date you first remember celebrating a birthday.",
    modelNote: "Age is counted by calendar subtraction with borrowing: complete years, then complete months, then the remaining days, using the real length of each month. A 29 February birthday falls on 1 March in a non-leap year — the same rule the SSC Age Calculator on this site uses — so a person born 29 February 2000 turns 26 on 1 March 2026.",
    steps: [
      ["Enter your date of birth", "Use the date on your birth certificate. An example date is filled in — replace it with your own."],
      ["Choose the age-on date", "It starts as today. Change it to any past or future date to see your age then."],
      ["Read your exact age", "Years, months and days, with the total days lived, the weekday you were born and your next birthday."],
      ["Copy or keep the check", "Copy the labelled result, or select Calculate to keep the check in this page session."]
    ],
    stories: [
      {
        dob: "2000-03-15",
        ref: "2026-03-15",
        title: "Exactly 26 on your birthday",
        body: "Born 15 March 2000, she is exactly 26 years, 0 months and 0 days old on 15 March 2026 — her 26th birthday. Total: 9,496 days lived, and her next birthday is a year away."
      },
      {
        dob: "2000-02-29",
        ref: "2026-03-01",
        title: "A leap-day birthday turns 26 on 1 March",
        body: "Born 29 February 2000, he is 26 years, 0 months and 0 days old on 1 March 2026. A 29 February birthday falls on 1 March in a non-leap year, so on 28 February 2026 he is still 25 years, 11 months and 30 days old."
      },
      {
        dob: "2000-01-31",
        ref: "2026-02-28",
        title: "Month-end borrowing",
        body: "Born 31 January 2000, she is 26 years, 0 months and 28 days old on 28 February 2026. February is short, so the calculation borrows January's 31 days — not 30 — to finish the count."
      }
    ],
    compareDob: "2000-03-15",
    compareRefs: ["2026-01-01", "2026-03-15", "2026-08-01", "2026-12-31"],
    exampleTitle: "One birthday, four different ages",
    exampleNote: "Your age is always an age on a date. Born 15 March 2000, the same person is a different age at each date below — which is why forms and exam notices always name the date they count from.",
    exampleConclusion: "Always check which date an age is counted on. Your age today is not the number an exam notice, a form or a pension rule uses unless it names today.",
    faq: [
      ["How is my exact age calculated?", "By calendar subtraction: complete years first, then complete months, then the remaining days, borrowing from the previous month when the day count goes negative. Every month keeps its real length — 31 days for January, 28 or 29 for February — and leap years are counted as they fall. Born 15 March 2000, you are 26 years, 4 months and 17 days old on 1 August 2026."],
      ["What happens if I was born on 29 February?", "Your birthday falls on 1 March in a non-leap year. This is the same rule the SSC Age Calculator on this site uses, and it follows from the borrowing arithmetic: born 29 February 2000, you are 25 years, 11 months and 30 days old on 28 February 2026 and exactly 26 on 1 March 2026. If an official decision turns on that single day, confirm it with the body concerned."],
      ["Can I calculate my age on a past or future date?", "Yes. Change the age-on date to any date you like — a date in the past, or a future date such as a retirement date or an exam cut-off. A date of birth after the age-on date is an error, and the calculator says so plainly instead of showing a negative age."],
      ["What do the total days, weeks and months mean?", "Total days is the number of days between your date of birth and the age-on date. Total weeks is the same span counted in full weeks, with the leftover days shown. Total months is your completed months — completed years times 12, plus completed months. Born 15 March 2000, on 1 August 2026 you have lived 9,635 days, or 1,376 weeks and 3 days, or 316 completed months."],
      ["How do I find the weekday I was born on?", "The result shows it under your age: born 15 March 2000, you were born on a Wednesday. The weekday is counted on the calendar date itself, so it does not depend on your time zone."],
      ["Does the calculator store my date of birth?", "No. The calculation runs entirely in your browser and nothing is sent anywhere. Recent checks are held in this page's memory only and disappear when you reload the page."],
      ["Why does another age calculator give a different result?", "Some calculators divide by 365.25 days a year, or treat every month as 30 days. Those shortcuts drift by days around month ends and leap years. This calculator subtracts real calendar dates, so it matches the date arithmetic a form or a notice uses."],
      ["Can I use this age for an exam or an official form?", "For an exam, use the calculator for that exam: the SSC Age Calculator on this site checks your age on the crucial date in the SSC notice, with the category relaxation applied. For a form, use the date of birth on your certificate — this tool counts age, it does not verify identity or eligibility."]
    ]
  },

  {
    key: "upsc-age",
    kind: "upsc-age",
    slug: "upsc-age-calculator",
    title: "UPSC Age Calculator",
    meta: "Check your exact age as on 1 August of the UPSC Civil Services exam year, with your category relaxation and attempts left. Age limits and attempt rules from the official CSE 2026 notification.",
    lead: "Enter your date of birth and check your exact age on 1 August of your Civil Services exam year — then see whether you meet the age limit for your category, with the relaxation applied, and how many attempts you have left.",
    years: [2026, 2027, 2028],
    defaultYear: 2027,
    sampleDob: "2000-03-15",
    notice: "Civil Services Examination Rules, 2026 — Gazette of India, 4 February 2026 (F. No. 13018/02/2025-AIS-I); Examination Notice No. 05/2026-CSE, 4 February 2026",
    categories: [
      { id: "gen", label: "General", relax: 0, attempts: 6 },
      { id: "ews", label: "EWS", relax: 0, attempts: 6 },
      { id: "obc", label: "OBC (non-creamy layer)", relax: 3, attempts: 9 },
      { id: "sc", label: "SC", relax: 5, attempts: null },
      { id: "st", label: "ST", relax: 5, attempts: null }
    ],
    extras: [
      { id: "none", label: "No extra relaxation", relax: 0 },
      { id: "pwbd", label: "Person with benchmark disability (PwBD)", relax: 10 },
      { id: "esm", label: "Ex-serviceman — 5 or more years of service", relax: 5 },
      { id: "defence", label: "Defence personnel disabled in operations", relax: 3 }
    ],
    overviewTitle: "What does a UPSC age calculator do?",
    overview: "It counts your exact age — years, months and days — on 1 August of the Civil Services exam year, and checks it against the age limit for your category. UPSC counts age on that one date only. Your age on the day you apply, or on the Prelims day, does not decide eligibility. The calculator also counts your attempts, because age and attempts together decide whether you can still appear.",
    inputNote: "Use the date of birth on your Class 10 certificate. UPSC accepts that date for determining age and allows no later change.",
    modelNote: "The rule is Rule 5 of the Civil Services Examination Rules, 2026: a candidate must have attained 21 years and must not have attained 32 years on 1 August of the exam year. For CSE 2026 that means born not earlier than 2 August 1994 and not later than 1 August 2005. Category relaxations raise the upper limit only — the minimum age of 21 applies to every category. The upper limit is exclusive: you must not have attained it on 1 August.",
    steps: [
      ["Enter your date of birth", "Use the date on your Class 10 certificate. UPSC accepts no other date for determining age."],
      ["Choose the exam year", "CSE 2027 is the next cycle. The cut-off is always 1 August of that year."],
      ["Pick your category and any extra relaxation", "SC/ST get 5 years, OBC 3 years. PwBD adds 10 years, ex-servicemen 5, defence personnel disabled in operations 3 — and a category relaxation stacks with one of those."],
      ["Read the verdict", "Your exact age, the birth-date window for your category, your attempts left, and your first and last eligible exam years."]
    ],
    stories: [
      {
        dob: "2000-03-15", year: 2027, categoryId: "gen", extraId: "none", used: 0,
        title: "Inside the limit with attempts to spare",
        body: "Born 15 March 2000, she is 27 years, 4 months and 17 days old on 1 August 2027 — inside 21–32, so eligible for CSE 2027 as a General candidate, with all 6 attempts still available. Her first eligible year was 2021 and her last is 2031."
      },
      {
        dob: "1994-08-01", year: 2026, categoryId: "gen", extraId: "none", used: 0,
        title: "Exactly 32 on the cut-off — over the limit",
        body: "Born 1 August 1994, he is exactly 32 years old on 1 August 2026. He has attained 32, so he is over the General limit for CSE 2026 — but as an OBC candidate the upper limit is 35, and he is eligible."
      },
      {
        dob: "1990-06-15", year: 2027, categoryId: "sc", extraId: "pwbd", used: 0,
        title: "Category and disability relaxations stack",
        body: "Born 15 June 1990, she is 37 years, 1 month and 17 days old on 1 August 2027. As an SC candidate with a benchmark disability the upper limit is 47 — 32 plus 5 for SC plus 10 for PwBD — so she is eligible, with unlimited attempts. Her first eligible year was 2011 and her last is 2036."
      }
    ],
    compareDob: "1993-08-02",
    compareYear: 2027,
    exampleTitle: "One birthday, five different answers",
    exampleNote: "Born 2 August 1993, checked for CSE 2027. The age is the same for everyone — 33 years, 11 months and 30 days on 1 August 2027 — but the verdict changes with the category, because the upper limit changes.",
    exampleConclusion: "The same person is over the limit as a General candidate and eligible in every other category. The category — not the birthday — decides. Always check with the relaxation you can actually claim, with the certificate to prove it.",
    faq: [
      ["What is the cut-off date for UPSC age calculation?", "1 August of the exam year. For CSE 2026 it is 1 August 2026; for CSE 2027 it is 1 August 2027. It is not the Prelims date (24 May 2026 for CSE 2026) and not the day you apply. Your age on that one date decides eligibility."],
      ["I turn 32 on 1 August. Am I eligible?", "No. The rule says you must not have attained 32 years on 1 August. Born 1 August 1994, you are exactly 32 on 1 August 2026 and over the General limit. Born 2 August 1994, you are 31 years, 11 months and 30 days old and eligible."],
      ["How do the age relaxations stack?", "The category relaxation and one further relaxation add together: SC/ST get 5 years, OBC 3 years, PwBD 10 years, ex-servicemen 5 years, and defence personnel disabled in operations 3 years. An SC candidate with a benchmark disability gets 32 + 5 + 10 = 47. An OBC ex-serviceman gets 32 + 3 + 5 = 40. The minimum age of 21 never changes."],
      ["How many attempts do I get?", "General and EWS candidates get 6 attempts, OBC candidates 9, and SC/ST candidates have no limit within their age limit. PwBD candidates get 9 attempts (General, EWS or OBC) or unlimited attempts (SC/ST). An attempt counts when you appear in even one Prelims paper — merely applying does not count."],
      ["What are my first and last eligible exam years?", "The first year you can appear is the first year in which you are 21 on 1 August; the last year is the last year in which you are still under your upper limit on 1 August. Born 15 March 2000 as a General candidate, your first eligible year is 2021 and your last is 2031."],
      ["My birthday is 29 February. How is my age counted?", "Your birthday falls on 1 March in a non-leap year — the same rule the SSC Age Calculator and the Age Calculator on this site use. Born 29 February 2000, you are 25 years, 11 months and 30 days old on 28 February 2026 and exactly 26 on 1 March 2026. If your eligibility turns on that single day, confirm it with UPSC before applying."],
      ["Can I use this calculator for CSE 2027?", "Yes — choose 2027 as the exam year. The limits on this page come from the Civil Services Examination Rules, 2026, the latest published rules. The CSE 2027 notification is tentatively due on 13 January 2027; when it releases, check the age and attempt rules against it before you apply."],
      ["Does this check my education, nationality or service restrictions?", "No. This tool checks age and attempts only. You also need a graduate degree, and nationality rules apply by service. Serving IAS and IFS officers cannot reappear without resigning. Read the full notification on upsc.gov.in before applying."]
    ]
  },

  {
    key: "ibps-age",
    kind: "ibps-age",
    slug: "ibps-age-calculator",
    title: "IBPS Age Calculator",
    meta: "Check your exact age on the IBPS cut-off date for PO, Clerk, Specialist Officer and RRB posts, with your category relaxation. Age limits from the official IBPS CRP PO/MT-XVI, CSA-XVI, SPL-XVI and RRBs-XV notifications.",
    lead: "Pick your IBPS exam, enter your date of birth, and check your exact age on that exam's cut-off date — then see whether you meet the age limit for your category, with the relaxation applied.",
    exams: [
      { id: "po", label: "IBPS PO / MT", cycle: "CRP PO/MT-XVI", cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
      { id: "clerk", label: "IBPS Clerk / Customer Service Associate", cycle: "CRP CSA-XVI", cut: "2026-08-01", min: 20, upper: 28, exsm: "service3", widow: true },
      { id: "so", label: "IBPS Specialist Officer (Scale I)", cycle: "CRP SPL-XVI", cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
      { id: "rrb-oa", label: "IBPS RRB Office Assistant", cycle: "CRP RRBs-XV", cut: "2026-09-01", min: 18, upper: 28, exsm: "service3", widow: true },
      { id: "rrb-1", label: "IBPS RRB Officer Scale I", cycle: "CRP RRBs-XV", cut: "2026-09-01", min: 18, upper: 30, exsm: "flat5", widow: false },
      { id: "rrb-2", label: "IBPS RRB Officer Scale II", cycle: "CRP RRBs-XV", cut: "2026-09-01", min: 21, upper: 32, exsm: "flat5", widow: false },
      { id: "rrb-3", label: "IBPS RRB Officer Scale III", cycle: "CRP RRBs-XV", cut: "2026-09-01", min: 21, upper: 40, exsm: "flat5", widow: false }
    ],
    defaultExam: "po",
    sampleDob: "2000-03-15",
    notice: "CRP PO/MT-XVI detailed notification (1 July 2026); CRP CSA-XVI detailed notification (1 August 2026); CRP SPL-XVI detailed notification (1 July 2026); CRP RRBs-XV detailed notification (1 September 2026) — all on ibps.in",
    categories: [
      { id: "gen", label: "General", relax: 0 },
      { id: "ews", label: "EWS", relax: 0 },
      { id: "obc", label: "OBC (non-creamy layer)", relax: 3 },
      { id: "sc", label: "SC", relax: 5 },
      { id: "st", label: "ST", relax: 5 }
    ],
    extras: [
      { id: "none", label: "No extra relaxation" },
      { id: "pwbd", label: "Person with benchmark disability (PwBD)" },
      { id: "esm", label: "Ex-serviceman / commissioned officer" },
      { id: "widow", label: "Widow, divorced or legally separated woman (not remarried) — Clerk and RRB Office Assistant only" }
    ],
    overviewTitle: "What does an IBPS age calculator do?",
    overview: "It counts your exact age — years, months and days — on the cut-off date of the IBPS exam you choose, and checks it against the age limit for your category. IBPS counts age on that one date only, and every exam has its own: 1 July 2026 for PO and Specialist Officer, 1 August 2026 for Clerk, 1 September 2026 for the RRB posts. Your age on the day you apply, or on the exam day, does not decide eligibility. IBPS sets no limit on the number of attempts — only the age limit decides whether you can still appear.",
    inputNote: "Use the date of birth on your Class 10 certificate. IBPS accepts that date for determining age.",
    modelNote: "The rule is clause B.II (Age) of each IBPS notification: a candidate must be within the stated band on the notification's cut-off date. For IBPS PO that means 20 to 30 years as on 1 July 2026 — born not earlier than 2 July 1996 and not later than 1 July 2006. Category relaxations raise the upper limit only — the minimum age applies to every category. The upper limit is exclusive: you must not have attained it on the cut-off date.",
    steps: [
      ["Enter your date of birth", "Use the date on your Class 10 certificate. IBPS accepts no other date for determining age."],
      ["Choose your IBPS exam", "PO, Clerk, Specialist Officer or one of the four RRB posts. Each exam has its own cut-off date — the calculator switches to it automatically."],
      ["Pick your category and any extra relaxation", "SC/ST get 5 years, OBC 3 years. PwBD adds 10 years. Ex-servicemen get 5 years for PO, Specialist Officer and RRB officer posts, or their service plus 3 years for Clerk and RRB Office Assistant. A category relaxation stacks with one of those."],
      ["Read the verdict", "Your exact age, the birth-date window for your category, and your first and last eligible exam years. IBPS sets no attempt limit, so age is the whole check."]
    ],
    stories: [
      {
        dob: "2000-03-15", examId: "po", categoryId: "gen", extraId: "none", service: 5,
        title: "Inside the limit for IBPS PO",
        body: "Born 15 March 2000, she is 26 years, 3 months and 16 days old on 1 July 2026 — inside 20–30, so eligible for IBPS PO as a General candidate. Her first eligible year was 2020 and her last is 2029."
      },
      {
        dob: "1998-08-01", examId: "clerk", categoryId: "gen", extraId: "none", service: 5,
        title: "Exactly 28 on the cut-off — over the limit",
        body: "Born 1 August 1998, he is exactly 28 years old on 1 August 2026. He has attained 28, so he is over the General limit for IBPS Clerk — but as an OBC candidate the upper limit is 31, and he is eligible. His first eligible year as an OBC candidate was 2018 and his last is 2028."
      },
      {
        dob: "1986-09-15", examId: "rrb-3", categoryId: "sc", extraId: "pwbd", service: 5,
        title: "Category and disability relaxations stack",
        body: "Born 15 September 1986, she is 39 years, 11 months and 17 days old on 1 September 2026. As an SC candidate with a benchmark disability the upper limit for Officer Scale III is 55 — 40 plus 5 for SC plus 10 for PwBD — so she is eligible. Her first eligible year was 2008 and her last is 2041."
      }
    ],
    compareDob: "1996-07-02",
    compareExam: "po",
    exampleTitle: "One birthday, seven different answers",
    exampleNote: "Born 2 July 1996, checked for the 2026 cycle. The age is nearly the same at each cut-off — 29 years, 11 months and 29 days on 1 July 2026 — but the verdict changes with the exam and the category, because the cut-off date and the upper limit change.",
    exampleConclusion: "The same person is eligible for IBPS PO and RRB Officer Scale III, and over the limit for Clerk, RRB Office Assistant and RRB Officer Scale I as a General candidate. The exam and the category — not the birthday alone — decide. Always check against the cut-off date in your own notification.",
    faq: [
      ["What is the cut-off date for IBPS age calculation?", "It depends on the exam. IBPS PO and Specialist Officer count age on 1 July 2026, Clerk (Customer Service Associate) on 1 August 2026, and all four RRB posts on 1 September 2026. It is not the exam date and not the day you apply. Your age on that one date decides eligibility."],
      ["I turn 30 on 1 July 2026 for IBPS PO. Am I eligible?", "No. The notification says you must have been born not earlier than 2 July 1996. Born 1 July 1996, you are exactly 30 on 1 July 2026 and over the General limit. Born 2 July 1996, you are 29 years, 11 months and 29 days old and eligible. The same exclusive rule applies to every IBPS exam on this page."],
      ["How do the age relaxations stack?", "The category relaxation and one further relaxation add together: SC/ST get 5 years, OBC 3 years, PwBD 10 years. An OBC candidate with a benchmark disability gets 30 + 3 + 10 = 43 years for IBPS PO. An SC ex-serviceman gets 30 + 5 + 5 = 40 years. For Clerk and RRB Office Assistant, an ex-serviceman adds actual service plus 3 years, up to a maximum age of 50. The minimum age never changes."],
      ["Is there a limit on the number of IBPS attempts?", "No. Unlike UPSC, IBPS sets no limit on the number of attempts for PO, Clerk, Specialist Officer or the RRB posts. You can appear every year for as long as you stay inside the age limit for your category. That is why this calculator shows first and last eligible exam years instead of attempts."],
      ["What are my first and last eligible exam years?", "The first year you can appear is the first year in which you meet the minimum age on that exam's cut-off date; the last year is the last year in which you are still under your upper limit on the cut-off date. They assume the cut-off falls on the same date each year, as it has in recent cycles. Born 15 March 2000 as a General candidate for IBPS PO, your first eligible year is 2020 and your last is 2029."],
      ["My birthday is 29 February. How is my age counted?", "Your birthday falls on 1 March in a non-leap year — the same rule the SSC Age Calculator and the Age Calculator on this site use. Born 29 February 2000, you are 26 years, 4 months and 2 days old on 1 July 2026 and 26 years, 6 months and 3 days old on 1 September 2026. If your eligibility turns on that single day, confirm it with IBPS before applying."],
      ["Can I use this calculator for the 2027 cycle?", "The limits on this page come from the 2026-cycle notifications (CRP PO/MT-XVI, CSA-XVI, SPL-XVI and RRBs-XV), the latest published. The 2027 cycle (CRP XVII) will publish new cut-off dates; when it does, check the age band against the new notification before you apply, and this page will be updated to the new cut-offs."],
      ["Does this check my education, nationality or experience?", "No. This tool checks age only. You also need a graduation degree (and, for RRB Officer Scale II and III, the experience the notification asks for), local-language proficiency where the notification requires it, and the nationality rules in the notification. Only the notification on ibps.in decides your eligibility."]
    ]
  },

  {
    key: "rrb-age",
    kind: "rrb-age",
    slug: "rrb-age-calculator",
    title: "RRB Age Calculator",
    meta: "Check your exact age on the RRB crucial date for NTPC, Group D, ALP, JE, Technician and Section Controller, with your category relaxation. Age limits from the official RRB CENs 01/2026 to 07/2026 and 09/2025.",
    lead: "Pick your RRB exam, enter your date of birth, and check your exact age on that exam's crucial date — then see whether you meet the age limit for your category, with the relaxation applied.",
    exams: [
      { id: "ntpc-g", label: "NTPC Graduate", cycle: "CEN 06/2026", cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      { id: "ntpc-ug", label: "NTPC Undergraduate", cycle: "CEN 07/2026", cut: "2027-01-01", min: 18, upper: 30, pwbd: true, ccaa: false },
      { id: "groupd", label: "Group D / Level 1", cycle: "CEN 09/2025", cut: "2026-01-01", min: 18, upper: 33, pwbd: true, ccaa: true },
      { id: "alp", label: "Assistant Loco Pilot (ALP)", cycle: "CEN 01/2026", cut: "2026-07-01", min: 18, upper: 30, pwbd: false, ccaa: true },
      { id: "tech1", label: "Technician Grade I Signal", cycle: "CEN 02/2026", cut: "2026-07-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      { id: "tech3", label: "Technician Grade III", cycle: "CEN 02/2026", cut: "2026-07-01", min: 18, upper: 30, pwbd: true, ccaa: true },
      { id: "je", label: "Junior Engineer / DMS / CMA", cycle: "CEN 04/2026", cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      { id: "sc", label: "Section Controller", cycle: "CEN 03/2026", cut: "2026-07-01", min: 20, upper: 33, pwbd: true, ccaa: false }
    ],
    defaultExam: "ntpc-g",
    sampleDob: "2000-03-15",
    notice: "CEN 06/2026 NTPC Graduate and CEN 07/2026 NTPC Undergraduate (1 January 2027); CEN 09/2025 Group D (1 January 2026); CEN 01/2026 ALP, CEN 02/2026 Technician and CEN 03/2026 Section Controller (1 July 2026); CEN 04/2026 JE/DMS (1 January 2027) — all on rrb.indianrailways.gov.in",
    categories: [
      { id: "gen", label: "General", relax: 0 },
      { id: "ews", label: "EWS", relax: 0 },
      { id: "obc", label: "OBC (non-creamy layer)", relax: 3 },
      { id: "sc", label: "SC", relax: 5 },
      { id: "st", label: "ST", relax: 5 }
    ],
    extras: [
      { id: "none", label: "No extra relaxation" },
      { id: "pwbd", label: "Person with benchmark disability (PwBD) — the ALP CEN has no PwBD row" },
      { id: "esm", label: "Ex-serviceman" },
      { id: "widow", label: "Widow, divorced or legally separated woman (not remarried)" },
      { id: "staff", label: "Serving railway staff, casual labour or substitute (3+ years of service)" },
      { id: "ccaa", label: "Course Completed Act Apprentice (railway establishments) — ALP, Technician Grade III and Group D only" },
      { id: "ccaa25", label: "Course Completed Act Apprentice who became one before age 25 — same three exams only" }
    ],
    overviewTitle: "What does an RRB age calculator do?",
    overview: "It counts your exact age — years, months and days — on the crucial date of the RRB exam you choose, and checks it against the age limit for your category. RRB counts age on that one date only, and every exam has its own: 1 July 2026 for ALP, Technician and Section Controller, 1 January 2027 for JE and both NTPC streams, and 1 January 2026 for Group D. Your age on the day you apply, or on the exam day, does not decide eligibility. RRB sets no limit on the number of attempts — only the age limit decides whether you can still appear. And unlike IBPS and UPSC, RRB does not add relaxations together: you get the maximum relaxation you are eligible for, not the sum.",
    inputNote: "Use the date of birth on your Class 10 certificate. RRB accepts that date for determining age — any difference leads to disqualification.",
    modelNote: "The rule is the age section of each RRB CEN: a candidate must be within the stated band on the notification's crucial date. For NTPC Graduate that means 18 to 33 years as on 1 January 2027 — born not earlier than 2 January 1994 and not later than 1 January 2009. Category relaxations raise the upper limit only — the minimum age applies to every category. The upper limit is exclusive: you must not have attained it on the crucial date. Relaxations do not add up: a PwBD candidate gets 10, 13 or 15 years in total depending on category, and an ex-serviceman's service is deducted from the age first, then 3, 6 or 8 years apply.",
    steps: [
      ["Enter your date of birth", "Use the date on your Class 10 certificate. RRB accepts no other date for determining age."],
      ["Choose your RRB exam", "NTPC Graduate or Undergraduate, Group D, ALP, Technician Grade I or III, JE/DMS/CMA or Section Controller. Each exam has its own crucial date — the calculator switches to it automatically."],
      ["Pick your category and any extra relaxation", "SC/ST get 5 years, OBC 3 years. PwBD adds 10, 13 or 15 years in total. Ex-servicemen deduct their service from their age and then add 3, 6 or 8 years. Widows get up to 35, 38 or 40 years; serving railway staff up to 40, 43 or 45. RRB takes the maximum, never the sum."],
      ["Read the verdict", "Your exact age, the birth-date window for your category, and your first and last eligible exam years. RRB sets no attempt limit, so age is the whole check."]
    ],
    stories: [
      {
        dob: "2000-03-15", examId: "ntpc-g", categoryId: "gen", extraId: "none", years: 5,
        title: "Inside the limit for NTPC Graduate",
        body: "Born 15 March 2000, she is 26 years, 9 months and 17 days old on 1 January 2027 — inside 18–33, so eligible for NTPC Graduate as a General candidate. Her first eligible year was 2019 and her last is 2033."
      },
      {
        dob: "1996-07-01", examId: "alp", categoryId: "gen", extraId: "none", years: 5,
        title: "Exactly 30 on the cut-off — over the limit",
        body: "Born 1 July 1996, he is exactly 30 years old on 1 July 2026. He has attained 30, so he is over the General limit for ALP — but as an OBC candidate the upper limit is 33, and he is eligible. His first eligible year as an OBC candidate was 2014 and his last is 2028."
      },
      {
        dob: "1988-06-15", examId: "groupd", categoryId: "sc", extraId: "pwbd", years: 5,
        title: "Disability relaxation, counted once",
        body: "Born 15 June 1988, she is 37 years, 6 months and 17 days old on 1 January 2026. As an SC candidate with a benchmark disability the upper limit for Group D is 48 — 33 plus 15 for PwBD, which already includes her 5-year SC relaxation — so she is eligible. Her first eligible year was 2007 and her last is 2036."
      }
    ],
    compareDob: "1993-07-02",
    compareExam: "ntpc-g",
    exampleTitle: "One birthday, eight different answers",
    exampleNote: "Born 2 July 1993. The age is nearly the same at each crucial date — 33 years, 5 months and 30 days on 1 January 2027 — but the verdict changes with the exam, because the crucial date and the upper limit change.",
    exampleConclusion: "The same person is eligible for Group D, Technician Grade I and Section Controller, and over the limit for both NTPC streams, ALP, Technician Grade III and JE as a General candidate. The exam and the category — not the birthday alone — decide. Always check against the crucial date in your own CEN.",
    faq: [
      ["What is the cut-off date for RRB age calculation?", "It depends on the exam. ALP, Technician and Section Controller count age on 1 July 2026, JE and both NTPC streams on 1 January 2027, and Group D on 1 January 2026. It is not the exam date and not the day you apply. Your age on that one date decides eligibility."],
      ["I turn 30 on 1 July 2026 for ALP. Am I eligible?", "No. The CEN says you must have been born not earlier than 2 July 1996. Born 1 July 1996, you are exactly 30 on 1 July 2026 and over the General limit. Born 2 July 1996, you are 29 years, 11 months and 29 days old and eligible. The same exclusive rule applies to every RRB exam on this page."],
      ["How do the age relaxations work — do they add up?", "No. RRB gives you the maximum relaxation you are eligible for, not the sum of them. A PwBD candidate gets 10 years (General/EWS), 13 years (OBC) or 15 years (SC/ST) in total — the category relaxation is already inside those figures. An SC ex-serviceman with 10 years of service is counted at his age minus 10 years against an upper limit of 33 + 8 = 41 years for NTPC Graduate — the 8 already includes his 5-year SC relaxation. A candidate who is both a widow and railway staff gets the higher of the two limits — 40 years, not 35 + 40. Pick the one extra relaxation that gives you the most, and the calculator applies it."],
      ["How does the ex-serviceman relaxation work?", "Your service is deducted from your age first, and then 3 years (General/EWS), 6 years (OBC) or 8 years (SC/ST) are added to the upper limit. You need more than six months of service after attestation. There is no maximum-age cap for ex-servicemen. Example: an SC ex-serviceman with 10 years of service applying for NTPC Graduate is counted at his age minus 10 years against an upper limit of 41 years."],
      ["Is there a limit on the number of RRB attempts?", "No. None of the eight CENs states a limit on the number of attempts. You can appear every year for as long as you stay inside the age limit for your category. That is why this calculator shows first and last eligible exam years instead of attempts."],
      ["What are my first and last eligible exam years?", "The first year you can appear is the first year in which you meet the minimum age on that exam's crucial date; the last year is the last year in which you are still under your upper limit on the crucial date. They assume the crucial date falls on the same date each year, as it has in recent cycles. Born 15 March 2000 as a General candidate for NTPC Graduate, your first eligible year is 2019 and your last is 2033."],
      ["My birthday is 29 February. How is my age counted?", "Your birthday falls on 1 March in a non-leap year — the same rule the SSC Age Calculator and the Age Calculator on this site use. Born 29 February 2000, you are 26 years, 4 months and 2 days old on 1 July 2026 and 26 years, 10 months and 3 days old on 1 January 2027. If your eligibility turns on that single day, confirm it with RRB before applying."],
      ["Why isn't Paramedical (CEN 05/2026) in this calculator?", "The Paramedical CEN covers nine posts with six different age bands — Nursing Superintendent 20–40, Pharmacist 20–35, Audiologist 21–30, Radiographer 19–33 and the rest 18–33, all as on 1 January 2027. One exam choice cannot represent them, so this page leaves Paramedical out rather than guessing. Check the per-post table in CEN 05/2026 on rrb.indianrailways.gov.in."],
      ["Does this check my education, qualification or medical standard?", "No. This tool checks age only. You also need the qualification each CEN asks for — a degree for NTPC Graduate, JE and Section Controller, 12th pass for NTPC Undergraduate, 10th or ITI for Group D, ALP and Technician Grade III — and the medical standard of the post. Only the CEN on rrb.indianrailways.gov.in decides your eligibility."]
    ]
  },

  {
    key: "emi",
    kind: "emi",
    slug: "emi-calculator",
    title: "EMI Calculator",
    meta: "Work out your monthly EMI for a home, personal or car loan in India — loan amount, interest rate and tenure in, EMI, total interest and total payment out. Reducing-balance formula, with a year-by-year repayment schedule.",
    lead: "Enter your loan amount, annual interest rate and tenure, and see your monthly EMI, the total interest you will pay and the full repayment — with a year-by-year schedule that shows how each EMI splits between interest and principal.",
    presets: [
      { id: "home", label: "Home loan", amount: 5000000, rate: 8.75, years: 20, months: 0 },
      { id: "personal", label: "Personal loan", amount: 500000, rate: 13, years: 5, months: 0 },
      { id: "car", label: "Car loan", amount: 1000000, rate: 9.5, years: 7, months: 0 }
    ],
    defaultPreset: "home",
    sampleAmount: 5000000,
    sampleRate: 8.75,
    sampleYears: 20,
    sampleMonths: 0,
    notice: "Reducing-balance method — the method RBI-regulated lenders use. RBI repo rate 5.50% (October 2026). The rate ranges below are indicative, from lenders' published pages, November 2026 — your sanction letter decides.",
    overviewTitle: "What does an EMI calculator do?",
    overview: "It turns three inputs — the loan amount, the annual interest rate and the tenure — into the single number that decides whether a loan is affordable: the equated monthly instalment. Every EMI pays interest first and principal second, so the split changes every month: early EMIs are mostly interest, late EMIs mostly principal. This calculator shows the EMI, the total interest and the full repayment, plus a year-by-year schedule of that split, so you can see the true cost of the loan before you sign.",
    inputNote: "Use the figures from your sanction letter: the loan amount after any down payment, the annual rate as printed (not a monthly rate), and the full tenure in years and months. The calculator assumes the rate stays fixed for the whole tenure.",
    modelNote: "The formula is the standard amortising-loan formula on a reducing balance: EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is the tenure in months. Interest each month is charged on the balance still owed, not on the original amount — so the balance falls faster as the principal share of each EMI grows. The EMI stays fixed while the rate stays fixed; on a floating-rate loan the EMI holds only until the next rate reset.",
    steps: [
      ["Pick a loan type, or enter your own figures", "Home, personal or car loan fills in typical starting figures — a ₹50 lakh home loan at 8.75% over 20 years, a ₹5 lakh personal loan at 13% over 5 years, or a ₹10 lakh car loan at 9.5% over 7 years. Change any figure to match your sanction letter."],
      ["Enter the loan amount", "The amount you actually borrow, after the down payment. The calculator accepts ₹10,000 to ₹10 crore."],
      ["Enter the annual rate and the tenure", "The annual rate as printed on the sanction letter, and the tenure in years plus any extra months — up to 30 years (360 months) in total."],
      ["Read the EMI, the totals and the schedule", "Your monthly EMI, the total interest and the full repayment, the interest share of the loan, and a year-by-year schedule showing how much of each year's payments went to interest and how much to principal."]
    ],
    stories: [
      {
        amount: 5000000, rate: 8.75, years: 20, months: 0, preset: "home",
        title: "A ₹50 lakh home loan over 20 years",
        body: "Borrow ₹50,00,000 at 8.75% a year for 20 years and the EMI is ₹44,186 a month. Over the full tenure you repay ₹1,06,04,529 — ₹56,04,529 of it interest, more than the amount borrowed. In the first year you pay ₹5,30,226, of which ₹4,33,689 is interest and only ₹96,537 is principal; by the final year the split has reversed."
      },
      {
        amount: 500000, rate: 13, years: 5, months: 0, preset: "personal",
        title: "A ₹5 lakh personal loan over 5 years",
        body: "Borrow ₹5,00,000 at 13% a year for 5 years and the EMI is ₹11,377 a month. You repay ₹6,82,592 in total — ₹1,82,592 of interest. In the first year ₹60,581 of your payments is interest and ₹75,937 is principal, leaving a balance of ₹4,24,063."
      },
      {
        amount: 1000000, rate: 9.5, years: 7, months: 0, preset: "car",
        title: "A ₹10 lakh car loan over 7 years",
        body: "Borrow ₹10,00,000 at 9.5% a year for 7 years and the EMI is ₹16,344 a month. You repay ₹13,72,894 in total — ₹3,72,894 of interest. In the first year ₹90,478 of your payments is interest and ₹1,05,649 is principal, leaving a balance of ₹8,94,351."
      }
    ],
    compareAmount: 5000000,
    compareRate: 8.75,
    compareYears: [15, 20, 25],
    exampleTitle: "One loan, three tenures",
    exampleNote: "The same ₹50,00,000 home loan at 8.75% a year. A shorter tenure means a higher EMI — but the total interest falls sharply, because the balance shrinks faster.",
    exampleConclusion: "Five extra years cut the EMI by ₹5,786 a month but add ₹16,09,491 of interest. Ten extra years cut the EMI by ₹8,865 a month but add ₹33,37,117 of interest. The cheapest EMI is rarely the cheapest loan — compare the total interest, not the monthly figure alone.",
    rates: [
      { type: "Home loan", range: "7.40% – 9.25% p.a.", tenure: "Up to 30 years", amount: "Up to ₹10 crore", note: "Repo-linked (EBLR) at most banks since October 2019; the RBI repo rate is 5.50% after the October 2026 hike." },
      { type: "Personal loan", range: "10.50% – 24% p.a.", tenure: "1 – 7 years", amount: "₹10,000 – ₹50 lakh", note: "Unsecured, so the rate depends heavily on your credit score and employer; the lowest published starting rates are about 10.49%." },
      { type: "Car loan", range: "7.85% – 11.55% p.a.", tenure: "1 – 7 years", amount: "Up to ₹1.5 crore", note: "PSU banks start near 7.85% for new cars after the October 2026 hike; manufacturer tie-ups can add discounts." }
    ],
    faq: [
      ["What is the EMI formula?", "EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1). P is the loan amount, r is the monthly rate — the annual rate divided by 12 and by 100 — and n is the tenure in months. For a ₹50,00,000 loan at 8.75% a year over 20 years, r is 0.0072917, n is 240, (1 + r)^n is 5.7182, and the EMI works out to ₹44,186 a month. The formula assumes the rate stays fixed for the whole tenure."],
      ["Why is my bank's EMI a few rupees different from this calculator?", "Banks round the EMI and accrue interest daily rather than monthly, and some start the schedule on the disbursal date rather than the first of the month. A difference of ₹50–200 a month on a large home loan is normal rounding, not an error in either figure. If the difference is larger, check that you entered the same amount, rate and tenure as the sanction letter."],
      ["Does the EMI include the processing fee, GST or insurance?", "No. The EMI covers principal and interest only. Add the processing fee (usually 0.5%–2% of the loan, plus GST), stamp duty, registration and any home or loan insurance separately — they are real costs, just not part of the EMI. GST applies to the lender's fees and charges, not to the principal or interest in the EMI."],
      ["What happens to my EMI when the repo rate changes?", "On a floating-rate loan, the rate resets at the interval in your loan agreement — usually every three or six months for repo-linked loans. Most lenders keep the EMI the same and change the tenure instead, so a rate rise stretches the loan and a rate cut shortens it. On a fixed-rate loan the EMI does not change at all. This calculator gives the EMI only until the next reset."],
      ["Can I prepay my loan without a penalty?", "On a floating-rate loan taken by an individual for a non-business purpose, yes — the RBI (Pre-payment Charges on Loans) Directions, 2025 bar prepayment charges on such loans sanctioned or renewed on or after 1 January 2026. Fixed-rate loans may still carry a charge of 2%–5%. Prepaying early matters most: paying ₹5,000 extra a month on the ₹50 lakh home loan above clears it in 187 months instead of 240 and saves ₹14,52,427 of interest."],
      ["How much of my early EMIs goes to principal?", "Very little at first, because interest is charged on the full balance. On the ₹50 lakh home loan at 8.75%, only ₹96,537 of the ₹5,30,226 you pay in the first year is principal — the other ₹4,33,689 is interest. By year 10 the split is ₹2,11,573 principal against ₹3,18,654 interest, and in the final year ₹5,05,928 of the ₹5,30,226 is principal. The schedule on this page shows the split for every year."],
      ["What is the difference between reducing balance and flat rate?", "On a reducing balance the interest each month is charged on the balance still owed, so it falls as you repay. On a flat rate the interest is charged on the original amount for the whole tenure — so a flat 10% costs far more than a reducing-balance 10%. Always compare loans on the reducing-balance rate; a flat-rate quote that looks cheaper usually is not."],
      ["Can I claim tax benefits on a home loan?", "Under the old tax regime, yes: up to ₹2,00,000 a year of the interest on a self-occupied home loan is deductible under Section 24(b), and the principal repaid is deductible up to ₹1,50,000 a year under Section 80C, shared with ELSS, PPF and other eligible investments. Under the new regime there is no deduction for a self-occupied home. Confirm which regime suits you with your Chartered Accountant before relying on either figure."],
      ["Does this calculator send my loan details anywhere?", "No. The loan amount, rate and tenure stay in your browser — the calculation runs entirely on this page, nothing is sent to a server, and reloading the page clears your recent checks."]
    ]
  },

  {
    key: "sip",
    kind: "sip",
    slug: "sip-calculator",
    title: "SIP Calculator",
    meta: "Work out what a monthly SIP in India could grow to — monthly amount, expected return and years in, invested amount, estimated returns and maturity value out. Standard monthly-compounding formula, with a year-by-year growth table.",
    lead: "Enter your monthly SIP amount, the return you expect and how many years you will invest, and see the estimated maturity value, how much of it is your own money and how much is growth — with a year-by-year table that shows the compounding at work.",
    presets: [
      { id: "starter", label: "Starter SIP", monthly: 5000, rate: 12, years: 10 },
      { id: "growth", label: "₹10,000 a month", monthly: 10000, rate: 12, years: 15 },
      { id: "ambitious", label: "₹25,000 a month", monthly: 25000, rate: 12, years: 20 }
    ],
    defaultPreset: "growth",
    sampleMonthly: 10000,
    sampleRate: 12,
    sampleYears: 15,
    goalTarget: 10000000,
    notice: "Expected return is an assumption, not a promise. Mutual fund returns are market-linked and not guaranteed — past returns do not predict future ones. Figures are before tax, exit load and fund expenses.",
    overviewTitle: "What does a SIP calculator do?",
    overview: "It turns three inputs — the monthly amount, the expected annual return and the number of years — into the estimated value of a systematic investment plan. Every month's instalment compounds from the month it is paid, so the earliest instalments do the most work: on a 15-year SIP, the money you invest in the first five years earns for a decade or more. This calculator shows the estimated maturity value, the total you invest and the estimated gains, plus a year-by-year table of that growth, so you can see what time does to a fixed monthly habit.",
    inputNote: "Use a return you can defend, not the best year a fund ever had: 10–12% a year is the range most long-term equity planning uses in India, 6–7% for debt. The calculator assumes the same return every month — real market returns vary, and they can be negative for stretches.",
    modelNote: "The formula is the standard SIP future-value formula with monthly compounding: FV = P × ((1 + i)^n − 1) ÷ i × (1 + i), where P is the monthly instalment, i is the monthly rate (annual return ÷ 12 ÷ 100) and n is the number of months. The final × (1 + i) counts each instalment from the start of its month — the convention Groww, ET Money, ClearTax and most Indian fund-house calculators use. Each instalment is assumed to be paid on the same date every month and to earn the same return until the end.",
    steps: [
      ["Pick a starting point, or enter your own figures", "A ₹5,000-a-month starter SIP at 12% over 10 years, ₹10,000 a month at 12% over 15 years, or ₹25,000 a month at 12% over 20 years. Change any figure to match your own plan."],
      ["Enter the monthly SIP amount", "The fixed amount you will invest every month. The calculator accepts ₹500 to ₹10,00,000 a month."],
      ["Enter the expected return and the tenure", "The annual return you are assuming for planning — not a forecast — and the number of years you will keep investing, from 1 to 40 years."],
      ["Read the value, the split and the growth table", "Your estimated maturity value, how much of it is money you invested and how much is estimated gains, the gains share, and a year-by-year table showing the value at the end of each year."]
    ],
    stories: [
      {
        monthly: 5000, rate: 12, years: 10, preset: "starter",
        title: "A ₹5,000-a-month SIP over 10 years",
        body: "Invest ₹5,000 a month at an assumed 12% a year for 10 years and the estimated value is ₹11,61,695 on ₹6,00,000 invested — ₹5,61,695 of estimated gains. After the first year the value is ₹64,047 on ₹60,000 invested; after five years it is ₹4,12,432 on ₹3,00,000 invested."
      },
      {
        monthly: 10000, rate: 12, years: 15, preset: "growth",
        title: "A ₹10,000-a-month SIP over 15 years",
        body: "Invest ₹10,000 a month at an assumed 12% a year for 15 years and the estimated value is ₹50,45,760 on ₹18,00,000 invested — ₹32,45,760 of estimated gains, nearly twice what you put in. After the first year the value is ₹1,28,093 on ₹1,20,000 invested; after ten years it is ₹23,23,391 on ₹12,00,000 invested."
      },
      {
        monthly: 25000, rate: 12, years: 20, preset: "ambitious",
        title: "A ₹25,000-a-month SIP over 20 years",
        body: "Invest ₹25,000 a month at an assumed 12% a year for 20 years and the estimated value is ₹2,49,78,698 on ₹60,00,000 invested — ₹1,89,78,698 of estimated gains, more than three times what you put in. After the first year the value is ₹3,20,233 on ₹3,00,000 invested; the gains overtake the amount invested in year 11."
      }
    ],
    compareMonthly: 10000,
    compareRate: 12,
    compareYears: [10, 15, 20],
    exampleTitle: "One SIP, three tenures",
    exampleNote: "The same ₹10,000 a month at an assumed 12% a year. A longer tenure means more invested — but the estimated value grows far faster than the amount invested, because the early instalments compound for longer.",
    exampleConclusion: "Five extra years turn ₹23,23,391 into ₹50,45,760 — more than double — on ₹6,00,000 more invested. Ten extra years turn it into ₹99,91,479, over four times the 10-year value, on ₹12,00,000 more invested. In a SIP, time is the biggest lever after the amount itself.",
    returnsMonthly: 10000,
    returnsYears: 15,
    returnsRates: [8, 10, 12, 15],
    returnsTitle: "What the return assumption does",
    returnsNote: "The same ₹10,000 a month for 15 years at four different assumed returns. The return is the single biggest lever on the outcome — and the least certain, because no fund guarantees it.",
    returnsConclusion: "Four percentage points of assumed return — 8% against 12% — move the estimated value from ₹34,83,451 to ₹50,45,760. That is why the return you type in matters more than any other input, and why it should be a planning assumption, never a promise.",
    faq: [
      ["What is the SIP formula?", "FV = P × ((1 + i)^n − 1) ÷ i × (1 + i). P is the monthly instalment, i is the monthly rate — the annual return divided by 12 and by 100 — and n is the number of months. For ₹10,000 a month at 12% a year over 15 years, i is 0.0100000, n is 180, (1 + i)^n is 5.9958, and the estimated value works out to ₹50,45,760. The formula assumes the same return every month and instalments paid at the start of each month."],
      ["Why does another SIP calculator show a different figure?", "Mostly the instalment timing. This calculator counts each instalment from the start of its month — the convention Groww, ET Money and ClearTax use — which adds one month of growth to every instalment. A calculator that counts instalments from the end of the month shows ₹49,95,802 for the same ₹10,000 a month at 12% over 15 years, ₹49,958 less. A smaller difference can also come from rounding the monthly rate differently. Check the convention before comparing two calculators."],
      ["Are SIP returns guaranteed?", "No. A SIP is a way of buying mutual fund units every month, and the units rise and fall with the market. The calculator applies one constant return to show a possible outcome; your actual value will follow the fund's real returns, and it can be below what you invested — especially over short periods. The 12% in the examples is a planning assumption for long-term equity investing, not a forecast for any fund. Mutual fund investments are subject to market risk; read the scheme documents before investing."],
      ["SIP or lump sum — which grows more?", "The same money invested at once grows more, because it is all invested from day one. Put the whole ₹18,00,000 in at once at 12% for 15 years and it becomes ₹1,07,92,444, against ₹50,45,760 for ₹10,000 a month over the same 15 years. But that comparison assumes you already have ₹18,00,000 and that you invest it at a good moment. A SIP's job is different: it spreads the entry over time, so a market fall buys you more units, and it turns a monthly salary into an investment habit. If you have a lump sum, investing it in parts over 6–12 months is the usual middle path."],
      ["What return should I assume?", "For long-term equity planning in India, 10–12% a year is the range most planners use — roughly the long-run record of diversified Indian equity, before tax and expenses. For debt funds, 6–7% is the usual planning range. Never assume the best year a fund ever had, and never use a past return as a promise: use the returns table on this page to see how much the assumption moves the outcome, then pick the lower end for a plan you must be able to keep."],
      ["What is a step-up SIP?", "A step-up SIP raises the monthly amount by a fixed percentage every year, usually in line with a salary rise. Raising ₹10,000 a month by 10% every year makes ₹33,74,326 in 10 years at 12%, on ₹19,12,491 invested — against ₹23,23,391 without the step-up. The extra ₹10,50,935 comes from investing more as your income grows, not from a higher return. This calculator shows the fixed-SIP case; add a step-up to your own plan by raising the monthly amount once a year."],
      ["Can I stop or pause a SIP?", "Yes — pause or stop a SIP at any time, with no penalty for stopping itself. The units you already bought stay invested and keep growing or falling with the market; only the future instalments stop. If you redeem units within a year of buying them, an exit load — usually 1% on equity funds — may apply, and the gains are taxed as short-term gains. Pausing for a few months during a tight patch is better than stopping for good: the units bought cheap in a falling market are the ones that do the most work later."],
      ["How are SIP gains taxed?", "The figures on this page are before tax. On equity funds — at least 65% in Indian shares — gains on units held up to 12 months are taxed at 20% as short-term gains; after 12 months, 12.5% on your total long-term gains above ₹1.25 lakh in a year, under the Finance Act 2024 (from 23 July 2024), plus 4% cess. Debt funds bought from 1 April 2023 are taxed at your income-tax slab rate. Each instalment's units count from the month you bought them, so a SIP's gains are a mix of short- and long-term. Confirm the figures with your Chartered Accountant before you file."],
      ["Does this calculator send my figures anywhere?", "No. The monthly amount, return and tenure stay in your browser — the calculation runs entirely on this page, nothing is sent to a server, and reloading the page clears your recent checks. This tool is a planning estimate, not investment advice; for advice on which funds suit you, talk to a SEBI-registered investment adviser."]
    ]
  },

  {
    key: "bmi",
    kind: "bmi",
    slug: "bmi-calculator",
    title: "BMI Calculator",
    meta: "Work out your Body Mass Index from your height and weight — BMI to one decimal place, the WHO category, and the healthy weight range for your height. Free, instant, and calculated in your browser.",
    lead: "Enter your height and weight and see your BMI, which WHO weight category it falls in, and the healthy weight range for your height — with the working shown, so you can check every number.",
    presets: [
      { id: "average", label: "Average adult", heightCm: 170, weightKg: 70 },
      { id: "taller", label: "Taller adult", heightCm: 180, weightKg: 85 },
      { id: "shorter", label: "Shorter adult", heightCm: 160, weightKg: 55 }
    ],
    defaultPreset: "average",
    sampleHeightCm: 170,
    sampleWeightKg: 70,
    notice: "BMI is a screening tool, not a diagnosis. It does not measure body fat directly, and it does not suit children, pregnant women, very muscular people or older adults. Talk to a doctor before acting on a result.",
    overviewTitle: "What does a BMI calculator do?",
    overview: "It turns two measurements — your height and your weight — into one number, the Body Mass Index. That number is then compared with the World Health Organization's adult weight categories, so you can see at a glance whether you are underweight, in the healthy range, overweight or obese. This calculator also works out the healthy weight range for your exact height, so you have a concrete target instead of just a label.",
    inputNote: "Measure your height without shoes and your weight in the morning, before eating, on the same scales each time. A centimetre or two of height makes a visible difference to the result, so measure rather than guess.",
    modelNote: "BMI is your weight in kilograms divided by your height in metres, squared: BMI = weight (kg) ÷ height (m)². The categories are the World Health Organization's adult classification: below 18.5 is underweight, 18.5 to 24.9 is healthy weight, 25.0 to 29.9 is overweight, and 30.0 and above is obese. The healthy weight range for a height is the weight that gives a BMI of 18.5 at the low end and 24.9 at the high end.",
    steps: [
      ["Pick a starting point, or enter your own figures", "An average adult at 170 cm and 70 kg, a taller adult at 180 cm and 85 kg, or a shorter adult at 160 cm and 55 kg. Change any figure to match your own measurements."],
      ["Enter your height", "In centimetres, or switch to feet and inches. The calculator accepts heights from 100 cm to 220 cm."],
      ["Enter your weight", "In kilograms. The calculator accepts weights from 20 kg to 300 kg."],
      ["Read your BMI, category and healthy range", "Your BMI to one decimal place, the WHO category, the healthy weight range for your height, and how far you are from that range — with the working shown underneath."]
    ],
    stories: [
      {
        heightCm: 170, weightKg: 70, preset: "average",
        title: "170 cm and 70 kg — healthy weight",
        body: "At 170 cm and 70 kg, the BMI is 70 ÷ (1.70 × 1.70) = 70 ÷ 2.89 = 24.2, which is in the healthy range. The healthy weight range for 170 cm is 53.5 to 72.0 kg, so 70 kg sits comfortably inside it — 2.0 kg below the top of the range."
      },
      {
        heightCm: 165, weightKg: 75, preset: null,
        title: "165 cm and 75 kg — overweight",
        body: "At 165 cm and 75 kg, the BMI is 75 ÷ (1.65 × 1.65) = 75 ÷ 2.7225 = 27.5, which is overweight. The healthy weight range for 165 cm is 50.4 to 67.8 kg, so 75 kg is 7.2 kg above the top of the range."
      },
      {
        heightCm: 175, weightKg: 55, preset: null,
        title: "175 cm and 55 kg — underweight",
        body: "At 175 cm and 55 kg, the BMI is 55 ÷ (1.75 × 1.75) = 55 ÷ 3.0625 = 18.0, which is underweight. The healthy weight range for 175 cm is 56.7 to 76.3 kg, so 55 kg is 1.7 kg below the bottom of the range."
      }
    ],
    categories: [
      ["Below 18.5", "Underweight", "Possible nutritional deficiency; talk to a doctor if you have lost weight without trying."],
      ["18.5 – 24.9", "Healthy weight", "The range linked to the lowest health risk for most adults."],
      ["25.0 – 29.9", "Overweight", "Increased risk of type 2 diabetes, heart disease and joint problems."],
      ["30.0 – 34.9", "Obese — Class I", "Moderate health risk; a plan with a doctor is worth making."],
      ["35.0 – 39.9", "Obese — Class II", "Severe health risk; medical advice is recommended."],
      ["40.0 and above", "Obese — Class III", "Very severe health risk; medical advice is strongly recommended."]
    ],
    rangeHeights: [150, 155, 160, 165, 170, 175, 180, 185, 190],
    rangeTitle: "Healthy weight for your height",
    rangeNote: "The weight range that gives a BMI of 18.5 to 24.9 at each height — the WHO healthy range. Find your height and read across.",
    rangeConclusion: "A 10 cm difference in height moves the healthy range by about 6 kg. That is why the same weight can be healthy for one person and overweight for another — the number only makes sense against your own height.",
    asianTitle: "A note for Indian readers: lower cut-offs apply",
    asianNote: "South Asians tend to develop diabetes and heart disease at lower BMIs than Europeans, so the WHO identifies lower public-health action points for Asian populations — 23 for overweight and 27.5 for obesity — and the Indian consensus guidelines (Misra et al., 2009) count 23.0–24.9 as overweight and 25 and above as obese, with a healthy range of 18.0–22.9. This calculator shows the WHO international categories as its main result; if you are of South Asian descent, treat a BMI from 23 upwards as a reason to talk to a doctor, even though the international table still calls it healthy weight.",
    faq: [
      ["What is the BMI formula?", "BMI = weight (kg) ÷ height (m)². Convert your height to metres first, square it, then divide your weight by that number. For 70 kg at 170 cm: 1.70 × 1.70 = 2.89, and 70 ÷ 2.89 = 24.2. In imperial units the same formula is BMI = (weight in pounds ÷ height in inches²) × 703."],
      ["What is a healthy BMI?", "The World Health Organization calls 18.5 to 24.9 the healthy range for adults. For a height of 170 cm that means a weight of 53.5 to 72.0 kg. The healthy range is different for every height — check the table on this page for yours. For Indian adults, the Indian consensus guidelines use a narrower healthy range of 18.0 to 22.9."],
      ["What are the BMI cut-offs for Indians?", "South Asians develop metabolic risk at lower BMIs, so lower cut-offs are used. The WHO identifies public-health action points of 23 for overweight and 27.5 for obesity in Asian populations, and the Indian consensus guidelines (Misra et al., 2009) count 23.0–24.9 as overweight and 25 and above as obese, with a healthy range of 18.0–22.9. This calculator's main result uses the WHO international bands; the note above explains the Indian cut-offs."],
      ["Is BMI accurate?", "BMI is a useful screening tool, not a diagnosis. It cannot tell muscle from fat, so a very muscular person can score as overweight without excess body fat, and an older adult can score as healthy while carrying too much fat and too little muscle. It also says nothing about where fat sits — fat around the waist carries more risk than fat elsewhere. Treat the number as a starting point for a conversation with a doctor, not a verdict."],
      ["How do I convert feet and inches to centimetres?", "Multiply the total inches by 2.54. For 5 ft 7 in: 5 × 12 + 7 = 67 inches, and 67 × 2.54 = 170.18 cm. At 70 kg that gives a BMI of 24.2 — the same as 170 cm. This calculator has a feet-and-inches option that does the conversion for you."],
      ["What should I do if my BMI is over 25?", "First, check the measurement — height without shoes, weight in the morning. Then talk to a doctor, especially if your BMI is 30 or more, or if you have diabetes, high blood pressure or a family history of heart disease. Small, steady changes work best: a 5–10% weight loss over six months already lowers risk, and crash diets rarely hold."],
      ["Does BMI work for children?", "No. Children's healthy weight changes with age and sex, so doctors use BMI-for-age percentile charts instead of the fixed adult bands. A child's BMI is plotted against other children of the same age and sex. This calculator is for adults only."],
      ["What is the difference between BMI and body fat percentage?", "BMI is a ratio of weight to height — it never measures fat directly. Body fat percentage is the share of your weight that is fat, measured by skinfold calipers, bioelectrical impedance scales or a DEXA scan. Two people with the same BMI can have very different body fat percentages, which is why BMI is a screening tool and body fat percentage is a closer measure."],
      ["Does this calculator send my figures anywhere?", "No. Your height and weight stay in your browser — the calculation runs entirely on this page, nothing is sent to a server, and reloading the page clears your recent checks. This tool is a screening aid, not medical advice; for advice about your own health, talk to a doctor."]
    ]
  },
];

export const css = `
.calc-page {
  --calc-brand: #176b87;
  --calc-ink: #172d3c;
  --calc-muted: #536775;
  --calc-line: #dbe5e9;
  --calc-paper: #f3f7f8;
  --calc-tint: #eaf5f7;
  color: var(--calc-ink);
  font-family: inherit;
}

.calc-wrap {
  width: min(1160px, calc(100% - 40px));
  margin-inline: auto;
}

.calc-hero {
  background: linear-gradient(135deg, #f7fbfc, #edf5f7 65%, #f7fafb);
  padding: 1.8rem 0 3.2rem;
  border-bottom: 1px solid var(--calc-line);
}

.calc-title {
  font-size: clamp(2.2rem, 4.2vw, 3.4rem);
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 800;
  margin: 0;
  color: var(--calc-ink);
}

.calc-lead {
  font-size: 1.12rem;
  color: var(--calc-muted);
  margin-top: 1.1rem;
  line-height: 1.6;
}

.hero-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 48px;
  align-items: start;
}

.hero-copy {
  padding-top: 12px;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  font-size: 12px;
  font-weight: 700;
  color: var(--calc-brand);
  margin-top: 18px;
}

.hero-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
}

.calc-link {
  color: var(--calc-brand);
  font-weight: 700;
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.calc-link:hover {
  color: var(--calc-ink);
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #ccdce2;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
}

.facts strong {
  display: block;
  font-size: 22px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--calc-ink);
}

.facts small {
  font-size: 11px;
  color: var(--calc-muted);
}

.scope-note {
  font-size: 13px;
  color: var(--calc-muted);
  border-left: 3px solid var(--calc-brand);
  padding-left: 14px;
  margin-top: 24px;
}

.calculator {
  background: #fff;
  border: 1px solid #cddce2;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 16px 50px rgba(23, 52, 75, 0.08);
  scroll-margin-top: 85px;
}

.tool-switch {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 5px;
  background: var(--calc-paper);
  border-radius: 11px;
  margin-bottom: 20px;
}

.tool-switch a {
  padding: 9px 5px;
  text-decoration: none;
  text-align: center;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 700;
  color: var(--calc-muted);
}

.tool-switch a[aria-current] {
  background: white;
  color: var(--calc-ink);
  box-shadow: 0 2px 6px rgba(23, 45, 60, 0.08), inset 0 -2px var(--calc-brand);
}

.tool-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.tool-title h2 {
  font-size: 20px;
  margin: 0;
}

.calc-pill {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  border: 1px solid var(--calc-line);
  border-radius: 20px;
  padding: 4px 9px;
  white-space: nowrap;
  background: var(--calc-tint);
  color: var(--calc-brand);
}

.calc-small {
  font-size: 13px;
  color: var(--calc-muted);
}

.field-label {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: baseline;
  font-size: 14px;
  font-weight: 700;
  margin-top: 18px;
  margin-bottom: 8px;
}

.field-label span {
  font-size: 12px;
  color: var(--calc-muted);
  font-weight: 500;
}

.number-input {
  width: 100%;
  height: 64px;
  font-size: 28px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 16px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.calc-error {
  min-height: 20px;
  color: #b42318;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 0;
}

.slider {
  display: block;
  accent-color: var(--calc-brand);
  width: 100%;
  height: 22px;
  margin: 6px 0;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--calc-muted);
}

.presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  margin: 14px 0;
  font-size: 11px;
  color: var(--calc-muted);
}

.presets button, .quiet {
  font-size: 12px;
  background: var(--calc-paper);
  border: 1px solid var(--calc-line);
  border-radius: 7px;
  padding: 6px 10px;
  color: var(--calc-ink);
  cursor: pointer;
}

.presets button:hover, .quiet:hover {
  border-color: var(--calc-brand);
  color: var(--calc-brand);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.calc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 9px 16px;
  border: 1px solid var(--calc-line);
  border-radius: 9px;
  background: white;
  color: var(--calc-ink);
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.calc-btn-primary {
  background: var(--calc-brand);
  color: white;
  border-color: var(--calc-brand);
}

.calc-btn-primary:hover {
  background: #0f4c60;
  color: white;
}

.actions .calc-btn-primary {
  flex: 1;
}

.result {
  background: var(--calc-ink);
  color: #fff;
  border-radius: 14px;
  padding: 22px;
  margin-top: 20px;
}

.result-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  color: #d2e1e8;
}

.result h3 {
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin: 14px 0 0;
}

.result-value {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.result output {
  font-size: 58px;
  line-height: 1.2;
  letter-spacing: -0.05em;
  font-weight: 800;
}

.result-unit {
  font-size: 18px;
  color: #c7dce7;
}

.rail {
  height: 5px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  margin: 14px 0;
  overflow: hidden;
}

.rail span {
  display: block;
  height: 100%;
  width: 0;
  background: #96d8dc;
  transition: width 0.2s ease;
}

.working {
  font-size: 13px;
  color: #e2edf2;
  overflow-wrap: anywhere;
  margin: 0;
}

.result-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.copy-btn {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.copy-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
}

.calc-status {
  font-size: 11px;
  color: #e2edf2;
  min-height: 20px;
}

.copy-box {
  width: 100%;
  min-height: 100px;
  background: white;
  color: var(--calc-ink);
  padding: 10px;
  font-size: 12px;
  border-radius: 8px;
  margin-top: 12px;
  box-sizing: border-box;
}

.history {
  margin-top: 18px;
}

.history-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
}

.history-list {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.history-list button {
  border: 1px solid var(--calc-line);
  background: white;
  color: var(--calc-ink);
  border-radius: 7px;
  font-size: 11px;
  padding: 6px 9px;
  cursor: pointer;
}

.jump {
  position: sticky;
  top: 78px;
  z-index: 15;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid var(--calc-line);
  backdrop-filter: blur(10px);
}

.jump-row {
  display: flex;
  overflow-x: auto;
  gap: 22px;
  align-items: center;
  min-height: 52px;
  scrollbar-width: thin;
}

.jump a {
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  color: var(--calc-muted);
}

.jump a:hover {
  color: var(--calc-brand);
}

.calc-section {
  padding: 56px 0;
  scroll-margin-top: 135px;
}

.calc-section + .calc-section {
  border-top: 1px solid var(--calc-line);
}

.section-head {
  max-width: 780px;
  margin-bottom: 24px;
}

.section-head h2 {
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  margin: 0;
  color: var(--calc-ink);
}

.section-head p:last-child {
  color: var(--calc-muted);
  margin-top: 10px;
  font-size: 1.02rem;
}

.calc-section.soft {
  background: var(--calc-paper);
}

.grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
.grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.grid4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }

.calc-page .card {
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--calc-line);
  border-radius: 14px;
  background: #fff;
}

.calc-page .card p {
  font-size: 14px;
  color: var(--calc-muted);
  margin: 0;
}

.calc-page .card .number-label {
  font-size: 11px;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: var(--calc-brand);
  display: block;
  margin-bottom: 12px;
}

.step {
  border-top: 3px solid var(--calc-brand);
  padding-top: 18px;
  background: #fff;
  border-radius: 0 0 10px 10px;
  padding: 18px 16px;
  border-inline: 1px solid var(--calc-line);
  border-bottom: 1px solid var(--calc-line);
}

.step h3 {
  font-size: 15px;
  margin: 0 0 8px;
  color: var(--calc-ink);
}

.step p {
  font-size: 13px;
  color: var(--calc-muted);
  margin: 0;
}

.step-index {
  display: block;
  font-size: 12px;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: var(--calc-brand);
  margin-bottom: 10px;
}

.formula-banner {
  background: var(--calc-ink);
  color: white;
  border-radius: 14px;
  padding: 24px;
  margin: 22px 0;
  font-size: clamp(16px, 2.2vw, 24px);
  font-weight: 700;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}

.formula-banner small {
  display: block;
  font-size: 11px;
  color: #c6dde7;
  letter-spacing: 0.11em;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.math-step {
  background: var(--calc-paper);
  border: 1px solid var(--calc-line);
  border-radius: 12px;
  padding: 16px;
  font-size: 13px;
}

.math-step strong {
  display: block;
  font-size: 20px;
  margin: 6px 0;
  color: var(--calc-ink);
}

.callout {
  border-left: 3px solid var(--calc-brand);
  padding: 16px 20px;
  background: var(--calc-tint);
  border-radius: 0 10px 10px 0;
  font-size: 14px;
  margin-top: 22px;
}

.example-score {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  padding: 14px 0;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--calc-line);
}

.example-score strong {
  font-size: 24px;
  letter-spacing: -0.025em;
  color: var(--calc-ink);
}

.example-score small {
  display: block;
  font-size: 10px;
  color: var(--calc-muted);
}

.example-score .arrow {
  color: var(--calc-brand);
  font-size: 18px;
}

.example-card .calc-btn {
  margin-top: 18px;
}

.calc-table-scroll {
  overflow-x: auto;
  border: 1px solid var(--calc-line);
  border-radius: 12px;
  background: white;
}

.calc-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.calc-table caption {
  text-align: left;
  padding: 12px 16px;
  color: var(--calc-muted);
  font-size: 12px;
}

.calc-table th, .calc-table td {
  text-align: left;
  padding: 12px 16px;
  border-top: 1px solid var(--calc-line);
}

.calc-table thead {
  background: var(--calc-paper);
}

.calc-table th {
  font-size: 12px;
  font-weight: 700;
  color: var(--calc-ink);
}

.calc-table tbody tr:hover {
  background: #f7fbfc;
}

.calc-table-btn {
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--calc-brand);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 700;
  font-size: 14px;
  padding: 2px;
  cursor: pointer;
}

.bullets {
  padding-left: 20px;
  margin: 14px 0 0;
  color: var(--calc-muted);
  font-size: 14px;
}

.bullets li + li {
  margin-top: 8px;
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.65fr 1.35fr;
  gap: 40px;
}

.faq-intro p {
  margin-top: 14px;
  color: var(--calc-muted);
  font-size: 14px;
}

.calc-faq {
  border-bottom: 1px solid var(--calc-line);
  padding: 16px 0;
}

.calc-faq:first-child {
  border-top: 1px solid var(--calc-line);
}

.calc-faq summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  color: var(--calc-ink);
}

.calc-faq p {
  padding-top: 10px;
  font-size: 14px;
  color: var(--calc-muted);
  margin: 0;
}

.method-box {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--calc-line);
  margin-top: 24px;
  font-size: 13px;
  color: var(--calc-muted);
}

.method-box strong {
  color: var(--calc-ink);
}

.sources {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-top: 10px;
}

.sources a {
  color: var(--calc-brand);
  font-weight: 700;
}

.calc-cta {
  background: var(--calc-ink);
  color: white;
  border-radius: 18px;
  padding: 36px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.calc-cta h2 {
  font-size: 26px;
  margin: 0;
  color: white;
}

.calc-cta p {
  color: #d3e2e9;
  margin-top: 8px;
  font-size: 14px;
}

.calc-cta .actions {
  flex-shrink: 0;
}

@media(max-width: 1000px) {
  .hero-grid { gap: 28px; }
  .grid4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .calc-cta { align-items: flex-start; flex-direction: column; }
}

@media(max-width: 760px) {
  .calc-wrap { width: min(100% - 30px, 600px); }
  .hero-grid, .grid2, .grid3, .faq-grid { grid-template-columns: 1fr; }
  .hero-copy { padding-top: 0; }
  .calc-hero { padding-bottom: 28px; }
  .calc-section { padding: 40px 0; }
  .calculator { padding: 18px; }
  .result output { font-size: 48px; }
  .calc-cta { padding: 24px; }
}

@media(max-width: 400px) {
  .grid4 { grid-template-columns: 1fr; }
  .facts strong { font-size: 19px; }
  .calculator { padding: 14px; }
}
`;

export function client(c) {
  const $ = id => document.getElementById(id);

  const input = $("score");
  const range = $("score-range");
  const output = $("answer");
  const error = $("input-error");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");

  const history = [];
  let summary = "";

  const fmt = n => new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(n);

  function current() {
    if (input.value.trim() === "" || input.validity.badInput) return null;
    const n = input.valueAsNumber;
    return Number.isFinite(n) && n >= 0 && n <= c.limit ? n : null;
  }

  function calculate(n) {
    return c.key === "wam" ? n / 100 * 7 : n / 7 * 100;
  }

  function paint(showEmptyError = false) {
    const n = current();
    const empty = input.value === "" && !input.validity.badInput;
    const invalid = n === null && (!empty || showEmptyError);

    error.textContent = invalid
      ? "Enter a valid " + c.input + " between 0 and " + c.limit + "."
      : "";

    input.setAttribute("aria-invalid", String(invalid));
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = n === null;

    if (n === null) {
      output.textContent = "—";
      $("working").textContent = "Enter a valid value to see the working.";
      $("meter-fill").style.width = "0%";
      summary = "";
      return false;
    }

    const result = calculate(n);
    output.textContent = fmt(result);

    $("working").textContent = c.key === "wam"
      ? n + " ÷ 100 × 7 = " + fmt(result)
      : n + " ÷ 7 × 100 = " + fmt(result);

    $("meter-fill").style.width = (c.key === "wam" ? n : result) + "%";
    range.value = String(n);

    summary =
      "Visit-Best | " + c.title +
      "\n" + c.input + ": " + n + " / " + c.limit +
      "\nEstimated " + c.output + ": " + fmt(result) + " / " + c.outputLimit +
      "\n" + c.formula +
      "\nLinear estimate only. Not an official university conversion.";

    return true;
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();

    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;

    history.forEach(n => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent =
        n + " " + c.input + " → " + fmt(calculate(n)) + " " + c.output;

      button.setAttribute("aria-label", "Load estimate for " + n + " " + c.input);

      button.addEventListener("click", () => {
        input.value = String(n);
        paint();
        input.focus();
      });

      list.append(button);
    });
  }

  input.addEventListener("input", () => paint());

  range.addEventListener("input", () => {
    input.value = range.value;
    paint();
  });

  document.querySelectorAll("[data-preset]").forEach(button => {
    button.addEventListener("click", () => {
      input.value = button.dataset.preset;
      paint();

      if (button.hasAttribute("data-jump")) {
        $("calculator").scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start"
        });

        input.focus({ preventScroll: true });
      }
    });
  });

  $("score-form").addEventListener("submit", event => {
    event.preventDefault();

    if (!paint(true)) {
      input.focus();
      return;
    }

    const n = current();
    const old = history.indexOf(n);

    if (old !== -1) history.splice(old, 1);
    history.unshift(n);
    if (history.length > 5) history.pop();

    renderHistory();
    $("result").focus();
  });

  $("reset").addEventListener("click", () => {
    input.value = "";
    range.value = "0";
    paint();
    input.focus();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    const text = summary;

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Manual copy");
      }

      await navigator.clipboard.writeText(text);

      if (summary === text) {
        status.textContent = "Result and formula copied.";
      }
    } catch {
      if (summary !== text) return;

      copyBox.hidden = false;
      copyBox.value = text;
      copyBox.focus();
      copyBox.select();
      status.textContent = "Copy the selected summary below.";
    }
  });

  paint();
  renderHistory();
}

export const ageCss = `
.date-input, .select-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.date-input[aria-invalid="true"], .select-input[aria-invalid="true"] {
  border-color: #b42318;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.field-row .number-input {
  height: 56px;
  font-size: 20px;
}

.verdict {
  border-radius: 12px;
  padding: 16px 18px;
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.5;
}

.verdict strong {
  display: block;
  font-size: 19px;
  margin-bottom: 4px;
}

.verdict-ok {
  background: #e6f4ea;
  color: #14532d;
  border: 1px solid #86c79a;
}

.verdict-no {
  background: #fdecea;
  color: #7a1f16;
  border: 1px solid #e5a49d;
}

.verdict-young {
  background: #fff7e0;
  color: #6b4e00;
  border: 1px solid #e3c878;
}

.age-breakdown {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 14px;
}

.age-breakdown div {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 10px 12px;
}

.age-breakdown strong {
  display: block;
  font-size: 26px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.age-breakdown small {
  font-size: 11px;
  color: #c7dce7;
}

.band-note {
  font-size: 12px;
  color: var(--calc-muted);
  margin-top: 6px;
}

.esm-note {
  font-size: 12px;
  color: var(--calc-muted);
  margin-top: 6px;
}

.inline-link {
  color: var(--calc-brand);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
}

.result .working + .working {
  margin-top: 8px;
}

.calc-page .tool-switch {
  grid-template-columns: repeat(3, 1fr);
}
`;

export function sscAgeParts(dobISO, cutISO) {
  const dob = new Date(dobISO + "T00:00:00Z");
  const cut = new Date(cutISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
  let y = cut.getUTCFullYear() - dob.getUTCFullYear();
  let m = cut.getUTCMonth() - dob.getUTCMonth();
  let d = cut.getUTCDate() - dob.getUTCDate();
  if (d < 0) {
    m -= 1;
    const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
    d += prev.getUTCDate();
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { y, m, d };
}

export function sscAddDuration(dobISO, years, months) {
  const dob = new Date(dobISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime())) return null;
  let y = dob.getUTCFullYear() + (years || 0);
  let m = dob.getUTCMonth() + (months || 0);
  y += Math.floor(m / 12);
  m = ((m % 12) + 12) % 12;
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  const d = Math.min(dob.getUTCDate(), last);
  return new Date(Date.UTC(y, m, d));
}

export function sscISODate(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return y + "-" + m + "-" + d;
}

export function sscWindow(cutISO, min, max, relaxYears, serviceY, serviceM) {
  const cut = new Date(cutISO + "T00:00:00Z");
  if (Number.isNaN(cut.getTime())) return null;
  const earliestBase = sscAddDuration(cutISO, -(max + (relaxYears || 0)), 0);
  const earliestPlusDay = new Date(earliestBase.getTime() + 86400000);
  const earliest = sscAddDuration(sscISODate(earliestPlusDay), -(serviceY || 0), -(serviceM || 0));
  const latest = sscAddDuration(cutISO, -min, 0);
  return { earliest: sscISODate(earliest), latest: sscISODate(latest) };
}

export function upscCutoff(year) {
  return year + "-08-01";
}

export function upscLimits(catId, extraId) {
  const cats = { gen: { relax: 0, attempts: 6 }, ews: { relax: 0, attempts: 6 }, obc: { relax: 3, attempts: 9 }, sc: { relax: 5, attempts: null }, st: { relax: 5, attempts: null } };
  const extras = { none: 0, pwbd: 10, esm: 5, defence: 3 };
  const cat = cats[catId] || cats.gen;
  const extraRelax = extras[extraId] === undefined ? 0 : extras[extraId];
  const upper = 32 + cat.relax + extraRelax;
  const attempts = (catId === "sc" || catId === "st") ? null : (extraId === "pwbd" ? 9 : cat.attempts);
  return { upper, attempts, relax: cat.relax + extraRelax };
}

export function upscAttemptsLeft(allowed, used) {
  if (allowed === null) return null;
  return Math.max(0, allowed - (used || 0));
}

export function upscEligibleYears(dobISO, upper) {
  const dob = new Date(dobISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime())) return null;
  let first = null;
  for (let y = dob.getUTCFullYear() + 20; y <= dob.getUTCFullYear() + 24; y++) {
    const a = sscAgeParts(dobISO, y + "-08-01");
    if (a && a.y >= 21) {
      first = y;
      break;
    }
  }
  if (first === null) return null;
  let last = null;
  for (let y = first; y <= first + 44; y++) {
    const a = sscAgeParts(dobISO, y + "-08-01");
    if (a && a.y < upper) last = y;
    else break;
  }
  return { first, last };
}

export function ibpsExam(examId) {
  const exams = {
    po: { cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
    clerk: { cut: "2026-08-01", min: 20, upper: 28, exsm: "service3", widow: true },
    so: { cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
    "rrb-oa": { cut: "2026-09-01", min: 18, upper: 28, exsm: "service3", widow: true },
    "rrb-1": { cut: "2026-09-01", min: 18, upper: 30, exsm: "flat5", widow: false },
    "rrb-2": { cut: "2026-09-01", min: 21, upper: 32, exsm: "flat5", widow: false },
    "rrb-3": { cut: "2026-09-01", min: 21, upper: 40, exsm: "flat5", widow: false }
  };
  return exams[examId] || exams.po;
}

export function ibpsCutoff(examId) {
  return ibpsExam(examId).cut;
}

export function ibpsLimits(examId, catId, extraId, serviceYears) {
  const exam = ibpsExam(examId);
  const cats = { gen: 0, ews: 0, obc: 3, sc: 5, st: 5 };
  const catRelax = cats[catId] === undefined ? 0 : cats[catId];
  const service = Number(serviceYears) || 0;
  let upper;
  let capped = false;
  if (extraId === "pwbd") {
    upper = exam.upper + catRelax + 10;
  } else if (extraId === "esm") {
    if (exam.exsm === "flat5") {
      upper = exam.upper + catRelax + (service >= 5 ? 5 : 0);
    } else {
      upper = exam.upper + catRelax + service + 3;
      if (upper > 50) {
        upper = 50;
        capped = true;
      }
    }
  } else if (extraId === "widow" && exam.widow) {
    upper = 35 + catRelax;
  } else {
    upper = exam.upper + catRelax;
  }
  return { upper, min: exam.min, relax: upper - exam.upper, capped };
}

export function ibpsEligibleYears(dobISO, examId, upper) {
  const exam = ibpsExam(examId);
  const dob = new Date(dobISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime())) return null;
  const md = exam.cut.slice(5);
  let first = null;
  for (let y = dob.getUTCFullYear() + exam.min - 1; y <= dob.getUTCFullYear() + exam.min + 4; y++) {
    const a = sscAgeParts(dobISO, y + "-" + md);
    if (a && a.y >= exam.min) {
      first = y;
      break;
    }
  }
  if (first === null) return null;
  let last = null;
  for (let y = first; y <= first + 44; y++) {
    const a = sscAgeParts(dobISO, y + "-" + md);
    if (a && a.y < upper) last = y;
    else break;
  }
  return { first, last };
}

export function rrbExam(examId) {
  const exams = {
    "ntpc-g": { cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
    "ntpc-ug": { cut: "2027-01-01", min: 18, upper: 30, pwbd: true, ccaa: false },
    groupd: { cut: "2026-01-01", min: 18, upper: 33, pwbd: true, ccaa: true },
    alp: { cut: "2026-07-01", min: 18, upper: 30, pwbd: false, ccaa: true },
    tech1: { cut: "2026-07-01", min: 18, upper: 33, pwbd: true, ccaa: false },
    tech3: { cut: "2026-07-01", min: 18, upper: 30, pwbd: true, ccaa: true },
    je: { cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
    sc: { cut: "2026-07-01", min: 20, upper: 33, pwbd: true, ccaa: false }
  };
  return exams[examId] || exams["ntpc-g"];
}

export function rrbCutoff(examId) {
  return rrbExam(examId).cut;
}

export function rrbLimits(examId, catId, extraId, years) {
  const exam = rrbExam(examId);
  const cats = { gen: 0, ews: 0, obc: 3, sc: 5, st: 5 };
  const catRelax = cats[catId] === undefined ? 0 : cats[catId];
  const yrs = Number(years) || 0;
  // RRB gives the MAXIMUM relaxation a candidate is eligible for — the
  // relaxations do not add up (unlike IBPS/UPSC, where a category relaxation
  // stacks with one further clause). Every figure below already includes
  // the category relaxation where the CEN states it by category:
  // PwBD 10/13/15, ex-serviceman 3/6/8 (after service is deducted from
  // age), widow and CCAA-before-25 35/38/40, railway staff 40/43/45.
  const pwbdExtra = { gen: 10, ews: 10, obc: 13, sc: 15, st: 15 };
  const esmExtra = { gen: 3, ews: 3, obc: 6, sc: 8, st: 8 };
  const ccaaCap = { gen: 3, ews: 3, obc: 6, sc: 8, st: 8 };
  let upper;
  if (extraId === "pwbd" && exam.pwbd) {
    upper = exam.upper + pwbdExtra[catId];
  } else if (extraId === "esm") {
    // Needs more than six months of service (whole years >= 1); the service
    // is deducted from the age first, then the extra years apply. No cap.
    upper = yrs >= 1 ? exam.upper + yrs + esmExtra[catId] : exam.upper + catRelax;
  } else if (extraId === "widow") {
    upper = 35 + catRelax;
  } else if (extraId === "staff") {
    upper = 40 + catRelax;
  } else if (extraId === "ccaa" && exam.ccaa) {
    upper = exam.upper + Math.min(catRelax + yrs, ccaaCap[catId]);
  } else if (extraId === "ccaa25" && exam.ccaa) {
    upper = 35 + catRelax;
  } else {
    upper = exam.upper + catRelax;
  }
  return { upper, min: exam.min, relax: upper - exam.upper };
}

export function rrbEligibleYears(dobISO, examId, upper) {
  const exam = rrbExam(examId);
  const dob = new Date(dobISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime())) return null;
  const md = exam.cut.slice(5);
  let first = null;
  for (let y = dob.getUTCFullYear() + exam.min - 1; y <= dob.getUTCFullYear() + exam.min + 4; y++) {
    const a = sscAgeParts(dobISO, y + "-" + md);
    if (a && a.y >= exam.min) {
      first = y;
      break;
    }
  }
  if (first === null) return null;
  let last = null;
  for (let y = first; y <= first + 44; y++) {
    const a = sscAgeParts(dobISO, y + "-" + md);
    if (a && a.y < upper) last = y;
    else break;
  }
  return { first, last };
}

export function ageClient(c) {
  const $ = id => document.getElementById(id);

  function sscAgeParts(dobISO, cutISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
    let y = cut.getUTCFullYear() - dob.getUTCFullYear();
    let m = cut.getUTCMonth() - dob.getUTCMonth();
    let d = cut.getUTCDate() - dob.getUTCDate();
    if (d < 0) {
      m -= 1;
      const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
      d += prev.getUTCDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { y, m, d };
  }

  function sscAddDuration(dobISO, years, months) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    let y = dob.getUTCFullYear() + (years || 0);
    let m = dob.getUTCMonth() + (months || 0);
    y += Math.floor(m / 12);
    m = ((m % 12) + 12) % 12;
    const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const d = Math.min(dob.getUTCDate(), last);
    return new Date(Date.UTC(y, m, d));
  }

  function sscISODate(date) {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function sscWindow(cutISO, min, max, relaxYears, serviceY, serviceM) {
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(cut.getTime())) return null;
    const earliestBase = sscAddDuration(cutISO, -(max + (relaxYears || 0)), 0);
    const earliestPlusDay = new Date(earliestBase.getTime() + 86400000);
    const earliest = sscAddDuration(sscISODate(earliestPlusDay), -(serviceY || 0), -(serviceM || 0));
    const latest = sscAddDuration(cutISO, -min, 0);
    return { earliest: sscISODate(earliest), latest: sscISODate(latest) };
  }

  const dobInput = $("dob");
  const examSelect = $("exam");
  const bandSelect = $("band");
  const bandNote = $("band-note");
  const cutoffInput = $("cutoff");
  const categorySelect = $("category");
  const serviceWrap = $("service-wrap");
  const serviceY = $("service-y");
  const serviceM = $("service-m");
  const dobError = $("dob-error");
  const cutoffError = $("cutoff-error");
  const serviceError = $("service-error");
  const output = $("answer");
  const verdict = $("verdict");
  const verdictTitle = $("verdict-title");
  const verdictText = $("verdict-text");
  const working = $("working");
  const workingEsm = $("working-esm");
  const windowLine = $("window-line");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtDate = iso => {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  };

  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const ageText = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const examById = id => c.exams.find(e => e.id === id) || c.exams[0];
  const currentExam = () => examById(examSelect.value);
  const currentBand = () => {
    const exam = currentExam();
    return exam.bands.find(b => b.id === bandSelect.value) || exam.bands[0];
  };
  const currentCategory = () => {
    const exam = currentExam();
    return exam.categories.find(cat => cat.id === categorySelect.value) || exam.categories[0];
  };

  function rebuildOptions() {
    const exam = currentExam();
    const prevBand = bandSelect.value;
    const prevCat = categorySelect.value;
    bandSelect.replaceChildren();
    exam.bands.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.textContent = b.label + " — " + b.posts;
      bandSelect.append(opt);
    });
    if (exam.bands.some(b => b.id === prevBand)) bandSelect.value = prevBand;
    bandNote.textContent = exam.bands.length > 1
      ? "Choose the band for the post you want. The limit is post-wise in this exam."
      : exam.bands[0].posts + ".";
    categorySelect.replaceChildren();
    exam.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.label + (cat.relax ? " (+" + cat.relax + " years)" : " (no relaxation)");
      categorySelect.append(opt);
    });
    if (exam.categories.some(cat => cat.id === prevCat)) categorySelect.value = prevCat;
  }

  function paint(showEmptyError = false) {
    const dobVal = dobInput.value;
    const cutVal = cutoffInput.value;
    const exam = currentExam();
    const band = currentBand();
    const cat = currentCategory();
    const isEsm = !!cat.esm;

    serviceWrap.hidden = !isEsm;

    let dobMsg = "";
    if (!dobVal) {
      if (showEmptyError) dobMsg = "Enter your date of birth.";
    } else if (dobInput.validity.badInput) {
      dobMsg = "Enter a valid date of birth.";
    } else if (dobVal < "1900-01-01") {
      dobMsg = "Enter a date of birth on or after 1 January 1900.";
    } else if (cutVal && dobVal > cutVal) {
      dobMsg = "Date of birth must be on or before the cut-off date.";
    }
    dobError.textContent = dobMsg;
    dobInput.setAttribute("aria-invalid", String(dobMsg !== ""));

    let cutMsg = "";
    if (!cutVal) {
      if (showEmptyError) cutMsg = "Enter a cut-off date.";
    } else if (cutoffInput.validity.badInput) {
      cutMsg = "Enter a valid cut-off date.";
    }
    cutoffError.textContent = cutMsg;
    cutoffInput.setAttribute("aria-invalid", String(cutMsg !== ""));

    let serviceMsg = "";
    let sy = 0;
    let sm = 0;
    if (isEsm) {
      sy = serviceY.value === "" ? 0 : Number(serviceY.value);
      sm = serviceM.value === "" ? 0 : Number(serviceM.value);
      if (!Number.isFinite(sy) || sy < 0 || sy > 40) serviceMsg = "Service years must be between 0 and 40.";
      else if (!Number.isFinite(sm) || sm < 0 || sm > 11) serviceMsg = "Service months must be between 0 and 11.";
    }
    serviceError.textContent = serviceMsg;

    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;

    const valid = dobMsg === "" && cutMsg === "" && serviceMsg === "" && dobVal && cutVal;
    if (!valid) {
      output.textContent = "—";
      verdict.hidden = true;
      working.textContent = "Enter your date of birth to see the working.";
      workingEsm.hidden = true;
      windowLine.textContent = "";
      $("meter-fill").style.width = "0%";
      summary = "";
      return false;
    }

    const age = sscAgeParts(dobVal, cutVal);
    if (!age) {
      output.textContent = "—";
      verdict.hidden = true;
      working.textContent = "Enter your date of birth to see the working.";
      workingEsm.hidden = true;
      windowLine.textContent = "";
      $("meter-fill").style.width = "0%";
      summary = "";
      return false;
    }

    let effAge = age;
    if (isEsm) {
      const effDob = sscAddDuration(dobVal, sy, sm);
      if (!effDob || sscISODate(effDob) > cutVal) {
        serviceError.textContent = "Service is longer than your age on the cut-off date.";
        output.textContent = "—";
        verdict.hidden = true;
        working.textContent = "Enter your date of birth to see the working.";
        workingEsm.hidden = true;
        windowLine.textContent = "";
        $("meter-fill").style.width = "0%";
        summary = "";
        return false;
      }
      effAge = sscAgeParts(sscISODate(effDob), cutVal);
    }

    const maxEff = band.max + cat.relax;
    const win = sscWindow(cutVal, band.min, band.max, cat.relax, isEsm ? sy : 0, isEsm ? sm : 0);

    output.textContent = ageText(age);
    $("meter-fill").style.width = Math.min(100, (age.y / maxEff) * 100) + "%";
    working.textContent = fmtDate(dobVal) + " → " + fmtDate(cutVal) + " = " + ageText(age) + ".";
    if (isEsm) {
      workingEsm.hidden = false;
      workingEsm.textContent = "After deducting " + plural(sy, "year", "years") + " " + plural(sm, "month", "months") + " of service: " + ageText(effAge) + ".";
    } else {
      workingEsm.hidden = true;
    }
    windowLine.textContent = "Born between " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) + " (both dates included) for " + band.label + " with " + cat.label + ".";

    let title = "";
    let text = "";
    let kind = "";
    if (age.y < band.min) {
      const turnsMin = sscAddDuration(dobVal, band.min, 0);
      title = "Too young for this exam";
      text = "You are " + ageText(age) + " on " + fmtDate(cutVal) + ". You turn " + band.min + " on " + fmtDate(sscISODate(turnsMin)) + ", after the crucial date.";
      kind = "verdict-young";
    } else if (effAge.y >= maxEff) {
      title = "Over the upper age limit";
      text = "You are " + ageText(age) + " on " + fmtDate(cutVal) + (isEsm ? " (" + ageText(effAge) + " after deducting service)" : "") + ". The upper limit for " + band.label + " with " + cat.label + " is " + maxEff + " years, and you must not have attained it.";
      kind = "verdict-no";
    } else {
      title = "Eligible by age";
      text = "You are " + ageText(age) + " on " + fmtDate(cutVal) + " — inside " + band.min + "–" + maxEff + " years for " + exam.name + " (" + band.label + (cat.relax ? ", upper limit " + maxEff + " with " + cat.label : "") + ").";
      kind = "verdict-ok";
    }
    verdict.hidden = false;
    verdict.className = "verdict " + kind;
    verdictTitle.textContent = title;
    verdictText.textContent = text;
    copyButton.disabled = false;

    summary =
      "Visit-Best | SSC Age Calculator" +
      "\nDate of birth: " + fmtDate(dobVal) +
      "\nExam: " + exam.name + " (" + band.label + ")" +
      "\nCut-off date: " + fmtDate(cutVal) +
      "\nAge as on the cut-off date: " + ageText(age) +
      (isEsm ? "\nAge after deducting service: " + ageText(effAge) : "") +
      "\nCategory: " + cat.label +
      "\nVerdict: " + title + " — " + text +
      "\nBorn between " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) +
      "\nAge only. The official SSC notice decides eligibility.";

    return true;
  }

  function scenarioKey() {
    return [dobInput.value, examSelect.value, bandSelect.value, categorySelect.value, cutoffInput.value, serviceY.value, serviceM.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const age = sscAgeParts(item.dob, item.cutoff);
      button.textContent = fmtDate(item.dob) + " → " + (age ? ageText(age) : "—") + " · " + item.examShort + " " + item.bandLabel;
      button.setAttribute("aria-label", "Load check for " + fmtDate(item.dob) + ", " + item.examShort);
      button.addEventListener("click", () => {
        loadScenario(item);
        dobInput.focus();
      });
      list.append(button);
    });
  }

  function loadScenario(item) {
    dobInput.value = item.dob || "";
    examSelect.value = item.examId || c.exams[0].id;
    rebuildOptions();
    if (item.bandId) bandSelect.value = item.bandId;
    if (item.categoryId) categorySelect.value = item.categoryId;
    cutoffInput.value = item.cutoff || currentExam().cutoff;
    serviceY.value = item.serviceY || "";
    serviceM.value = item.serviceM || "";
    paint();
  }

  function scrollToCalculator() {
    $("calculator").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }

  examSelect.addEventListener("change", () => {
    cutoffInput.value = currentExam().cutoff;
    rebuildOptions();
    paint();
  });
  bandSelect.addEventListener("change", () => paint());
  categorySelect.addEventListener("change", () => paint());
  [dobInput, cutoffInput, serviceY, serviceM].forEach(el => {
    el.addEventListener("input", () => paint());
    el.addEventListener("change", () => paint());
  });

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", () => {
      loadScenario({
        dob: button.dataset.dob || "",
        examId: button.dataset.exam || "",
        bandId: button.dataset.band || "",
        categoryId: button.dataset.category || "",
        cutoff: button.dataset.cutoff || "",
        serviceY: "",
        serviceM: ""
      });
      if (button.hasAttribute("data-jump")) scrollToCalculator();
    });
  });

  document.querySelectorAll("[data-exam-link]").forEach(button => {
    button.addEventListener("click", () => {
      examSelect.value = button.dataset.examLink;
      cutoffInput.value = currentExam().cutoff;
      rebuildOptions();
      if (button.dataset.bandLink) bandSelect.value = button.dataset.bandLink;
      paint();
      if (button.hasAttribute("data-jump")) scrollToCalculator();
    });
  });

  $("cutoff-reset").addEventListener("click", () => {
    cutoffInput.value = currentExam().cutoff;
    paint();
    cutoffInput.focus();
  });

  $("age-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!paint(true)) {
      dobInput.focus();
      return;
    }
    const exam = currentExam();
    const band = currentBand();
    const item = {
      dob: dobInput.value,
      examId: exam.id,
      examShort: exam.short,
      bandId: band.id,
      bandLabel: band.label,
      categoryId: currentCategory().id,
      cutoff: cutoffInput.value,
      serviceY: serviceY.value,
      serviceM: serviceM.value
    };
    const key = scenarioKey();
    const old = history.findIndex(h => [h.dob, h.examId, h.bandId, h.categoryId, h.cutoff, h.serviceY, h.serviceM].join("|") === key);
    if (old !== -1) history.splice(old, 1);
    history.unshift(item);
    if (history.length > 5) history.pop();
    renderHistory();
    $("result").focus();
  });

  $("reset").addEventListener("click", () => {
    dobInput.value = "";
    examSelect.value = c.exams[0].id;
    cutoffInput.value = currentExam().cutoff;
    rebuildOptions();
    categorySelect.value = currentExam().categories[0].id;
    serviceY.value = "";
    serviceM.value = "";
    paint();
    dobInput.focus();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    const text = summary;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Manual copy");
      await navigator.clipboard.writeText(text);
      if (summary === text) status.textContent = "Result and eligibility copied.";
    } catch {
      if (summary !== text) return;
      copyBox.hidden = false;
      copyBox.value = text;
      copyBox.focus();
      copyBox.select();
      status.textContent = "Copy the selected summary below.";
    }
  });

  rebuildOptions();
  paint();
  renderHistory();
}

export function renderAgeCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = iso => {
    const parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[2]) + " " + MONTHS[Number(parts[1]) - 1] + " " + parts[0];
  };
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const fmtAge = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");
  const verdictFor = (age, min, max) => (age.y < min ? "Too young" : age.y >= max ? "Over the limit" : "Eligible");

  const resolvedExams = p.exams.map(exam => ({ ...exam, categories: p.categories[exam.categories] }));
  const defaultExam = resolvedExams[0];
  const config = { key: p.key, title: p.title, exams: resolvedExams, defaultExam: defaultExam.id };
  const sampleDob = p.compareDob;

  const bandOptions = exam => exam.bands.map(b => `
    <option value="${e(b.id)}">${e(b.label)} — ${e(b.posts)}</option>
  `).join("");
  const categoryOptions = exam => exam.categories.map(cat => `
    <option value="${e(cat.id)}">${e(cat.label)}${cat.relax ? " (+" + cat.relax + " years)" : " (no relaxation)"}</option>
  `).join("");

  const referenceRows = resolvedExams.flatMap(exam => exam.bands.map(band => {
    const win = sscWindow(exam.cutoff, band.min, band.max, 0, 0, 0);
    return `
      <tr>
        <th scope="row">${e(exam.name)}</th>
        <td>${e(band.label)}</td>
        <td>${e(band.posts)}</td>
        <td>${fmtDate(exam.cutoff)}</td>
        <td>${fmtDate(win.earliest)} – ${fmtDate(win.latest)}</td>
        <td>
          <button class="calc-table-btn" type="button" data-exam-link="${e(exam.id)}" data-band-link="${e(band.id)}" data-jump>
            Check this band →
          </button>
        </td>
      </tr>`;
  })).join("");

  const compareRows = [
    ["cgl", "cgl-27"], ["chsl", "chsl-27"], ["gd", "gd-23"], ["mts", "mts-25"], ["mts", "mts-27"]
  ].map(([examId, bandId]) => {
    const exam = resolvedExams.find(x => x.id === examId);
    const band = exam.bands.find(b => b.id === bandId);
    const age = sscAgeParts(sampleDob, exam.cutoff);
    return `
      <tr>
        <th scope="row">${e(exam.name)}</th>
        <td>${fmtDate(exam.cutoff)}</td>
        <td>${fmtAge(age)}</td>
        <td>${e(band.label)}</td>
        <td>${verdictFor(age, band.min, band.max)}</td>
      </tr>`;
  }).join("");

  return `<style>${css}${ageCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free SSC eligibility checker</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Check your age →
              </a>
              <a href="#method" class="calc-link">How SSC counts age ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>4 exams</strong>
                <small>CGL · CHSL · GD · MTS</small>
              </div>
              <div>
                <strong>18–32</strong>
                <small>Age bands covered</small>
              </div>
              <div>
                <strong>0 data sent</strong>
                <small>Calculated in your browser</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Age only.</strong>
              The official notice decides eligibility. Always check
              <a href="https://ssc.gov.in/" rel="nofollow noopener" target="_blank">ssc.gov.in</a>
              before applying.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/" aria-current="page">SSC Age</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Check your SSC age eligibility</h2>
              <span class="calc-pill">4 SSC EXAMS</span>
            </div>

            <p class="calc-small">An example date is filled in. Replace it with your own date of birth.</p>

            <form id="age-form" novalidate>
              <label class="field-label" for="dob">
                Your date of birth
                <span>As on your Class 10 certificate</span>
              </label>

              <input
                class="date-input"
                id="dob"
                type="date"
                value="${sampleDob}"
                min="1900-01-01"
                required
                aria-describedby="dob-error"
              >
              <p class="calc-error" id="dob-error" aria-live="polite"></p>

              <label class="field-label" for="exam">
                Exam
                <span>Latest notice for each exam</span>
              </label>

              <select class="select-input" id="exam" aria-describedby="exam-note">
                ${resolvedExams.map(exam => `
                  <option value="${e(exam.id)}">${e(exam.name)} — cut-off ${fmtDate(exam.cutoff)}</option>
                `).join("")}
              </select>
              <p class="band-note" id="exam-note">The cut-off date below is filled in from that exam's latest notice.</p>

              <label class="field-label" for="band">
                Post age band
                <span>Post-wise for CGL and MTS</span>
              </label>

              <select class="select-input" id="band" aria-describedby="band-note">
                ${bandOptions(defaultExam)}
              </select>
              <p class="band-note" id="band-note"></p>

              <label class="field-label" for="cutoff">
                Cut-off date (crucial date)
                <span>From the notice — change if yours differs</span>
              </label>

              <input
                class="date-input"
                id="cutoff"
                type="date"
                value="${defaultExam.cutoff}"
                required
                aria-describedby="cutoff-error"
              >
              <p class="calc-error" id="cutoff-error" aria-live="polite"></p>
              <p style="margin-top:2px">
                <button class="inline-link" type="button" id="cutoff-reset">Reset to the notice date (${fmtDate(defaultExam.cutoff)})</button>
              </p>

              <label class="field-label" for="category">
                Category
                <span>Relaxation applies to the upper limit only</span>
              </label>

              <select class="select-input" id="category">
                ${categoryOptions(defaultExam)}
              </select>

              <div id="service-wrap" hidden>
                <label class="field-label" for="service-y">
                  Military service completed
                  <span>Deducted from your age first</span>
                </label>

                <div class="field-row">
                  <div>
                    <input
                      class="number-input"
                      id="service-y"
                      type="number"
                      min="0"
                      max="40"
                      step="1"
                      value=""
                      placeholder="Years"
                      inputmode="numeric"
                      aria-label="Years of military service"
                    >
                  </div>
                  <div>
                    <input
                      class="number-input"
                      id="service-m"
                      type="number"
                      min="0"
                      max="11"
                      step="1"
                      value=""
                      placeholder="Months"
                      inputmode="numeric"
                      aria-label="Months of military service"
                    >
                  </div>
                </div>
                <p class="esm-note">Ex-Servicemen get 3 years beyond the upper limit after their service is deducted from their actual age on the crucial date.</p>
              </div>
              <p class="calc-error" id="service-error" aria-live="polite"></p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Check eligibility →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The age limits and birth-date windows below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR AGE ON THE CUT-OFF DATE</span>
                <span>Notice method</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your exact age</h3>

                <div class="result-value">
                  <output id="answer" for="dob">—</output>
                </div>
              </div>

              <div class="rail" aria-hidden="true">
                <span id="meter-fill"></span>
              </div>

              <p class="working" id="working">
                Enter your date of birth to see the working.
              </p>
              <p class="working" id="working-esm" hidden></p>
              <p class="working" id="window-line"></p>

              <div class="verdict" id="verdict" hidden>
                <strong id="verdict-title"></strong>
                <span id="verdict-text"></span>
              </div>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                Age only. Education, nationality and physical standards are checked separately in the notice.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Check eligibility to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">How SSC counts age</a>
        <a href="#examples">Examples</a>
        <a href="#reference">Age limits</a>
        <a href="#comparison">Same birthday, different exams</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / CRUCIAL DATE</span>
            <h3>One date decides your age</h3>
            <p>SSC counts your age on the crucial date printed in the notice — 1 August 2026 for CGL and CHSL, 1 January 2026 for GD, 1 August 2025 for MTS. Your age on any other date does not matter.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / BORN-BETWEEN RULE</span>
            <h3>Each notice prints the window</h3>
            <p>For CGL 18–27 as on 1 August 2026 that is 2 August 1999 to 1 August 2008. Both dates count. If your birthday falls inside the window, you meet the age limit.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / RELAXATION</span>
            <h3>Relaxation raises the top only</h3>
            <p>OBC adds 3 years, SC/ST 5 years, PwBD 10 years (13 for OBC, 15 for SC/ST) to the upper limit only. Ex-Servicemen get 3 years after their service is deducted from their age.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From date of birth to an eligibility verdict</h2>
          <p>
            Start with the date on your certificate. Then check it against
            the exam, the band and the crucial date in the notice.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>How SSC counts your age</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>Notice method</small>
          Age on the cut-off date = Cut-off date − Date of birth
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Count completed years
            <strong>26 completed years</strong>
            <span>1 August 2026 minus 15 March 2000 is 26 full years.</span>
          </div>

          <div class="math-step">
            2. Then completed months
            <strong>4 completed months</strong>
            <span>From 15 March to 1 August is 4 full months.</span>
          </div>

          <div class="math-step">
            3. Then remaining days
            <strong>17 days</strong>
            <span>The result is 26 years, 4 months and 17 days.</span>
          </div>
        </div>

        <div class="callout">
          <strong>The upper limit is exclusive.</strong>
          You must not have attained it on the crucial date. Exactly 27 years old is
          already over an 18–27 limit, while 26 years, 11 months and 30 days is inside it.
          The minimum age works the other way: exactly 18 on the crucial date counts.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three real birthdays</h2>
          <p>
            Each example uses the rule in the notice for that exam.
            Select one to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const exam = resolvedExams.find(x => x.id === story.examId);
            const band = exam.bands.find(b => b.id === story.bandId);
            const age = sscAgeParts(story.dob, story.cutoff);
            return `
            <article class="card example-card">
              <h3>${e(story.title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${fmtDate(story.dob)}</strong>
                  <small>DATE OF BIRTH</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmtAge(age)}</strong>
                  <small>AGE ON ${fmtDate(story.cutoff).toUpperCase()}</small>
                </div>
              </div>

              <p>${e(story.body)}</p>
              <p class="calc-small">${e(exam.name)} · ${e(band.label)} · ${e(exam.categories.find(cat => cat.id === story.categoryId).label)}</p>

              <button class="calc-btn" type="button" data-scenario data-dob="${e(story.dob)}" data-exam="${e(story.examId)}" data-band="${e(story.bandId)}" data-category="${e(story.categoryId)}" data-cutoff="${e(story.cutoff)}" data-jump>
                Try this date →
              </button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="reference">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Quick reference</p>
          <h2>SSC age limits from the latest notices</h2>
          <p>
            Every band below is printed in the notice named. The birth-date window
            is for unreserved candidates; choose your category in the calculator
            to see your own window. Select a band to check it.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="SSC age limits by exam and post band"
        >
          <table class="calc-table">
            <caption>
              Latest published notices as of November 2026. A new notice can change the crucial date.
            </caption>

            <thead>
              <tr>
                <th scope="col">Exam</th>
                <th scope="col">Age band</th>
                <th scope="col">Posts</th>
                <th scope="col">Crucial date</th>
                <th scope="col">Born between (UR)</th>
                <th scope="col">Check</th>
              </tr>
            </thead>

            <tbody>
              ${referenceRows}
            </tbody>
          </table>
        </div>

        <div class="section-head" style="margin-top:40px">
          <h2 style="font-size:1.4rem">Category relaxations (upper limit only)</h2>
          <p>
            Relaxation is added to the upper age limit. It never lowers the
            minimum age of 18. Only the categories the calculator offers
            appear as choices above; the other rows are listed so you can
            check them against your notice.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="SSC age relaxations by category"
        >
          <table class="calc-table">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Relaxation beyond the upper limit</th>
                <th scope="col">Applies to</th>
              </tr>
            </thead>

            <tbody>
              <tr><th scope="row">SC / ST</th><td>5 years</td><td>CGL, CHSL, GD, MTS</td></tr>
              <tr><th scope="row">OBC (non-creamy layer)</th><td>3 years</td><td>CGL, CHSL, GD, MTS</td></tr>
              <tr><th scope="row">PwBD</th><td>10 years</td><td>CGL, CHSL, MTS</td></tr>
              <tr><th scope="row">PwBD (OBC)</th><td>13 years</td><td>CGL, CHSL, MTS</td></tr>
              <tr><th scope="row">PwBD (SC / ST)</th><td>15 years</td><td>CGL, CHSL, MTS</td></tr>
              <tr><th scope="row">Ex-Serviceman</th><td>3 years, after deducting military service from actual age</td><td>CGL, CHSL, GD, MTS</td></tr>
              <tr><th scope="row">Child / dependent of 1984 riot victim</th><td>5 years (UR / EWS), 8 years (OBC), 10 years (SC / ST)</td><td>GD only</td></tr>
              <tr><th scope="row">Defence personnel disabled in operation</th><td>3 years (8 years for SC / ST)</td><td>CGL, CHSL</td></tr>
              <tr><th scope="row">Central Govt civilian employee (3+ years service)</th><td>Up to 40 years of age (45 for SC / ST), Group C posts</td><td>CGL, CHSL</td></tr>
              <tr><th scope="row">Widow / divorced woman (not remarried)</th><td>Up to 35 years of age (40 for SC / ST)</td><td>CGL, CHSL</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout">
          <strong>GD Constable has no PwBD row.</strong>
          The GD notice's relaxation table lists SC/ST, OBC, Ex-Servicemen and
          children of 1984 riot victims only, so the calculator does not offer
          a PwBD choice for GD. The MTS figures are from the 2025 notice; the
          2026 MTS notice had not been released as of 30 October 2026.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why the exam matters</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Same date of birth checked against each SSC exam"
        >
          <table class="calc-table">
            <caption>Born 15 March 2000, checked as an unreserved candidate.</caption>

            <thead>
              <tr>
                <th scope="col">Exam</th>
                <th scope="col">Crucial date</th>
                <th scope="col">Age on that date</th>
                <th scope="col">Age band</th>
                <th scope="col">Verdict</th>
              </tr>
            </thead>

            <tbody>
              ${compareRows}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this check is useful</h3>
            <ul class="bullets">
              <li>Checking whether your birthday falls inside the notice's window.</li>
              <li>Seeing how a category relaxation changes your upper limit.</li>
              <li>Comparing the same birthday across exams before choosing where to apply.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When the notice decides</h3>
            <ul class="bullets">
              <li>Education, nationality and attempt rules are in the notice, not in this tool.</li>
              <li>Physical standards apply for GD Constable and Havaldar posts.</li>
              <li>A new notice can move the crucial date — check ssc.gov.in before you apply.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common age-check mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / DATE</span>
            <h3>Using today's date</h3>
            <p>
              Your age today is not the number SSC uses. Always use the
              crucial date printed in the notice.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / LIMIT</span>
            <h3>Treating 27 as “still 27”</h3>
            <p>
              For an 18–27 limit you must not have attained 27 on the crucial
              date. Exactly 27 is over the limit; 26 years and 11 months is inside it.
            </p>
          </article>

          <article class="step">
            <span class="step-index">03 / MINIMUM</span>
            <h3>Forgetting the minimum age</h3>
            <p>
              You must have attained 18 on the crucial date. Turning 18 the
              day after does not count.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / RELAXATION</span>
            <h3>Applying relaxation to the minimum</h3>
            <p>
              Relaxation raises the upper limit only. It never lowers the
              minimum age of 18.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>SSC age limit questions, answered</h2>
          <p>
            Clear answers about crucial dates, upper limits, relaxations and
            the next exam cycle.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the notice behind the answer</h2>
          <p>
            Every age limit and relaxation on this page comes from the Staff
            Selection Commission's own Notice of Examination for that exam.
            The crucial dates and birth-date windows are quoted from those
            notices. No exam body endorses this tool, and the tool checks age
            only — it does not check education, nationality, attempts or
            physical standards.
          </p>
        </div>

        <div class="method-box">
          <strong>About the official sources</strong>
          <p>
            The notices below state the crucial date, the age limits and the
            relaxation table. The crucial date in each notice follows DoP&amp;T
            OM No. 14017/70/87-Estt.(RR) dated 14 July 1988, cited in the
            notices themselves. The MTS figures are from the 2025 notice; the
            2026 MTS notice had not been released as of 30 October 2026.
          </p>

          <div class="sources">
            <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf" rel="nofollow noopener" target="_blank">
              SSC: CGL 2026 notice (PDF) ↗
            </a>
            <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsle_2026.pdf" rel="nofollow noopener" target="_blank">
              SSC: CHSL 2026 notice (PDF) ↗
            </a>
            <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_01122025.pdf" rel="nofollow noopener" target="_blank">
              SSC: GD Constable 2026 notice (PDF) ↗
            </a>
            <a href="https://ssc.gov.in/" rel="nofollow noopener" target="_blank">
              SSC: notice board — MTS &amp; Havaldar 2025 notice ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section soft">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another check?</p>
            <h2>Check another exam. Understand the verdict.</h2>
            <p>Use the calculator above, or try one of the other VisitBest calculators.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Check your age ↑</a>
            ${others.map(o => `
              <a class="calc-btn copy-btn" href="/${e(o.slug)}/">
                ${e(o.title)} →
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export const cgpaCss = `
.select-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.select-input[aria-invalid="true"] {
  border-color: #b42318;
}

.band-note {
  font-size: 12px;
  color: var(--calc-muted);
  margin-top: 6px;
}

.calc-page .tool-switch {
  grid-template-columns: repeat(4, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}
`;

export function cgpaPercent(cgpa, offset) {
  if (!Number.isFinite(cgpa) || cgpa < 0 || cgpa > 10) return null;
  const raw = (cgpa - offset) * 10;
  return Math.round(raw * 10) / 10;
}

export function mumbaiBand(cgpa) {
  if (!Number.isFinite(cgpa) || cgpa < 0 || cgpa > 10) return null;
  if (cgpa >= 9) return "90–100%";
  if (cgpa >= 8) return "80–<90%";
  if (cgpa >= 7) return "70–<80%";
  if (cgpa >= 6) return "60–<70%";
  if (cgpa >= 5.5) return "55–<60%";
  if (cgpa >= 5) return "50–<55%";
  if (cgpa >= 4) return "40–<50%";
  return null;
}

export function mumbaiBandMid(cgpa) {
  const band = mumbaiBand(cgpa);
  if (band === null) return null;
  if (band === "90–100%") return 95;
  if (band === "80–<90%") return 85;
  if (band === "70–<80%") return 75;
  if (band === "60–<70%") return 65;
  if (band === "55–<60%") return 57.5;
  if (band === "50–<55%") return 52.5;
  return 45;
}

export function cgpaClient(c) {
  const $ = id => document.getElementById(id);

  function cgpaPercent(cgpa, offset) {
    if (!Number.isFinite(cgpa) || cgpa < 0 || cgpa > 10) return null;
    const raw = (cgpa - offset) * 10;
    return Math.round(raw * 10) / 10;
  }

  function mumbaiBand(cgpa) {
    if (!Number.isFinite(cgpa) || cgpa < 0 || cgpa > 10) return null;
    if (cgpa >= 9) return "90–100%";
    if (cgpa >= 8) return "80–<90%";
    if (cgpa >= 7) return "70–<80%";
    if (cgpa >= 6) return "60–<70%";
    if (cgpa >= 5.5) return "55–<60%";
    if (cgpa >= 5) return "50–<55%";
    if (cgpa >= 4) return "40–<50%";
    return null;
  }

  function mumbaiBandMid(cgpa) {
    const band = mumbaiBand(cgpa);
    if (band === null) return null;
    if (band === "90–100%") return 95;
    if (band === "80–<90%") return 85;
    if (band === "70–<80%") return 75;
    if (band === "60–<70%") return 65;
    if (band === "55–<60%") return 57.5;
    if (band === "50–<55%") return 52.5;
    return 45;
  }

  const cgpaInput = $("cgpa");
  const systemSelect = $("system");
  const systemNote = $("system-note");
  const cgpaError = $("cgpa-error");
  const output = $("answer");
  const working = $("working");
  const bandLine = $("band-line");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const trim = n => String(Math.round(n * 100) / 100);
  const fmtPct = n => n.toFixed(1) + "%";
  const systemById = id => c.systems.find(s => s.id === id) || c.systems[0];
  const currentSystem = () => systemById(systemSelect.value);
  const bandRange = cgpa => {
    if (cgpa >= 9) return "9.00–10.00";
    if (cgpa >= 8) return "8.00–<9.00";
    if (cgpa >= 7) return "7.00–<8.00";
    if (cgpa >= 6) return "6.00–<7.00";
    if (cgpa >= 5.5) return "5.50–<6.00";
    if (cgpa >= 5) return "5.00–<5.50";
    return "4.00–<5.00";
  };

  function paint(showEmptyError = false) {
    const sys = currentSystem();
    systemNote.textContent = sys.formula + " — " + sys.rule;

    const raw = cgpaInput.value;
    let msg = "";
    let val = null;
    if (raw === "") {
      if (showEmptyError) msg = "Enter your CGPA.";
    } else {
      val = Number(raw);
      if (!Number.isFinite(val)) msg = "Enter a number between 0 and 10.";
      else if (val < 0 || val > 10) msg = "Enter a CGPA between 0 and 10.";
    }
    cgpaError.textContent = msg;
    cgpaInput.setAttribute("aria-invalid", String(msg !== ""));

    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;

    const valid = msg === "" && val !== null;
    if (!valid) {
      output.textContent = "—";
      working.textContent = "Enter your CGPA to see the working.";
      bandLine.textContent = "";
      $("meter-fill").style.width = "0%";
      summary = "";
      return false;
    }

    if (sys.kind === "formula") {
      const pct = cgpaPercent(val, sys.offset);
      if (pct < 0) {
        output.textContent = "—";
        working.textContent = sys.formula + " gives " + fmtPct(pct) + " at " + trim(val) + " " + sys.input + " — below zero, so the conversion is not meaningful at this value. Check your grade card.";
        bandLine.textContent = "";
        $("meter-fill").style.width = "0%";
        summary = "VisitBest | CGPA to Percentage Calculator\n" + sys.input + ": " + trim(val) + "\nUniversity: " + sys.name + "\nFormula: " + sys.formula + "\nPercentage: not meaningful at this value — the formula gives " + fmtPct(pct) + ".\nConfirm against your transcript or conversion certificate.";
        copyButton.disabled = false;
        return true;
      }
      output.textContent = fmtPct(pct);
      $("meter-fill").style.width = Math.min(100, pct) + "%";
      working.textContent = sys.offset
        ? trim(val) + " − " + trim(sys.offset) + " = " + trim(val - sys.offset) + "; × 10 = " + fmtPct(pct) + "."
        : trim(val) + " × 10 = " + fmtPct(pct) + ".";
      bandLine.textContent = sys.id === "makaut"
        ? "MAKAUT prints a table, not a formula: this figure is an exact fit to the university's table at all five printed points."
        : sys.id === "vtu-pg"
          ? "VTU's ×10 figure is a sanctioned equivalence for employment and higher studies, not a percentage printed on the transcript."
          : "";
      summary = "VisitBest | CGPA to Percentage Calculator\n" + sys.input + ": " + trim(val) + "\nUniversity: " + sys.name + "\nFormula: " + sys.formula + "\nPercentage: " + fmtPct(pct) + "\nConfirm against your transcript or conversion certificate.";
      copyButton.disabled = false;
      return true;
    }

    if (sys.kind === "band") {
      const band = mumbaiBand(val);
      const mid = mumbaiBandMid(val);
      if (band === null) {
        output.textContent = "—";
        working.textContent = "A CGPA of " + trim(val) + " is below the published band table — the lowest band starts at 4.00. Check your grade card.";
        bandLine.textContent = "";
        $("meter-fill").style.width = "0%";
        summary = "VisitBest | CGPA to Percentage Calculator\nCGPA: " + trim(val) + "\nUniversity: University of Mumbai\nPercentage band: below the published table.\nConfirm against your transcript or conversion certificate.";
        copyButton.disabled = false;
        return true;
      }
      output.textContent = band;
      $("meter-fill").style.width = mid + "%";
      working.textContent = "A CGPA of " + trim(val) + " falls in the " + bandRange(val) + " band: " + band + ". A band, not a single figure — the meter shows the band midpoint only.";
      bandLine.textContent = "Mumbai University publishes only this band table. Get the exact percentage from your conversion certificate.";
      summary = "VisitBest | CGPA to Percentage Calculator\nCGPA: " + trim(val) + "\nUniversity: University of Mumbai\nPercentage band: " + band + " (the university publishes a band table, not a formula).\nConfirm against your transcript or conversion certificate.";
      copyButton.disabled = false;
      return true;
    }

    output.textContent = "—";
    working.textContent = "No verified formula for SPPU was found on the university's own site. This page shows no SPPU number — check your grade card or the university's examination circulars.";
    bandLine.textContent = "";
    $("meter-fill").style.width = "0%";
    summary = "VisitBest | CGPA to Percentage Calculator\nCGPA: " + trim(val) + "\nUniversity: Savitribai Phule Pune University (SPPU)\nPercentage: no verified formula published.\nConfirm against your transcript or conversion certificate.";
    copyButton.disabled = false;
    return true;
  }

  function scenarioKey() {
    return [cgpaInput.value, systemSelect.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const sys = systemById(item.systemId);
      const num = Number(item.cgpa);
      let label = trim(num) + " " + sys.input + " · " + sys.short;
      if (sys.kind === "formula") {
        const pct = cgpaPercent(num, sys.offset);
        label += " → " + (pct !== null && pct >= 0 ? fmtPct(pct) : "—");
      } else if (sys.kind === "band") {
        label += " → " + (mumbaiBand(num) || "—");
      } else {
        label += " → no verified figure";
      }
      button.textContent = label;
      button.setAttribute("aria-label", "Load check for " + trim(num) + " " + sys.input + ", " + sys.short);
      button.addEventListener("click", () => {
        loadScenario(item);
        cgpaInput.focus();
      });
      list.append(button);
    });
  }

  function loadScenario(item) {
    cgpaInput.value = item.cgpa === undefined || item.cgpa === null ? "" : String(item.cgpa);
    systemSelect.value = item.systemId || c.systems[0].id;
    paint();
  }

  function scrollToCalculator() {
    $("calculator").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }

  systemSelect.addEventListener("change", () => paint());
  cgpaInput.addEventListener("input", () => paint());
  cgpaInput.addEventListener("change", () => paint());

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", () => {
      loadScenario({ cgpa: button.dataset.cgpa || "", systemId: button.dataset.system || "" });
      if (button.hasAttribute("data-jump")) scrollToCalculator();
    });
  });

  document.querySelectorAll("[data-preset]").forEach(button => {
    button.addEventListener("click", () => {
      cgpaInput.value = button.dataset.preset || "";
      paint();
      if (button.hasAttribute("data-jump")) scrollToCalculator();
    });
  });

  $("cgpa-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!paint(true)) {
      cgpaInput.focus();
      return;
    }
    const sys = currentSystem();
    const item = { cgpa: cgpaInput.value, systemId: sys.id };
    const key = scenarioKey();
    const old = history.findIndex(h => [h.cgpa, h.systemId].join("|") === key);
    if (old !== -1) history.splice(old, 1);
    history.unshift(item);
    if (history.length > 5) history.pop();
    renderHistory();
    $("result").focus();
  });

  $("reset").addEventListener("click", () => {
    cgpaInput.value = "";
    systemSelect.value = c.systems[0].id;
    paint();
    cgpaInput.focus();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    const text = summary;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Manual copy");
      await navigator.clipboard.writeText(text);
      if (summary === text) status.textContent = "Result copied.";
    } catch {
      if (summary !== text) return;
      copyBox.hidden = false;
      copyBox.value = text;
      copyBox.focus();
      copyBox.select();
      status.textContent = "Copy the selected summary below.";
    }
  });

  paint();
  renderHistory();
}

export function renderCgpaCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const fmtPct = n => (n === null || n < 0) ? "—" : n.toFixed(1) + "%";
  const trim = n => String(Math.round(n * 100) / 100);
  const formulaSystems = p.systems.filter(s => s.kind === "formula");
  const config = { key: p.key, title: p.title, systems: p.systems.map(s => ({ id: s.id, name: s.name, short: s.short, input: s.input, kind: s.kind, offset: s.offset, formula: s.formula, rule: s.rule })) };
  const sampleCgpa = p.compareCgpa;

  const systemOptions = p.systems.map(s => `
    <option value="${e(s.id)}">${e(s.name)} — ${e(s.formula)}</option>
  `).join("");

  const tableRows = [];
  for (let i = 0; i <= 20; i++) {
    const v = i * 0.5;
    tableRows.push(`
      <tr>
        <td>
          <button class="calc-table-btn" type="button" data-preset="${v.toFixed(1)}" data-jump aria-label="Use ${v.toFixed(1)} CGPA">${v.toFixed(1)}</button>
        </td>
        ${formulaSystems.map(s => `<td>${fmtPct(cgpaPercent(v, s.offset))}</td>`).join("")}
      </tr>`);
  }

  const compareRows = p.systems.map(s => {
    let result = "";
    if (s.kind === "formula") result = fmtPct(cgpaPercent(sampleCgpa, s.offset));
    else if (s.kind === "band") result = mumbaiBand(sampleCgpa) + " (band)";
    else result = "No verified figure";
    return `
      <tr>
        <th scope="row">${e(s.short)}</th>
        <td>${e(s.formula)}</td>
        <td>${e(result)}</td>
      </tr>`;
  }).join("");

  const formulaRows = p.systems.map(s => `
    <tr>
      <th scope="row">${e(s.short)}</th>
      <td>${e(s.input)}</td>
      <td>${e(s.formula)}</td>
      <td>${e(s.rule)}</td>
    </tr>
  `).join("");

  return `<style>${css}${cgpaCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free CGPA to percentage converter</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Convert your CGPA →
              </a>
              <a href="#method" class="calc-link">How the formulas work ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>5 formulas</strong>
                <small>VTU ×2 · MAKAUT · Anna · GTU</small>
              </div>
              <div>
                <strong>7 systems</strong>
                <small>Incl. Mumbai + SPPU, honestly</small>
              </div>
              <div>
                <strong>0 data sent</strong>
                <small>Calculated in your browser</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Each formula is the university's own published conversion.</strong>
              Confirm the result against your transcript or conversion certificate.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/" aria-current="page">CGPA → %</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Convert your CGPA to a percentage</h2>
              <span class="calc-pill">10-POINT CGPA</span>
            </div>

            <p class="calc-small">An example value is filled in. Replace it with your own CGPA.</p>

            <form id="cgpa-form" novalidate>
              <label class="field-label" for="cgpa">
                Your CGPA
                <span>Out of 10 — DGPA for MAKAUT</span>
              </label>

              <input
                class="number-input"
                id="cgpa"
                type="number"
                min="0"
                max="10"
                step="any"
                value="8.20"
                inputmode="decimal"
                autocomplete="off"
                required
                aria-describedby="cgpa-error"
              >

              <p class="calc-error" id="cgpa-error" aria-live="polite"></p>

              <label class="field-label" for="system">
                University / system
                <span>Each one publishes its own formula</span>
              </label>

              <select class="select-input" id="system" aria-describedby="system-note">
                ${systemOptions}
              </select>
              <p class="band-note" id="system-note"></p>

              <div class="presets">
                <span>Try an example</span>
                ${[6, 7.5, 8.2, 9].map(n => `
                  <button type="button" data-preset="${n}">
                    ${n} CGPA
                  </button>
                `).join("")}
              </div>

              <div class="actions">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Convert →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The formulas and reference tables below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR PERCENTAGE</span>
                <span>University formula</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Percentage</h3>

                <div class="result-value">
                  <output id="answer" for="cgpa">—</output>
                </div>
              </div>

              <div class="rail" aria-hidden="true">
                <span id="meter-fill"></span>
              </div>

              <p class="working" id="working">
                Enter your CGPA to see the working.
              </p>
              <p class="working" id="band-line"></p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                A conversion for guidance. The transcript or conversion certificate decides the official figure.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Convert to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">Formula</a>
        <a href="#examples">Examples</a>
        <a href="#table">Conversion table</a>
        <a href="#comparison">Same CGPA, different percentages</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / ONE CGPA, FIVE ANSWERS</span>
            <h3>The university decides the percentage</h3>
            <p>A CGPA of 8.20 is 74.5% under VTU's older schemes, 82.0% under Anna University and 77.0% under GTU. The same number converts differently at each university.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / UNIVERSITY'S OWN FORMULA</span>
            <h3>Nothing here is invented</h3>
            <p>Each formula is the conversion its university publishes, with the source named in the methodology section. Where no formula could be verified — Mumbai and SPPU — the page says so instead of guessing.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / CONFIRM BEFORE YOU FILE</span>
            <h3>The certificate decides</h3>
            <p>Use this tool to check the arithmetic. For a job application, admission form or visa file, confirm the figure against your transcript or the conversion certificate your university or college issues.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From CGPA to a checked percentage</h2>
          <p>
            Start with the figure on your grade sheet. Then use the formula
            your university publishes — not a generic multiplier.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>CGPA to percentage formulas, by university</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>VTU older schemes · worked example</small>
          (CGPA − 0.75) × 10
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Start with the CGPA
            <strong>8.20 CGPA</strong>
            <span>The figure on the consolidated grade sheet.</span>
          </div>

          <div class="math-step">
            2. Subtract 0.75
            <strong>8.20 − 0.75 = 7.45</strong>
            <span>VTU's older schemes subtract 0.75 first.</span>
          </div>

          <div class="math-step">
            3. Multiply by 10
            <strong>7.45 × 10 = 74.5%</strong>
            <span>The percentage for VTU's older schemes.</span>
          </div>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="CGPA to percentage formulas by university"
          style="margin-top:26px"
        >
          <table class="calc-table">
            <caption>
              Each formula is that university's own published conversion. Mumbai and SPPU carry no formula.
            </caption>

            <thead>
              <tr>
                <th scope="col">University / system</th>
                <th scope="col">Input</th>
                <th scope="col">Formula</th>
                <th scope="col">Basis</th>
              </tr>
            </thead>

            <tbody>
              ${formulaRows}
            </tbody>
          </table>
        </div>

        <div class="callout">
          <strong>VTU's ×10 figure comes with the university's own caveat.</strong>
          The 2022-scheme PG regulations say there is no formula for converting CGPA into percentage, then
          sanction the ×10 figure as an equivalence for employment and higher studies. It is not a percentage
          printed on the transcript. MAKAUT's figure is a fit to the university's published table, exact at all
          five printed points — the university prints the table, not the formula.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three real conversions</h2>
          <p>
            Each example uses the formula its university publishes.
            Select one to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const sys = p.systems.find(s => s.id === story.systemId);
            const pct = cgpaPercent(story.cgpa, sys.offset);
            return `
            <article class="card example-card">
              <h3>${e(story.title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${trim(story.cgpa)} ${e(sys.input)}</strong>
                  <small>${e(sys.short).toUpperCase()}</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmtPct(pct)}</strong>
                  <small>PERCENTAGE</small>
                </div>
              </div>

              <p>${e(story.body)}</p>

              <p class="calc-small">${e(sys.name)} · ${e(sys.formula)}</p>

              <button class="calc-btn" type="button" data-scenario data-cgpa="${story.cgpa}" data-system="${e(story.systemId)}" data-jump>
                Try ${trim(story.cgpa)} ${e(sys.input)} →
              </button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="table">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Quick reference</p>
          <h2>CGPA to percentage conversion table</h2>
          <p>
            Every figure follows the university's own formula. Select a CGPA
            to check its working in the tool. A dash means the formula gives a
            negative value there, which is not a meaningful percentage.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="CGPA to percentage conversion table"
        >
          <table class="calc-table">
            <caption>
              10-point CGPA, 0.0 to 10.0. MAKAUT's column uses DGPA.
            </caption>

            <thead>
              <tr>
                <th scope="col">CGPA / 10</th>
                ${formulaSystems.map(s => `<th scope="col">${e(s.short)}</th>`).join("")}
              </tr>
            </thead>

            <tbody>
              ${tableRows.join("")}
            </tbody>
          </table>
        </div>

        <div class="section-head" style="margin-top:40px">
          <h2 style="font-size:1.4rem">MAKAUT's published table (DGPA → percentage)</h2>
          <p>
            MAKAUT prints this table, not a formula. The (DGPA − 0.75) × 10
            figure fits it exactly at every point, so the calculator uses the
            fit for values between the anchors.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="MAKAUT DGPA to percentage table"
        >
          <table class="calc-table">
            <thead>
              <tr>
                <th scope="col">DGPA (10-point scale)</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>

            <tbody>
              ${p.makautAnchors.map(([dgpa, pct]) => `
                <tr>
                  <th scope="row">${e(dgpa)}</th>
                  <td>${e(pct)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="section-head" style="margin-top:40px">
          <h2 style="font-size:1.4rem">Mumbai University's band table (no single formula)</h2>
          <p>
            The university's NEP 2020 syllabi publish only this band table.
            A band does not fix a value inside it — get the exact percentage
            from your conversion certificate.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Mumbai University CGPA to percentage band table"
        >
          <table class="calc-table">
            <thead>
              <tr>
                <th scope="col">CGPA</th>
                <th scope="col">Percentage band</th>
              </tr>
            </thead>

            <tbody>
              ${p.mumbaiBands.map(([cgpa, band]) => `
                <tr>
                  <th scope="row">${e(cgpa)}</th>
                  <td>${e(band)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="callout">
          <strong>No aggregator formula is used for Mumbai or SPPU.</strong>
          Third-party sites give mutually irreconcilable Mumbai figures — (7.1 × CGPA) + 11,
          (7.25 × CGPI) + 11, (CGPI − 0.75) × 10 — and none was verified against a mu.ac.in
          document. The claim that Mumbai repealed formula conversion on 1 January 2026 is
          likewise unconfirmed. For SPPU, the tiered equations attributed to Circular 332/2020
          could not be verified on unipune.ac.in. Until each university's own publication is
          found, no number is shown for either.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why the university matters</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Same CGPA checked against each university system"
        >
          <table class="calc-table">
            <caption>CGPA ${trim(sampleCgpa)}, checked against every system on this page.</caption>

            <thead>
              <tr>
                <th scope="col">University / system</th>
                <th scope="col">Formula</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>

            <tbody>
              ${compareRows}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this check is useful</h3>
            <ul class="bullets">
              <li>Checking the arithmetic of your university's own conversion.</li>
              <li>Seeing how the same CGPA converts differently across universities.</li>
              <li>Keeping a clearly labelled conversion in personal study notes.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When the certificate decides</h3>
            <ul class="bullets">
              <li>Reporting a percentage on a job or admission application.</li>
              <li>Meeting an eligibility threshold that names a percentage.</li>
              <li>Converting a transcript for another institution — use the conversion certificate.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common CGPA conversion mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / MULTIPLIER</span>
            <h3>Using ×9.5 everywhere</h3>
            <p>
              The ×9.5 shortcut is not the formula for VTU, MAKAUT, Anna
              University or GTU. Using it here understates or overstates the
              percentage by up to 8 points.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / SCHEME</span>
            <h3>Using the wrong VTU scheme</h3>
            <p>
              VTU's older schemes subtract 0.75 first; the 2022-scheme PG
              regulations multiply by 10. The same 8.20 CGPA is 74.5% under
              one and 82.0% under the other.
            </p>
          </article>

          <article class="step">
            <span class="step-index">03 / INPUT</span>
            <h3>Entering SGPA instead of CGPA</h3>
            <p>
              A semester SGPA is not the cumulative figure. MAKAUT students
              must enter DGPA — the final degree figure — not a yearly YGPA
              or a semester SGPA.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / AUTHORITY</span>
            <h3>Treating the result as official</h3>
            <p>
              The calculator converts; it does not certify. Keep the formula
              and university with copied results, and use the transcript or
              conversion certificate for formal reporting.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>CGPA to percentage questions, answered</h2>
          <p>
            Clear answers about university formulas, DGPA, Mumbai's band
            table and SPPU.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the publication behind the answer</h2>
          <p>
            Every formula on this page comes from the university's own
            publication — its formula page, regulations or admission notice —
            verified in November 2026. Where no formula could be verified from
            the university's own site, the page shows no number. No university
            endorses this tool.
          </p>
        </div>

        <div class="method-box">
          <strong>About the official sources</strong>
          <p>
            The links below are the universities' own documents. Two residual
            checks remain open and do not block this page: the B.E. 2022-scheme
            regulations PDF (clause 22OB 6.7) was not located on vtu.ac.in, so
            the ×10 figure for 2022 is verified from VTU's 2022-scheme PG
            regulations; and the MAKAUT PDF extraction showed only the five
            anchor rows printed above.
          </p>

          <div class="sources">
            <a href="https://vtu.ac.in/en/cgpa-standard-formula/" rel="nofollow noopener" target="_blank">
              VTU: CGPA standard formula ↗
            </a>
            <a href="https://vtu.ac.in/wp-content/uploads/2021/12/Final-Draft-copy-Regulation-BE-BTech.pdf" rel="nofollow noopener" target="_blank">
              VTU: B.E./B.Tech. Regulations 2021–22, cl. 21OB (PDF) ↗
            </a>
            <a href="https://makautwb.ac.in/announcement/Process_to_Calculate_Percentage_From_Grade_Point.pdf" rel="nofollow noopener" target="_blank">
              MAKAUT: percentage from grade point (PDF) ↗
            </a>
            <a href="https://makautwb.ac.in/datas/users/0-adv_faculty_2017_revised.pdf" rel="nofollow noopener" target="_blank">
              MAKAUT: 29 Jan 2018 corrigendum (PDF) ↗
            </a>
            <a href="https://cac.annauniv.edu/udregulations/R2023/B.Arch%202023.pdf" rel="nofollow noopener" target="_blank">
              Anna University: B.Arch. Regulations 2023, cl. 13.4 (PDF) ↗
            </a>
            <a href="https://set.gtu.ac.in/wp-content/uploads/2024/10/Provisional-Merit-List-ME_Admission-VQ-Seats_3rd-Attempt_GTU-SET.pdf" rel="nofollow noopener" target="_blank">
              GTU: SET PG admission notice, 19 Oct 2024 (PDF) ↗
            </a>
            <a href="https://www.mu.ac.in/admin/upload/circular/400808.4%20(N)%20(6)%20B.Com.(Transport%20Management)%20(Sem.-%20V%20&%20VI)%20(Vertical%202%20Minor)%20UG%20(2026-27)%20NEP%202020.pdf" rel="nofollow noopener" target="_blank">
              Mumbai University: NEP 2020 syllabus band table (PDF) ↗
            </a>
            <a href="https://unipune.ac.in/" rel="nofollow noopener" target="_blank">
              SPPU: university website — no conversion formula found ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section soft">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another check?</p>
            <h2>Check another university. Understand the conversion.</h2>
            <p>Use the calculator above, or try one of the other VisitBest calculators.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Convert your CGPA ↑</a>
            ${others.map(o => `
              <a class="calc-btn copy-btn" href="/${e(o.slug)}/">
                ${e(o.title)} →
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export const generalAgeCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(5, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}
`;

export const upscAgeCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(6, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.radio-list {
  display: grid;
  gap: 8px;
  margin-top: 4px;
}

.radio-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.45;
  cursor: pointer;
}

.radio-row input {
  margin-top: 3px;
  accent-color: var(--calc-brand);
  width: 18px;
  height: 18px;
  flex: none;
}
`;

export const ibpsAgeCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(7, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.radio-list {
  display: grid;
  gap: 8px;
  margin-top: 4px;
}

.radio-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.45;
  cursor: pointer;
}

.radio-row input {
  margin-top: 3px;
  accent-color: var(--calc-brand);
  width: 18px;
  height: 18px;
  flex: none;
}
`;

export const rrbAgeCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(8, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.radio-list {
  display: grid;
  gap: 8px;
  margin-top: 4px;
}

.radio-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.45;
  cursor: pointer;
}

.radio-row input {
  margin-top: 3px;
  accent-color: var(--calc-brand);
  width: 18px;
  height: 18px;
  flex: none;
}
`;

export const emiCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(9, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.split-bar {
  display: flex;
  height: 14px;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 12px;
  background: #16414f;
}

.split-bar i {
  display: block;
  height: 100%;
}

.split-principal {
  background: #7fd1a8;
}

.split-interest {
  background: #ffb454;
}

.split-legend {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 8px;
  font-size: 14px;
  color: #c8dce6;
}

.split-legend b {
  color: #fff;
}

.split-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: -1px;
}
`;

export const sipCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(10, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.split-bar {
  display: flex;
  height: 14px;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 12px;
  background: #16414f;
}

.split-bar i {
  display: block;
  height: 100%;
}

.split-invested {
  background: #7fd1a8;
}

.split-gains {
  background: #ffb454;
}

.split-legend {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 8px;
  font-size: 14px;
  color: #c8dce6;
}

.split-legend b {
  color: #fff;
}

.split-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: -1px;
}
`;

export const bmiCss = `
.calc-page .tool-switch {
  grid-template-columns: repeat(11, 1fr);
}

@media(max-width: 760px) {
  .calc-page .tool-switch {
    grid-template-columns: 1fr 1fr;
  }
}

.number-input {
  width: 100%;
  min-height: 56px;
  font-size: 17px;
  font-weight: 700;
  border: 1.5px solid #aebfca;
  border-radius: 11px;
  padding: 10px 14px;
  color: var(--calc-ink);
  background: white;
  box-sizing: border-box;
  font-family: inherit;
}

.number-input[aria-invalid="true"] {
  border-color: #b42318;
}

.unit-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.bmi-scale {
  position: relative;
  display: flex;
  height: 16px;
  border-radius: 8px;
  overflow: visible;
  margin: 18px 4px 26px;
}

.bmi-scale i {
  display: block;
  height: 100%;
}

.bmi-scale i:first-child {
  border-radius: 8px 0 0 8px;
}

.bmi-scale i:last-child {
  border-radius: 0 8px 8px 0;
}

.bmi-under {
  background: #7fb3d5;
}

.bmi-healthy {
  background: #7fd1a8;
}

.bmi-over {
  background: #ffb454;
}

.bmi-obese {
  background: #e0655a;
}

.bmi-marker {
  position: absolute;
  top: -6px;
  width: 4px;
  height: 28px;
  background: #fff;
  border: 1px solid #16414f;
  border-radius: 2px;
  transform: translateX(-2px);
}

.bmi-scale-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #c8dce6;
  margin-top: -18px;
  margin-bottom: 6px;
}

.verdict-warn {
  background: #fff7e0;
  color: #6b4e00;
  border: 1px solid #e3c878;
}
`;

export function generalAgeTotals(dobISO, refISO) {
  const age = sscAgeParts(dobISO, refISO);
  if (!age) return null;
  const dob = new Date(dobISO + "T00:00:00Z");
  const ref = new Date(refISO + "T00:00:00Z");
  const days = Math.round((ref.getTime() - dob.getTime()) / 86400000);
  return { days, weeks: Math.floor(days / 7), weeksRemainder: days % 7, months: age.y * 12 + age.m };
}

export function generalAgeWeekday(iso) {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return null;
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getUTCDay()];
}

export function generalAgeAnniversary(dobISO, year) {
  const dob = new Date(dobISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime())) return null;
  const ann = new Date(Date.UTC(year, dob.getUTCMonth(), dob.getUTCDate()));
  return sscISODate(ann);
}

export function generalAgeNextBirthday(dobISO, refISO) {
  const dob = new Date(dobISO + "T00:00:00Z");
  const ref = new Date(refISO + "T00:00:00Z");
  if (Number.isNaN(dob.getTime()) || Number.isNaN(ref.getTime()) || ref < dob) return null;
  let cand = generalAgeAnniversary(dobISO, ref.getUTCFullYear());
  if (cand < refISO) cand = generalAgeAnniversary(dobISO, ref.getUTCFullYear() + 1);
  const candDate = new Date(cand + "T00:00:00Z");
  return { iso: cand, daysAway: Math.round((candDate.getTime() - ref.getTime()) / 86400000) };
}

export function generalAgeClient(c) {
  const $ = id => document.getElementById(id);

  function sscAgeParts(dobISO, cutISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
    let y = cut.getUTCFullYear() - dob.getUTCFullYear();
    let m = cut.getUTCMonth() - dob.getUTCMonth();
    let d = cut.getUTCDate() - dob.getUTCDate();
    if (d < 0) {
      m -= 1;
      const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
      d += prev.getUTCDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { y, m, d };
  }

  function sscISODate(date) {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function generalAgeTotals(dobISO, refISO) {
    const age = sscAgeParts(dobISO, refISO);
    if (!age) return null;
    const dob = new Date(dobISO + "T00:00:00Z");
    const ref = new Date(refISO + "T00:00:00Z");
    const days = Math.round((ref.getTime() - dob.getTime()) / 86400000);
    return { days, weeks: Math.floor(days / 7), weeksRemainder: days % 7, months: age.y * 12 + age.m };
  }

  function generalAgeWeekday(iso) {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return null;
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getUTCDay()];
  }

  function generalAgeAnniversary(dobISO, year) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    const ann = new Date(Date.UTC(year, dob.getUTCMonth(), dob.getUTCDate()));
    return sscISODate(ann);
  }

  function generalAgeNextBirthday(dobISO, refISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const ref = new Date(refISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(ref.getTime()) || ref < dob) return null;
    let cand = generalAgeAnniversary(dobISO, ref.getUTCFullYear());
    if (cand < refISO) cand = generalAgeAnniversary(dobISO, ref.getUTCFullYear() + 1);
    const candDate = new Date(cand + "T00:00:00Z");
    return { iso: cand, daysAway: Math.round((candDate.getTime() - ref.getTime()) / 86400000) };
  }

  const dobInput = $("dob");
  const refInput = $("ref");
  const dobError = $("dob-error");
  const refError = $("ref-error");
  const output = $("answer");
  const yearsVal = $("years-val");
  const monthsVal = $("months-val");
  const daysVal = $("days-val");
  const working = $("working");
  const workingTotals = $("working-totals");
  const workingBirthday = $("working-birthday");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtDate = iso => {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  };

  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const ageText = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const todayISO = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  };

  function clearResult() {
    output.textContent = "—";
    yearsVal.textContent = "—";
    monthsVal.textContent = "—";
    daysVal.textContent = "—";
    working.textContent = "Enter your date of birth to see the working.";
    workingTotals.textContent = "";
    workingBirthday.textContent = "";
    $("meter-fill").style.width = "0%";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function paint(showEmptyError = false) {
    const dobVal = dobInput.value;
    const refVal = refInput.value;

    let dobMsg = "";
    if (!dobVal) {
      if (showEmptyError) dobMsg = "Enter your date of birth.";
    } else if (dobInput.validity.badInput) {
      dobMsg = "Enter a valid date of birth.";
    } else if (dobVal < "1900-01-01") {
      dobMsg = "Enter a date of birth on or after 1 January 1900.";
    } else if (refVal && dobVal > refVal) {
      dobMsg = "Date of birth must be on or before the age-on date.";
    }
    dobError.textContent = dobMsg;
    dobInput.setAttribute("aria-invalid", String(dobMsg !== ""));

    let refMsg = "";
    if (!refVal) {
      if (showEmptyError) refMsg = "Enter an age-on date.";
    } else if (refInput.validity.badInput) {
      refMsg = "Enter a valid age-on date.";
    }
    refError.textContent = refMsg;
    refInput.setAttribute("aria-invalid", String(refMsg !== ""));

    const valid = dobMsg === "" && refMsg === "" && dobVal && refVal;
    if (!valid) {
      clearResult();
      return false;
    }

    const age = sscAgeParts(dobVal, refVal);
    const totals = generalAgeTotals(dobVal, refVal);
    const bornDay = generalAgeWeekday(dobVal);
    const next = generalAgeNextBirthday(dobVal, refVal);
    if (!age || !totals || !bornDay || !next) {
      clearResult();
      return false;
    }

    output.textContent = ageText(age);
    yearsVal.textContent = String(age.y);
    monthsVal.textContent = String(age.m);
    daysVal.textContent = String(age.d);

    const refDate = new Date(refVal + "T00:00:00Z");
    let last = generalAgeAnniversary(dobVal, refDate.getUTCFullYear());
    if (last > refVal) last = generalAgeAnniversary(dobVal, refDate.getUTCFullYear() - 1);
    const lastDate = new Date(last + "T00:00:00Z");
    const nextDate = new Date(next.iso + "T00:00:00Z");
    const span = Math.round((nextDate.getTime() - lastDate.getTime()) / 86400000);
    const elapsed = Math.round((refDate.getTime() - lastDate.getTime()) / 86400000);
    $("meter-fill").style.width = (span > 0 ? Math.min(100, (elapsed / span) * 100) : 0) + "%";

    working.textContent = fmtDate(dobVal) + " → " + fmtDate(refVal) + " = " + ageText(age) + ". Born on a " + bornDay + ".";
    workingTotals.textContent = "Total: " + fmtNum(totals.days) + " days · " + fmtNum(totals.weeks) + " weeks and " + plural(totals.weeksRemainder, "day", "days") + " · " + fmtNum(totals.months) + " completed months.";
    workingBirthday.textContent = next.daysAway === 0
      ? "Next birthday: today, " + fmtDate(next.iso) + " (" + generalAgeWeekday(next.iso) + ")."
      : "Next birthday: " + fmtDate(next.iso) + " (" + generalAgeWeekday(next.iso) + ") — in " + plural(next.daysAway, "day", "days") + ".";

    copyButton.disabled = false;
    summary =
      "Visit-Best | Age Calculator" +
      "\nDate of birth: " + fmtDate(dobVal) + " (" + bornDay + ")" +
      "\nAge on: " + fmtDate(refVal) +
      "\nExact age: " + ageText(age) +
      "\nTotal: " + fmtNum(totals.days) + " days · " + fmtNum(totals.weeks) + " weeks and " + plural(totals.weeksRemainder, "day", "days") + " · " + fmtNum(totals.months) + " completed months" +
      "\nNext birthday: " + fmtDate(next.iso) + " (" + generalAgeWeekday(next.iso) + "), in " + plural(next.daysAway, "day", "days");
    return true;
  }

  function scenarioKey() {
    return [dobInput.value, refInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const age = sscAgeParts(item.dob, item.ref);
      button.textContent = fmtDate(item.dob) + " → " + (age ? ageText(age) : "—") + " · on " + fmtDate(item.ref);
      button.setAttribute("aria-label", "Load check for " + fmtDate(item.dob) + " on " + fmtDate(item.ref));
      button.addEventListener("click", () => {
        loadScenario(item);
        dobInput.focus();
      });
      list.append(button);
    });
  }

  function loadScenario(item) {
    dobInput.value = item.dob || "";
    refInput.value = item.ref || todayISO();
    paint();
  }

  function scrollToCalculator() {
    $("calculator").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }

  [dobInput, refInput].forEach(el => {
    el.addEventListener("input", () => paint());
    el.addEventListener("change", () => paint());
  });

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", () => {
      loadScenario({
        dob: button.dataset.dob || "",
        ref: button.dataset.ref || ""
      });
      if (button.hasAttribute("data-jump")) scrollToCalculator();
    });
  });

  $("ref-today").addEventListener("click", () => {
    refInput.value = todayISO();
    paint();
    refInput.focus();
  });

  $("age-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!paint(true)) {
      dobInput.focus();
      return;
    }
    const item = { dob: dobInput.value, ref: refInput.value };
    const key = scenarioKey();
    const old = history.findIndex(h => [h.dob, h.ref].join("|") === key);
    if (old !== -1) history.splice(old, 1);
    history.unshift(item);
    if (history.length > 5) history.pop();
    renderHistory();
    $("result").focus();
  });

  $("reset").addEventListener("click", () => {
    dobInput.value = c.sampleDob;
    refInput.value = todayISO();
    paint();
    dobInput.focus();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    const text = summary;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Manual copy");
      await navigator.clipboard.writeText(text);
      if (summary === text) status.textContent = "Result copied.";
    } catch {
      if (summary !== text) return;
      copyBox.hidden = false;
      copyBox.value = text;
      copyBox.focus();
      copyBox.select();
      status.textContent = "Copy the selected summary below.";
    }
  });

  if (!refInput.value) refInput.value = todayISO();
  paint();
  renderHistory();
}

export function upscClient(c) {
  const $ = id => document.getElementById(id);

  function sscAgeParts(dobISO, cutISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
    let y = cut.getUTCFullYear() - dob.getUTCFullYear();
    let m = cut.getUTCMonth() - dob.getUTCMonth();
    let d = cut.getUTCDate() - dob.getUTCDate();
    if (d < 0) {
      m -= 1;
      const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
      d += prev.getUTCDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { y, m, d };
  }

  function sscISODate(date) {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function sscAddDuration(dobISO, years, months) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    let y = dob.getUTCFullYear() + (years || 0);
    let m = dob.getUTCMonth() + (months || 0);
    y += Math.floor(m / 12);
    m = ((m % 12) + 12) % 12;
    const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const d = Math.min(dob.getUTCDate(), last);
    return new Date(Date.UTC(y, m, d));
  }

  function sscWindow(cutISO, min, max, relaxYears, serviceY, serviceM) {
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(cut.getTime())) return null;
    const earliestBase = sscAddDuration(cutISO, -(max + (relaxYears || 0)), 0);
    const earliestPlusDay = new Date(earliestBase.getTime() + 86400000);
    const earliest = sscAddDuration(sscISODate(earliestPlusDay), -(serviceY || 0), -(serviceM || 0));
    const latest = sscAddDuration(cutISO, -min, 0);
    return { earliest: sscISODate(earliest), latest: sscISODate(latest) };
  }

  function upscCutoff(year) {
    return year + "-08-01";
  }

  function upscLimits(catId, extraId) {
    const cats = { gen: { relax: 0, attempts: 6 }, ews: { relax: 0, attempts: 6 }, obc: { relax: 3, attempts: 9 }, sc: { relax: 5, attempts: null }, st: { relax: 5, attempts: null } };
    const extras = { none: 0, pwbd: 10, esm: 5, defence: 3 };
    const cat = cats[catId] || cats.gen;
    const extraRelax = extras[extraId] === undefined ? 0 : extras[extraId];
    const upper = 32 + cat.relax + extraRelax;
    const attempts = (catId === "sc" || catId === "st") ? null : (extraId === "pwbd" ? 9 : cat.attempts);
    return { upper, attempts, relax: cat.relax + extraRelax };
  }

  function upscAttemptsLeft(allowed, used) {
    if (allowed === null) return null;
    return Math.max(0, allowed - (used || 0));
  }

  function upscEligibleYears(dobISO, upper) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    let first = null;
    for (let y = dob.getUTCFullYear() + 20; y <= dob.getUTCFullYear() + 24; y++) {
      const a = sscAgeParts(dobISO, y + "-08-01");
      if (a && a.y >= 21) {
        first = y;
        break;
      }
    }
    if (first === null) return null;
    let last = null;
    for (let y = first; y <= first + 44; y++) {
      const a = sscAgeParts(dobISO, y + "-08-01");
      if (a && a.y < upper) last = y;
      else break;
    }
    return { first, last };
  }

  const dobInput = $("dob");
  const yearSelect = $("year");
  const categorySelect = $("category");
  const usedInput = $("used");
  const dobError = $("dob-error");
  const usedError = $("used-error");
  const output = $("answer");
  const yearsVal = $("years-val");
  const monthsVal = $("months-val");
  const daysVal = $("days-val");
  const verdictBox = $("verdict-box");
  const verdictTitle = $("verdict-title");
  const verdictText = $("verdict-text");
  const working = $("working");
  const workingWindow = $("working-window");
  const workingAttempts = $("working-attempts");
  const workingYears = $("working-years");
  const cutoffNote = $("cutoff-note");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtDate = iso => {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  };

  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const ageText = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");
  const catLabel = id => {
    const f = c.categories.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraLabel = id => {
    const f = c.extras.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraChecked = () => {
    const r = document.querySelector('input[name="extra"]:checked');
    return r ? r.value : "none";
  };
  const setExtra = id => {
    const r = document.querySelector('input[name="extra"][value="' + id + '"]');
    if (r) r.checked = true;
  };

  function clearResult() {
    output.textContent = "—";
    yearsVal.textContent = "—";
    monthsVal.textContent = "—";
    daysVal.textContent = "—";
    verdictBox.className = "verdict";
    verdictTitle.textContent = "Your UPSC verdict";
    verdictText.textContent = "Enter your details to see whether you meet the age limit.";
    working.textContent = "Enter your date of birth to see the working.";
    workingWindow.textContent = "";
    workingAttempts.textContent = "";
    workingYears.textContent = "";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function paint(showEmptyError = false) {
    const dobVal = dobInput.value;
    const yearVal = Number(yearSelect.value);
    const cutoff = upscCutoff(yearVal);
    const catVal = categorySelect.value;
    const extraVal = extraChecked();
    const usedRaw = usedInput.value;
    const usedVal = usedRaw === "" ? 0 : Number(usedRaw);
    cutoffNote.textContent = "Age is counted on 1 August " + yearVal + ".";

    let dobMsg = "";
    if (!dobVal) {
      if (showEmptyError) dobMsg = "Enter your date of birth.";
    } else if (dobInput.validity.badInput) {
      dobMsg = "Enter a valid date of birth.";
    } else if (dobVal < "1900-01-01") {
      dobMsg = "Enter a date of birth on or after 1 January 1900.";
    } else if (dobVal > cutoff) {
      dobMsg = "Date of birth must be on or before 1 August " + yearVal + ".";
    }
    dobError.textContent = dobMsg;
    dobInput.setAttribute("aria-invalid", String(dobMsg !== ""));

    let usedMsg = "";
    if (usedRaw !== "" && (!Number.isInteger(usedVal) || usedVal < 0 || usedVal > 30)) {
      usedMsg = "Enter whole attempts from 0 to 30.";
    }
    usedError.textContent = usedMsg;
    usedInput.setAttribute("aria-invalid", String(usedMsg !== ""));

    const valid = dobMsg === "" && usedMsg === "" && dobVal;
    if (!valid) {
      clearResult();
      return false;
    }

    const age = sscAgeParts(dobVal, cutoff);
    const lim = upscLimits(catVal, extraVal);
    const win = sscWindow(cutoff, 21, lim.upper, 0, 0, 0);
    const years = upscEligibleYears(dobVal, lim.upper);
    const left = upscAttemptsLeft(lim.attempts, usedVal);
    if (!age || !win || !years) {
      clearResult();
      return false;
    }

    const verdict = age.y < 21 ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    output.textContent = ageText(age);
    yearsVal.textContent = String(age.y);
    monthsVal.textContent = String(age.m);
    daysVal.textContent = String(age.d);

    let boxClass = verdict === "Eligible" ? "verdict-ok" : verdict === "Too young" ? "verdict-young" : "verdict-no";
    let title = verdict + " for CSE " + yearVal;
    let text = verdict === "Eligible"
      ? "You meet the age condition for " + catLabel(catVal) + (extraVal !== "none" ? " (" + extraLabel(extraVal) + ")" : "") + ": under " + lim.upper + " years on 1 August " + yearVal + "."
      : verdict === "Too young"
        ? "You are under 21 on 1 August " + yearVal + ". The minimum age applies to every category."
        : "You have attained " + lim.upper + " years on 1 August " + yearVal + ". The upper limit is exclusive — you must not have attained it.";
    if (verdict === "Eligible" && left === 0) {
      boxClass = "verdict-young";
      title = "Eligible by age — no attempts left";
      text = "You meet the age condition, but you have used all " + lim.attempts + " attempts allowed for this category.";
    }
    verdictBox.className = "verdict " + boxClass;
    verdictTitle.textContent = title;
    verdictText.textContent = text;

    working.textContent = fmtDate(dobVal) + " → 1 August " + yearVal + " = " + ageText(age) + ".";
    workingWindow.textContent = "Upper age limit: under " + lim.upper + " years. Born between " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) + ".";
    workingAttempts.textContent = lim.attempts === null
      ? "Attempts: unlimited for " + catLabel(catVal) + " candidates within the age limit."
      : "Attempts: " + lim.attempts + " allowed · " + usedVal + " used · " + left + " left" + (left === 0 ? " — you have used all " + lim.attempts + " attempts allowed for this category." : ".");
    workingYears.textContent = "Eligible exam years: " + years.first + "–" + years.last + ".";

    copyButton.disabled = false;
    summary =
      "VisitBest | UPSC Age Calculator" +
      "\nDate of birth: " + fmtDate(dobVal) +
      "\nExam: CSE " + yearVal + " (cut-off 1 August " + yearVal + ")" +
      "\nCategory: " + catLabel(catVal) + (extraVal !== "none" ? " + " + extraLabel(extraVal) : "") +
      "\nExact age: " + ageText(age) +
      "\nUpper age limit: under " + lim.upper + " years" +
      "\nBorn between: " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) +
      "\nVerdict: " + verdict + (verdict === "Eligible" && left === 0 ? " by age — no attempts left" : "") +
      "\nAttempts: " + (lim.attempts === null ? "unlimited" : lim.attempts + " allowed, " + usedVal + " used, " + left + " left") +
      "\nEligible exam years: " + years.first + "–" + years.last;
    return true;
  }

  function scenarioKey() {
    return [dobInput.value, yearSelect.value, categorySelect.value, extraChecked(), usedInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const age = sscAgeParts(item.dob, upscCutoff(item.year));
      button.textContent = fmtDate(item.dob) + " → " + (age ? ageText(age) : "—") + " · CSE " + item.year;
      button.setAttribute("aria-label", "Load check for " + fmtDate(item.dob) + ", CSE " + item.year);
      button.addEventListener("click", () => {
        dobInput.value = item.dob;
        yearSelect.value = String(item.year);
        categorySelect.value = item.cat;
        setExtra(item.extra);
        usedInput.value = String(item.used);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    history.unshift({
      key,
      dob: dobInput.value,
      year: Number(yearSelect.value),
      cat: categorySelect.value,
      extra: extraChecked(),
      used: usedInput.value === "" ? 0 : Number(usedInput.value)
    });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      dobInput.value = button.dataset.dob || "";
      yearSelect.value = button.dataset.year || String(c.defaultYear);
      categorySelect.value = button.dataset.cat || "gen";
      setExtra(button.dataset.extra || "none");
      usedInput.value = button.dataset.used || "0";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  ["input", "change"].forEach(evt => {
    dobInput.addEventListener(evt, () => paint());
    yearSelect.addEventListener(evt, () => paint());
    categorySelect.addEventListener(evt, () => paint());
    usedInput.addEventListener(evt, () => paint());
  });
  document.querySelectorAll('input[name="extra"]').forEach(radio => {
    radio.addEventListener("change", () => paint());
  });

  $("age-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    dobInput.value = c.sampleDob;
    yearSelect.value = String(c.defaultYear);
    categorySelect.value = "gen";
    setExtra("none");
    usedInput.value = "0";
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function ibpsClient(c) {
  const $ = id => document.getElementById(id);

  function sscAgeParts(dobISO, cutISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
    let y = cut.getUTCFullYear() - dob.getUTCFullYear();
    let m = cut.getUTCMonth() - dob.getUTCMonth();
    let d = cut.getUTCDate() - dob.getUTCDate();
    if (d < 0) {
      m -= 1;
      const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
      d += prev.getUTCDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { y, m, d };
  }

  function sscISODate(date) {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function sscAddDuration(dobISO, years, months) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    let y = dob.getUTCFullYear() + (years || 0);
    let m = dob.getUTCMonth() + (months || 0);
    y += Math.floor(m / 12);
    m = ((m % 12) + 12) % 12;
    const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const d = Math.min(dob.getUTCDate(), last);
    return new Date(Date.UTC(y, m, d));
  }

  function sscWindow(cutISO, min, max, relaxYears, serviceY, serviceM) {
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(cut.getTime())) return null;
    const earliestBase = sscAddDuration(cutISO, -(max + (relaxYears || 0)), 0);
    const earliestPlusDay = new Date(earliestBase.getTime() + 86400000);
    const earliest = sscAddDuration(sscISODate(earliestPlusDay), -(serviceY || 0), -(serviceM || 0));
    const latest = sscAddDuration(cutISO, -min, 0);
    return { earliest: sscISODate(earliest), latest: sscISODate(latest) };
  }

  function ibpsExam(examId) {
    const exams = {
      po: { cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
      clerk: { cut: "2026-08-01", min: 20, upper: 28, exsm: "service3", widow: true },
      so: { cut: "2026-07-01", min: 20, upper: 30, exsm: "flat5", widow: false },
      "rrb-oa": { cut: "2026-09-01", min: 18, upper: 28, exsm: "service3", widow: true },
      "rrb-1": { cut: "2026-09-01", min: 18, upper: 30, exsm: "flat5", widow: false },
      "rrb-2": { cut: "2026-09-01", min: 21, upper: 32, exsm: "flat5", widow: false },
      "rrb-3": { cut: "2026-09-01", min: 21, upper: 40, exsm: "flat5", widow: false }
    };
    return exams[examId] || exams.po;
  }

  function ibpsCutoff(examId) {
    return ibpsExam(examId).cut;
  }

  function ibpsLimits(examId, catId, extraId, serviceYears) {
    const exam = ibpsExam(examId);
    const cats = { gen: 0, ews: 0, obc: 3, sc: 5, st: 5 };
    const catRelax = cats[catId] === undefined ? 0 : cats[catId];
    const service = Number(serviceYears) || 0;
    let upper;
    let capped = false;
    if (extraId === "pwbd") {
      upper = exam.upper + catRelax + 10;
    } else if (extraId === "esm") {
      if (exam.exsm === "flat5") {
        upper = exam.upper + catRelax + (service >= 5 ? 5 : 0);
      } else {
        upper = exam.upper + catRelax + service + 3;
        if (upper > 50) {
          upper = 50;
          capped = true;
        }
      }
    } else if (extraId === "widow" && exam.widow) {
      upper = 35 + catRelax;
    } else {
      upper = exam.upper + catRelax;
    }
    return { upper, min: exam.min, relax: upper - exam.upper, capped };
  }

  function ibpsEligibleYears(dobISO, examId, upper) {
    const exam = ibpsExam(examId);
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    const md = exam.cut.slice(5);
    let first = null;
    for (let y = dob.getUTCFullYear() + exam.min - 1; y <= dob.getUTCFullYear() + exam.min + 4; y++) {
      const a = sscAgeParts(dobISO, y + "-" + md);
      if (a && a.y >= exam.min) {
        first = y;
        break;
      }
    }
    if (first === null) return null;
    let last = null;
    for (let y = first; y <= first + 44; y++) {
      const a = sscAgeParts(dobISO, y + "-" + md);
      if (a && a.y < upper) last = y;
      else break;
    }
    return { first, last };
  }

  const dobInput = $("dob");
  const examSelect = $("exam");
  const categorySelect = $("category");
  const serviceInput = $("service");
  const serviceField = $("service-field");
  const dobError = $("dob-error");
  const serviceError = $("service-error");
  const output = $("answer");
  const yearsVal = $("years-val");
  const monthsVal = $("months-val");
  const daysVal = $("days-val");
  const verdictBox = $("verdict-box");
  const verdictTitle = $("verdict-title");
  const verdictText = $("verdict-text");
  const working = $("working");
  const workingWindow = $("working-window");
  const workingNote = $("working-note");
  const workingYears = $("working-years");
  const cutoffNote = $("cutoff-note");
  const examPill = $("exam-pill");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtDate = iso => {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  };

  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const ageText = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");
  const examRec = id => {
    const f = c.exams.find(x => x.id === id);
    return f || c.exams[0];
  };
  const catLabel = id => {
    const f = c.categories.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraLabel = id => {
    const f = c.extras.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraChecked = () => {
    const r = document.querySelector('input[name="extra"]:checked');
    return r ? r.value : "none";
  };
  const setExtra = id => {
    const r = document.querySelector('input[name="extra"][value="' + id + '"]');
    if (r) r.checked = true;
  };

  function syncExtraVisibility() {
    const rec = examRec(examSelect.value);
    document.querySelectorAll('[data-extra-row="widow"]').forEach(row => {
      row.hidden = !rec.widow;
    });
    if (extraChecked() === "widow" && !rec.widow) setExtra("none");
    serviceField.hidden = extraChecked() !== "esm";
  }

  function clearResult() {
    output.textContent = "—";
    yearsVal.textContent = "—";
    monthsVal.textContent = "—";
    daysVal.textContent = "—";
    verdictBox.className = "verdict";
    verdictTitle.textContent = "Your IBPS verdict";
    verdictText.textContent = "Enter your details to see whether you meet the age limit.";
    working.textContent = "Enter your date of birth to see the working.";
    workingWindow.textContent = "";
    workingNote.textContent = "";
    workingYears.textContent = "";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function paint(showEmptyError = false) {
    syncExtraVisibility();
    const dobVal = dobInput.value;
    const examVal = examSelect.value;
    const rec = examRec(examVal);
    const cutoff = ibpsCutoff(examVal);
    const catVal = categorySelect.value;
    const extraVal = extraChecked();
    const serviceRaw = serviceInput.value;
    const serviceVal = serviceRaw === "" ? 0 : Number(serviceRaw);
    cutoffNote.textContent = "Age is counted on " + fmtDate(cutoff) + " (" + rec.cycle + ").";
    examPill.textContent = rec.cycle;

    let dobMsg = "";
    if (!dobVal) {
      if (showEmptyError) dobMsg = "Enter your date of birth.";
    } else if (dobInput.validity.badInput) {
      dobMsg = "Enter a valid date of birth.";
    } else if (dobVal < "1900-01-01") {
      dobMsg = "Enter a date of birth on or after 1 January 1900.";
    } else if (dobVal > cutoff) {
      dobMsg = "Date of birth must be on or before " + fmtDate(cutoff) + ".";
    }
    dobError.textContent = dobMsg;
    dobInput.setAttribute("aria-invalid", String(dobMsg !== ""));

    let serviceMsg = "";
    if (extraVal === "esm" && serviceRaw !== "" && (!Number.isInteger(serviceVal) || serviceVal < 0 || serviceVal > 40)) {
      serviceMsg = "Enter whole years of service from 0 to 40.";
    }
    serviceError.textContent = serviceMsg;
    serviceInput.setAttribute("aria-invalid", String(serviceMsg !== ""));

    const valid = dobMsg === "" && serviceMsg === "" && dobVal;
    if (!valid) {
      clearResult();
      return false;
    }

    const age = sscAgeParts(dobVal, cutoff);
    const lim = ibpsLimits(examVal, catVal, extraVal, serviceVal);
    const win = sscWindow(cutoff, lim.min, lim.upper, 0, 0, 0);
    const years = ibpsEligibleYears(dobVal, examVal, lim.upper);
    if (!age || !win || !years) {
      clearResult();
      return false;
    }

    const verdict = age.y < lim.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    output.textContent = ageText(age);
    yearsVal.textContent = String(age.y);
    monthsVal.textContent = String(age.m);
    daysVal.textContent = String(age.d);

    const boxClass = verdict === "Eligible" ? "verdict-ok" : verdict === "Too young" ? "verdict-young" : "verdict-no";
    const title = verdict + " for " + rec.label;
    let text = verdict === "Eligible"
      ? "You meet the age condition for " + rec.label + " (" + rec.cycle + "): under " + lim.upper + " years on " + fmtDate(cutoff) + "."
      : verdict === "Too young"
        ? "You are under " + lim.min + " on " + fmtDate(cutoff) + ". The minimum age applies to every category."
        : "You have attained " + lim.upper + " years on " + fmtDate(cutoff) + ". The upper limit is exclusive — you must not have attained it.";
    verdictBox.className = "verdict " + boxClass;
    verdictTitle.textContent = title;
    verdictText.textContent = text;

    working.textContent = fmtDate(dobVal) + " → " + fmtDate(cutoff) + " = " + ageText(age) + ".";
    workingWindow.textContent = "Upper age limit: under " + lim.upper + " years. Born between " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) + "." + (lim.capped ? " The ex-serviceman relaxation is capped at 50 years." : "");
    let note = "Attempts: IBPS sets no limit on the number of attempts — only the age limit applies.";
    if (extraVal === "esm" && rec.exsm === "service3") {
      note += " Ex-serviceman relaxation: " + serviceVal + " years of service + 3 = +" + (serviceVal + 3) + " years" + (lim.capped ? ", capped at 50 years." : ".");
    } else if (extraVal === "esm") {
      note += serviceVal >= 5 ? " Ex-serviceman relaxation: +5 years (5 or more years of service)." : " Ex-serviceman relaxation: none — the +5 years needs 5 or more years of service.";
    } else if (extraVal === "widow") {
      note += " Widow concession: up to " + lim.upper + " years for " + catLabel(catVal) + ".";
    }
    workingNote.textContent = note;
    workingYears.textContent = "Eligible exam years: " + years.first + "–" + years.last + ".";

    copyButton.disabled = false;
    summary =
      "VisitBest | IBPS Age Calculator" +
      "\nDate of birth: " + fmtDate(dobVal) +
      "\nExam: " + rec.label + " (" + rec.cycle + ", cut-off " + fmtDate(cutoff) + ")" +
      "\nCategory: " + catLabel(catVal) + (extraVal !== "none" ? " + " + extraLabel(extraVal) : "") +
      (extraVal === "esm" ? " (" + serviceVal + " years of service)" : "") +
      "\nExact age: " + ageText(age) +
      "\nUpper age limit: under " + lim.upper + " years" +
      "\nBorn between: " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) +
      "\nVerdict: " + verdict +
      "\nAttempts: no limit" +
      "\nEligible exam years: " + years.first + "–" + years.last;
    return true;
  }

  function scenarioKey() {
    return [dobInput.value, examSelect.value, categorySelect.value, extraChecked(), serviceInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const age = sscAgeParts(item.dob, ibpsCutoff(item.exam));
      const rec = examRec(item.exam);
      button.textContent = fmtDate(item.dob) + " → " + (age ? ageText(age) : "—") + " · " + rec.cycle;
      button.setAttribute("aria-label", "Load check for " + fmtDate(item.dob) + ", " + rec.label);
      button.addEventListener("click", () => {
        dobInput.value = item.dob;
        examSelect.value = item.exam;
        categorySelect.value = item.cat;
        setExtra(item.extra);
        serviceInput.value = String(item.service);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    history.unshift({
      key,
      dob: dobInput.value,
      exam: examSelect.value,
      cat: categorySelect.value,
      extra: extraChecked(),
      service: serviceInput.value === "" ? 0 : Number(serviceInput.value)
    });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      dobInput.value = button.dataset.dob || "";
      examSelect.value = button.dataset.exam || c.defaultExam;
      categorySelect.value = button.dataset.cat || "gen";
      setExtra(button.dataset.extra || "none");
      serviceInput.value = button.dataset.service || "5";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  ["input", "change"].forEach(evt => {
    dobInput.addEventListener(evt, () => paint());
    examSelect.addEventListener(evt, () => paint());
    categorySelect.addEventListener(evt, () => paint());
    serviceInput.addEventListener(evt, () => paint());
  });
  document.querySelectorAll('input[name="extra"]').forEach(radio => {
    radio.addEventListener("change", () => paint());
  });

  $("age-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    dobInput.value = c.sampleDob;
    examSelect.value = c.defaultExam;
    categorySelect.value = "gen";
    setExtra("none");
    serviceInput.value = "5";
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function emiCompute(principal, annualRatePct, months) {
  const P = Number(principal);
  const pct = Number(annualRatePct);
  const n = Math.round(Number(months));
  if (!(P > 0) || !(n > 0) || !(pct >= 0) || !Number.isFinite(P) || !Number.isFinite(pct) || !Number.isFinite(n)) return null;
  const r = pct / 1200;
  const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  return { emi, total, interest: total - P, months: n, monthlyRate: r };
}

export function emiSchedule(principal, annualRatePct, months) {
  const first = emiCompute(principal, annualRatePct, months);
  if (!first) return null;
  const P = Number(principal);
  const r = first.monthlyRate;
  const emi = first.emi;
  const n = first.months;
  let balance = P;
  const years = [];
  for (let y = 0; y * 12 < n; y++) {
    let yearInterest = 0;
    let yearPrincipal = 0;
    for (let m = 0; m < 12; m++) {
      const idx = y * 12 + m;
      if (idx >= n) break;
      const interest = balance * r;
      let principal = emi - interest;
      if (idx === n - 1) principal = balance;
      balance -= principal;
      yearInterest += interest;
      yearPrincipal += principal;
    }
    years.push({ year: y + 1, interest: yearInterest, principal: yearPrincipal, balance });
  }
  return years;
}

export function emiPrepay(principal, annualRatePct, months, extraPerMonth) {
  const first = emiCompute(principal, annualRatePct, months);
  if (!first) return null;
  const extra = Number(extraPerMonth) || 0;
  if (extra <= 0) return { months: first.months, interest: first.interest, savedMonths: 0, savedInterest: 0 };
  const r = first.monthlyRate;
  const emi = first.emi;
  let balance = Number(principal);
  let paid = 0;
  let totalInterest = 0;
  while (balance > 0 && paid < 1200) {
    const interest = balance * r;
    const pay = Math.min(emi + extra, balance + interest);
    const principal = pay - interest;
    balance -= principal;
    totalInterest += interest;
    paid++;
  }
  return { months: paid, interest: totalInterest, savedMonths: first.months - paid, savedInterest: first.interest - totalInterest };
}

export function rrbClient(c) {
  const $ = id => document.getElementById(id);

  function sscAgeParts(dobISO, cutISO) {
    const dob = new Date(dobISO + "T00:00:00Z");
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime()) || Number.isNaN(cut.getTime()) || cut < dob) return null;
    let y = cut.getUTCFullYear() - dob.getUTCFullYear();
    let m = cut.getUTCMonth() - dob.getUTCMonth();
    let d = cut.getUTCDate() - dob.getUTCDate();
    if (d < 0) {
      m -= 1;
      const prev = new Date(Date.UTC(cut.getUTCFullYear(), cut.getUTCMonth(), 0));
      d += prev.getUTCDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { y, m, d };
  }

  function sscISODate(date) {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function sscAddDuration(dobISO, years, months) {
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    let y = dob.getUTCFullYear() + (years || 0);
    let m = dob.getUTCMonth() + (months || 0);
    y += Math.floor(m / 12);
    m = ((m % 12) + 12) % 12;
    const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const d = Math.min(dob.getUTCDate(), last);
    return new Date(Date.UTC(y, m, d));
  }

  function sscWindow(cutISO, min, max, relaxYears, serviceY, serviceM) {
    const cut = new Date(cutISO + "T00:00:00Z");
    if (Number.isNaN(cut.getTime())) return null;
    const earliestBase = sscAddDuration(cutISO, -(max + (relaxYears || 0)), 0);
    const earliestPlusDay = new Date(earliestBase.getTime() + 86400000);
    const earliest = sscAddDuration(sscISODate(earliestPlusDay), -(serviceY || 0), -(serviceM || 0));
    const latest = sscAddDuration(cutISO, -min, 0);
    return { earliest: sscISODate(earliest), latest: sscISODate(latest) };
  }

  function rrbExam(examId) {
    const exams = {
      "ntpc-g": { cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      "ntpc-ug": { cut: "2027-01-01", min: 18, upper: 30, pwbd: true, ccaa: false },
      groupd: { cut: "2026-01-01", min: 18, upper: 33, pwbd: true, ccaa: true },
      alp: { cut: "2026-07-01", min: 18, upper: 30, pwbd: false, ccaa: true },
      tech1: { cut: "2026-07-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      tech3: { cut: "2026-07-01", min: 18, upper: 30, pwbd: true, ccaa: true },
      je: { cut: "2027-01-01", min: 18, upper: 33, pwbd: true, ccaa: false },
      sc: { cut: "2026-07-01", min: 20, upper: 33, pwbd: true, ccaa: false }
    };
    return exams[examId] || exams["ntpc-g"];
  }

  function rrbCutoff(examId) {
    return rrbExam(examId).cut;
  }

  function rrbLimits(examId, catId, extraId, years) {
    const exam = rrbExam(examId);
    const cats = { gen: 0, ews: 0, obc: 3, sc: 5, st: 5 };
    const catRelax = cats[catId] === undefined ? 0 : cats[catId];
    const yrs = Number(years) || 0;
    // RRB gives the MAXIMUM relaxation a candidate is eligible for — the
    // relaxations do not add up (unlike IBPS/UPSC, where a category relaxation
    // stacks with one further clause). Every figure below already includes
    // the category relaxation where the CEN states it by category:
    // PwBD 10/13/15, ex-serviceman 3/6/8 (after service is deducted from
    // age), widow and CCAA-before-25 35/38/40, railway staff 40/43/45.
    const pwbdExtra = { gen: 10, ews: 10, obc: 13, sc: 15, st: 15 };
    const esmExtra = { gen: 3, ews: 3, obc: 6, sc: 8, st: 8 };
    const ccaaCap = { gen: 3, ews: 3, obc: 6, sc: 8, st: 8 };
    let upper;
    if (extraId === "pwbd" && exam.pwbd) {
      upper = exam.upper + pwbdExtra[catId];
    } else if (extraId === "esm") {
      // Needs more than six months of service (whole years >= 1); the service
      // is deducted from the age first, then the extra years apply. No cap.
      upper = yrs >= 1 ? exam.upper + yrs + esmExtra[catId] : exam.upper + catRelax;
    } else if (extraId === "widow") {
      upper = 35 + catRelax;
    } else if (extraId === "staff") {
      upper = 40 + catRelax;
    } else if (extraId === "ccaa" && exam.ccaa) {
      upper = exam.upper + Math.min(catRelax + yrs, ccaaCap[catId]);
    } else if (extraId === "ccaa25" && exam.ccaa) {
      upper = 35 + catRelax;
    } else {
      upper = exam.upper + catRelax;
    }
    return { upper, min: exam.min, relax: upper - exam.upper };
  }

  function rrbEligibleYears(dobISO, examId, upper) {
    const exam = rrbExam(examId);
    const dob = new Date(dobISO + "T00:00:00Z");
    if (Number.isNaN(dob.getTime())) return null;
    const md = exam.cut.slice(5);
    let first = null;
    for (let y = dob.getUTCFullYear() + exam.min - 1; y <= dob.getUTCFullYear() + exam.min + 4; y++) {
      const a = sscAgeParts(dobISO, y + "-" + md);
      if (a && a.y >= exam.min) {
        first = y;
        break;
      }
    }
    if (first === null) return null;
    let last = null;
    for (let y = first; y <= first + 44; y++) {
      const a = sscAgeParts(dobISO, y + "-" + md);
      if (a && a.y < upper) last = y;
      else break;
    }
    return { first, last };
  }

  const dobInput = $("dob");
  const examSelect = $("exam");
  const categorySelect = $("category");
  const yearsInput = $("years");
  const yearsField = $("years-field");
  const yearsNote = $("years-note");
  const dobError = $("dob-error");
  const yearsError = $("years-error");
  const output = $("answer");
  const yearsVal = $("years-val");
  const monthsVal = $("months-val");
  const daysVal = $("days-val");
  const verdictBox = $("verdict-box");
  const verdictTitle = $("verdict-title");
  const verdictText = $("verdict-text");
  const working = $("working");
  const workingWindow = $("working-window");
  const workingNote = $("working-note");
  const workingYears = $("working-years");
  const cutoffNote = $("cutoff-note");
  const examPill = $("exam-pill");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtDate = iso => {
    const d = new Date(iso + "T00:00:00Z");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  };

  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const ageText = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");
  const examRec = id => {
    const f = c.exams.find(x => x.id === id);
    return f || c.exams[0];
  };
  const catLabel = id => {
    const f = c.categories.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraLabel = id => {
    const f = c.extras.find(x => x.id === id);
    return f ? f.label : id;
  };
  const extraChecked = () => {
    const r = document.querySelector('input[name="extra"]:checked');
    return r ? r.value : "none";
  };
  const setExtra = id => {
    const r = document.querySelector('input[name="extra"][value="' + id + '"]');
    if (r) r.checked = true;
  };

  function syncExtraVisibility() {
    const rec = examRec(examSelect.value);
    document.querySelectorAll('[data-extra-row="pwbd"]').forEach(row => {
      row.hidden = !rec.pwbd;
    });
    document.querySelectorAll('[data-extra-row="ccaa"]').forEach(row => {
      row.hidden = !rec.ccaa;
    });
    if (extraChecked() === "pwbd" && !rec.pwbd) setExtra("none");
    if ((extraChecked() === "ccaa" || extraChecked() === "ccaa25") && !rec.ccaa) setExtra("none");
    const extraVal = extraChecked();
    const showYears = extraVal === "esm" || extraVal === "ccaa";
    yearsField.hidden = !showYears;
    yearsNote.textContent = extraVal === "ccaa"
      ? "Years of apprenticeship training (0 to 3)"
      : "Years of defence service (0 to 40)";
  }

  function clearResult() {
    output.textContent = "—";
    yearsVal.textContent = "—";
    monthsVal.textContent = "—";
    daysVal.textContent = "—";
    verdictBox.className = "verdict";
    verdictTitle.textContent = "Your RRB verdict";
    verdictText.textContent = "Enter your details to see whether you meet the age limit.";
    working.textContent = "Enter your date of birth to see the working.";
    workingWindow.textContent = "";
    workingNote.textContent = "";
    workingYears.textContent = "";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function paint(showEmptyError = false) {
    syncExtraVisibility();
    const dobVal = dobInput.value;
    const examVal = examSelect.value;
    const rec = examRec(examVal);
    const cutoff = rrbCutoff(examVal);
    const catVal = categorySelect.value;
    const extraVal = extraChecked();
    const yearsRaw = yearsInput.value;
    const yearsNum = yearsRaw === "" ? 0 : Number(yearsRaw);
    cutoffNote.textContent = "Age is counted on " + fmtDate(cutoff) + " (" + rec.cycle + ").";
    examPill.textContent = rec.cycle;

    let dobMsg = "";
    if (!dobVal) {
      if (showEmptyError) dobMsg = "Enter your date of birth.";
    } else if (dobInput.validity.badInput) {
      dobMsg = "Enter a valid date of birth.";
    } else if (dobVal < "1900-01-01") {
      dobMsg = "Enter a date of birth on or after 1 January 1900.";
    } else if (dobVal > cutoff) {
      dobMsg = "Date of birth must be on or before " + fmtDate(cutoff) + ".";
    }
    dobError.textContent = dobMsg;
    dobInput.setAttribute("aria-invalid", String(dobMsg !== ""));

    let yearsMsg = "";
    if (extraVal === "esm" && yearsRaw !== "" && (!Number.isInteger(yearsNum) || yearsNum < 0 || yearsNum > 40)) {
      yearsMsg = "Enter whole years of service from 0 to 40.";
    } else if (extraVal === "ccaa" && yearsRaw !== "" && (!Number.isInteger(yearsNum) || yearsNum < 0 || yearsNum > 3)) {
      yearsMsg = "Enter whole years of training from 0 to 3.";
    }
    yearsError.textContent = yearsMsg;
    yearsInput.setAttribute("aria-invalid", String(yearsMsg !== ""));

    const valid = dobMsg === "" && yearsMsg === "" && dobVal;
    if (!valid) {
      clearResult();
      return false;
    }

    const age = sscAgeParts(dobVal, cutoff);
    const lim = rrbLimits(examVal, catVal, extraVal, yearsNum);
    const win = sscWindow(cutoff, lim.min, lim.upper, 0, 0, 0);
    const years = rrbEligibleYears(dobVal, examVal, lim.upper);
    if (!age || !win || !years) {
      clearResult();
      return false;
    }

    const verdict = age.y < lim.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    output.textContent = ageText(age);
    yearsVal.textContent = String(age.y);
    monthsVal.textContent = String(age.m);
    daysVal.textContent = String(age.d);

    const boxClass = verdict === "Eligible" ? "verdict-ok" : verdict === "Too young" ? "verdict-young" : "verdict-no";
    const title = verdict + " for " + rec.label;
    let text = verdict === "Eligible"
      ? "You meet the age condition for " + rec.label + " (" + rec.cycle + "): under " + lim.upper + " years on " + fmtDate(cutoff) + "."
      : verdict === "Too young"
        ? "You are under " + lim.min + " on " + fmtDate(cutoff) + ". The minimum age applies to every category."
        : "You have attained " + lim.upper + " years on " + fmtDate(cutoff) + ". The upper limit is exclusive — you must not have attained it.";
    verdictBox.className = "verdict " + boxClass;
    verdictTitle.textContent = title;
    verdictText.textContent = text;

    working.textContent = fmtDate(dobVal) + " → " + fmtDate(cutoff) + " = " + ageText(age) + ".";
    workingWindow.textContent = "Upper age limit: under " + lim.upper + " years. Born between " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) + ".";
    let note = "Attempts: RRB sets no limit on the number of attempts — only the age limit applies.";
    if (extraVal === "esm") {
      note += yearsNum >= 1
        ? " Ex-serviceman relaxation: " + yearsNum + " years of service deducted from your age, then +" + (lim.relax - yearsNum) + " years."
        : " Ex-serviceman relaxation: none — it needs more than six months of service.";
    } else if (extraVal === "pwbd") {
      note += " PwBD relaxation: +" + lim.relax + " years in total, including your category relaxation. RRB takes the maximum, not the sum.";
    } else if (extraVal === "widow") {
      note += " Widow concession: up to " + lim.upper + " years for " + catLabel(catVal) + ".";
    } else if (extraVal === "staff") {
      note += " Railway staff concession: up to " + lim.upper + " years for " + catLabel(catVal) + ".";
    } else if (extraVal === "ccaa") {
      note += " CCAA relaxation: " + yearsNum + " years of apprenticeship training, +" + lim.relax + " years in total including your category relaxation.";
    } else if (extraVal === "ccaa25") {
      note += " CCAA before 25: up to " + lim.upper + " years for " + catLabel(catVal) + ".";
    }
    workingNote.textContent = note;
    workingYears.textContent = "Eligible exam years: " + years.first + "–" + years.last + ".";

    copyButton.disabled = false;
    summary =
      "VisitBest | RRB Age Calculator" +
      "\nDate of birth: " + fmtDate(dobVal) +
      "\nExam: " + rec.label + " (" + rec.cycle + ", crucial date " + fmtDate(cutoff) + ")" +
      "\nCategory: " + catLabel(catVal) + (extraVal !== "none" ? " + " + extraLabel(extraVal) : "") +
      (extraVal === "esm" ? " (" + yearsNum + " years of service)" : "") +
      (extraVal === "ccaa" ? " (" + yearsNum + " years of training)" : "") +
      "\nExact age: " + ageText(age) +
      "\nUpper age limit: under " + lim.upper + " years" +
      "\nBorn between: " + fmtDate(win.earliest) + " and " + fmtDate(win.latest) +
      "\nVerdict: " + verdict +
      "\nAttempts: no limit" +
      "\nEligible exam years: " + years.first + "–" + years.last;
    return true;
  }

  function scenarioKey() {
    return [dobInput.value, examSelect.value, categorySelect.value, extraChecked(), yearsInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const age = sscAgeParts(item.dob, rrbCutoff(item.exam));
      const rec = examRec(item.exam);
      button.textContent = fmtDate(item.dob) + " → " + (age ? ageText(age) : "—") + " · " + rec.cycle;
      button.setAttribute("aria-label", "Load check for " + fmtDate(item.dob) + ", " + rec.label);
      button.addEventListener("click", () => {
        dobInput.value = item.dob;
        examSelect.value = item.exam;
        categorySelect.value = item.cat;
        setExtra(item.extra);
        yearsInput.value = String(item.years);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    history.unshift({
      key,
      dob: dobInput.value,
      exam: examSelect.value,
      cat: categorySelect.value,
      extra: extraChecked(),
      years: yearsInput.value === "" ? 0 : Number(yearsInput.value)
    });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      dobInput.value = button.dataset.dob || "";
      examSelect.value = button.dataset.exam || c.defaultExam;
      categorySelect.value = button.dataset.cat || "gen";
      setExtra(button.dataset.extra || "none");
      yearsInput.value = button.dataset.years || "5";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  ["input", "change"].forEach(evt => {
    dobInput.addEventListener(evt, () => paint());
    examSelect.addEventListener(evt, () => paint());
    categorySelect.addEventListener(evt, () => paint());
    yearsInput.addEventListener(evt, () => paint());
  });
  document.querySelectorAll('input[name="extra"]').forEach(radio => {
    radio.addEventListener("change", () => paint());
  });

  $("age-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    dobInput.value = c.sampleDob;
    examSelect.value = c.defaultExam;
    categorySelect.value = "gen";
    setExtra("none");
    yearsInput.value = "5";
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function renderGeneralAgeCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = iso => {
    const parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[2]) + " " + MONTHS[Number(parts[1]) - 1] + " " + parts[0];
  };
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const fmtAge = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const config = { key: p.key, title: p.title, sampleDob: p.sampleDob };
  const sampleRef = "2026-08-01";
  const sampleAge = sscAgeParts(p.sampleDob, sampleRef);
  const sampleTotals = generalAgeTotals(p.sampleDob, sampleRef);
  const sampleNext = generalAgeNextBirthday(p.sampleDob, sampleRef);

  const compareRows = p.compareRefs.map(ref => {
    const age = sscAgeParts(p.compareDob, ref);
    const totals = generalAgeTotals(p.compareDob, ref);
    const next = generalAgeNextBirthday(p.compareDob, ref);
    return `
      <tr>
        <th scope="row">${fmtDate(ref)}</th>
        <td>${fmtAge(age)}</td>
        <td>${fmtNum(totals.days)}</td>
        <td>${fmtNum(totals.months)}</td>
        <td>${fmtDate(next.iso)} (${e(generalAgeWeekday(next.iso))})</td>
      </tr>`;
  }).join("");

  return `<style>${css}${ageCss}${generalAgeCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free age calculator</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Calculate your age →
              </a>
              <a href="#method" class="calc-link">How age is counted ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>Exact to the day</strong>
                <small>Years · months · days</small>
              </div>
              <div>
                <strong>Leap years handled</strong>
                <small>29 February rule stated</small>
              </div>
              <div>
                <strong>0 data sent</strong>
                <small>Calculated in your browser</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Calendar arithmetic.</strong>
              Complete years, then complete months, then the remaining days —
              using real month lengths. Nothing you enter leaves your browser.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/" aria-current="page">Age</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Calculate your exact age</h2>
              <span class="calc-pill">DATE OF BIRTH</span>
            </div>

            <p class="calc-small">An example date is filled in. Replace it with your own date of birth.</p>

            <form id="age-form" novalidate>
              <label class="field-label" for="dob">
                Your date of birth
                <span>As on your birth certificate</span>
              </label>

              <input
                class="date-input"
                id="dob"
                type="date"
                value="${p.sampleDob}"
                min="1900-01-01"
                required
                aria-describedby="dob-error"
              >
              <p class="calc-error" id="dob-error" aria-live="polite"></p>

              <label class="field-label" for="ref">
                Age on this date
                <span>Starts as today — change it to any past or future date</span>
              </label>

              <input
                class="date-input"
                id="ref"
                type="date"
                required
                aria-describedby="ref-error"
              >
              <p class="calc-error" id="ref-error" aria-live="polite"></p>
              <p style="margin-top:2px">
                <button class="inline-link" type="button" id="ref-today">Set to today</button>
              </p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Calculate my age →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR EXACT AGE</span>
                <span>Calendar method</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your exact age</h3>

                <div class="result-value">
                  <output id="answer" for="dob">—</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="years-val">—</strong>
                  <small>YEARS</small>
                </div>
                <div>
                  <strong id="months-val">—</strong>
                  <small>MONTHS</small>
                </div>
                <div>
                  <strong id="days-val">—</strong>
                  <small>DAYS</small>
                </div>
              </div>

              <div class="rail" aria-hidden="true">
                <span id="meter-fill"></span>
              </div>

              <p class="working" id="working">
                Enter your date of birth to see the working.
              </p>
              <p class="working" id="working-totals"></p>
              <p class="working" id="working-birthday"></p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The bar shows how far through your current year of life the age-on date falls.
                A date of birth after the age-on date is an error, not a negative age.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Calculate my age to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">How age is counted</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One birthday, four dates</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / COMPLETE YEARS</span>
            <h3>Count full years first</h3>
            <p>Your age in years only increases on your birthday. The day before your 26th birthday you are still 25 — even if only by a day.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / REAL MONTH LENGTHS</span>
            <h3>Then full months, then days</h3>
            <p>After the years, the calculator counts complete months using the real length of each month, and the days left over. No month is treated as 30 days.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / LEAP DAYS</span>
            <h3>29 February birthdays</h3>
            <p>A 29 February birthday falls on 1 March in a non-leap year. Born 29 February 2000, you turn 26 on 1 March 2026 — the same rule the SSC Age Calculator uses.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From date of birth to your exact age</h2>
          <p>
            Start with the date on your birth certificate. Then choose the
            date you want your age on — today, or any other date.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>How your age is counted</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>Calendar method</small>
          Age on a date = That date − Date of birth
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Count completed years
            <strong>${sampleAge.y} completed years</strong>
            <span>${fmtDate(p.sampleDob)} to ${fmtDate(sampleRef)} is ${sampleAge.y} full years.</span>
          </div>

          <div class="math-step">
            2. Then completed months
            <strong>${sampleAge.m} completed months</strong>
            <span>From 15 March to 1 August is ${sampleAge.m} full months.</span>
          </div>

          <div class="math-step">
            3. Then remaining days
            <strong>${sampleAge.d} days</strong>
            <span>The result is ${fmtAge(sampleAge)} — ${fmtNum(sampleTotals.days)} days in total.</span>
          </div>
        </div>

        <div class="callout">
          <strong>29 February birthdays fall on 1 March in non-leap years.</strong>
          Born 29 February 2000, you are 25 years, 11 months and 30 days old on
          28 February 2026 and exactly 26 on 1 March 2026. Your next birthday after
          ${fmtDate(sampleRef)} is ${fmtDate(sampleNext.iso)} — in ${plural(sampleNext.daysAway, "day", "days")}.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three real birthdays</h2>
          <p>
            Each example uses the calendar method above.
            Select one to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const age = sscAgeParts(story.dob, story.ref);
            const totals = generalAgeTotals(story.dob, story.ref);
            return `
            <article class="card example-card">
              <h3>${e(story.title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${fmtDate(story.dob)}</strong>
                  <small>DATE OF BIRTH</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmtAge(age)}</strong>
                  <small>AGE ON ${fmtDate(story.ref).toUpperCase()}</small>
                </div>
              </div>

              <p>${e(story.body)}</p>
              <p class="calc-small">${fmtNum(totals.days)} days lived · born on a ${e(generalAgeWeekday(story.dob))}</p>

              <button class="calc-btn" type="button" data-scenario data-dob="${e(story.dob)}" data-ref="${e(story.ref)}" data-jump>
                Try this date →
              </button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why the date matters</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="One date of birth checked on four dates"
        >
          <table class="calc-table">
            <caption>Born 15 March 2000 — a Wednesday.</caption>

            <thead>
              <tr>
                <th scope="col">Age-on date</th>
                <th scope="col">Exact age</th>
                <th scope="col">Total days lived</th>
                <th scope="col">Completed months</th>
                <th scope="col">Next birthday</th>
              </tr>
            </thead>

            <tbody>
              ${compareRows}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this check is useful</h3>
            <ul class="bullets">
              <li>Working out your age on a form's reference date, not just today.</li>
              <li>Checking how old you will be on a future date — a retirement date, a course start, a milestone birthday.</li>
              <li>Finding the weekday you were born, or when your next birthday falls.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When another tool decides</h3>
            <ul class="bullets">
              <li>Exam eligibility is counted on the crucial date in the exam notice — use the <a href="/ssc-age-calculator/">SSC Age Calculator</a> for SSC exams.</li>
              <li>University conversions use each university's own formula — see the <a href="/cgpa-to-percentage-calculator/">CGPA to Percentage Calculator</a>.</li>
              <li>Official documents use the date of birth on your certificate, not a calculator result.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common age-calculation mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / 365.25</span>
            <h3>Dividing by 365.25</h3>
            <p>
              Dividing days lived by 365.25 gives an approximate age, not an
              exact one. It drifts by days around month ends and leap years.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / 30 DAYS</span>
            <h3>Treating every month as 30 days</h3>
            <p>
              Months are 28 to 31 days long. A 30-day month gives the wrong
              day count whenever a short or long month is involved.
            </p>
          </article>

          <article class="step">
            <span class="step-index">03 / LEAP DAY</span>
            <h3>Counting 29 February wrong</h3>
            <p>
              In a non-leap year there is no 29 February. This calculator
              counts the birthday as 1 March — state the rule, or the age is
              off by a day.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / DATE</span>
            <h3>Using today when the form names another date</h3>
            <p>
              Your age today is not the number a form or a notice uses unless
              it names today. Always check which date the age is counted on.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>Age calculator questions, answered</h2>
          <p>
            Clear answers about exact ages, leap-day birthdays, totals and
            what this tool does not do.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the arithmetic behind the answer</h2>
          <p>
            This page counts age by calendar subtraction on Gregorian dates:
            complete years, then complete months, then the remaining days, with
            borrowing from the previous month. Dates are counted in UTC, so the
            result does not depend on your time zone. A 29 February birthday
            falls on 1 March in a non-leap year — the same rule the SSC Age
            Calculator on this site uses. No exam body or university endorses
            this tool, and it checks age only.
          </p>
        </div>

        <div class="method-box">
          <strong>About the method</strong>
          <p>
            The totals are the same span counted three ways: days between the
            two dates, full weeks with the leftover days, and completed months.
            Every number on this page is computed by that method at render
            time from the dates shown — the worked examples, the comparison
            table and the calculator all use the same code. Your dates are
            never sent anywhere: the calculation runs entirely in your browser.
          </p>

          <div class="sources">
            <a href="/ssc-age-calculator/" target="_blank">
              VisitBest: SSC Age Calculator — age on the SSC crucial date ↗
            </a>
            <a href="/cgpa-to-percentage-calculator/" target="_blank">
              VisitBest: CGPA to Percentage Calculator ↗
            </a>
            <a href="/education/" target="_blank">
              VisitBest: Education Guides Hub ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section soft">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another check?</p>
            <h2>Check another date. Understand the result.</h2>
            <p>Use the calculator above, or try one of the other VisitBest calculators.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Calculate your age ↑</a>
            ${others.map(o => `
              <a class="calc-btn copy-btn" href="/${e(o.slug)}/">
                ${e(o.title)} →
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export function renderUpscAgeCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = iso => {
    const parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[2]) + " " + MONTHS[Number(parts[1]) - 1] + " " + parts[0];
  };
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const fmtAge = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const config = { key: p.key, title: p.title, sampleDob: p.sampleDob, defaultYear: p.defaultYear, years: p.years, categories: p.categories, extras: p.extras };
  const sampleYear = p.defaultYear;
  const sampleCutoff = upscCutoff(sampleYear);
  const sampleAge = sscAgeParts(p.sampleDob, sampleCutoff);
  const sampleTotals = generalAgeTotals(p.sampleDob, sampleCutoff);

  const categoryOptions = p.categories.map(cat => `
    <option value="${e(cat.id)}">${e(cat.label)}${cat.relax ? " (+" + cat.relax + " years)" : " (no relaxation)"}</option>
  `).join("");
  const yearOptions = p.years.map(y => `
    <option value="${y}"${y === p.defaultYear ? " selected" : ""}>CSE ${y} — cut-off 1 August ${y}</option>
  `).join("");
  const extraRadios = p.extras.map((x, i) => `
    <label class="radio-row">
      <input type="radio" name="extra" value="${e(x.id)}"${i === 0 ? " checked" : ""}>
      <span>${e(x.label)}${x.relax ? " (+" + x.relax + " years)" : ""}</span>
    </label>
  `).join("");

  const compareRows = [
    ["gen", "none"], ["obc", "none"], ["sc", "none"], ["gen", "pwbd"], ["sc", "pwbd"]
  ].map(([catId, extraId]) => {
    const lim = upscLimits(catId, extraId);
    const age = sscAgeParts(p.compareDob, upscCutoff(p.compareYear));
    const verdict = age.y < 21 ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    const cat = p.categories.find(c => c.id === catId);
    const extra = p.extras.find(x => x.id === extraId);
    return `
      <tr>
        <th scope="row">${e(cat.label)}${extraId !== "none" ? " + " + e(extra.label) : ""}</th>
        <td>Under ${lim.upper} years</td>
        <td>${fmtAge(age)}</td>
        <td>${verdict}</td>
        <td>${lim.attempts === null ? "Unlimited" : lim.attempts}</td>
      </tr>`;
  }).join("");

  const limitsRows = p.categories.map(cat => {
    const lim = upscLimits(cat.id, "none");
    const win = sscWindow(upscCutoff(p.defaultYear), 21, lim.upper, 0, 0, 0);
    return `
      <tr>
        <th scope="row">${e(cat.label)}</th>
        <td>${cat.relax ? "+" + cat.relax + " years" : "—"}</td>
        <td>Under ${lim.upper} years</td>
        <td>${fmtDate(win.earliest)} – ${fmtDate(win.latest)}</td>
        <td>${lim.attempts === null ? "Unlimited" : lim.attempts}</td>
      </tr>`;
  }).join("");

  const extrasRows = p.extras.filter(x => x.id !== "none").map(x => `
    <tr>
      <th scope="row">${e(x.label)}</th>
      <td>+${x.relax} years</td>
      <td>${x.id === "pwbd" ? "Adds to the category relaxation. PwBD (General/EWS/OBC) get 9 attempts; PwBD (SC/ST) keep unlimited attempts." : x.id === "esm" ? "Needs 5 or more years of military service as on 1 August. Attempts follow the category." : "Disabled in operations during hostilities or in a disturbed area. Attempts follow the category."}</td>
    </tr>
  `).join("");

  return `<style>${css}${ageCss}${upscAgeCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free UPSC eligibility checker</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Check your UPSC age →
              </a>
              <a href="#method" class="calc-link">How UPSC counts age ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>21–32</strong>
                <small>Standard age band</small>
              </div>
              <div>
                <strong>1 August</strong>
                <small>Cut-off date</small>
              </div>
              <div>
                <strong>6 / 9 / Unlimited</strong>
                <small>Attempts by category</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Age and attempts only.</strong>
              The official notification decides eligibility. Always check
              <a href="https://upsc.gov.in/" rel="nofollow noopener" target="_blank">upsc.gov.in</a>
              before applying.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/" aria-current="page">UPSC Age</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Check your UPSC age eligibility</h2>
              <span class="calc-pill">CSE ${p.defaultYear}</span>
            </div>

            <p class="calc-small">An example date is filled in. Replace it with your own date of birth.</p>

            <form id="age-form" novalidate>
              <label class="field-label" for="dob">
                Your date of birth
                <span>As on your Class 10 certificate</span>
              </label>

              <input
                class="date-input"
                id="dob"
                type="date"
                value="${p.sampleDob}"
                min="1900-01-01"
                required
                aria-describedby="dob-error"
              >
              <p class="calc-error" id="dob-error" aria-live="polite"></p>

              <label class="field-label" for="year">
                Exam year
                <span>The next cycle is CSE ${p.defaultYear}</span>
              </label>

              <select class="select-input" id="year" aria-describedby="cutoff-note">
                ${yearOptions}
              </select>
              <p class="band-note" id="cutoff-note">Age is counted on 1 August ${p.defaultYear}.</p>

              <label class="field-label" for="category">
                Category
                <span>As on your certificate</span>
              </label>

              <select class="select-input" id="category">
                ${categoryOptions}
              </select>

              <fieldset style="border:0;padding:0;margin:18px 0 0">
                <legend class="field-label" style="margin-bottom:8px">
                  Any extra relaxation?
                  <span>Pick one — it stacks with your category</span>
                </legend>
                <div class="radio-list">
                  ${extraRadios}
                </div>
              </fieldset>

              <label class="field-label" for="used" style="margin-top:18px">
                Attempts already used
                <span>Appearing in even one Prelims paper counts as an attempt</span>
              </label>

              <input
                class="number-input"
                id="used"
                type="number"
                value="0"
                min="0"
                max="30"
                step="1"
                inputmode="numeric"
                aria-describedby="used-error"
              >
              <p class="calc-error" id="used-error" aria-live="polite"></p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Check my UPSC eligibility →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR AGE ON 1 AUGUST</span>
                <span>CSE ${p.defaultYear}</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your exact age</h3>

                <div class="result-value">
                  <output id="answer" for="dob">—</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="years-val">—</strong>
                  <small>YEARS</small>
                </div>
                <div>
                  <strong id="months-val">—</strong>
                  <small>MONTHS</small>
                </div>
                <div>
                  <strong id="days-val">—</strong>
                  <small>DAYS</small>
                </div>
              </div>

              <div class="verdict" id="verdict-box">
                <strong id="verdict-title">Your UPSC verdict</strong>
                <span id="verdict-text">Enter your details to see whether you meet the age limit.</span>
              </div>

              <p class="working" id="working">
                Enter your date of birth to see the working.
              </p>
              <p class="working" id="working-window"></p>
              <p class="working" id="working-attempts"></p>
              <p class="working" id="working-years"></p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The upper limit is exclusive: you must not have attained it on 1 August.
                A date of birth after 1 August of the exam year is an error, not a negative age.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Check my UPSC eligibility to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">How UPSC counts age</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One birthday, five answers</a>
        <a href="#limits">Age limits</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / 1 AUGUST</span>
            <h3>One cut-off date</h3>
            <p>UPSC counts your age on 1 August of the exam year — not on the Prelims date, not on the day you apply. For CSE 2026 the Prelims were held on 24 May 2026, but the age was still counted on 1 August 2026.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / EXCLUSIVE LIMIT</span>
            <h3>“Must not have attained”</h3>
            <p>The upper limit is exclusive. Turning 32 on 1 August means you have attained 32 and are over the General limit — the same wording decides every category and relaxation on this page.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / ATTEMPTS</span>
            <h3>Age is only half the check</h3>
            <p>General and EWS candidates get 6 attempts, OBC 9, and SC/ST unlimited attempts within the age limit. An attempt counts when you appear in even one Prelims paper.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From date of birth to your UPSC verdict</h2>
          <p>
            Start with the date on your Class 10 certificate. Then choose the
            exam year, your category and any extra relaxation.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>How UPSC counts your age</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>Rule 5, Civil Services Examination Rules, 2026</small>
          Age on 1 August = 1 August of the exam year − Date of birth
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Count completed years
            <strong>${sampleAge.y} completed years</strong>
            <span>${fmtDate(p.sampleDob)} to ${fmtDate(sampleCutoff)} is ${sampleAge.y} full years.</span>
          </div>

          <div class="math-step">
            2. Then completed months
            <strong>${sampleAge.m} completed months</strong>
            <span>From 15 March to 1 August is ${sampleAge.m} full months.</span>
          </div>

          <div class="math-step">
            3. Then remaining days
            <strong>${sampleAge.d} days</strong>
            <span>The result is ${fmtAge(sampleAge)} — ${fmtNum(sampleTotals.days)} days in total.</span>
          </div>
        </div>

        <div class="callout">
          <strong>29 February birthdays fall on 1 March in non-leap years.</strong>
          Born 29 February 2000, you are 25 years, 11 months and 30 days old on
          28 February 2026 and exactly 26 on 1 March 2026. For CSE ${p.defaultYear} and CSE 2028 the same limits are used as planning figures from the CSE 2026 Rules — the CSE 2027 notification is tentatively due on 13 January 2027, so re-check the rules against it before you apply.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three real birthdays</h2>
          <p>
            Each example uses the rule above.
            Select one to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const cutoff = upscCutoff(story.year);
            const age = sscAgeParts(story.dob, cutoff);
            const lim = upscLimits(story.categoryId, story.extraId);
            const years = upscEligibleYears(story.dob, lim.upper);
            const verdict = age.y < 21 ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
            return `
            <article class="card example-card">
              <h3>${e(story.title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${fmtDate(story.dob)}</strong>
                  <small>DATE OF BIRTH</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmtAge(age)}</strong>
                  <small>AGE ON ${fmtDate(cutoff).toUpperCase()}</small>
                </div>
              </div>

              <p>${e(story.body)}</p>
              <p class="calc-small">${verdict} · upper limit under ${lim.upper} years · ${lim.attempts === null ? "unlimited attempts" : lim.attempts + " attempts"} · eligible ${years.first}–${years.last}</p>

              <button class="calc-btn" type="button" data-scenario data-dob="${e(story.dob)}" data-year="${story.year}" data-cat="${e(story.categoryId)}" data-extra="${e(story.extraId)}" data-used="${story.used}" data-jump>
                Try this date →
              </button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why the category matters</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="One date of birth checked in five categories"
        >
          <table class="calc-table">
            <caption>Born ${fmtDate(p.compareDob)} — a ${e(generalAgeWeekday(p.compareDob))} — for CSE ${p.compareYear}.</caption>

            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Upper age limit</th>
                <th scope="col">Exact age on 1 August ${p.compareYear}</th>
                <th scope="col">Verdict</th>
                <th scope="col">Attempts allowed</th>
              </tr>
            </thead>

            <tbody>
              ${compareRows}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this check is useful</h3>
            <ul class="bullets">
              <li>Working out whether you can still appear — by age and by attempts — before you spend a year preparing.</li>
              <li>Finding your first and last eligible exam years, so you can plan how many attempts you really have.</li>
              <li>Checking what a category or disability relaxation changes for your own date of birth.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When another tool decides</h3>
            <ul class="bullets">
              <li>SSC exams use different crucial dates and bands — use the <a href="/ssc-age-calculator/">SSC Age Calculator</a> for those.</li>
              <li>A plain age on any date is the <a href="/age-calculator/">Age Calculator</a> on this site.</li>
              <li>Only the notification on upsc.gov.in decides your eligibility — this tool counts age and attempts, it does not verify certificates.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="limits">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The official limits</p>
          <h2>Age limits and attempts by category</h2>
          <p>
            From Rule 3 (attempts) and Rule 5 (age) of the Civil Services
            Examination Rules, 2026. The birth-date window below is for CSE ${p.defaultYear};
            it shifts by one year for each exam year.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Age limits and attempts by category"
        >
          <table class="calc-table">
            <caption>Category limits for CSE ${p.defaultYear} — cut-off 1 August ${p.defaultYear}.</caption>

            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Relaxation</th>
                <th scope="col">Upper age limit</th>
                <th scope="col">Born between</th>
                <th scope="col">Attempts allowed</th>
              </tr>
            </thead>

            <tbody>
              ${limitsRows}
            </tbody>
          </table>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Extra relaxations"
          style="margin-top:26px"
        >
          <table class="calc-table">
            <caption>Extra relaxations — each stacks with the category relaxation above.</caption>

            <thead>
              <tr>
                <th scope="col">Extra relaxation</th>
                <th scope="col">Added years</th>
                <th scope="col">What it needs</th>
              </tr>
            </thead>

            <tbody>
              ${extrasRows}
            </tbody>
          </table>
        </div>

        <div class="callout">Two stacking examples: an OBC candidate with a benchmark disability gets 32 + 3 + 10 = 45 years, with 9 attempts. An SC ex-serviceman gets 32 + 5 + 5 = 42 years, with unlimited attempts. Only one extra relaxation is applied at a time on this page — the Rules stack a category relaxation with one further clause.</div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common UPSC age mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / PRELIMS</span>
            <h3>Counting from the Prelims date</h3>
            <p>
              The Prelims were held on 24 May 2026 for CSE 2026, but age is
              counted on 1 August 2026. Counting from May makes you look three
              months younger than UPSC counts you.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / INCLUSIVE</span>
            <h3>Reading 32 as “up to 32”</h3>
            <p>
              The rule is “must not have attained 32”. Turning 32 on 1 August
              means you are over the limit, not inside it — born 1 August 1994,
              you are exactly 32 on 1 August 2026 and over.
            </p>
          </article>

          <article class="step">
            <span class="step-index">03 / ATTEMPTS</span>
            <h3>Forgetting attempts run out first</h3>
            <p>
              A General candidate who has used all 6 attempts by age 28 is done,
              even though the age limit runs to 32. Check attempts alongside age.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / APPLICATION</span>
            <h3>Counting an application as an attempt</h3>
            <p>
              Only appearing in a Prelims paper counts as an attempt. Applying
              and not appearing uses no attempt — and an attempt counts even if
              your candidature is later cancelled.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>UPSC age questions, answered</h2>
          <p>
            Clear answers about the cut-off date, relaxations, attempts and
            what this tool does not do.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the rules behind the answer</h2>
          <p>
            This page applies Rule 3 (number of attempts) and Rule 5 (age) of
            the Civil Services Examination Rules, 2026, as published in the
            Gazette of India on 4 February 2026 and carried into UPSC's
            Examination Notice No. 05/2026-CSE. Age is counted by calendar
            subtraction on Gregorian dates: complete years, then complete
            months, then the remaining days, with borrowing from the previous
            month. Dates are counted in UTC, so the result does not depend on
            your time zone. A 29 February birthday falls on 1 March in a
            non-leap year — the same rule the SSC Age Calculator on this site
            uses. No exam body endorses this tool, and it checks age and
            attempts only.
          </p>
        </div>

        <div class="method-box">
          <strong>About the method</strong>
          <p>
            Every number on this page is computed from the dates shown — the
            worked examples, the comparison table and the calculator all use
            the same code. For CSE 2027 and CSE 2028 the same limits are used
            as planning figures from the CSE 2026 Rules; the CSE 2027
            notification is tentatively due on 13 January 2027, and the rules
            must be re-checked against it when it releases. Your dates are
            never sent anywhere: the calculation runs entirely in your browser.
          </p>

          <div class="sources">
            <a href="https://upsc.gov.in/sites/default/files/Notif-CSP-26-Engl-040226.pdf" target="_blank" rel="nofollow noopener">
              UPSC: Civil Services Examination 2026 — Examination Notice No. 05/2026-CSE (official PDF) ↗
            </a>
            <a href="https://upsc.gov.in/" target="_blank" rel="nofollow noopener">
              Union Public Service Commission — upsc.gov.in ↗
            </a>
            <a href="/ssc-age-calculator/" target="_blank">
              VisitBest: SSC Age Calculator — age on the SSC crucial date ↗
            </a>
            <a href="/age-calculator/" target="_blank">
              VisitBest: Age Calculator — exact age on any date ↗
            </a>
            <a href="/education/" target="_blank">
              VisitBest: Education Guides Hub ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section soft">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another check?</p>
            <h2>Check another date. Understand the result.</h2>
            <p>Use the calculator above, or try one of the other VisitBest calculators.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Check your UPSC age ↑</a>
            ${others.map(o => `
              <a class="calc-btn copy-btn" href="/${e(o.slug)}/">
                ${e(o.title)} →
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}
export function renderIbpsAgeCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = iso => {
    const parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[2]) + " " + MONTHS[Number(parts[1]) - 1] + " " + parts[0];
  };
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const fmtAge = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const config = { key: p.key, title: p.title, sampleDob: p.sampleDob, defaultExam: p.defaultExam, exams: p.exams, categories: p.categories, extras: p.extras };
  const sampleExam = p.exams.find(x => x.id === p.defaultExam);
  const sampleCutoff = sampleExam.cut;
  const sampleAge = sscAgeParts(p.sampleDob, sampleCutoff);
  const sampleTotals = generalAgeTotals(p.sampleDob, sampleCutoff);

  const examOptions = p.exams.map(ex => `
    <option value="${e(ex.id)}"${ex.id === p.defaultExam ? " selected" : ""}>${e(ex.label)} — ${e(ex.cycle)} — cut-off ${fmtDate(ex.cut)}</option>
  `).join("");
  const categoryOptions = p.categories.map(cat => `
    <option value="${e(cat.id)}">${e(cat.label)}${cat.relax ? " (+" + cat.relax + " years)" : " (no relaxation)"}</option>
  `).join("");
  const extraSuffix = x => x.id === "pwbd" ? " (+10 years)" : x.id === "esm" ? " (+5 years, or service + 3 years)" : x.id === "widow" ? " (up to 35 / 38 / 40 years)" : "";
  const extraRadios = p.extras.map((x, i) => `
    <label class="radio-row"${x.id === "widow" ? ' data-extra-row="widow"' : ""}>
      <input type="radio" name="extra" value="${e(x.id)}"${i === 0 ? " checked" : ""}>
      <span>${e(x.label)}${extraSuffix(x)}</span>
    </label>
  `).join("");

  const compareRows = [
    ["po", "gen", "none"], ["po", "obc", "none"], ["po", "sc", "pwbd"],
    ["clerk", "gen", "none"], ["rrb-oa", "gen", "none"], ["rrb-1", "gen", "none"], ["rrb-3", "gen", "none"]
  ].map(([examId, catId, extraId]) => {
    const exam = p.exams.find(x => x.id === examId);
    const lim = ibpsLimits(examId, catId, extraId, 5);
    const age = sscAgeParts(p.compareDob, exam.cut);
    const verdict = age.y < exam.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    const cat = p.categories.find(c => c.id === catId);
    const extra = p.extras.find(x => x.id === extraId);
    return `
      <tr>
        <th scope="row">${e(exam.label)} — ${e(cat.label)}${extraId !== "none" ? " + " + e(extra.label) : ""}</th>
        <td>${fmtDate(exam.cut)}</td>
        <td>Under ${lim.upper} years</td>
        <td>${fmtAge(age)}</td>
        <td>${verdict}</td>
      </tr>`;
  }).join("");

  const examRows = p.exams.map(ex => {
    const lim = ibpsLimits(ex.id, "gen", "none", 5);
    const win = sscWindow(ex.cut, ex.min, lim.upper, 0, 0, 0);
    return `
      <tr>
        <th scope="row">${e(ex.label)} (${e(ex.cycle)})</th>
        <td>${fmtDate(ex.cut)}</td>
        <td>${ex.min}–${ex.upper} years</td>
        <td>${fmtDate(win.earliest)} – ${fmtDate(win.latest)}</td>
      </tr>`;
  }).join("");

  const categoryRows = p.categories.map(cat => {
    const lim = ibpsLimits("po", cat.id, "none", 5);
    return `
      <tr>
        <th scope="row">${e(cat.label)}</th>
        <td>${cat.relax ? "+" + cat.relax + " years" : "—"}</td>
        <td>Under ${lim.upper} years</td>
      </tr>`;
  }).join("");

  const extrasRows = `
    <tr>
      <th scope="row">Person with benchmark disability (PwBD)</th>
      <td>+10 years</td>
      <td>Adds to the category relaxation for every exam: PwBD (General/EWS) get 10 years, PwBD (OBC) 13 years and PwBD (SC/ST) 15 years in total.</td>
    </tr>
    <tr>
      <th scope="row">Ex-serviceman / commissioned officer</th>
      <td>+5 years, or service + 3 years</td>
      <td>PO, Specialist Officer and RRB officer posts: +5 years with 5 or more years of military service. Clerk and RRB Office Assistant: actual service + 3 years, up to a maximum age of 50 (8 years instead of 3 for disabled ex-servicemen of SC/ST).</td>
    </tr>
    <tr>
      <th scope="row">Widow, divorced or legally separated woman (not remarried)</th>
      <td>Up to 35 / 38 / 40 years</td>
      <td>Clerk and RRB Office Assistant only. The upper limit becomes 35 years (General/EWS), 38 years (OBC) or 40 years (SC/ST). The PO, Specialist Officer and RRB officer notifications list no widow row.</td>
    </tr>
  `;

  return `<style>${css}${ageCss}${ibpsAgeCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free IBPS eligibility checker</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Check your IBPS age →
              </a>
              <a href="#method" class="calc-link">How IBPS counts age ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>20–30</strong>
                <small>IBPS PO age band</small>
              </div>
              <div>
                <strong>7 exams</strong>
                <small>PO, Clerk, SO + 4 RRB posts</small>
              </div>
              <div>
                <strong>No attempt limit</strong>
                <small>Only the age limit applies</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Age only.</strong>
              The official notification decides eligibility. Always check
              <a href="https://www.ibps.in/" rel="nofollow noopener" target="_blank">ibps.in</a>
              before applying.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/">UPSC Age</a>
              <a href="/ibps-age-calculator/" aria-current="page">IBPS Age</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Check your IBPS age eligibility</h2>
              <span class="calc-pill" id="exam-pill">CRP PO/MT-XVI</span>
            </div>

            <p class="calc-small">An example date is filled in. Replace it with your own date of birth.</p>

            <form id="age-form" novalidate>
              <label class="field-label" for="dob">
                Your date of birth
                <span>As on your Class 10 certificate</span>
              </label>

              <input
                class="date-input"
                id="dob"
                type="date"
                value="${p.sampleDob}"
                min="1900-01-01"
                required
                aria-describedby="dob-error"
              >
              <p class="calc-error" id="dob-error" aria-live="polite"></p>

              <label class="field-label" for="exam">
                Your IBPS exam
                <span>Each exam has its own cut-off date</span>
              </label>

              <select class="select-input" id="exam" aria-describedby="cutoff-note">
                ${examOptions}
              </select>
              <p class="band-note" id="cutoff-note">Age is counted on 1 July 2026 (CRP PO/MT-XVI).</p>

              <label class="field-label" for="category">
                Category
                <span>As on your certificate</span>
              </label>

              <select class="select-input" id="category">
                ${categoryOptions}
              </select>

              <fieldset style="border:0;padding:0;margin:18px 0 0">
                <legend class="field-label" style="margin-bottom:8px">
                  Any extra relaxation?
                  <span>Pick one — it stacks with your category</span>
                </legend>
                <div class="radio-list">
                  ${extraRadios}
                </div>
              </fieldset>

              <div id="service-field" style="margin-top:18px" hidden>
                <label class="field-label" for="service">
                  Years of defence service
                  <span>Only for the ex-serviceman relaxation</span>
                </label>

                <input
                  class="number-input"
                  id="service"
                  type="number"
                  value="5"
                  min="0"
                  max="40"
                  step="1"
                  inputmode="numeric"
                  aria-describedby="service-error"
                >
                <p class="calc-error" id="service-error" aria-live="polite"></p>
                <p class="band-note">PO, Specialist Officer and RRB officer posts need 5 or more years of service for +5 years. Clerk and RRB Office Assistant add your service plus 3 years, up to age 50.</p>
              </div>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Check my IBPS eligibility →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR AGE ON THE CUT-OFF DATE</span>
                <span>2026 CYCLE</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your exact age</h3>

                <div class="result-value">
                  <output id="answer" for="dob">—</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="years-val">—</strong>
                  <small>YEARS</small>
                </div>
                <div>
                  <strong id="months-val">—</strong>
                  <small>MONTHS</small>
                </div>
                <div>
                  <strong id="days-val">—</strong>
                  <small>DAYS</small>
                </div>
              </div>

              <div class="verdict" id="verdict-box">
                <strong id="verdict-title">Your IBPS verdict</strong>
                <span id="verdict-text">Enter your details to see whether you meet the age limit.</span>
              </div>

              <p class="working" id="working">
                Enter your date of birth to see the working.
              </p>
              <p class="working" id="working-window"></p>
              <p class="working" id="working-note"></p>
              <p class="working" id="working-years"></p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The upper limit is exclusive: you must not have attained it on the cut-off date.
                A date of birth after the cut-off date is an error, not a negative age.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Check my IBPS eligibility to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">How IBPS counts age</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One birthday, seven answers</a>
        <a href="#limits">Age limits</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / FOUR CUT-OFFS</span>
            <h3>One date per exam</h3>
            <p>PO and Specialist Officer count age on 1 July 2026, Clerk on 1 August 2026, and the RRB posts on 1 September 2026. Picking the wrong exam can move your age by two months and flip the verdict.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / EXCLUSIVE LIMIT</span>
            <h3>“Must not have attained”</h3>
            <p>The upper limit is exclusive. Turning 30 on 1 July means you have attained 30 and are over the General limit for IBPS PO — the same wording decides every exam and relaxation on this page.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / NO ATTEMPTS</span>
            <h3>Age is the whole check</h3>
            <p>IBPS sets no limit on the number of attempts. You can appear every year for as long as you stay inside the age limit — so this page shows your first and last eligible exam years instead of attempts.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From date of birth to your IBPS verdict</h2>
          <p>
            Start with the date on your Class 10 certificate. Then choose
            your exam, your category and any extra relaxation.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>How IBPS counts your age</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>Clause B.II (Age) of the IBPS notifications, 2026 cycle</small>
          Age on the cut-off date = Cut-off date − Date of birth
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Count completed years
            <strong>${sampleAge.y} completed years</strong>
            <span>${fmtDate(p.sampleDob)} to ${fmtDate(sampleCutoff)} is ${sampleAge.y} full years.</span>
          </div>

          <div class="math-step">
            2. Then completed months
            <strong>${sampleAge.m} completed months</strong>
            <span>From 15 March to 1 July is ${sampleAge.m} full months.</span>
          </div>

          <div class="math-step">
            3. Then remaining days
            <strong>${sampleAge.d} days</strong>
            <span>The result is ${fmtAge(sampleAge)} — ${fmtNum(sampleTotals.days)} days in total.</span>
          </div>
        </div>

        <div class="callout">
          <strong>29 February birthdays fall on 1 March in non-leap years.</strong>
          Born 29 February 2000, you are 26 years, 4 months and 2 days old on
          1 July 2026 and 26 years, 6 months and 3 days old on 1 September 2026. The limits on this page come from the 2026-cycle notifications (CRP PO/MT-XVI, CSA-XVI, SPL-XVI and RRBs-XV); the 2027 cycle will publish new cut-off dates, so re-check the rules against the new notification before you apply.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three real birthdays</h2>
          <p>
            Each example uses the rule above.
            Select one to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const exam = p.exams.find(x => x.id === story.examId);
            const cutoff = exam.cut;
            const age = sscAgeParts(story.dob, cutoff);
            const lim = ibpsLimits(story.examId, story.categoryId, story.extraId, story.service);
            const years = ibpsEligibleYears(story.dob, story.examId, lim.upper);
            const verdict = age.y < lim.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
            return `
            <article class="card example-card">
              <h3>${e(story.title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${fmtDate(story.dob)}</strong>
                  <small>DATE OF BIRTH</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmtAge(age)}</strong>
                  <small>AGE ON ${fmtDate(cutoff).toUpperCase()}</small>
                </div>
              </div>

              <p>${e(story.body)}</p>
              <p class="calc-small">${verdict} · upper limit under ${lim.upper} years · eligible ${years.first}–${years.last}</p>

              <button class="calc-btn" type="button" data-scenario data-dob="${e(story.dob)}" data-exam="${e(story.examId)}" data-cat="${e(story.categoryId)}" data-extra="${e(story.extraId)}" data-service="${story.service}" data-jump>
                Try this date →
              </button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why the exam matters</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="One date of birth checked in seven exams and categories"
        >
          <table class="calc-table">
            <caption>Born ${fmtDate(p.compareDob)} — a ${e(generalAgeWeekday(p.compareDob))} — for the 2026 cycle.</caption>

            <thead>
              <tr>
                <th scope="col">Exam and category</th>
                <th scope="col">Cut-off date</th>
                <th scope="col">Upper age limit</th>
                <th scope="col">Exact age on the cut-off</th>
                <th scope="col">Verdict</th>
              </tr>
            </thead>

            <tbody>
              ${compareRows}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this check is useful</h3>
            <ul class="bullets">
              <li>Working out whether you can still appear — by age alone, since IBPS sets no attempt limit — before you spend a year preparing.</li>
              <li>Finding your first and last eligible exam years, so you can plan how many cycles you really have.</li>
              <li>Checking what a category or disability relaxation changes for your own date of birth, and which exam's cut-off date applies to you.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When another tool decides</h3>
            <ul class="bullets">
              <li>SSC exams use different crucial dates and bands — use the <a href="/ssc-age-calculator/">SSC Age Calculator</a> for those.</li>
              <li>UPSC Civil Services has its own 1 August cut-off and attempt limits — use the <a href="/upsc-age-calculator/">UPSC Age Calculator</a> for that.</li>
              <li>A plain age on any date is the <a href="/age-calculator/">Age Calculator</a> on this site.</li>
              <li>Only the notification on ibps.in decides your eligibility — this tool counts age, it does not verify certificates.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="limits">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The official limits</p>
          <h2>Age limits by exam and category</h2>
          <p>
            From clause B.II (Age) of the four 2026-cycle IBPS notifications.
            The birth-date window below is for General and EWS candidates; it
            shifts earlier by the relaxation years for other categories.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Age limits by exam"
        >
          <table class="calc-table">
            <caption>Age limits for the 2026 cycle — General and EWS candidates.</caption>

            <thead>
              <tr>
                <th scope="col">Exam</th>
                <th scope="col">Cut-off date</th>
                <th scope="col">Age band</th>
                <th scope="col">Born between</th>
              </tr>
            </thead>

            <tbody>
              ${examRows}
            </tbody>
          </table>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Category relaxations"
          style="margin-top:26px"
        >
          <table class="calc-table">
            <caption>Category relaxations — the same in all four notifications.</caption>

            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Relaxation</th>
                <th scope="col">Upper age limit for IBPS PO</th>
              </tr>
            </thead>

            <tbody>
              ${categoryRows}
            </tbody>
          </table>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Extra relaxations"
          style="margin-top:26px"
        >
          <table class="calc-table">
            <caption>Extra relaxations — each stacks with the category relaxation above.</caption>

            <thead>
              <tr>
                <th scope="col">Extra relaxation</th>
                <th scope="col">Added years</th>
                <th scope="col">What it needs</th>
              </tr>
            </thead>

            <tbody>
              ${extrasRows}
            </tbody>
          </table>
        </div>

        <div class="callout">Two stacking examples: an OBC candidate with a benchmark disability gets 30 + 3 + 10 = 43 years for IBPS PO. An SC ex-serviceman gets 30 + 5 + 5 = 40 years. Only one extra relaxation is applied at a time on this page — the notifications stack a category relaxation with one further clause.</div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common IBPS age mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / EXAM DATE</span>
            <h3>Counting from the exam date</h3>
            <p>
              The IBPS PO Prelims were held on 22–23 August 2026, but age is
              counted on 1 July 2026. Counting from August makes you look
              almost two months younger than IBPS counts you.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / INCLUSIVE</span>
            <h3>Reading 30 as “up to 30”</h3>
            <p>
              The notification prints the window 2 July 1996 to 1 July 2006.
              Turning 30 on 1 July means you are over the limit, not inside
              it — born 1 July 1996, you are exactly 30 on 1 July 2026 and over.
            </p>
          </article>

          <article class="step">
            <span class="step-index">03 / WRONG CUT-OFF</span>
            <h3>Using another exam's cut-off</h3>
            <p>
              PO counts on 1 July, Clerk on 1 August and the RRB posts on
              1 September. Born 2 July 1996, you are eligible for PO but over
              the limit for Clerk — the same birthday, two different answers.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / SERVICE</span>
            <h3>Forgetting the service years</h3>
            <p>
              For Clerk and RRB Office Assistant, the ex-serviceman relaxation
              is your actual service plus 3 years — not a flat 5. The flat +5
              applies only to PO, Specialist Officer and the RRB officer posts.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>IBPS age questions, answered</h2>
          <p>
            Clear answers about the cut-off dates, relaxations, attempts and
            what this tool does not do.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the rules behind the answer</h2>
          <p>
            This page applies clause B.II (Age) of the four IBPS detailed
            notifications for the 2026 cycle: CRP PO/MT-XVI (1 July 2026),
            CRP CSA-XVI (1 August 2026), CRP SPL-XVI (1 July 2026) and CRP
            RRBs-XV (1 September 2026). Age is counted by calendar
            subtraction on Gregorian dates: complete years, then complete
            months, then the remaining days, with borrowing from the previous
            month. Dates are counted in UTC, so the result does not depend on
            your time zone. A 29 February birthday falls on 1 March in a
            non-leap year — the same rule the SSC Age Calculator on this site
            uses. No exam body endorses this tool, and it checks age only.
          </p>
        </div>

        <div class="method-box">
          <strong>About the method</strong>
          <p>
            Every number on this page is computed from the dates shown — the
            worked examples, the comparison table and the calculator all use
            the same code. The first and last eligible exam years assume the
            cut-off falls on the same date each year, as it has in recent
            cycles; the 2027 cycle will publish new cut-off dates, and the
            rules must be re-checked against the new notification when it
            releases. Your dates are never sent anywhere: the calculation runs
            entirely in your browser.
          </p>

          <div class="sources">
            <a href="https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf" target="_blank" rel="nofollow noopener">
              IBPS: CRP PO/MT-XVI detailed notification, 2026 (official PDF) ↗
            </a>
            <a href="https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf" target="_blank" rel="nofollow noopener">
              IBPS: CRP CSA-XVI detailed notification, 2026 (official PDF) ↗
            </a>
            <a href="https://rojgarpedia.com/wp-content/uploads/2026/09/CRP-RRBs-XV-notification.pdf" target="_blank" rel="nofollow noopener">
              IBPS: CRP RRBs-XV detailed notification, 2026 (copy of the official PDF) ↗
            </a>
            <a href="https://www.ibps.in/" target="_blank" rel="nofollow noopener">
              Institute of Banking Personnel Selection — ibps.in ↗
            </a>
            <a href="/ssc-age-calculator/" target="_blank">
              VisitBest: SSC Age Calculator — age on the SSC crucial date ↗
            </a>
            <a href="/upsc-age-calculator/" target="_blank">
              VisitBest: UPSC Age Calculator — age, relaxations and attempts ↗
            </a>
            <a href="/age-calculator/" target="_blank">
              VisitBest: Age Calculator — exact age on any date ↗
            </a>
            <a href="/education/" target="_blank">
              VisitBest: Education Guides Hub ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section soft">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another check?</p>
            <h2>Check another date. Understand the result.</h2>
            <p>Use the calculator above, or try one of the other VisitBest calculators.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Check your IBPS age ↑</a>
            ${others.map(o => `
              <a class="calc-btn copy-btn" href="/${e(o.slug)}/">
                ${e(o.title)} →
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}
export function renderRrbAgeCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = iso => {
    const parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[2]) + " " + MONTHS[Number(parts[1]) - 1] + " " + parts[0];
  };
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
  const fmtAge = a => plural(a.y, "year", "years") + ", " + plural(a.m, "month", "months") + " and " + plural(a.d, "day", "days");

  const config = { key: p.key, title: p.title, sampleDob: p.sampleDob, defaultExam: p.defaultExam, exams: p.exams, categories: p.categories, extras: p.extras };
  const sampleExam = p.exams.find(x => x.id === p.defaultExam);
  const sampleCutoff = sampleExam.cut;
  const sampleAge = sscAgeParts(p.sampleDob, sampleCutoff);
  const sampleTotals = generalAgeTotals(p.sampleDob, sampleCutoff);

  const examOptions = p.exams.map(ex => `
    <option value="${e(ex.id)}"${ex.id === p.defaultExam ? " selected" : ""}>${e(ex.label)} — ${e(ex.cycle)} — crucial date ${fmtDate(ex.cut)}</option>
  `).join("");
  const categoryOptions = p.categories.map(cat => `
    <option value="${e(cat.id)}">${e(cat.label)}${cat.relax ? " (+" + cat.relax + " years)" : " (no relaxation)"}</option>
  `).join("");
  const extraSuffix = x => x.id === "pwbd" ? " (+10 / +13 / +15 years)" : x.id === "esm" ? " (service deducted, then +3 / +6 / +8 years)" : x.id === "widow" ? " (up to 35 / 38 / 40 years)" : x.id === "staff" ? " (up to 40 / 43 / 45 years)" : x.id === "ccaa" ? " (training period, up to 3 years)" : x.id === "ccaa25" ? " (up to 35 / 38 / 40 years)" : "";
  const extraRowAttr = x => x.id === "pwbd" ? ' data-extra-row="pwbd"' : (x.id === "ccaa" || x.id === "ccaa25") ? ' data-extra-row="ccaa"' : "";
  const extraRadios = p.extras.map((x, i) => `
    <label class="radio-row"${extraRowAttr(x)}>
      <input type="radio" name="extra" value="${e(x.id)}"${i === 0 ? " checked" : ""}>
      <span>${e(x.label)}${extraSuffix(x)}</span>
    </label>
  `).join("");

  const compareRows = p.exams.map(ex => {
    const lim = rrbLimits(ex.id, "gen", "none", 5);
    const age = sscAgeParts(p.compareDob, ex.cut);
    const verdict = age.y < ex.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
    return `
      <tr>
        <th scope="row">${e(ex.label)} — General</th>
        <td>${fmtDate(ex.cut)}</td>
        <td>Under ${lim.upper} years</td>
        <td>${fmtAge(age)}</td>
        <td>${verdict}</td>
      </tr>`;
  }).join("");

  const examRows = p.exams.map(ex => {
    const lim = rrbLimits(ex.id, "gen", "none", 5);
    const win = sscWindow(ex.cut, ex.min, lim.upper, 0, 0, 0);
    return `
      <tr>
        <th scope="row">${e(ex.label)} (${e(ex.cycle)})</th>
        <td>${fmtDate(ex.cut)}</td>
        <td>${ex.min}–${ex.upper} years</td>
        <td>${fmtDate(win.earliest)} – ${fmtDate(win.latest)}</td>
      </tr>`;
  }).join("");

  const categoryRows = p.categories.map(cat => {
    const lim = rrbLimits("ntpc-g", cat.id, "none", 5);
    return `
      <tr>
        <th scope="row">${e(cat.label)}</th>
        <td>${cat.relax ? "+" + cat.relax + " years" : "—"}</td>
        <td>Under ${lim.upper} years</td>
      </tr>`;
  }).join("");

  const extrasRows = `
    <tr>
      <th scope="row">Person with benchmark disability (PwBD)</th>
      <td>+10 / +13 / +15 years</td>
      <td>Total, including the category relaxation: PwBD (General/EWS) get 10 years, PwBD (OBC) 13 years and PwBD (SC/ST) 15 years. The ALP CEN has no PwBD row, so this choice is not offered for ALP.</td>
    </tr>
    <tr>
      <th scope="row">Ex-serviceman</th>
      <td>Service deducted, then +3 / +6 / +8 years</td>
      <td>Your service is deducted from your age first, then 3 years (General/EWS), 6 years (OBC) or 8 years (SC/ST) are added to the upper limit. Needs more than six months of service after attestation. No maximum-age cap.</td>
    </tr>
    <tr>
      <th scope="row">Widow, divorced or legally separated woman (not remarried)</th>
      <td>Up to 35 / 38 / 40 years</td>
      <td>Every CEN. The upper limit becomes 35 years (General/EWS), 38 years (OBC) or 40 years (SC/ST).</td>
    </tr>
    <tr>
      <th scope="row">Serving railway staff, casual labour or substitute (3+ years of service)</th>
      <td>Up to 40 / 43 / 45 years</td>
      <td>Every CEN. Group C and erstwhile Group D railway staff, casual labour and substitutes with minimum 3 years of service: the upper limit becomes 40 years (General/EWS), 43 years (OBC) or 45 years (SC/ST).</td>
    </tr>
    <tr>
      <th scope="row">Course Completed Act Apprentice (CCAA)</th>
      <td>Training period, up to 3 years</td>
      <td>ALP, Technician Grade III and Group D only. Relaxed by the apprenticeship training undergone, up to 3 years (General/EWS), 6 years (OBC) or 8 years (SC/ST) in total including the category relaxation. Railway establishments only.</td>
    </tr>
    <tr>
      <th scope="row">Course Completed Act Apprentice who became one before age 25</th>
      <td>Up to 35 / 38 / 40 years</td>
      <td>ALP, Technician Grade III and Group D only. The upper limit becomes 35 years (General/EWS), 38 years (OBC) or 40 years (SC/ST).</td>
    </tr>
  `;

  return `<style>${css}${ageCss}${rrbAgeCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free RRB eligibility checker</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Check your RRB age →
              </a>
              <a href="#method" class="calc-link">How RRB counts age ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>18–33</strong>
                <small>NTPC, JE &amp; Group D band</small>
              </div>
              <div>
                <strong>8 exams</strong>
                <small>NTPC, Group D, ALP, JE + more</small>
              </div>
              <div>
                <strong>No attempt limit</strong>
                <small>Only the age limit applies</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Age only.</strong>
              The official CEN decides eligibility. Always check
              <a href="https://rrb.indianrailways.gov.in/" rel="nofollow noopener" target="_blank">rrb.indianrailways.gov.in</a>
              before applying.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/">UPSC Age</a>
              <a href="/ibps-age-calculator/">IBPS Age</a>
              <a href="/rrb-age-calculator/" aria-current="page">RRB Age</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Check your RRB age eligibility</h2>
              <span class="calc-pill" id="exam-pill">CEN 06/2026</span>
            </div>

            <p class="calc-small">An example date is filled in. Replace it with your own date of birth.</p>

            <form id="age-form" novalidate>
              <label class="field-label" for="dob">
                Your date of birth
                <span>As on your Class 10 certificate</span>
              </label>

              <input
                class="date-input"
                id="dob"
                type="date"
                value="${p.sampleDob}"
                min="1900-01-01"
                required
                aria-describedby="dob-error"
              >
              <p class="calc-error" id="dob-error" aria-live="polite"></p>

              <label class="field-label" for="exam">
                Your RRB exam
                <span>Each exam has its own crucial date</span>
              </label>

              <select class="select-input" id="exam" aria-describedby="cutoff-note">
                ${examOptions}
              </select>
              <p class="band-note" id="cutoff-note">Age is counted on 1 January 2027 (CEN 06/2026).</p>

              <label class="field-label" for="category">
                Category
                <span>As on your certificate</span>
              </label>

              <select class="select-input" id="category">
                ${categoryOptions}
              </select>

              <fieldset style="border:0;padding:0;margin:18px 0 0">
                <legend class="field-label" style="margin-bottom:8px">
                  Any extra relaxation?
                  <span>Pick one — RRB takes the maximum, never the sum</span>
                </legend>
                <div class="radio-list">
                  ${extraRadios}
                </div>
              </fieldset>

              <div id="years-field" style="margin-top:18px" hidden>
                <label class="field-label" for="years">
                  Years of service or training
                  <span id="years-note">Years of defence service (0 to 40)</span>
                </label>

                <input
                  class="number-input"
                  id="years"
                  type="number"
                  value="5"
                  min="0"
                  max="40"
                  step="1"
                  inputmode="numeric"
                  aria-describedby="years-error"
                >
                <p class="calc-error" id="years-error" aria-live="polite"></p>
                <p class="band-note">Ex-servicemen: your service is deducted from your age first, then 3, 6 or 8 years apply — it needs more than six months of service. Apprentices: enter your training period, up to 3 years.</p>
              </div>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Check my RRB eligibility →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR AGE ON THE CRUCIAL DATE</span>
                <span>2026–27 CYCLE</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your exact age</h3>

                <div class="result-value">
                  <output id="answer" for="dob">—</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="years-val">—</strong>
                  <small>YEARS</small>
                </div>
                <div>
                  <strong id="months-val">—</strong>
                  <small>MONTHS</small>
                </div>
                <div>
                  <strong id="days-val">—</strong>
                  <small>DAYS</small>
                </div>
              </div>

              <div class="verdict" id="verdict-box">
                <strong id="verdict-title">Your RRB verdict</strong>
                <span id="verdict-text">Enter your details to see whether you meet the age limit.</span>
              </div>

              <p class="working" id="working">
                Enter your date of birth to see the working.
              </p>
              <p class="working" id="working-window"></p>
              <p class="working" id="working-note"></p>
              <p class="working" id="working-years"></p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The upper limit is exclusive: you must not have attained it on the crucial date.
                A date of birth after the crucial date is an error, not a negative age.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Check my RRB eligibility to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">How RRB counts age</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One birthday, eight answers</a>
        <a href="#limits">Age limits</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / THREE CRUCIAL DATES</span>
            <h3>One date per exam</h3>
            <p>ALP, Technician and Section Controller count age on 1 July 2026, JE and both NTPC streams on 1 January 2027, and Group D on 1 January 2026. Picking the wrong exam can move your age by six months and flip the verdict.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / EXCLUSIVE LIMIT</span>
            <h3>“Must not have attained”</h3>
            <p>The upper limit is exclusive. Turning 30 on 1 July means you have attained 30 and are over the General limit for ALP — the same wording decides every exam and relaxation on this page.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / MAXIMUM, NOT THE SUM</span>
            <h3>One relaxation at a time</h3>
            <p>RRB gives the maximum relaxation you are eligible for, never the sum. An SC ex-serviceman gets 8 years on top of his service deduction — not 5 + 8. The PwBD figures of 10, 13 and 15 years already include the category relaxation.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From date of birth to your RRB verdict</h2>
          <p>
            Start with the date on your Class 10 certificate. Then choose
            your exam, your category and any extra relaxation.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>How RRB counts your age</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>The age sections of the RRB CENs, 2026 cycle</small>
          Age on the crucial date = Crucial date − Date of birth
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Count completed years
            <strong>${sampleAge.y} completed years</strong>
            <span>${fmtDate(p.sampleDob)} to ${fmtDate(sampleCutoff)} is ${sampleAge.y} full years.</span>
          </div>

          <div class="math-step">
            2. Then completed months
            <strong>${sampleAge.m} completed months</strong>
            <span>From 15 March to 1 January is ${sampleAge.m} full months.</span>
          </div>

          <div class="math-step">
            3. Then remaining days
            <strong>${sampleAge.d} days</strong>
            <span>The result is ${fmtAge(sampleAge)} — ${fmtNum(sampleTotals.days)} days in total.</span>
          </div>
        </div>

        <div class="callout">
          <strong>29 February birthdays fall on 1 March in non-leap years.</strong>
          Born 29 February 2000, you are 26 years, 4 months and 2 days old on
          1 July 2026 and 26 years, 10 months and 3 days old on 1 January 2027. The limits on this page come from the 2026-cycle CENs (01/2026 to 07/2026 and 09/2025); the next cycle will publish new crucial dates, so re-check the rules against the new CEN before you apply.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>Three dates, three verdicts</h2>
          <p>
            Select any example to load it into the calculator and check the
            working for yourself.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const exam = p.exams.find(x => x.id === story.examId);
            const age = sscAgeParts(story.dob, exam.cut);
            const lim = rrbLimits(story.examId, story.categoryId, story.extraId, story.years);
            const years = rrbEligibleYears(story.dob, story.examId, lim.upper);
            const verdict = age.y < lim.min ? "Too young" : age.y >= lim.upper ? "Over the upper limit" : "Eligible";
            return `
            <article class="card">
              <span class="number-label">${e(exam.label)} · ${e(exam.cycle)}</span>
              <h3>${e(story.title)}</h3>
              <p>${e(story.body)}</p>
              <p class="result-preview">
                ${fmtAge(age)} on ${fmtDate(exam.cut)} · <strong>${verdict}</strong> · Eligible years ${years.first}–${years.last}
              </p>
              <button class="calc-btn" type="button" data-scenario data-dob="${story.dob}" data-exam="${story.examId}" data-cat="${story.categoryId}" data-extra="${story.extraId}" data-years="${story.years}">Try this date</button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">${e(p.exampleTitle)}</p>
          <h2>One birthday, eight different answers</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="comparison-note">
            <caption>Born ${fmtDate(p.compareDob)} — ${generalAgeWeekday(p.compareDob)} — for the 2026–27 cycle.</caption>
            <thead>
              <tr>
                <th scope="col">Exam</th>
                <th scope="col">Crucial date</th>
                <th scope="col">Upper limit</th>
                <th scope="col">Age on that date</th>
                <th scope="col">Verdict</th>
              </tr>
            </thead>
            <tbody>
              ${compareRows}
            </tbody>
          </table>
          <p class="calc-small" id="comparison-note">${e(p.exampleConclusion)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="limits">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The official rules</p>
          <h2>RRB age limits, by exam and category</h2>
          <p>
            From the age sections of the eight RRB CENs. Every figure is for
            the 2026 cycle — a new CEN publishes new crucial dates, so
            re-check before you apply.
          </p>
        </div>

        <div class="table-wrap">
          <table class="data-table">
            <caption>Age limits for the 2026 cycle — General and EWS candidates.</caption>
            <thead>
              <tr>
                <th scope="col">Exam</th>
                <th scope="col">Crucial date</th>
                <th scope="col">Age band</th>
                <th scope="col">Born between</th>
              </tr>
            </thead>
            <tbody>
              ${examRows}
            </tbody>
          </table>
        </div>

        <div class="table-wrap">
          <table class="data-table">
            <caption>Category relaxations — the same in all eight CENs.</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Relaxation</th>
                <th scope="col">Upper age limit for NTPC Graduate</th>
              </tr>
            </thead>
            <tbody>
              ${categoryRows}
            </tbody>
          </table>
        </div>

        <div class="table-wrap">
          <table class="data-table">
            <caption>Extra relaxations — RRB takes the maximum, never the sum.</caption>
            <thead>
              <tr>
                <th scope="col">Relaxation</th>
                <th scope="col">How much</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              ${extrasRows}
            </tbody>
          </table>
          <p class="calc-small">
            Two maximum-rule examples: an SC ex-serviceman with 10 years of
            service is counted at his age minus 10 years against 33 + 8 = 41
            years for NTPC Graduate — the 8 already includes his 5-year SC
            relaxation. An OBC candidate with a benchmark disability gets
            33 + 13 = 46 years. Only one extra relaxation is applied at a
            time on this page — the CENs give the maximum, not the sum.
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Common mistakes</p>
          <h2>Four ways to read the age limit wrong</h2>
          <p>
            The RRB age rules are short, but four readings trip people up
            every cycle. Each one can make an eligible candidate apply late
            or an over-age candidate waste an application.
          </p>
        </div>

        <div class="grid4">
          <article class="card">
            <span class="number-label">01 / THE EXAM DATE</span>
            <h3>Counting from the exam date</h3>
            <p>The age is fixed on the crucial date, not the exam date. An ALP candidate who turns 30 in September 2026 is still under 30 on 1 July 2026 — and eligible.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / “UP TO 30”</span>
            <h3>Reading 30 as “up to 30”</h3>
            <p>The limit is exclusive: you must not have attained 30. Born 1 July 1996, you are exactly 30 on 1 July 2026 and over the General limit for ALP; born 2 July 1996, you are eligible.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / THE WRONG EXAM</span>
            <h3>Using another exam’s cut-off</h3>
            <p>NTPC counts on 1 January 2027, Group D on 1 January 2026, ALP on 1 July 2026. Using NTPC’s date for an ALP application moves your age by six months and can flip the verdict.</p>
          </article>

          <article class="card">
            <span class="number-label">04 / THE STACKING TRAP</span>
            <h3>Adding relaxations together</h3>
            <p>RRB gives the maximum relaxation, not the sum. An SC candidate with a benchmark disability gets 15 years in total, not 5 + 15. Adding them overstates your limit by years.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your questions, answered</p>
          <h2>RRB age calculator FAQs</h2>
        </div>

        <div class="faq-list">
          ${p.faq.map(([q, a]) => `
          <details class="calc-faq">
            <summary>${e(q)}</summary>
            <p>${e(a)}</p>
          </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="method-box">
          <h2>About the method</h2>
          <p>
            This page applies the age sections of the eight RRB detailed
            CENs for the 2026 cycle: CEN 01/2026 ALP (1 July 2026),
            CEN 02/2026 Technician (1 July 2026), CEN 03/2026 Section
            Controller (1 July 2026), CEN 04/2026 JE/DMS (1 January 2027),
            CEN 06/2026 NTPC Graduate (1 January 2027), CEN 07/2026 NTPC
            Undergraduate (1 January 2027) and CEN 09/2025 Group D
            (1 January 2026). CMA posts were added to the JE CEN by
            Corrigendum No. 1 and share the JE band. Paramedical
            (CEN 05/2026) is not included: its nine posts carry six
            different age bands, so one exam choice cannot represent them.
            The quasi-administrative offices relaxation, present in the
            CENs, is not modelled: its interaction with the maximum rule
            is ambiguous and the group is small.
          </p>
          <p>
            Age is counted by calendar subtraction on Gregorian dates:
            complete years, then complete months, then the remaining days,
            with borrowing from the previous month. Dates are counted in
            UTC, so the result is the same in every time zone. A 29
            February birthday falls on 1 March in a non-leap year — the
            same rule the SSC Age Calculator on this site uses. No exam
            body endorses this tool, and it checks age only.
          </p>
          <p>
            Sources: the detailed CENs on
            <a href="https://rrb.indianrailways.gov.in/" rel="nofollow noopener" target="_blank">rrb.indianrailways.gov.in</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section cta">
      <div class="calc-wrap">
        <div class="section-head">
          <h2>Check another date before you apply</h2>
          <p>
            Try a family member’s date, a different exam, or another
            category. Then run the same check with the related tool
            for your other applications.
          </p>
        </div>

        <div class="others-row">
          ${others.map(item => `<a href="/${e(item.slug)}/">${e(item.title)}</a>`).join("")}
        </div>
      </div>
    </section>
  </div>

  <script type="application/ld+json">${safeJSON({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
  })}</script>
  <script>${clientSource}</script>`;
}
export function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

export function calculatorSchema(p) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: p.title,
        url: "https://visitbest.in/" + p.slug + "/",
        description: p.meta,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any modern web browser",
        isAccessibleForFree: true
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
          }
        }))
      }
    ]
  };
}

export function renderCalculatorBody(p, other, css, clientSource) {
  const e = escapeHTML;
  const forward = p.key === "wam";

  const fmt = n => new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(n);

  const convert = n => forward ? n / 100 * 7 : n / 7 * 100;
  const result = convert(p.sample);
  const ratio = forward ? p.sample / 100 : p.sample / 7;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");

  const config = {
    key: p.key,
    title: p.title,
    input: p.input,
    output: p.output,
    limit: p.limit,
    outputLimit: p.outputLimit,
    formula: p.formula
  };

  return `<style>${css}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free academic calculator</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Calculate ${e(p.output)} →
              </a>
              <a href="#formula" class="calc-link">Understand the formula ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>0–${p.limit}</strong>
                <small>${e(p.input)} input range</small>
              </div>
              <div>
                <strong>0–${p.outputLimit}</strong>
                <small>Estimated ${e(p.output)} scale</small>
              </div>
              <div>
                <strong>2 decimals</strong>
                <small>Displayed result</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>A linear estimate for comparison.</strong>
              An official university result requires the applicable grading rules
              and subject records.${forward ? ' <a href="/cgpa-to-percentage-calculator/">Indian CGPA? Use the CGPA to Percentage Calculator →</a>' : ""}
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose conversion direction">
              <a href="/wam-to-gpa-calculator/"${forward ? ' aria-current="page"' : ""}>
                WAM → GPA
              </a>
              <a href="/gpa-to-wam-calculator/"${!forward ? ' aria-current="page"' : ""}>
                GPA → WAM
              </a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Calculate your ${e(p.output)} estimate</h2>
              <span class="calc-pill">7-POINT GPA</span>
            </div>

            <p class="calc-small">Choose an example or replace the prefilled value.</p>

            <form id="score-form" novalidate>
              <label class="field-label" for="score">
                Your ${e(p.input)}
                <span>Out of ${p.limit}</span>
              </label>

              <input
                class="number-input"
                id="score"
                type="number"
                min="0"
                max="${p.limit}"
                step="any"
                value="${p.sample}"
                inputmode="decimal"
                autocomplete="off"
                required
                aria-describedby="input-help input-error"
              >

              <p class="calc-small" id="input-help" style="margin-top:8px">
                ${forward
                  ? "Use the weighted mark from your academic record."
                  : "The original GPA must use a 7-point scale."}
              </p>

              <p class="calc-error" id="input-error" aria-live="polite"></p>

              <input
                class="slider"
                id="score-range"
                type="range"
                min="0"
                max="${p.limit}"
                step="${forward ? ".1" : ".01"}"
                value="${p.sample}"
                aria-label="Adjust ${e(p.input)}"
              >

              <div class="slider-labels" aria-hidden="true">
                <span>0</span>
                <span>${p.limit}</span>
              </div>

              <div class="presets">
                <span>Try an example</span>
                ${p.quick.map(n => `
                  <button type="button" data-preset="${n}">
                    ${n} ${e(p.input)}
                  </button>
                `).join("")}
              </div>

              <div class="actions">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Calculate ${e(p.output)} →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The formula and reference table
                  below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR ESTIMATE</span>
                <span>Linear method</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Estimated ${e(p.output)}</h3>

                <div class="result-value">
                  <output id="answer" for="score">—</output>
                  <span class="result-unit">/ ${p.outputLimit}</span>
                </div>
              </div>

              <div class="rail" aria-hidden="true">
                <span id="meter-fill"></span>
              </div>

              <p class="working" id="working">
                Enter a valid value to see the working.
              </p>

              <p class="calc-small" style="color:#c8dce6;margin-top:9px">
                Estimate only. Not an official academic result.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result" disabled>
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent estimates · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Calculate to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#formula">Formula</a>
        <a href="#examples">Examples</a>
        <a href="#table">Conversion table</a>
        <a href="#comparison">WAM vs GPA</a>
        <a href="#accuracy">Accuracy</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / CLEAR INPUT</span>
            <h3>${forward ? "Start with a weighted mark" : "Confirm the 7-point scale"}</h3>
            <p>${e(p.inputNote)}</p>
          </article>

          <article class="card">
            <span class="number-label">02 / VISIBLE WORKING</span>
            <h3>Check every calculation</h3>
            <p>
              The input, scale and arithmetic appear beside the result.
              A two-decimal display makes estimates easier to compare
              without hiding the formula.
            </p>
          </article>

          <article class="card">
            <span class="number-label">03 / USEFUL RECORD</span>
            <h3>Keep the context with the number</h3>
            <p>
              The copy button includes the input, output scale, formula and
              estimate label. Recent checks let you revisit up to five values
              without retyping them.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From ${e(p.input)} to an explained ${e(p.output)} estimate</h2>
          <p>
            Start with the right input. Then review the number together with
            the assumption behind it.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="formula">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>${e(p.input)} to ${e(p.output)} formula</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>Linear estimate</small>
          ${e(p.formula)}
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Start with the input
            <strong>${p.sample} ${e(p.input)}</strong>
            <span>The input is measured out of ${p.limit}.</span>
          </div>

          <div class="math-step">
            2. Divide by the input scale
            <strong>${p.sample} ÷ ${p.limit} = ${ratio.toFixed(2)}</strong>
            <span>This expresses the example as a fraction of the scale.</span>
          </div>

          <div class="math-step">
            3. Multiply by the output scale
            <strong>${ratio.toFixed(2)} × ${p.outputLimit} = ${fmt(result)}</strong>
            <span>The estimated ${e(p.output)} is displayed to two decimals.</span>
          </div>
        </div>

        <div class="callout">
          <strong>Keep the original precision.</strong>
          The calculator uses the entered number for its arithmetic.
          Rounding an intermediate value can change the displayed estimate.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>See the method with three different inputs</h2>
          <p>
            Each example uses the same formula.
            Select a value to load it into the calculator.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(([n, title, body]) => `
            <article class="card example-card">
              <h3>${e(title)}</h3>

              <div class="example-score">
                <div>
                  <strong>${n}</strong>
                  <small>${e(p.input)} / ${p.limit}</small>
                </div>

                <span class="arrow" aria-hidden="true">→</span>

                <div>
                  <strong>${fmt(convert(n))}</strong>
                  <small>ESTIMATED ${e(p.output)} / ${p.outputLimit}</small>
                </div>
              </div>

              <p>${e(body)}</p>

              <button class="calc-btn" type="button" data-preset="${n}" data-jump>
                Try ${n} ${e(p.input)} →
              </button>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="table">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Quick reference</p>
          <h2>${e(p.input)} to ${e(p.output)} conversion table</h2>
          <p>
            These figures follow this calculator’s linear assumption.
            Select an input to check its working in the tool.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="${e(p.input)} to ${e(p.output)} reference table"
        >
          <table class="calc-table">
            <caption>
              Illustrative estimates. This is not a university grade-conversion table.
            </caption>

            <thead>
              <tr>
                <th scope="col">${e(p.input)} / ${p.limit}</th>
                <th scope="col">Estimated ${e(p.output)} / ${p.outputLimit}</th>
                <th scope="col">Calculation</th>
              </tr>
            </thead>

            <tbody>
              ${p.table.map(n => `
                <tr>
                  <td>
                    <button
                      class="calc-table-btn"
                      type="button"
                      data-preset="${n}"
                      data-jump
                      aria-label="Use ${n} ${e(p.input)}"
                    >${fmt(n)}</button>
                  </td>
                  <td>${fmt(convert(n))}</td>
                  <td>${n} ÷ ${p.limit} × ${p.outputLimit}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Two different measurements</p>
          <h2>WAM and GPA are not interchangeable</h2>
          <p>
            One summarizes marks. The other summarizes grade points.
            Their different inputs explain why a direct rescaling cannot
            replace an official calculation.
          </p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Compare WAM and GPA"
        >
          <table class="calc-table">
            <caption>
              General distinction. Institutional rules determine the exact calculation.
            </caption>

            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">WAM</th>
                <th scope="col">GPA</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Full name</th>
                <td>Weighted Average Mark</td>
                <td>Grade Point Average</td>
              </tr>
              <tr>
                <th scope="row">Starting data</th>
                <td>Numerical subject marks</td>
                <td>Points assigned to subject grades</td>
              </tr>
              <tr>
                <th scope="row">Scale</th>
                <td>Usually out of 100</td>
                <td>Institution-specific; 4-point and 7-point scales exist</td>
              </tr>
              <tr>
                <th scope="row">Weighting</th>
                <td>May use credits and course-specific rules</td>
                <td>May use credit-weighted grade points</td>
              </tr>
              <tr>
                <th scope="row">Detail retained</th>
                <td>Differences between numerical marks</td>
                <td>Differences between assigned grade-point values</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="calc-small" style="margin-top:16px">
          Examples of institutional methods are linked in the methodology section below.
        </p>
      </div>
    </section>

    <section class="calc-section" id="accuracy">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Why official results differ</p>
          <h2>${e(p.exampleTitle)}</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div
          class="calc-table-scroll"
          tabindex="0"
          role="region"
          aria-label="Illustration of conversion limitations"
        >
          <table class="calc-table">
            <caption>Two equally weighted subjects per student.</caption>

            <thead>
              <tr>
                ${p.exampleHeaders.map(t => `
                  <th scope="col">${e(t)}</th>
                `).join("")}
              </tr>
            </thead>

            <tbody>
              ${p.exampleRows.map(row => `
                <tr>${row.map(v => `<td>${e(v)}</td>`).join("")}</tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="callout">${e(p.exampleConclusion)}</div>

        <div class="grid2" style="margin-top:26px">
          <article class="card">
            <h3>When this estimate is useful</h3>
            <ul class="bullets">
              <li>Checking the arithmetic of a stated linear conversion.</li>
              <li>Comparing several inputs while keeping the same assumption.</li>
              <li>Keeping a clearly labeled estimate in personal study notes.</li>
            </ul>
          </article>

          <article class="card">
            <h3>When an official method is needed</h3>
            <ul class="bullets">
              <li>Reporting results on an admission or scholarship application.</li>
              <li>Meeting a course-entry threshold or eligibility requirement.</li>
              <li>Converting a transcript for another institution’s grading system.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Get the input right</p>
          <h2>Common conversion mistakes to avoid</h2>
        </div>

        <div class="grid4">
          <article class="step">
            <span class="step-index">01 / SCALE</span>
            <h3>Mixing 4-point and 7-point GPAs</h3>
            <p>
              This tool uses a 7-point GPA. The same number can mean something
              different on another scale.
            </p>
          </article>

          <article class="step">
            <span class="step-index">02 / INPUT</span>
            <h3>${forward
              ? "Using a single subject mark"
              : "Treating GPA as a percentage"}</h3>
            <p>${forward
              ? "A subject mark is not automatically your overall WAM. Start with the weighted result from your record."
              : "Enter the GPA as a number out of 7. Do not multiply it by 100 before entering it."}</p>
          </article>

          <article class="step">
            <span class="step-index">03 / PRECISION</span>
            <h3>Rounding before calculating</h3>
            <p>
              Keep the available decimals in the input.
              Round the result rather than each intermediate step.
            </p>
          </article>

          <article class="step">
            <span class="step-index">04 / INTERPRETATION</span>
            <h3>Presenting an estimate as official</h3>
            <p>
              Retain the method and scale with copied results.
              Use institutional records for formal reporting.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section" id="faq">
      <div class="calc-wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>${e(p.input)} to ${e(p.output)} questions, answered</h2>
          <p>
            Clear answers about examples, scales, precision and the limits of conversion.
          </p>
          <p><a href="#calculator" class="calc-link">Back to the calculator ↑</a></p>
        </div>

        <div>
          ${p.faq.map(([question, answer]) => `
            <details class="calc-faq">
              <summary>${e(question)}</summary>
              <p>${e(answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="methodology">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Methodology and sources</p>
          <h2>Know the assumption behind the answer</h2>
          <p>
            This tool uses the displayed linear formula with a 7-point GPA scale.
            It does not apply university grade bands, credit weights, exclusions
            or year-level adjustments. No university endorsement is implied.
          </p>
        </div>

        <div class="method-box">
          <strong>About the university references</strong>
          <p>
            The official resources below explain institution-specific calculations.
            They support the distinction between WAM and GPA.
            They do not endorse this tool’s linear conversion formula.
          </p>

          <div class="sources">
            <a href="https://www.monash.edu/students/admin/assessments/results/gpa" rel="nofollow noopener" target="_blank">
              Monash: GPA methodology ↗
            </a>
            <a href="https://www.monash.edu/students/admin/assessments/results/wam" rel="nofollow noopener" target="_blank">
              Monash: WAM methodology ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="calc-section">
      <div class="calc-wrap">
        <div class="calc-cta">
          <div>
            <p class="eyebrow" style="color:#a9dce4">Ready for another comparison?</p>
            <h2>Check a ${e(p.input)}. Understand the estimate.</h2>
            <p>Use the calculator above or switch to the reverse conversion.</p>
          </div>

          <div class="actions">
            <a class="calc-btn" href="#calculator">Calculate ${e(p.output)} ↑</a>
            <a class="calc-btn copy-btn" href="/${e(other.slug)}/">
              ${e(other.input)} to ${e(other.output)} →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export function sipCompute(monthly, annualRatePct, years) {
  const P = Number(monthly);
  const pct = Number(annualRatePct);
  const y = Math.round(Number(years));
  if (!(P > 0) || !(y > 0) || !(pct >= 0) || !Number.isFinite(P) || !Number.isFinite(pct) || !Number.isFinite(y)) return null;
  const n = y * 12;
  const i = pct / 1200;
  const invested = P * n;
  const value = i === 0 ? invested : P * (Math.pow(1 + i, n) - 1) / i * (1 + i);
  return { value, invested, gains: value - invested, months: n, years: y, monthlyRate: i };
}

export function sipSchedule(monthly, annualRatePct, years) {
  const first = sipCompute(monthly, annualRatePct, years);
  if (!first) return null;
  const rows = [];
  for (let y = 1; y <= first.years; y++) {
    const r = sipCompute(monthly, annualRatePct, y);
    rows.push({ year: y, invested: r.invested, value: r.value, gains: r.gains });
  }
  return rows;
}

export function sipRequired(target, annualRatePct, years) {
  const T = Number(target);
  const pct = Number(annualRatePct);
  const y = Math.round(Number(years));
  if (!(T > 0) || !(y > 0) || !(pct >= 0) || !Number.isFinite(T) || !Number.isFinite(pct) || !Number.isFinite(y)) return null;
  const n = y * 12;
  const i = pct / 1200;
  if (i === 0) return { monthly: Math.ceil(T / n), target: T, months: n, years: y };
  const factor = (Math.pow(1 + i, n) - 1) / i * (1 + i);
  return { monthly: Math.ceil(T / factor), target: T, months: n, years: y };
}

export function emiClient(c) {
  const $ = id => document.getElementById(id);

  function emiCompute(principal, annualRatePct, months) {
    const P = Number(principal);
    const pct = Number(annualRatePct);
    const n = Math.round(Number(months));
    if (!(P > 0) || !(n > 0) || !(pct >= 0) || !Number.isFinite(P) || !Number.isFinite(pct) || !Number.isFinite(n)) return null;
    const r = pct / 1200;
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    return { emi, total, interest: total - P, months: n, monthlyRate: r };
  }

  function emiSchedule(principal, annualRatePct, months) {
    const first = emiCompute(principal, annualRatePct, months);
    if (!first) return null;
    const P = Number(principal);
    const r = first.monthlyRate;
    const emi = first.emi;
    const n = first.months;
    let balance = P;
    const years = [];
    for (let y = 0; y * 12 < n; y++) {
      let yearInterest = 0;
      let yearPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const idx = y * 12 + m;
        if (idx >= n) break;
        const interest = balance * r;
        let principal = emi - interest;
        if (idx === n - 1) principal = balance;
        balance -= principal;
        yearInterest += interest;
        yearPrincipal += principal;
      }
      years.push({ year: y + 1, interest: yearInterest, principal: yearPrincipal, balance });
    }
    return years;
  }

  function emiPrepay(principal, annualRatePct, months, extraPerMonth) {
    const first = emiCompute(principal, annualRatePct, months);
    if (!first) return null;
    const extra = Number(extraPerMonth) || 0;
    if (extra <= 0) return { months: first.months, interest: first.interest, savedMonths: 0, savedInterest: 0 };
    const r = first.monthlyRate;
    const emi = first.emi;
    let balance = Number(principal);
    let paid = 0;
    let totalInterest = 0;
    while (balance > 0 && paid < 1200) {
      const interest = balance * r;
      const pay = Math.min(emi + extra, balance + interest);
      const principal = pay - interest;
      balance -= principal;
      totalInterest += interest;
      paid++;
    }
    return { months: paid, interest: totalInterest, savedMonths: first.months - paid, savedInterest: first.interest - totalInterest };
  }

  const presetSelect = $("preset");
  const loanPill = $("loan-pill");
  const amountInput = $("amount");
  const rateInput = $("rate");
  const yearsInput = $("years");
  const monthsInput = $("months");
  const amountError = $("amount-error");
  const rateError = $("rate-error");
  const tenureError = $("tenure-error");
  const output = $("answer");
  const interestVal = $("interest-val");
  const totalVal = $("total-val");
  const shareVal = $("share-val");
  const splitPrincipal = $("split-principal");
  const splitInterest = $("split-interest");
  const splitPrincipalLabel = $("split-principal-label");
  const splitInterestLabel = $("split-interest-label");
  const glanceBox = $("glance-box");
  const glanceTitle = $("glance-title");
  const glanceText = $("glance-text");
  const working = $("working");
  const workingFirstYear = $("working-first-year");
  const workingPrepay = $("working-prepay");
  const workingNote = $("working-note");
  const scheduleBody = $("schedule-body");
  const scheduleNote = $("schedule-note");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtINR = n => "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const presetRec = id => {
    const f = c.presets.find(x => x.id === id);
    return f || c.presets[0];
  };

  function clearResult() {
    output.textContent = "—";
    interestVal.textContent = "—";
    totalVal.textContent = "—";
    shareVal.textContent = "—";
    splitPrincipal.style.width = "0%";
    splitInterest.style.width = "0%";
    splitPrincipalLabel.textContent = "Principal —";
    splitInterestLabel.textContent = "Interest —";
    glanceBox.className = "verdict";
    glanceTitle.textContent = "Your loan at a glance";
    glanceText.textContent = "Enter your loan details to see the EMI, the total interest and the full repayment.";
    working.textContent = "Enter your loan details to see the working.";
    workingFirstYear.textContent = "";
    workingPrepay.textContent = "";
    workingNote.textContent = "";
    scheduleBody.replaceChildren();
    scheduleNote.textContent = "Enter your loan details to see the year-by-year schedule.";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function renderSchedule(years) {
    scheduleBody.replaceChildren();
    years.forEach(row => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.scope = "row";
      th.textContent = "Year " + row.year;
      tr.appendChild(th);
      [row.interest, row.principal, row.balance].forEach(v => {
        const td = document.createElement("td");
        td.textContent = fmtINR(v);
        tr.appendChild(td);
      });
      scheduleBody.appendChild(tr);
    });
  }

  function paint(showEmptyError = false) {
    loanPill.textContent = presetSelect.value === "custom" ? "Custom figures" : presetRec(presetSelect.value).label;
    const amountRaw = amountInput.value;
    const rateRaw = rateInput.value;
    const yearsRaw = yearsInput.value;
    const monthsRaw = monthsInput.value;
    const amountNum = amountRaw === "" ? NaN : Number(amountRaw);
    const rateNum = rateRaw === "" ? NaN : Number(rateRaw);
    const yearsNum = yearsRaw === "" ? NaN : Number(yearsRaw);
    const monthsNum = monthsRaw === "" ? NaN : Number(monthsRaw);

    let amountMsg = "";
    if (amountRaw === "") {
      if (showEmptyError) amountMsg = "Enter the loan amount.";
    } else if (!Number.isFinite(amountNum) || !Number.isInteger(amountNum) || amountNum < 10000 || amountNum > 100000000) {
      amountMsg = "Enter a whole-rupee amount from ₹10,000 to ₹10,00,00,000.";
    }
    amountError.textContent = amountMsg;
    amountInput.setAttribute("aria-invalid", String(amountMsg !== ""));

    let rateMsg = "";
    if (rateRaw === "") {
      if (showEmptyError) rateMsg = "Enter the annual interest rate.";
    } else if (!Number.isFinite(rateNum) || rateNum < 0 || rateNum > 36) {
      rateMsg = "Enter an annual rate from 0% to 36%.";
    }
    rateError.textContent = rateMsg;
    rateInput.setAttribute("aria-invalid", String(rateMsg !== ""));

    let tenureMsg = "";
    const totalMonths = (Number.isFinite(yearsNum) ? yearsNum : NaN) * 12 + (Number.isFinite(monthsNum) ? monthsNum : NaN);
    if (yearsRaw === "" || monthsRaw === "") {
      if (showEmptyError) tenureMsg = "Enter the tenure in years and months.";
    } else if (!Number.isInteger(yearsNum) || yearsNum < 0 || yearsNum > 30 || !Number.isInteger(monthsNum) || monthsNum < 0 || monthsNum > 11) {
      tenureMsg = "Enter whole years from 0 to 30 and whole months from 0 to 11.";
    } else if (!(totalMonths >= 1 && totalMonths <= 360)) {
      tenureMsg = "The tenure must be at least 1 month and at most 30 years.";
    }
    tenureError.textContent = tenureMsg;
    yearsInput.setAttribute("aria-invalid", String(tenureMsg !== ""));
    monthsInput.setAttribute("aria-invalid", String(tenureMsg !== ""));

    const valid = amountMsg === "" && rateMsg === "" && tenureMsg === "" && amountRaw !== "" && rateRaw !== "" && yearsRaw !== "" && monthsRaw !== "";
    if (!valid) {
      clearResult();
      return false;
    }

    const result = emiCompute(amountNum, rateNum, totalMonths);
    const years = emiSchedule(amountNum, rateNum, totalMonths);
    if (!result || !years) {
      clearResult();
      return false;
    }

    output.textContent = fmtINR(result.emi);
    interestVal.textContent = fmtINR(result.interest);
    totalVal.textContent = fmtINR(result.total);
    const share = result.total > 0 ? Math.round(result.interest / result.total * 100) : 0;
    shareVal.textContent = share + "%";
    const principalShare = result.total > 0 ? amountNum / result.total * 100 : 0;
    splitPrincipal.style.width = principalShare.toFixed(1) + "%";
    splitInterest.style.width = (100 - principalShare).toFixed(1) + "%";
    splitPrincipalLabel.textContent = "Principal " + fmtINR(amountNum) + " (" + Math.round(principalShare) + "%)";
    splitInterestLabel.textContent = "Interest " + fmtINR(result.interest) + " (" + (100 - Math.round(principalShare)) + "%)";

    glanceBox.className = "verdict verdict-ok";
    glanceTitle.textContent = "Your loan at a glance";
    glanceText.textContent = result.interest > amountNum
      ? "Over " + fmtNum(totalMonths) + " months you pay " + fmtINR(result.interest) + " in interest — more than the " + fmtINR(amountNum) + " you borrowed."
      : "Over " + fmtNum(totalMonths) + " months you pay " + fmtINR(result.interest) + " in interest on " + fmtINR(amountNum) + " borrowed.";

    const firstYear = years[0];
    working.textContent = "EMI = " + fmtINR(amountNum) + " × " + (rateNum / 1200).toFixed(7) + " × (1 + " + (rateNum / 1200).toFixed(7) + ")^" + totalMonths + " ÷ ((1 + " + (rateNum / 1200).toFixed(7) + ")^" + totalMonths + " − 1) = " + fmtINR(result.emi) + " a month.";
    workingFirstYear.textContent = "First year: " + fmtINR(firstYear.interest) + " interest and " + fmtINR(firstYear.principal) + " principal — balance " + fmtINR(firstYear.balance) + " after 12 payments.";
    const prepay = emiPrepay(amountNum, rateNum, totalMonths, 5000);
    workingPrepay.textContent = prepay && prepay.savedMonths > 0
      ? "Pay ₹5,000 extra a month and the loan clears in " + fmtNum(prepay.months) + " months instead of " + fmtNum(totalMonths) + ", saving " + fmtINR(prepay.savedInterest) + " of interest."
      : "Paying extra each month cuts the tenure and the total interest — the earlier the extra payment, the bigger the saving.";
    workingNote.textContent = "Principal + interest only. Processing fee, GST, stamp duty, registration and insurance are extra, and a lender's rounding may move the EMI by a few rupees.";

    renderSchedule(years);
    scheduleNote.textContent = "Year-by-year split of your " + fmtNum(totalMonths) + " monthly payments of " + fmtINR(result.emi) + ". Interest is charged on the balance still owed, so the principal share grows every year.";

    copyButton.disabled = false;
    summary =
      "VisitBest | EMI Calculator" +
      "\nLoan amount: " + fmtINR(amountNum) +
      "\nAnnual interest rate: " + rateNum + "%" +
      "\nTenure: " + fmtNum(totalMonths) + " months" +
      "\nMonthly EMI: " + fmtINR(result.emi) +
      "\nTotal interest: " + fmtINR(result.interest) +
      "\nTotal payment: " + fmtINR(result.total) +
      "\nInterest share: " + share + "% of the total payment";
    return true;
  }

  function scenarioKey() {
    return [presetSelect.value, amountInput.value, rateInput.value, yearsInput.value, monthsInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const result = emiCompute(item.amount, item.rate, item.years * 12 + item.months);
      button.textContent = fmtINR(item.amount) + " @ " + item.rate + "% · " + fmtNum(item.years * 12 + item.months) + " months → " + (result ? fmtINR(result.emi) : "—") + "/month";
      button.setAttribute("aria-label", "Load check for " + fmtINR(item.amount) + " at " + item.rate + " percent over " + fmtNum(item.years * 12 + item.months) + " months");
      button.addEventListener("click", () => {
        presetSelect.value = "custom";
        amountInput.value = String(item.amount);
        rateInput.value = String(item.rate);
        yearsInput.value = String(item.years);
        monthsInput.value = String(item.months);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    history.unshift({
      key,
      amount: Number(amountInput.value),
      rate: Number(rateInput.value),
      years: Number(yearsInput.value),
      months: Number(monthsInput.value)
    });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      presetSelect.value = button.dataset.preset || "custom";
      amountInput.value = button.dataset.amount || "";
      rateInput.value = button.dataset.rate || "";
      yearsInput.value = button.dataset.years || "";
      monthsInput.value = button.dataset.months || "0";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  presetSelect.addEventListener("change", () => {
    if (presetSelect.value === "custom") return;
    const rec = presetRec(presetSelect.value);
    amountInput.value = String(rec.amount);
    rateInput.value = String(rec.rate);
    yearsInput.value = String(rec.years);
    monthsInput.value = String(rec.months);
    paint();
  });

  ["input", "change"].forEach(evt => {
    amountInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    rateInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    yearsInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    monthsInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
  });

  $("emi-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    const rec = presetRec(c.defaultPreset);
    presetSelect.value = c.defaultPreset;
    amountInput.value = String(rec.amount);
    rateInput.value = String(rec.rate);
    yearsInput.value = String(rec.years);
    monthsInput.value = String(rec.months);
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function renderEmiCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const fmtINR = n => "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);

  const config = { key: p.key, title: p.title, presets: p.presets, defaultPreset: p.defaultPreset, sampleAmount: p.sampleAmount, sampleRate: p.sampleRate, sampleYears: p.sampleYears, sampleMonths: p.sampleMonths };
  const sampleMonths = p.sampleYears * 12 + p.sampleMonths;
  const sample = emiCompute(p.sampleAmount, p.sampleRate, sampleMonths);
  const sampleSchedule = emiSchedule(p.sampleAmount, p.sampleRate, sampleMonths);
  const sampleFirstYear = sampleSchedule[0];
  const samplePrepay = emiPrepay(p.sampleAmount, p.sampleRate, sampleMonths, 5000);
  const sampleMonthlyRate = p.sampleRate / 1200;
  const sampleGrowth = Math.pow(1 + sampleMonthlyRate, sampleMonths);

  const presetOptions = p.presets.map(pr => `
    <option value="${e(pr.id)}"${pr.id === p.defaultPreset ? " selected" : ""}>${e(pr.label)} — ${fmtINR(pr.amount)} at ${pr.rate}% over ${pr.years} years</option>
  `).join("");

  const compareRows = p.compareYears.map(y => {
    const r = emiCompute(p.compareAmount, p.compareRate, y * 12);
    return `
      <tr>
        <th scope="row">${y} years (${y * 12} months)</th>
        <td>${fmtINR(r.emi)}</td>
        <td>${fmtINR(r.interest)}</td>
        <td>${fmtINR(r.total)}</td>
      </tr>`;
  }).join("");

  const ratesRows = p.rates.map(row => `
      <tr>
        <th scope="row">${e(row.type)}</th>
        <td>${e(row.range)}</td>
        <td>${e(row.tenure)}</td>
        <td>${e(row.amount)}</td>
        <td>${e(row.note)}</td>
      </tr>`).join("");

  const scheduleRows = sampleSchedule.map(row => `
      <tr>
        <th scope="row">Year ${row.year}</th>
        <td>${fmtINR(row.interest)}</td>
        <td>${fmtINR(row.principal)}</td>
        <td>${fmtINR(row.balance)}</td>
      </tr>`).join("");

  return `<style>${css}${ageCss}${emiCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free loan EMI calculator</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Calculate your EMI →
              </a>
              <a href="#method" class="calc-link">How the EMI is worked out ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>${fmtINR(sample.emi)}</strong>
                <small>EMI on ${fmtINR(p.sampleAmount)} at ${p.sampleRate}%</small>
              </div>
              <div>
                <strong>3 inputs</strong>
                <small>Amount, rate, tenure</small>
              </div>
              <div>
                <strong>Reducing balance</strong>
                <small>The method lenders use</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Principal + interest only.</strong>
              The EMI does not include the processing fee, GST, stamp duty,
              registration or insurance — and a lender's rounding may move
              the EMI by a few rupees.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/">UPSC Age</a>
              <a href="/ibps-age-calculator/">IBPS Age</a>
              <a href="/rrb-age-calculator/">RRB Age</a>
              <a href="/emi-calculator/" aria-current="page">EMI</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Calculate your EMI</h2>
              <span class="calc-pill" id="loan-pill">Home loan</span>
            </div>

            <p class="calc-small">Example figures are filled in. Replace them with your own loan.</p>

            <form id="emi-form" novalidate>
              <label class="field-label" for="preset">
                Loan type
                <span>Pick one to fill in typical figures, then edit any figure</span>
              </label>

              <select class="select-input" id="preset">
                ${presetOptions}
                <option value="custom">Custom figures</option>
              </select>

              <label class="field-label" for="amount">
                Loan amount (₹)
                <span>The amount you borrow, after the down payment</span>
              </label>

              <input
                class="number-input"
                id="amount"
                type="number"
                value="${p.sampleAmount}"
                min="10000"
                max="100000000"
                step="1000"
                inputmode="numeric"
                aria-describedby="amount-error"
              >
              <p class="calc-error" id="amount-error" aria-live="polite"></p>

              <label class="field-label" for="rate">
                Annual interest rate (%)
                <span>As printed on the sanction letter</span>
              </label>

              <input
                class="number-input"
                id="rate"
                type="number"
                value="${p.sampleRate}"
                min="0"
                max="36"
                step="0.01"
                inputmode="decimal"
                aria-describedby="rate-error"
              >
              <p class="calc-error" id="rate-error" aria-live="polite"></p>

              <div class="field-row">
                <div>
                  <label class="field-label" for="years">
                    Tenure — years
                    <span>0 to 30 years</span>
                  </label>

                  <input
                    class="number-input"
                    id="years"
                    type="number"
                    value="${p.sampleYears}"
                    min="0"
                    max="30"
                    step="1"
                    inputmode="numeric"
                    aria-describedby="tenure-error"
                  >
                </div>
                <div>
                  <label class="field-label" for="months">
                    Tenure — months
                    <span>0 to 11 months</span>
                  </label>

                  <input
                    class="number-input"
                    id="months"
                    type="number"
                    value="${p.sampleMonths}"
                    min="0"
                    max="11"
                    step="1"
                    inputmode="numeric"
                    aria-describedby="tenure-error"
                  >
                </div>
              </div>
              <p class="calc-error" id="tenure-error" aria-live="polite"></p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Calculate my EMI →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR MONTHLY EMI</span>
                <span>REDUCING BALANCE</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your monthly EMI</h3>

                <div class="result-value">
                  <output id="answer" for="amount">${fmtINR(sample.emi)}</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="interest-val">${fmtINR(sample.interest)}</strong>
                  <small>TOTAL INTEREST</small>
                </div>
                <div>
                  <strong id="total-val">${fmtINR(sample.total)}</strong>
                  <small>TOTAL PAYMENT</small>
                </div>
                <div>
                  <strong id="share-val">${Math.round(sample.interest / sample.total * 100)}%</strong>
                  <small>INTEREST SHARE</small>
                </div>
              </div>

              <div class="split-bar" aria-hidden="true">
                <i class="split-principal" id="split-principal" style="width:${(p.sampleAmount / sample.total * 100).toFixed(1)}%"></i><i class="split-interest" id="split-interest" style="width:${(sample.interest / sample.total * 100).toFixed(1)}%"></i>
              </div>
              <div class="split-legend">
                <span><i class="split-dot" style="background:#7fd1a8"></i><b id="split-principal-label">Principal ${fmtINR(p.sampleAmount)} (${Math.round(p.sampleAmount / sample.total * 100)}%)</b></span>
                <span><i class="split-dot" style="background:#ffb454"></i><b id="split-interest-label">Interest ${fmtINR(sample.interest)} (${Math.round(sample.interest / sample.total * 100)}%)</b></span>
              </div>

              <div class="verdict verdict-ok" id="glance-box">
                <strong id="glance-title">Your loan at a glance</strong>
                <span id="glance-text">Over ${fmtNum(sampleMonths)} months you pay ${fmtINR(sample.interest)} in interest — more than the ${fmtINR(p.sampleAmount)} you borrowed.</span>
              </div>

              <p class="working" id="working">
                EMI = ${fmtINR(p.sampleAmount)} × ${sampleMonthlyRate.toFixed(7)} × (1 + ${sampleMonthlyRate.toFixed(7)})^${sampleMonths} ÷ ((1 + ${sampleMonthlyRate.toFixed(7)})^${sampleMonths} − 1) = ${fmtINR(sample.emi)} a month.
              </p>
              <p class="working" id="working-first-year">First year: ${fmtINR(sampleFirstYear.interest)} interest and ${fmtINR(sampleFirstYear.principal)} principal — balance ${fmtINR(sampleFirstYear.balance)} after 12 payments.</p>
              <p class="working" id="working-prepay">Pay ₹5,000 extra a month and the loan clears in ${fmtNum(samplePrepay.months)} months instead of ${fmtNum(sampleMonths)}, saving ${fmtINR(samplePrepay.savedInterest)} of interest.</p>
              <p class="working" id="working-note">Principal + interest only. Processing fee, GST, stamp duty, registration and insurance are extra, and a lender's rounding may move the EMI by a few rupees.</p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The EMI stays fixed while the rate stays fixed. On a floating-rate
                loan it holds only until the next rate reset.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result">
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Calculate my EMI to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <section class="calc-section" id="schedule">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your repayment schedule</p>
          <h2>Year by year: interest vs principal</h2>
          <p id="schedule-note">Year-by-year split of your ${fmtNum(sampleMonths)} monthly payments of ${fmtINR(sample.emi)}. Interest is charged on the balance still owed, so the principal share grows every year.</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="schedule-note">
            <caption>Repayment schedule — ${fmtINR(p.sampleAmount)} at ${p.sampleRate}% over ${p.sampleYears} years.</caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Interest paid</th>
                <th scope="col">Principal paid</th>
                <th scope="col">Balance at year end</th>
              </tr>
            </thead>
            <tbody id="schedule-body">
              ${scheduleRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">Formula</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One loan, three tenures</a>
        <a href="#rates">Indicative rates</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / THREE INPUTS</span>
            <h3>Amount, rate, tenure</h3>
            <p>Three numbers decide the EMI. The amount is what you borrow after the down payment, the rate is the annual rate on your sanction letter, and the tenure is the full repayment period in years and months.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / REDUCING BALANCE</span>
            <h3>Interest on what you still owe</h3>
            <p>Interest each month is charged on the balance still owed, not the original amount. That is why early EMIs are mostly interest and late EMIs mostly principal — and why a flat-rate quote that looks cheaper usually is not.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / FIXED UNTIL RESET</span>
            <h3>One EMI, until the rate moves</h3>
            <p>The EMI stays fixed while the rate stays fixed. On a floating-rate loan the rate resets every few months, and most lenders then keep the EMI and change the tenure. This calculator gives the EMI only until the next reset.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From loan figures to your EMI</h2>
          <p>
            Start with the figures on your sanction letter. Then read the
            EMI together with the total interest and the schedule.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>The EMI formula</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>The standard amortising-loan formula, reducing balance</small>
          EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Find the monthly rate
            <strong>r = ${sampleMonthlyRate.toFixed(7)}</strong>
            <span>${p.sampleRate}% a year ÷ 12 ÷ 100 = ${sampleMonthlyRate.toFixed(7)} a month.</span>
          </div>

          <div class="math-step">
            2. Raise it to the tenure
            <strong>(1 + r)^${sampleMonths} = ${sampleGrowth.toFixed(4)}</strong>
            <span>Compounding the monthly rate over ${sampleMonths} months gives ${sampleGrowth.toFixed(4)}.</span>
          </div>

          <div class="math-step">
            3. Apply the formula
            <strong>EMI = ${fmtINR(sample.emi)}</strong>
            <span>${fmtINR(p.sampleAmount)} × ${sampleMonthlyRate.toFixed(7)} × ${sampleGrowth.toFixed(4)} ÷ (${sampleGrowth.toFixed(4)} − 1) = ${fmtINR(sample.emi)} a month.</span>
          </div>
        </div>

        <div class="callout">
          <strong>Paying ₹5,000 extra a month clears this loan in ${fmtNum(samplePrepay.months)} months instead of ${fmtNum(sampleMonths)} — and saves ${fmtINR(samplePrepay.savedInterest)} of interest.</strong>
          Extra payments cut the balance early, so less interest accrues on everything after them. On a floating-rate loan taken by an individual, the RBI (Pre-payment Charges on Loans) Directions, 2025 bar prepayment charges for loans sanctioned or renewed on or after 1 January 2026. A lender's rounding may move the EMI by a few rupees.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>Three loans, three EMIs</h2>
          <p>
            Select any example to load it into the calculator and check the
            working for yourself.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const r = emiCompute(story.amount, story.rate, story.years * 12 + story.months);
            const sched = emiSchedule(story.amount, story.rate, story.years * 12 + story.months);
            const first = sched[0];
            return `
            <article class="card">
              <span class="number-label">${fmtINR(story.amount)} · ${story.rate}% · ${story.years} years</span>
              <h3>${e(story.title)}</h3>
              <p>${e(story.body)}</p>
              <p class="result-preview">
                EMI ${fmtINR(r.emi)} · Total interest ${fmtINR(r.interest)} · First year ${fmtINR(first.interest)} interest, ${fmtINR(first.principal)} principal
              </p>
              <button class="calc-btn" type="button" data-scenario data-preset="${e(story.preset)}" data-amount="${story.amount}" data-rate="${story.rate}" data-years="${story.years}" data-months="${story.months}">Try these figures</button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">${e(p.exampleTitle)}</p>
          <h2>One loan, three tenures</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="comparison-note">
            <caption>${fmtINR(p.compareAmount)} at ${p.compareRate}% a year.</caption>
            <thead>
              <tr>
                <th scope="col">Tenure</th>
                <th scope="col">Monthly EMI</th>
                <th scope="col">Total interest</th>
                <th scope="col">Total payment</th>
              </tr>
            </thead>
            <tbody>
              ${compareRows}
            </tbody>
          </table>
          <p class="calc-small" id="comparison-note">${e(p.exampleConclusion)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="rates">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">What rates look like now</p>
          <h2>Indicative loan rates in India, November 2026</h2>
          <p>
            Typical ranges from lenders' published pages, after the RBI
            raised the repo rate to 5.50% in October 2026. Your rate depends
            on your credit score, income and the lender — your sanction
            letter decides, not this table.
          </p>
        </div>

        <div class="table-wrap">
          <table class="data-table">
            <caption>Indicative ranges — check the lender's own page before you apply.</caption>
            <thead>
              <tr>
                <th scope="col">Loan type</th>
                <th scope="col">Indicative rate</th>
                <th scope="col">Tenure</th>
                <th scope="col">Amount</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              ${ratesRows}
            </tbody>
          </table>
          <p class="calc-small">
            ${e(p.notice)}
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Common mistakes</p>
          <h2>Four ways to read a loan wrong</h2>
          <p>
            The EMI formula is short, but four readings trip borrowers up.
            Each one can make an expensive loan look cheap.
          </p>
        </div>

        <div class="grid4">
          <article class="card">
            <span class="number-label">01 / FLAT VS REDUCING</span>
            <h3>Comparing a flat rate as if it were reducing</h3>
            <p>A flat 10% charges interest on the full amount for the whole tenure; a reducing-balance 10% charges it only on what you still owe. The flat quote costs far more — compare reducing-balance rates only.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / THE LOWEST EMI</span>
            <h3>Choosing the lowest EMI</h3>
            <p>Stretching a ₹50 lakh home loan from 15 to 25 years cuts the EMI by ₹8,865 a month but adds ₹33,37,117 of interest. The cheapest EMI is rarely the cheapest loan — compare the total interest.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / THE HIDDEN COSTS</span>
            <h3>Forgetting the fees</h3>
            <p>The EMI is principal and interest only. Processing fees, GST on those fees, stamp duty, registration and insurance can add lakhs to the true cost of a home loan — add them before you compare.</p>
          </article>

          <article class="card">
            <span class="number-label">04 / THE RESET</span>
            <h3>Assuming the EMI never changes</h3>
            <p>On a floating-rate loan the rate resets every few months. Most lenders keep the EMI and change the tenure, so a rate rise quietly stretches your loan by years. Re-check after every reset.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your questions, answered</p>
          <h2>EMI calculator FAQs</h2>
        </div>

        <div class="faq-list">
          ${p.faq.map(([q, a]) => `
          <details class="calc-faq">
            <summary>${e(q)}</summary>
            <p>${e(a)}</p>
          </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="method-box">
          <h2>About the method</h2>
          <p>
            This page uses the standard amortising-loan formula on a
            reducing balance: EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1),
            with r the monthly rate and n the tenure in months. Interest
            each month is charged on the balance still owed. The EMI is
            rounded to the nearest rupee for display; the schedule uses the
            unrounded EMI, so yearly figures can differ from the displayed
            totals by a rupee or two. A lender's rounding and daily interest
            accrual can move the EMI by a few rupees — the figures here are
            an estimate, not a sanction.
          </p>
          <p>
            The indicative rate ranges are from lenders' published pages as
            reported in November 2026: home loans 7.40%–9.25%, personal
            loans 10.50%–24%, car loans 7.85%–11.55%. The RBI repo rate is
            5.50% after the Monetary Policy Committee's October 2026 hike.
            The prepayment rule is the RBI (Pre-payment Charges on Loans)
            Directions, 2025, which bar prepayment charges on floating-rate
            loans to individuals sanctioned or renewed on or after
            1 January 2026. The tax notes are Sections 24(b) and 80C of the
            Income Tax Act under the old regime. No lender or regulator
            endorses this tool.
          </p>
          <p>
            Sources: the RBI Monetary Policy Statement, October 2026, and
            the RBI (Pre-payment Charges on Loans) Directions, 2025, on
            <a href="https://www.rbi.org.in/" rel="nofollow noopener" target="_blank">rbi.org.in</a>;
            rate ranges as published on
            <a href="https://arthzo.com/loans/" rel="nofollow noopener" target="_blank">arthzo.com</a>,
            <a href="https://www.aalekh.ai/calculators/emi" rel="nofollow noopener" target="_blank">aalekh.ai</a> and
            <a href="https://moneykarma.com/calculators/home-loan-emi-calculator/" rel="nofollow noopener" target="_blank">moneykarma.com</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section cta">
      <div class="calc-wrap">
        <div class="section-head">
          <h2>Check another loan before you sign</h2>
          <p>
            Try a different amount, rate or tenure — or run the same check
            with the related tools for your other plans.
          </p>
        </div>

        <div class="others-row">
          ${others.map(item => `<a href="/${e(item.slug)}/">${e(item.title)}</a>`).join("")}
        </div>
      </div>
    </section>
  </div>

  <script type="application/ld+json">${safeJSON({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
  })}</script>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export function bmiCategory(bmi) {
  const b = Number(bmi);
  if (!(b > 0) || !Number.isFinite(b)) return null;
  if (b < 18.5) return { key: "underweight", label: "Underweight", note: "Below the healthy range. A low BMI can mean too little body fat or muscle for your height — if you have lost weight without trying, or you feel unwell, talk to a doctor." };
  if (b < 25) return { key: "healthy", label: "Healthy weight", note: "In the healthy range. A balanced diet and regular activity are the way to stay here." };
  if (b < 30) return { key: "overweight", label: "Overweight", note: "Above the healthy range. Even a small, steady weight loss lowers the risk of type 2 diabetes and heart disease — talk to a doctor before starting a diet." };
  return { key: "obese", label: "Obese", note: "Well above the healthy range. A BMI of 30 or more is linked to a higher risk of type 2 diabetes, heart disease and joint problems — talk to a doctor about a plan." };
}

export function bmiHealthyRange(heightCm) {
  const h = Number(heightCm) / 100;
  if (!(h > 0) || !Number.isFinite(h)) return null;
  return { low: 18.5 * h * h, high: 24.9 * h * h, heightCm: Number(heightCm) };
}

export function bmiCompute(heightCm, weightKg) {
  const h = Number(heightCm) / 100;
  const w = Number(weightKg);
  if (!(h > 0) || !(w > 0) || !Number.isFinite(h) || !Number.isFinite(w)) return null;
  const bmi = w / (h * h);
  const category = bmiCategory(bmi);
  const range = bmiHealthyRange(heightCm);
  let toHealthy = { direction: "within", kg: 0 };
  if (bmi < 18.5) toHealthy = { direction: "gain", kg: range.low - w };
  else if (bmi > 24.9) toHealthy = { direction: "lose", kg: w - range.high };
  return { bmi, bmi1dp: Math.round(bmi * 10) / 10, category, healthyLow: range.low, healthyHigh: range.high, heightCm: Number(heightCm), weightKg: w, toHealthy };
}

export function bmiFromFeetInches(feet, inches, weightKg) {
  const ft = Number(feet);
  const inch = Number(inches);
  const w = Number(weightKg);
  if (!Number.isFinite(ft) || !Number.isFinite(inch) || !(w > 0)) return null;
  const totalInches = ft * 12 + inch;
  if (!(totalInches > 0)) return null;
  const heightCm = totalInches * 2.54;
  const result = bmiCompute(heightCm, w);
  if (!result) return null;
  result.heightCm = heightCm;
  result.heightFeet = ft;
  result.heightInches = inch;
  return result;
}

export function sipClient(c) {
  const $ = id => document.getElementById(id);

  function sipCompute(monthly, annualRatePct, years) {
    const P = Number(monthly);
    const pct = Number(annualRatePct);
    const y = Math.round(Number(years));
    if (!(P > 0) || !(y > 0) || !(pct >= 0) || !Number.isFinite(P) || !Number.isFinite(pct) || !Number.isFinite(y)) return null;
    const n = y * 12;
    const i = pct / 1200;
    const invested = P * n;
    const value = i === 0 ? invested : P * (Math.pow(1 + i, n) - 1) / i * (1 + i);
    return { value, invested, gains: value - invested, months: n, years: y, monthlyRate: i };
  }

  function sipSchedule(monthly, annualRatePct, years) {
    const first = sipCompute(monthly, annualRatePct, years);
    if (!first) return null;
    const rows = [];
    for (let y = 1; y <= first.years; y++) {
      const r = sipCompute(monthly, annualRatePct, y);
      rows.push({ year: y, invested: r.invested, value: r.value, gains: r.gains });
    }
    return rows;
  }

  function sipRequired(target, annualRatePct, years) {
    const T = Number(target);
    const pct = Number(annualRatePct);
    const y = Math.round(Number(years));
    if (!(T > 0) || !(y > 0) || !(pct >= 0) || !Number.isFinite(T) || !Number.isFinite(pct) || !Number.isFinite(y)) return null;
    const n = y * 12;
    const i = pct / 1200;
    if (i === 0) return { monthly: Math.ceil(T / n), target: T, months: n, years: y };
    const factor = (Math.pow(1 + i, n) - 1) / i * (1 + i);
    return { monthly: Math.ceil(T / factor), target: T, months: n, years: y };
  }

  const presetSelect = $("preset");
  const sipPill = $("sip-pill");
  const monthlyInput = $("monthly");
  const rateInput = $("rate");
  const yearsInput = $("years");
  const monthlyError = $("monthly-error");
  const rateError = $("rate-error");
  const tenureError = $("tenure-error");
  const output = $("answer");
  const investedVal = $("invested-val");
  const gainsVal = $("gains-val");
  const shareVal = $("share-val");
  const splitInvested = $("split-invested");
  const splitGains = $("split-gains");
  const splitInvestedLabel = $("split-invested-label");
  const splitGainsLabel = $("split-gains-label");
  const glanceBox = $("glance-box");
  const glanceTitle = $("glance-title");
  const glanceText = $("glance-text");
  const working = $("working");
  const workingFirstYear = $("working-first-year");
  const workingGoal = $("working-goal");
  const workingNote = $("working-note");
  const scheduleBody = $("schedule-body");
  const scheduleNote = $("schedule-note");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmtINR = n => "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const presetRec = id => {
    const f = c.presets.find(x => x.id === id);
    return f || c.presets[0];
  };

  function clearResult() {
    output.textContent = "—";
    investedVal.textContent = "—";
    gainsVal.textContent = "—";
    shareVal.textContent = "—";
    splitInvested.style.width = "0%";
    splitGains.style.width = "0%";
    splitInvestedLabel.textContent = "Invested —";
    splitGainsLabel.textContent = "Estimated gains —";
    glanceBox.className = "verdict";
    glanceTitle.textContent = "Your SIP at a glance";
    glanceText.textContent = "Enter your monthly amount, expected return and tenure to see the estimated value, what you invest and the estimated gains.";
    working.textContent = "Enter your SIP details to see the working.";
    workingFirstYear.textContent = "";
    workingGoal.textContent = "";
    workingNote.textContent = "";
    scheduleBody.replaceChildren();
    scheduleNote.textContent = "Enter your SIP details to see the year-by-year growth.";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function renderSchedule(years) {
    scheduleBody.replaceChildren();
    years.forEach(row => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.scope = "row";
      th.textContent = "Year " + row.year;
      tr.appendChild(th);
      [row.invested, row.gains, row.value].forEach(v => {
        const td = document.createElement("td");
        td.textContent = fmtINR(v);
        tr.appendChild(td);
      });
      scheduleBody.appendChild(tr);
    });
  }

  function paint(showEmptyError = false) {
    sipPill.textContent = presetSelect.value === "custom" ? "Custom figures" : presetRec(presetSelect.value).label;
    const monthlyRaw = monthlyInput.value;
    const rateRaw = rateInput.value;
    const yearsRaw = yearsInput.value;
    const monthlyNum = monthlyRaw === "" ? NaN : Number(monthlyRaw);
    const rateNum = rateRaw === "" ? NaN : Number(rateRaw);
    const yearsNum = yearsRaw === "" ? NaN : Number(yearsRaw);

    let monthlyMsg = "";
    if (monthlyRaw === "") {
      if (showEmptyError) monthlyMsg = "Enter the monthly SIP amount.";
    } else if (!Number.isFinite(monthlyNum) || !Number.isInteger(monthlyNum) || monthlyNum < 500 || monthlyNum > 1000000) {
      monthlyMsg = "Enter a whole-rupee amount from ₹500 to ₹10,00,000 a month.";
    }
    monthlyError.textContent = monthlyMsg;
    monthlyInput.setAttribute("aria-invalid", String(monthlyMsg !== ""));

    let rateMsg = "";
    if (rateRaw === "") {
      if (showEmptyError) rateMsg = "Enter the expected annual return.";
    } else if (!Number.isFinite(rateNum) || rateNum < 0 || rateNum > 30) {
      rateMsg = "Enter an expected return from 0% to 30% a year.";
    }
    rateError.textContent = rateMsg;
    rateInput.setAttribute("aria-invalid", String(rateMsg !== ""));

    let tenureMsg = "";
    if (yearsRaw === "") {
      if (showEmptyError) tenureMsg = "Enter the tenure in years.";
    } else if (!Number.isInteger(yearsNum) || yearsNum < 1 || yearsNum > 40) {
      tenureMsg = "Enter whole years from 1 to 40.";
    }
    tenureError.textContent = tenureMsg;
    yearsInput.setAttribute("aria-invalid", String(tenureMsg !== ""));

    const valid = monthlyMsg === "" && rateMsg === "" && tenureMsg === "" && monthlyRaw !== "" && rateRaw !== "" && yearsRaw !== "";
    if (!valid) {
      clearResult();
      return false;
    }

    const result = sipCompute(monthlyNum, rateNum, yearsNum);
    const years = sipSchedule(monthlyNum, rateNum, yearsNum);
    if (!result || !years) {
      clearResult();
      return false;
    }

    output.textContent = fmtINR(result.value);
    investedVal.textContent = fmtINR(result.invested);
    gainsVal.textContent = fmtINR(result.gains);
    const share = result.value > 0 ? Math.round(result.gains / result.value * 100) : 0;
    shareVal.textContent = share + "%";
    const investedShare = result.value > 0 ? result.invested / result.value * 100 : 0;
    splitInvested.style.width = investedShare.toFixed(1) + "%";
    splitGains.style.width = (100 - investedShare).toFixed(1) + "%";
    splitInvestedLabel.textContent = "Invested " + fmtINR(result.invested) + " (" + Math.round(investedShare) + "%)";
    splitGainsLabel.textContent = "Estimated gains " + fmtINR(result.gains) + " (" + (100 - Math.round(investedShare)) + "%)";

    glanceBox.className = "verdict verdict-ok";
    glanceTitle.textContent = "Your SIP at a glance";
    glanceText.textContent = result.gains > result.invested
      ? "Over " + fmtNum(yearsNum) + " years the estimated gains of " + fmtINR(result.gains) + " overtake the " + fmtINR(result.invested) + " you invest."
      : "Over " + fmtNum(yearsNum) + " years you invest " + fmtINR(result.invested) + " and the estimate adds " + fmtINR(result.gains) + " of gains.";

    const firstYear = years[0];
    working.textContent = "FV = " + fmtINR(monthlyNum) + " × ((1 + " + result.monthlyRate.toFixed(7) + ")^" + result.months + " − 1) ÷ " + result.monthlyRate.toFixed(7) + " × (1 + " + result.monthlyRate.toFixed(7) + ") = " + fmtINR(result.value) + ".";
    workingFirstYear.textContent = "First year: " + fmtINR(firstYear.invested) + " invested, " + fmtINR(firstYear.gains) + " estimated gains — value " + fmtINR(firstYear.value) + " after 12 instalments.";
    const goal = sipRequired(c.goalTarget, rateNum, yearsNum);
    workingGoal.textContent = goal
      ? "To reach " + fmtINR(c.goalTarget) + " in " + fmtNum(yearsNum) + " years at " + rateNum + "% you would need " + fmtINR(goal.monthly) + " a month."
      : "Enter a return above 0% to see the monthly SIP a ₹1 crore goal would need.";
    workingNote.textContent = "Estimated, not guaranteed. Mutual fund returns are market-linked — the value can fall below what you invest, and the figures are before tax, exit load and fund expenses.";

    renderSchedule(years);
    scheduleNote.textContent = "Year-by-year growth of your " + fmtNum(result.months) + " monthly instalments of " + fmtINR(monthlyNum) + ". Each instalment compounds from the month it is paid, so the earliest instalments do the most work.";

    copyButton.disabled = false;
    summary =
      "VisitBest | SIP Calculator" +
      "\nMonthly SIP: " + fmtINR(monthlyNum) +
      "\nExpected annual return: " + rateNum + "%" +
      "\nTenure: " + fmtNum(yearsNum) + " years" +
      "\nEstimated maturity value: " + fmtINR(result.value) +
      "\nInvested: " + fmtINR(result.invested) +
      "\nEstimated gains: " + fmtINR(result.gains) +
      "\nGains share: " + share + "% of the estimated value";
    return true;
  }

  function scenarioKey() {
    return [presetSelect.value, monthlyInput.value, rateInput.value, yearsInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const result = sipCompute(item.monthly, item.rate, item.years);
      button.textContent = fmtINR(item.monthly) + "/month @ " + item.rate + "% · " + fmtNum(item.years) + " years → " + (result ? fmtINR(result.value) : "—");
      button.setAttribute("aria-label", "Load check for " + fmtINR(item.monthly) + " a month at " + item.rate + " percent over " + fmtNum(item.years) + " years");
      button.addEventListener("click", () => {
        presetSelect.value = "custom";
        monthlyInput.value = String(item.monthly);
        rateInput.value = String(item.rate);
        yearsInput.value = String(item.years);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    history.unshift({
      key,
      monthly: Number(monthlyInput.value),
      rate: Number(rateInput.value),
      years: Number(yearsInput.value)
    });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      presetSelect.value = button.dataset.preset || "custom";
      monthlyInput.value = button.dataset.monthly || "";
      rateInput.value = button.dataset.rate || "";
      yearsInput.value = button.dataset.years || "";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  presetSelect.addEventListener("change", () => {
    if (presetSelect.value === "custom") return;
    const rec = presetRec(presetSelect.value);
    monthlyInput.value = String(rec.monthly);
    rateInput.value = String(rec.rate);
    yearsInput.value = String(rec.years);
    paint();
  });

  ["input", "change"].forEach(evt => {
    monthlyInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    rateInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    yearsInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
  });

  $("sip-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    const rec = presetRec(c.defaultPreset);
    presetSelect.value = c.defaultPreset;
    monthlyInput.value = String(rec.monthly);
    rateInput.value = String(rec.rate);
    yearsInput.value = String(rec.years);
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function renderSipCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const fmtINR = n => "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);

  const config = { key: p.key, title: p.title, presets: p.presets, defaultPreset: p.defaultPreset, sampleMonthly: p.sampleMonthly, sampleRate: p.sampleRate, sampleYears: p.sampleYears, goalTarget: p.goalTarget };
  const sampleMonths = p.sampleYears * 12;
  const sample = sipCompute(p.sampleMonthly, p.sampleRate, p.sampleYears);
  const sampleSchedule = sipSchedule(p.sampleMonthly, p.sampleRate, p.sampleYears);
  const sampleFirstYear = sampleSchedule[0];
  const sampleGoal = sipRequired(p.goalTarget, p.sampleRate, p.sampleYears);
  const sampleMonthlyRate = p.sampleRate / 1200;
  const sampleGrowth = Math.pow(1 + sampleMonthlyRate, sampleMonths);

  const presetOptions = p.presets.map(pr => `
    <option value="${e(pr.id)}"${pr.id === p.defaultPreset ? " selected" : ""}>${e(pr.label)} — ${fmtINR(pr.monthly)} a month at ${pr.rate}% over ${pr.years} years</option>
  `).join("");

  const compareRows = p.compareYears.map(y => {
    const r = sipCompute(p.compareMonthly, p.compareRate, y);
    return `
      <tr>
        <th scope="row">${y} years (${y * 12} months)</th>
        <td>${fmtINR(r.invested)}</td>
        <td>${fmtINR(r.value)}</td>
        <td>${fmtINR(r.gains)}</td>
      </tr>`;
  }).join("");

  const returnsRows = p.returnsRates.map(rate => {
    const r = sipCompute(p.returnsMonthly, rate, p.returnsYears);
    return `
      <tr>
        <th scope="row">${rate}% a year</th>
        <td>${fmtINR(r.value)}</td>
        <td>${fmtINR(r.gains)}</td>
      </tr>`;
  }).join("");

  const scheduleRows = sampleSchedule.map(row => `
      <tr>
        <th scope="row">Year ${row.year}</th>
        <td>${fmtINR(row.invested)}</td>
        <td>${fmtINR(row.gains)}</td>
        <td>${fmtINR(row.value)}</td>
      </tr>`).join("");

  return `<style>${css}${ageCss}${sipCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free SIP calculator</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Calculate your SIP →
              </a>
              <a href="#method" class="calc-link">How the SIP value is worked out ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>${fmtINR(sample.value)}</strong>
                <small>Estimated value on ${fmtINR(p.sampleMonthly)} a month at ${p.sampleRate}%</small>
              </div>
              <div>
                <strong>3 inputs</strong>
                <small>Amount, return, years</small>
              </div>
              <div>
                <strong>Market-linked</strong>
                <small>No guaranteed return</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Estimated, not guaranteed.</strong>
              Mutual fund returns are market-linked — the ${p.sampleRate}% is
              an assumption, and the value can fall below what you invest.
              Figures are before tax, exit load and fund expenses.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/">UPSC Age</a>
              <a href="/ibps-age-calculator/">IBPS Age</a>
              <a href="/rrb-age-calculator/">RRB Age</a>
              <a href="/emi-calculator/">EMI</a>
              <a href="/sip-calculator/" aria-current="page">SIP</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Calculate your SIP</h2>
              <span class="calc-pill" id="sip-pill">₹10,000 a month</span>
            </div>

            <p class="calc-small">Example figures are filled in. Replace them with your own plan.</p>

            <form id="sip-form" novalidate>
              <label class="field-label" for="preset">
                Starting point
                <span>Pick one to fill in typical figures, then edit any figure</span>
              </label>

              <select class="select-input" id="preset">
                ${presetOptions}
                <option value="custom">Custom figures</option>
              </select>

              <label class="field-label" for="monthly">
                Monthly SIP amount (₹)
                <span>The fixed amount you invest every month</span>
              </label>

              <input
                class="number-input"
                id="monthly"
                type="number"
                value="${p.sampleMonthly}"
                min="500"
                max="1000000"
                step="500"
                inputmode="numeric"
                aria-describedby="monthly-error"
              >
              <p class="calc-error" id="monthly-error" aria-live="polite"></p>

              <label class="field-label" for="rate">
                Expected annual return (%)
                <span>A planning assumption, not a forecast — 10–12% for equity, 6–7% for debt</span>
              </label>

              <input
                class="number-input"
                id="rate"
                type="number"
                value="${p.sampleRate}"
                min="0"
                max="30"
                step="0.1"
                inputmode="decimal"
                aria-describedby="rate-error"
              >
              <p class="calc-error" id="rate-error" aria-live="polite"></p>

              <label class="field-label" for="years">
                Tenure — years
                <span>1 to 40 years</span>
              </label>

              <input
                class="number-input"
                id="years"
                type="number"
                value="${p.sampleYears}"
                min="1"
                max="40"
                step="1"
                inputmode="numeric"
                aria-describedby="tenure-error"
              >
              <p class="calc-error" id="tenure-error" aria-live="polite"></p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Calculate my SIP →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR ESTIMATED MATURITY VALUE</span>
                <span>MONTHLY COMPOUNDING</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your estimated maturity value</h3>

                <div class="result-value">
                  <output id="answer" for="monthly">${fmtINR(sample.value)}</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="invested-val">${fmtINR(sample.invested)}</strong>
                  <small>INVESTED</small>
                </div>
                <div>
                  <strong id="gains-val">${fmtINR(sample.gains)}</strong>
                  <small>ESTIMATED GAINS</small>
                </div>
                <div>
                  <strong id="share-val">${Math.round(sample.gains / sample.value * 100)}%</strong>
                  <small>GAINS SHARE</small>
                </div>
              </div>

              <div class="split-bar" aria-hidden="true">
                <i class="split-invested" id="split-invested" style="width:${(sample.invested / sample.value * 100).toFixed(1)}%"></i><i class="split-gains" id="split-gains" style="width:${(sample.gains / sample.value * 100).toFixed(1)}%"></i>
              </div>
              <div class="split-legend">
                <span><i class="split-dot" style="background:#7fd1a8"></i><b id="split-invested-label">Invested ${fmtINR(sample.invested)} (${Math.round(sample.invested / sample.value * 100)}%)</b></span>
                <span><i class="split-dot" style="background:#ffb454"></i><b id="split-gains-label">Estimated gains ${fmtINR(sample.gains)} (${Math.round(sample.gains / sample.value * 100)}%)</b></span>
              </div>

              <div class="verdict verdict-ok" id="glance-box">
                <strong id="glance-title">Your SIP at a glance</strong>
                <span id="glance-text">Over ${fmtNum(p.sampleYears)} years you invest ${fmtINR(sample.invested)} and the estimate adds ${fmtINR(sample.gains)} of gains.</span>
              </div>

              <p class="working" id="working">
                FV = ${fmtINR(p.sampleMonthly)} × ((1 + ${sampleMonthlyRate.toFixed(7)})^${sampleMonths} − 1) ÷ ${sampleMonthlyRate.toFixed(7)} × (1 + ${sampleMonthlyRate.toFixed(7)}) = ${fmtINR(sample.value)}.
              </p>
              <p class="working" id="working-first-year">First year: ${fmtINR(sampleFirstYear.invested)} invested, ${fmtINR(sampleFirstYear.gains)} estimated gains — value ${fmtINR(sampleFirstYear.value)} after 12 instalments.</p>
              <p class="working" id="working-goal">To reach ${fmtINR(p.goalTarget)} in ${fmtNum(p.sampleYears)} years at ${p.sampleRate}% you would need ${fmtINR(sampleGoal.monthly)} a month.</p>
              <p class="working" id="working-note">Estimated, not guaranteed. Mutual fund returns are market-linked — the value can fall below what you invest, and the figures are before tax, exit load and fund expenses.</p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The value assumes the same return every month. Real market
                returns vary, and they can be negative for stretches — the
                estimate is a planning figure, not a forecast.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result">
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Calculate my SIP to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <section class="calc-section" id="schedule">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your growth, year by year</p>
          <h2>Year by year: invested vs value</h2>
          <p id="schedule-note">Year-by-year growth of your ${fmtNum(sampleMonths)} monthly instalments of ${fmtINR(p.sampleMonthly)}. Each instalment compounds from the month it is paid, so the earliest instalments do the most work.</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="schedule-note">
            <caption>Growth table — ${fmtINR(p.sampleMonthly)} a month at ${p.sampleRate}% over ${p.sampleYears} years.</caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Invested so far</th>
                <th scope="col">Estimated gains</th>
                <th scope="col">Estimated value</th>
              </tr>
            </thead>
            <tbody id="schedule-body">
              ${scheduleRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">Formula</a>
        <a href="#examples">Examples</a>
        <a href="#comparison">One SIP, three tenures</a>
        <a href="#returns">Returns table</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / THREE INPUTS</span>
            <h3>Amount, return, years</h3>
            <p>Three numbers decide the estimate. The amount is what you invest every month, the return is the annual rate you are assuming for planning, and the tenure is how many years you keep investing.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / COMPOUNDING MONTHLY</span>
            <h3>Every instalment earns from its month</h3>
            <p>Each month's instalment starts compounding the month it is paid. That is why the earliest instalments do the most work — and why starting five years earlier matters more than investing a little more each month.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / AN ASSUMPTION, NOT A PROMISE</span>
            <h3>The return is a planning input</h3>
            <p>The calculator applies one constant return to show a possible outcome. Real market returns vary year to year and can be negative for stretches — the value can end below what you invested, especially over short periods.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From monthly amount to estimated value</h2>
          <p>
            Start with a monthly amount you can keep paying through a bad
            year as well as a good one. Then read the value together with
            the split and the growth table.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>The SIP formula</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>The standard SIP future-value formula, monthly compounding</small>
          FV = P × ((1 + i)^n − 1) ÷ i × (1 + i)
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Find the monthly rate
            <strong>i = ${sampleMonthlyRate.toFixed(7)}</strong>
            <span>${p.sampleRate}% a year ÷ 12 ÷ 100 = ${sampleMonthlyRate.toFixed(7)} a month.</span>
          </div>

          <div class="math-step">
            2. Raise it to the tenure
            <strong>(1 + i)^${sampleMonths} = ${sampleGrowth.toFixed(4)}</strong>
            <span>Compounding the monthly rate over ${sampleMonths} months gives ${sampleGrowth.toFixed(4)}.</span>
          </div>

          <div class="math-step">
            3. Apply the formula
            <strong>FV = ${fmtINR(sample.value)}</strong>
            <span>${fmtINR(p.sampleMonthly)} × (${sampleGrowth.toFixed(4)} − 1) ÷ ${sampleMonthlyRate.toFixed(7)} × (1 + ${sampleMonthlyRate.toFixed(7)}) = ${fmtINR(sample.value)}.</span>
          </div>
        </div>

        <div class="callout">
          <strong>${fmtINR(sampleGoal.monthly)} a month at ${p.sampleRate}% reaches ${fmtINR(p.goalTarget)} in ${fmtNum(p.sampleYears)} years.</strong>
          Work backwards from a goal instead of forwards from an amount: the calculator shows the monthly SIP any target needs at your assumed return and tenure. Raising ₹10,000 a month by 10% every year — a step-up SIP — makes ₹33,74,326 in 10 years at 12%, on ₹19,12,491 invested, against ₹23,23,391 without the step-up.
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>Three SIPs, three outcomes</h2>
          <p>
            Select any example to load it into the calculator and check the
            working for yourself.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const r = sipCompute(story.monthly, story.rate, story.years);
            const sched = sipSchedule(story.monthly, story.rate, story.years);
            const first = sched[0];
            return `
            <article class="card">
              <span class="number-label">${fmtINR(story.monthly)} a month · ${story.rate}% · ${story.years} years</span>
              <h3>${e(story.title)}</h3>
              <p>${e(story.body)}</p>
              <p class="result-preview">
                Value ${fmtINR(r.value)} · Invested ${fmtINR(r.invested)} · First year ${fmtINR(first.invested)} invested, ${fmtINR(first.gains)} gains
              </p>
              <button class="calc-btn" type="button" data-scenario data-preset="${e(story.preset)}" data-monthly="${story.monthly}" data-rate="${story.rate}" data-years="${story.years}">Try these figures</button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="comparison">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">${e(p.exampleTitle)}</p>
          <h2>One SIP, three tenures</h2>
          <p>${e(p.exampleNote)}</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="comparison-note">
            <caption>${fmtINR(p.compareMonthly)} a month at ${p.compareRate}% a year.</caption>
            <thead>
              <tr>
                <th scope="col">Tenure</th>
                <th scope="col">Invested</th>
                <th scope="col">Estimated value</th>
                <th scope="col">Estimated gains</th>
              </tr>
            </thead>
            <tbody>
              ${compareRows}
            </tbody>
          </table>
          <p class="calc-small" id="comparison-note">${e(p.exampleConclusion)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="returns">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">${e(p.returnsTitle)}</p>
          <h2>What the return assumption does</h2>
          <p>${e(p.returnsNote)}</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="returns-note">
            <caption>${fmtINR(p.returnsMonthly)} a month for ${p.returnsYears} years, at four assumed returns.</caption>
            <thead>
              <tr>
                <th scope="col">Assumed return</th>
                <th scope="col">Estimated value</th>
                <th scope="col">Estimated gains</th>
              </tr>
            </thead>
            <tbody>
              ${returnsRows}
            </tbody>
          </table>
          <p class="calc-small" id="returns-note">${e(p.returnsConclusion)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Common mistakes</p>
          <h2>Four ways to read a SIP wrong</h2>
          <p>
            The SIP formula is short, but four readings trip investors up.
            Each one can make a risky plan look safe.
          </p>
        </div>

        <div class="grid4">
          <article class="card">
            <span class="number-label">01 / THE GUARANTEED RETURN</span>
            <h3>Treating 12% as a promise</h3>
            <p>Twelve percent is a planning assumption, not a rate any fund guarantees. Equity returns vary year to year, and a bad stretch early on can leave the value below what you invested. Plan on the lower end of the range.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / STOPPING WHEN MARKETS FALL</span>
            <h3>Stopping the SIP in a fall</h3>
            <p>A falling market buys more units for the same monthly amount — that is the whole point of rupee-cost averaging. Stopping when prices fall locks in the loss of the cheap units you would have bought.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / COMPARING WITH AN FD</span>
            <h3>Comparing a SIP with a fixed deposit</h3>
            <p>An FD's 7% is fixed and guaranteed; a SIP's 12% is an assumption about a market-linked return. Comparing the two headline numbers hides the risk — compare a SIP with other market-linked options, and an FD with other fixed options.</p>
          </article>

          <article class="card">
            <span class="number-label">04 / FORGETTING TAX AND INFLATION</span>
            <h3>Forgetting tax and inflation</h3>
            <p>The ₹50,45,760 estimate is before tax — equity gains are taxed when you sell — and it is in future rupees, which buy less than today's. A step-up SIP, raising the amount as your income grows, is the usual answer to both.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your questions, answered</p>
          <h2>SIP calculator FAQs</h2>
        </div>

        <div class="faq-list">
          ${p.faq.map(([q, a]) => `
          <details class="calc-faq">
            <summary>${e(q)}</summary>
            <p>${e(a)}</p>
          </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="method-box">
          <h2>About the method</h2>
          <p>
            This page uses the standard SIP future-value formula with monthly
            compounding: FV = P × ((1 + i)^n − 1) ÷ i × (1 + i), with i the
            monthly rate and n the number of months. Instalments are counted
            from the start of each month, the convention Groww, ET Money and
            ClearTax use; a calculator that counts them from the end of the
            month shows a slightly lower value for the same inputs. The
            return is assumed constant for the whole tenure. Values are
            rounded to the nearest rupee for display. The figures are
            estimates for planning, not a forecast and not investment
            advice — no fund or regulator endorses this tool.
          </p>
          <p>
            The tax notes are the Finance Act 2024 rules from 23 July 2024:
            on equity funds, 20% short-term gains on units held up to
            12 months and 12.5% long-term gains above ₹1.25 lakh in a year,
            plus 4% cess; debt funds bought from 1 April 2023 are taxed at
            the investor's slab rate. The step-up illustration — ₹10,000 a
            month rising 10% a year making ₹33,74,326 in 10 years at 12% —
            is computed on the same formula. Mutual fund investments are
            subject to market risk; read the scheme documents before
            investing.
          </p>
          <p>
            Cross-checked 11 November 2026 against the ranking SIP
            calculators: the ₹10,000-a-month, 12%, 15-year figure of
            ₹50,45,760, the 10-year figure of ₹23,23,391 and the ₹1-crore
            goal SIP of ₹19,819 a month agree with
            <a href="https://finlyzers.com/calculators/sip-calculator" rel="nofollow noopener" target="_blank">finlyzers.com</a>,
            <a href="https://www.ap7am.com/calculators/sip-calculator" rel="nofollow noopener" target="_blank">ap7am.com</a> and
            <a href="https://www.toolsfiesta.com/finance/sip-calculator" rel="nofollow noopener" target="_blank">toolsfiesta.com</a>.
            See also
            <a href="https://www.amfiindia.com/" rel="nofollow noopener" target="_blank">amfiindia.com</a>
            for the market-risk disclosure.
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section cta">
      <div class="calc-wrap">
        <div class="section-head">
          <h2>Check another plan before you start</h2>
          <p>
            Try a different amount, return or tenure — or run the same check
            with the related tools for your other plans.
          </p>
        </div>

        <div class="others-row">
          ${others.map(item => `<a href="/${e(item.slug)}/">${e(item.title)}</a>`).join("")}
        </div>
      </div>
    </section>
  </div>

  <script type="application/ld+json">${safeJSON({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
  })}</script>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}

export function bmiClient(c) {
  const $ = id => document.getElementById(id);

  function bmiCategory(bmi) {
    const b = Number(bmi);
    if (!(b > 0) || !Number.isFinite(b)) return null;
    if (b < 18.5) return { key: "underweight", label: "Underweight", note: "Below the healthy range. A low BMI can mean too little body fat or muscle for your height — if you have lost weight without trying, or you feel unwell, talk to a doctor." };
    if (b < 25) return { key: "healthy", label: "Healthy weight", note: "In the healthy range. A balanced diet and regular activity are the way to stay here." };
    if (b < 30) return { key: "overweight", label: "Overweight", note: "Above the healthy range. Even a small, steady weight loss lowers the risk of type 2 diabetes and heart disease — talk to a doctor before starting a diet." };
    return { key: "obese", label: "Obese", note: "Well above the healthy range. A BMI of 30 or more is linked to a higher risk of type 2 diabetes, heart disease and joint problems — talk to a doctor about a plan." };
  }

  function bmiHealthyRange(heightCm) {
    const h = Number(heightCm) / 100;
    if (!(h > 0) || !Number.isFinite(h)) return null;
    return { low: 18.5 * h * h, high: 24.9 * h * h, heightCm: Number(heightCm) };
  }

  function bmiCompute(heightCm, weightKg) {
    const h = Number(heightCm) / 100;
    const w = Number(weightKg);
    if (!(h > 0) || !(w > 0) || !Number.isFinite(h) || !Number.isFinite(w)) return null;
    const bmi = w / (h * h);
    const category = bmiCategory(bmi);
    const range = bmiHealthyRange(heightCm);
    let toHealthy = { direction: "within", kg: 0 };
    if (bmi < 18.5) toHealthy = { direction: "gain", kg: range.low - w };
    else if (bmi > 24.9) toHealthy = { direction: "lose", kg: w - range.high };
    return { bmi, bmi1dp: Math.round(bmi * 10) / 10, category, healthyLow: range.low, healthyHigh: range.high, heightCm: Number(heightCm), weightKg: w, toHealthy };
  }

  function bmiFromFeetInches(feet, inches, weightKg) {
    const ft = Number(feet);
    const inch = Number(inches);
    const w = Number(weightKg);
    if (!Number.isFinite(ft) || !Number.isFinite(inch) || !(w > 0)) return null;
    const totalInches = ft * 12 + inch;
    if (!(totalInches > 0)) return null;
    const heightCm = totalInches * 2.54;
    const result = bmiCompute(heightCm, w);
    if (!result) return null;
    result.heightCm = heightCm;
    result.heightFeet = ft;
    result.heightInches = inch;
    return result;
  }

  const presetSelect = $("preset");
  const unitSelect = $("height-unit");
  const bmiPill = $("bmi-pill");
  const heightCmInput = $("height-cm");
  const heightFtInput = $("height-ft");
  const heightInInput = $("height-in");
  const weightInput = $("weight");
  const heightCmError = $("height-cm-error");
  const heightFtError = $("height-ft-error");
  const heightInError = $("height-in-error");
  const weightError = $("weight-error");
  const cmFields = $("unit-cm-fields");
  const ftinFields = $("unit-ftin-fields");
  const output = $("answer");
  const categoryVal = $("category-val");
  const rangeVal = $("range-val");
  const deltaVal = $("delta-val");
  const scaleMarker = $("bmi-scale-marker");
  const scaleLabel = $("bmi-scale-label");
  const glanceBox = $("glance-box");
  const glanceTitle = $("glance-title");
  const glanceText = $("glance-text");
  const working = $("working");
  const workingRange = $("working-range");
  const workingNote = $("working-note");
  const status = $("copy-status");
  const copyBox = $("copy-text");
  const copyButton = $("copy-result");
  const history = [];
  let summary = "";

  const fmt1dp = n => (Math.round(n * 10) / 10).toFixed(1);
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);
  const presetRec = id => {
    const f = c.presets.find(x => x.id === id);
    return f || c.presets[0];
  };

  function clearResult() {
    output.textContent = "—";
    categoryVal.textContent = "—";
    rangeVal.textContent = "—";
    deltaVal.textContent = "—";
    scaleMarker.style.left = "0%";
    scaleLabel.textContent = "Enter your height and weight to see where you fall on the scale.";
    glanceBox.className = "verdict";
    glanceTitle.textContent = "Your BMI at a glance";
    glanceText.textContent = "Enter your height and weight to see your BMI, its category and the healthy weight range for your height.";
    working.textContent = "Enter your height and weight to see the working.";
    workingRange.textContent = "";
    workingNote.textContent = "";
    status.textContent = "";
    copyBox.hidden = true;
    copyBox.value = "";
    copyButton.disabled = true;
    summary = "";
  }

  function paint(showEmptyError = false) {
    const isMetric = unitSelect.value === "cm";
    cmFields.hidden = !isMetric;
    ftinFields.hidden = isMetric;
    bmiPill.textContent = presetSelect.value === "custom"
      ? "Custom figures"
      : presetRec(presetSelect.value).label;

    const weightRaw = weightInput.value;
    const weightNum = weightRaw === "" ? NaN : Number(weightRaw);
    let weightMsg = "";
    if (weightRaw === "") {
      if (showEmptyError) weightMsg = "Enter your weight.";
    } else if (!Number.isFinite(weightNum) || weightNum < 20 || weightNum > 300) {
      weightMsg = "Enter a weight from 20 kg to 300 kg.";
    }
    weightError.textContent = weightMsg;
    weightInput.setAttribute("aria-invalid", String(weightMsg !== ""));

    let result = null;
    let heightCm = NaN;
    let heightMsg = "";
    let heightFtMsg = "";
    let heightInMsg = "";
    if (isMetric) {
      const hRaw = heightCmInput.value;
      const hNum = hRaw === "" ? NaN : Number(hRaw);
      if (hRaw === "") {
        if (showEmptyError) heightMsg = "Enter your height.";
      } else if (!Number.isFinite(hNum) || hNum < 100 || hNum > 220) {
        heightMsg = "Enter a height from 100 cm to 220 cm.";
      }
      heightCmError.textContent = heightMsg;
      heightCmInput.setAttribute("aria-invalid", String(heightMsg !== ""));
      heightCm = hNum;
    } else {
      const ftRaw = heightFtInput.value;
      const inRaw = heightInInput.value;
      const ftNum = ftRaw === "" ? NaN : Number(ftRaw);
      const inNum = inRaw === "" ? NaN : Number(inRaw);
      if (ftRaw === "") {
        if (showEmptyError) heightFtMsg = "Enter the feet.";
      } else if (!Number.isInteger(ftNum) || ftNum < 3 || ftNum > 7) {
        heightFtMsg = "Enter whole feet from 3 to 7.";
      }
      if (inRaw === "") {
        if (showEmptyError) heightInMsg = "Enter the inches.";
      } else if (!Number.isInteger(inNum) || inNum < 0 || inNum > 11) {
        heightInMsg = "Enter whole inches from 0 to 11.";
      }
      heightFtError.textContent = heightFtMsg;
      heightInError.textContent = heightInMsg;
      heightFtInput.setAttribute("aria-invalid", String(heightFtMsg !== ""));
      heightInInput.setAttribute("aria-invalid", String(heightInMsg !== ""));
      if (heightFtMsg === "" && heightInMsg === "" && ftRaw !== "" && inRaw !== "") {
        result = bmiFromFeetInches(ftNum, inNum, weightNum);
        heightCm = result ? result.heightCm : NaN;
      }
    }

    const valid = weightMsg === "" && heightMsg === "" && heightFtMsg === "" && heightInMsg === ""
      && weightRaw !== ""
      && (isMetric ? heightCmInput.value !== "" : heightFtInput.value !== "" && heightInInput.value !== "");
    if (!valid) {
      clearResult();
      return false;
    }

    if (isMetric) result = bmiCompute(heightCm, weightNum);
    if (!result) {
      clearResult();
      return false;
    }

    const heightM = result.heightCm / 100;
    const heightSq = heightM * heightM;
    output.textContent = fmt1dp(result.bmi);
    categoryVal.textContent = result.category.label;
    rangeVal.textContent = fmt1dp(result.healthyLow) + " – " + fmt1dp(result.healthyHigh) + " kg";
    deltaVal.textContent = result.toHealthy.direction === "within"
      ? "Inside the healthy range"
      : result.toHealthy.direction === "gain"
        ? fmt1dp(result.toHealthy.kg) + " kg below the healthy range"
        : fmt1dp(result.toHealthy.kg) + " kg above the healthy range";
    const markerPct = Math.min(100, Math.max(0, (result.bmi - 15) / 25 * 100));
    scaleMarker.style.left = markerPct.toFixed(1) + "%";
    scaleLabel.textContent = "BMI " + fmt1dp(result.bmi) + " — " + result.category.label + " (scale 15 to 40).";

    glanceBox.className = "verdict " + (result.category.key === "healthy" ? "verdict-ok" : "verdict-warn");
    glanceTitle.textContent = "Your BMI at a glance";
    glanceText.textContent = result.category.note;

    working.textContent = "BMI = " + fmtNum(result.weightKg) + " ÷ (" + heightM.toFixed(2) + " × " + heightM.toFixed(2) + ") = " + fmtNum(result.weightKg) + " ÷ " + heightSq.toFixed(2) + " = " + fmt1dp(result.bmi) + ".";
    workingRange.textContent = "Healthy weight for " + fmt1dp(result.heightCm) + " cm: 18.5 × " + heightSq.toFixed(2) + " = " + fmt1dp(result.healthyLow) + " kg to 24.9 × " + heightSq.toFixed(2) + " = " + fmt1dp(result.healthyHigh) + " kg.";
    workingNote.textContent = "BMI is a screening tool, not a diagnosis. It does not measure body fat directly, and it does not suit children, pregnant women, very muscular people or older adults.";

    copyButton.disabled = false;
    summary =
      "VisitBest | BMI Calculator" +
      "\nHeight: " + fmt1dp(result.heightCm) + " cm" +
      "\nWeight: " + fmtNum(result.weightKg) + " kg" +
      "\nBMI: " + fmt1dp(result.bmi) +
      "\nCategory: " + result.category.label +
      "\nHealthy weight range: " + fmt1dp(result.healthyLow) + " – " + fmt1dp(result.healthyHigh) + " kg";
    return true;
  }

  function scenarioKey() {
    return [presetSelect.value, unitSelect.value, heightCmInput.value, heightFtInput.value, heightInInput.value, weightInput.value].join("|");
  }

  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-empty").hidden = history.length > 0;
    $("clear-history").disabled = history.length === 0;
    history.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      const result = bmiCompute(item.heightCm, item.weightKg);
      button.textContent = fmt1dp(item.heightCm) + " cm · " + fmtNum(item.weightKg) + " kg → BMI " + (result ? fmt1dp(result.bmi) : "—") + (result ? " (" + result.category.label + ")" : "");
      button.setAttribute("aria-label", "Load check for " + fmt1dp(item.heightCm) + " centimetres and " + fmtNum(item.weightKg) + " kilograms");
      button.addEventListener("click", () => {
        presetSelect.value = "custom";
        unitSelect.value = "cm";
        heightCmInput.value = String(item.heightCm);
        weightInput.value = String(item.weightKg);
        paint();
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      });
      list.appendChild(button);
    });
  }

  function pushHistory() {
    const key = scenarioKey();
    if (history.some(item => item.key === key)) return;
    const heightCm = unitSelect.value === "cm"
      ? Number(heightCmInput.value)
      : (Number(heightFtInput.value) * 12 + Number(heightInInput.value)) * 2.54;
    history.unshift({ key, heightCm, weightKg: Number(weightInput.value) });
    if (history.length > 5) history.pop();
    renderHistory();
  }

  function scenarioButton(button) {
    return () => {
      presetSelect.value = button.dataset.preset || "custom";
      unitSelect.value = "cm";
      heightCmInput.value = button.dataset.heightCm || "";
      weightInput.value = button.dataset.weight || "";
      paint(true);
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    };
  }

  document.querySelectorAll("[data-scenario]").forEach(button => {
    button.addEventListener("click", scenarioButton(button));
  });

  document.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });
  });

  presetSelect.addEventListener("change", () => {
    if (presetSelect.value === "custom") return;
    const rec = presetRec(presetSelect.value);
    unitSelect.value = "cm";
    heightCmInput.value = String(rec.heightCm);
    weightInput.value = String(rec.weightKg);
    paint();
  });

  unitSelect.addEventListener("change", () => {
    presetSelect.value = "custom";
    if (unitSelect.value === "ftin") {
      const cm = Number(heightCmInput.value);
      if (Number.isFinite(cm) && cm > 0) {
        const totalIn = Math.round(cm / 2.54);
        heightFtInput.value = String(Math.floor(totalIn / 12));
        heightInInput.value = String(totalIn % 12);
      }
    } else {
      const totalIn = Number(heightFtInput.value) * 12 + Number(heightInInput.value);
      if (Number.isFinite(totalIn) && totalIn > 0) {
        heightCmInput.value = String(Math.round(totalIn * 2.54 * 10) / 10);
      }
    }
    paint();
  });

  ["input", "change"].forEach(evt => {
    heightCmInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    heightFtInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    heightInInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
    weightInput.addEventListener(evt, () => { presetSelect.value = "custom"; paint(); });
  });

  $("bmi-form").addEventListener("submit", event => {
    event.preventDefault();
    if (paint(true)) pushHistory();
  });

  $("reset").addEventListener("click", () => {
    const rec = presetRec(c.defaultPreset);
    presetSelect.value = c.defaultPreset;
    unitSelect.value = "cm";
    heightCmInput.value = String(rec.heightCm);
    weightInput.value = String(rec.weightKg);
    clearResult();
    paint();
  });

  $("clear-history").addEventListener("click", () => {
    history.length = 0;
    renderHistory();
  });

  copyButton.addEventListener("click", async () => {
    if (!summary) return;
    copyBox.hidden = false;
    copyBox.value = summary;
    copyBox.select();
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = "Copied.";
    } catch (err) {
      status.textContent = "Copy the text below.";
    }
  });

  paint();
}

export function renderBmiCalculatorBody(p, others, css, clientSource) {
  const e = escapeHTML;
  const safeJSON = v => JSON.stringify(v).replace(/</g, "\\u003c");
  const fmt1dp = n => (Math.round(n * 10) / 10).toFixed(1);
  const fmtNum = n => new Intl.NumberFormat("en-GB").format(n);

  const config = { key: p.key, title: p.title, presets: p.presets, defaultPreset: p.defaultPreset, sampleHeightCm: p.sampleHeightCm, sampleWeightKg: p.sampleWeightKg };
  const sample = bmiCompute(p.sampleHeightCm, p.sampleWeightKg);
  const sampleHeightM = p.sampleHeightCm / 100;
  const sampleHeightSq = sampleHeightM * sampleHeightM;
  const sampleMarkerPct = Math.min(100, Math.max(0, (sample.bmi - 15) / 25 * 100));

  const presetOptions = p.presets.map(pr => `
    <option value="${e(pr.id)}"${pr.id === p.defaultPreset ? " selected" : ""}>${e(pr.label)} — ${pr.heightCm} cm, ${pr.weightKg} kg</option>
  `).join("");

  const categoryRows = p.categories.map(([range, label, note]) => `
      <tr>
        <th scope="row">${e(range)}</th>
        <td>${e(label)}</td>
        <td>${e(note)}</td>
      </tr>`).join("");

  const rangeRows = p.rangeHeights.map(h => {
    const r = bmiHealthyRange(h);
    return `
      <tr>
        <th scope="row">${h} cm</th>
        <td>${fmt1dp(r.low)} kg</td>
        <td>${fmt1dp(r.high)} kg</td>
      </tr>`;
  }).join("");

  return `<style>${css}${ageCss}${bmiCss}</style>
  <div class="calc-page">
    <div class="calc-hero">
      <div class="calc-wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span class="sep">/</span>
          <span>${e(p.title)}</span>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Free BMI calculator</p>
            <h1 class="calc-title">${e(p.title)}</h1>
            <p class="calc-lead">${e(p.lead)}</p>

            <div class="benefits">
              <span>✓ Free to use</span>
              <span>✓ No signup</span>
              <span>✓ Browser calculation</span>
            </div>

            <div class="hero-links">
              <a class="calc-btn calc-btn-primary" href="#calculator">
                Calculate your BMI →
              </a>
              <a href="#method" class="calc-link">How BMI is worked out ↓</a>
            </div>

            <div class="facts">
              <div>
                <strong>${fmt1dp(sample.bmi)}</strong>
                <small>BMI for ${p.sampleHeightCm} cm and ${p.sampleWeightKg} kg — ${sample.category.label}</small>
              </div>
              <div>
                <strong>2 inputs</strong>
                <small>Height and weight</small>
              </div>
              <div>
                <strong>Screening tool</strong>
                <small>Not a diagnosis</small>
              </div>
            </div>

            <p class="scope-note">
              <strong>Screening tool, not a diagnosis.</strong>
              BMI does not measure body fat directly, and it does not suit
              children, pregnant women, very muscular people or older
              adults. Talk to a doctor before acting on a result.
            </p>
          </div>

          <section class="calculator" id="calculator" aria-labelledby="tool-heading">
            <nav class="tool-switch" aria-label="Choose a calculator">
              <a href="/wam-to-gpa-calculator/">WAM → GPA</a>
              <a href="/gpa-to-wam-calculator/">GPA → WAM</a>
              <a href="/ssc-age-calculator/">SSC Age</a>
              <a href="/cgpa-to-percentage-calculator/">CGPA → %</a>
              <a href="/age-calculator/">Age</a>
              <a href="/upsc-age-calculator/">UPSC Age</a>
              <a href="/ibps-age-calculator/">IBPS Age</a>
              <a href="/rrb-age-calculator/">RRB Age</a>
              <a href="/emi-calculator/">EMI</a>
              <a href="/sip-calculator/">SIP</a>
              <a href="/bmi-calculator/" aria-current="page">BMI</a>
            </nav>

            <div class="tool-title">
              <h2 id="tool-heading">Calculate your BMI</h2>
              <span class="calc-pill" id="bmi-pill">${p.sampleHeightCm} cm · ${p.sampleWeightKg} kg</span>
            </div>

            <p class="calc-small">Example figures are filled in. Replace them with your own measurements.</p>

            <form id="bmi-form" novalidate>
              <label class="field-label" for="preset">
                Starting point
                <span>Pick one to fill in typical figures, then edit any figure</span>
              </label>

              <select class="select-input" id="preset">
                ${presetOptions}
                <option value="custom">Custom figures</option>
              </select>

              <label class="field-label" for="height-unit">
                Height unit
                <span>Centimetres, or feet and inches</span>
              </label>

              <select class="select-input" id="height-unit">
                <option value="cm" selected>Centimetres (cm)</option>
                <option value="ftin">Feet and inches (ft/in)</option>
              </select>

              <div id="unit-cm-fields">
                <label class="field-label" for="height-cm">
                  Height (cm)
                  <span>Without shoes, from 100 cm to 220 cm</span>
                </label>

                <input
                  class="number-input"
                  id="height-cm"
                  type="number"
                  value="${p.sampleHeightCm}"
                  min="100"
                  max="220"
                  step="0.1"
                  inputmode="decimal"
                  aria-describedby="height-cm-error"
                >
                <p class="calc-error" id="height-cm-error" aria-live="polite"></p>
              </div>

              <div id="unit-ftin-fields" hidden>
                <div class="unit-row">
                  <div>
                    <label class="field-label" for="height-ft">
                      Feet
                      <span>3 to 7 ft</span>
                    </label>

                    <input
                      class="number-input"
                      id="height-ft"
                      type="number"
                      value="5"
                      min="3"
                      max="7"
                      step="1"
                      inputmode="numeric"
                      aria-describedby="height-ft-error"
                    >
                    <p class="calc-error" id="height-ft-error" aria-live="polite"></p>
                  </div>
                  <div>
                    <label class="field-label" for="height-in">
                      Inches
                      <span>0 to 11 in</span>
                    </label>

                    <input
                      class="number-input"
                      id="height-in"
                      type="number"
                      value="7"
                      min="0"
                      max="11"
                      step="1"
                      inputmode="numeric"
                      aria-describedby="height-in-error"
                    >
                    <p class="calc-error" id="height-in-error" aria-live="polite"></p>
                  </div>
                </div>
              </div>

              <label class="field-label" for="weight">
                Weight (kg)
                <span>From 20 kg to 300 kg</span>
              </label>

              <input
                class="number-input"
                id="weight"
                type="number"
                value="${p.sampleWeightKg}"
                min="20"
                max="300"
                step="0.1"
                inputmode="decimal"
                aria-describedby="weight-error"
              >
              <p class="calc-error" id="weight-error" aria-live="polite"></p>

              <div class="actions" style="margin-top:18px">
                <button class="calc-btn calc-btn-primary" type="submit">
                  Calculate my BMI →
                </button>
                <button class="calc-btn" id="reset" type="button">Reset</button>
              </div>

              <noscript>
                <p class="calc-error">
                  Enable JavaScript to calculate. The worked examples and the method below remain available.
                </p>
              </noscript>
            </form>

            <section
              class="result"
              id="result"
              tabindex="-1"
              aria-labelledby="result-heading"
            >
              <div class="result-tag">
                <span>YOUR BODY MASS INDEX</span>
                <span>WHO ADULT CATEGORIES</span>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <h3 id="result-heading">Your BMI</h3>

                <div class="result-value">
                  <output id="answer" for="height-cm">${fmt1dp(sample.bmi)}</output>
                </div>
              </div>

              <div class="age-breakdown">
                <div>
                  <strong id="category-val">${sample.category.label}</strong>
                  <small>CATEGORY</small>
                </div>
                <div>
                  <strong id="range-val">${fmt1dp(sample.healthyLow)} – ${fmt1dp(sample.healthyHigh)} kg</strong>
                  <small>HEALTHY WEIGHT FOR YOUR HEIGHT</small>
                </div>
                <div>
                  <strong id="delta-val">Inside the healthy range</strong>
                  <small>DISTANCE FROM HEALTHY RANGE</small>
                </div>
              </div>

              <div class="bmi-scale" aria-hidden="true">
                <i class="bmi-under" style="width:14%"></i><i class="bmi-healthy" style="width:26%"></i><i class="bmi-over" style="width:20%"></i><i class="bmi-obese" style="width:40%"></i>
                <span class="bmi-marker" id="bmi-scale-marker" style="left:${sampleMarkerPct.toFixed(1)}%"></span>
              </div>
              <div class="bmi-scale-labels" aria-hidden="true">
                <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
              </div>
              <p class="calc-small" id="bmi-scale-label" style="color:#c8dce6">BMI ${fmt1dp(sample.bmi)} — ${sample.category.label} (scale 15 to 40).</p>

              <div class="verdict verdict-ok" id="glance-box">
                <strong id="glance-title">Your BMI at a glance</strong>
                <span id="glance-text">${e(sample.category.note)}</span>
              </div>

              <p class="working" id="working">
                BMI = ${fmtNum(p.sampleWeightKg)} ÷ (${sampleHeightM.toFixed(2)} × ${sampleHeightM.toFixed(2)}) = ${fmtNum(p.sampleWeightKg)} ÷ ${sampleHeightSq.toFixed(2)} = ${fmt1dp(sample.bmi)}.
              </p>
              <p class="working" id="working-range">Healthy weight for ${fmtNum(p.sampleHeightCm)} cm: 18.5 × ${sampleHeightSq.toFixed(2)} = ${fmt1dp(sample.healthyLow)} kg to 24.9 × ${sampleHeightSq.toFixed(2)} = ${fmt1dp(sample.healthyHigh)} kg.</p>
              <p class="working" id="working-note">BMI is a screening tool, not a diagnosis. It does not measure body fat directly, and it does not suit children, pregnant women, very muscular people or older adults.</p>

              <p class="calc-small" style="color:#c8dce6;margin-top:14px">
                The categories are the World Health Organization's adult
                classification. For Indian readers, lower cut-offs apply —
                see the note below the category table.
              </p>

              <div class="result-actions">
                <button class="calc-btn copy-btn" type="button" id="copy-result">
                  Copy result
                </button>
                <span class="calc-status" id="copy-status" role="status"></span>
              </div>

              <textarea
                class="copy-box"
                id="copy-text"
                aria-label="Summary for manual copying"
                readonly
                hidden
              ></textarea>
            </section>

            <div class="history">
              <div class="history-head">
                <span>Recent checks · this session</span>
                <button class="quiet" type="button" id="clear-history" disabled>
                  Clear history
                </button>
              </div>

              <p class="calc-small" id="history-empty">
                Select Calculate my BMI to keep up to five checks while this page is open.
              </p>

              <div class="history-list" id="history-list"></div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <nav class="jump" aria-label="On this page">
      <div class="calc-wrap jump-row">
        <a href="#overview">Overview</a>
        <a href="#steps">How to use</a>
        <a href="#method">Formula</a>
        <a href="#examples">Examples</a>
        <a href="#categories">Categories</a>
        <a href="#range-table">Healthy weights</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQs</a>
      </div>
    </nav>

    <section class="calc-section" id="overview">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Understand the result</p>
          <h2>${e(p.overviewTitle)}</h2>
          <p>${e(p.overview)}</p>
        </div>

        <div class="grid3">
          <article class="card">
            <span class="number-label">01 / TWO MEASUREMENTS</span>
            <h3>Height and weight</h3>
            <p>Two numbers decide the result. Height goes in as metres, squared, and weight as kilograms. A centimetre or two of height makes a visible difference, so measure rather than guess.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / FOUR CATEGORIES</span>
            <h3>Underweight to obese</h3>
            <p>The World Health Organization sorts adult BMIs into underweight, healthy weight, overweight and obese, with obesity split into three classes. The bands are the same for men and women and for all adult ages.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / A SCREEN, NOT A VERDICT</span>
            <h3>BMI flags, it does not diagnose</h3>
            <p>BMI cannot tell muscle from fat, and it says nothing about where fat sits. A result outside the healthy range is a prompt to talk to a doctor, not a diagnosis on its own.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="steps">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2>From height and weight to BMI</h2>
          <p>
            Measure in the morning, before eating, on the same scales each
            time. Then read the BMI together with the category and the
            healthy weight range for your height.
          </p>
        </div>

        <div class="grid4">
          ${p.steps.map(([title, body], i) => `
            <article class="step">
              <span class="step-index">0${i + 1}</span>
              <h3>${e(title)}</h3>
              <p>${e(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="method">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">The calculation, explained</p>
          <h2>The BMI formula</h2>
          <p>${e(p.modelNote)}</p>
        </div>

        <div class="formula-banner">
          <small>The World Health Organization's BMI formula</small>
          BMI = weight (kg) ÷ height (m)²
        </div>

        <div class="grid3">
          <div class="math-step">
            1. Convert height to metres
            <strong>170 cm = ${sampleHeightM.toFixed(2)} m</strong>
            <span>Divide the height in centimetres by 100.</span>
          </div>

          <div class="math-step">
            2. Square the height
            <strong>${sampleHeightM.toFixed(2)} × ${sampleHeightM.toFixed(2)} = ${sampleHeightSq.toFixed(2)}</strong>
            <span>Multiply the height in metres by itself.</span>
          </div>

          <div class="math-step">
            3. Divide the weight by it
            <strong>${fmtNum(p.sampleWeightKg)} ÷ ${sampleHeightSq.toFixed(2)} = ${fmt1dp(sample.bmi)}</strong>
            <span>The result is the BMI, shown to one decimal place.</span>
          </div>
        </div>

        <div class="callout">
          <strong>${e(p.asianTitle)}</strong>
          ${e(p.asianNote)}
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="examples">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Worked examples</p>
          <h2>Three BMIs, three categories</h2>
          <p>
            Select any example to load it into the calculator and check the
            working for yourself.
          </p>
        </div>

        <div class="grid3">
          ${p.stories.map(story => {
            const r = bmiCompute(story.heightCm, story.weightKg);
            return `
            <article class="card">
              <span class="number-label">${story.heightCm} cm · ${story.weightKg} kg</span>
              <h3>${e(story.title)}</h3>
              <p>${e(story.body)}</p>
              <p class="result-preview">
                BMI ${fmt1dp(r.bmi)} · ${r.category.label} · Healthy range ${fmt1dp(r.healthyLow)} – ${fmt1dp(r.healthyHigh)} kg
              </p>
              <button class="calc-btn" type="button" data-scenario${story.preset ? ` data-preset="${e(story.preset)}"` : ""} data-height-cm="${story.heightCm}" data-weight="${story.weightKg}">Try these figures</button>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="categories">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">WHO adult BMI classification</p>
          <h2>BMI categories</h2>
          <p>The World Health Organization's adult classification, from the 1995 Technical Report Series No. 854. The bands are age-independent for adults and the same for both genders.</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="categories-note">
            <caption>WHO BMI categories for adults.</caption>
            <thead>
              <tr>
                <th scope="col">BMI (kg/m²)</th>
                <th scope="col">Category</th>
                <th scope="col">What it means</th>
              </tr>
            </thead>
            <tbody>
              ${categoryRows}
            </tbody>
          </table>
          <p class="calc-small" id="categories-note">${e(p.asianNote)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="range-table">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">${e(p.rangeTitle)}</p>
          <h2>Healthy weight for your height</h2>
          <p>${e(p.rangeNote)}</p>
        </div>

        <div class="table-wrap">
          <table class="data-table" aria-describedby="range-note">
            <caption>Healthy weight range (BMI 18.5–24.9) for common heights.</caption>
            <thead>
              <tr>
                <th scope="col">Height</th>
                <th scope="col">Healthy weight from</th>
                <th scope="col">Healthy weight to</th>
              </tr>
            </thead>
            <tbody>
              ${rangeRows}
            </tbody>
          </table>
          <p class="calc-small" id="range-note">${e(p.rangeConclusion)}</p>
        </div>
      </div>
    </section>

    <section class="calc-section" id="mistakes">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Common mistakes</p>
          <h2>Four ways to read a BMI wrong</h2>
          <p>
            The BMI formula is short, but four readings trip people up.
            Each one can make a healthy result look worrying, or a risky
            one look fine.
          </p>
        </div>

        <div class="grid4">
          <article class="card">
            <span class="number-label">01 / THE DIAGNOSIS</span>
            <h3>Treating BMI as a diagnosis</h3>
            <p>BMI is a screening tool. It flags a result worth checking with a doctor; it does not by itself diagnose obesity, malnutrition or any disease. Blood pressure, blood sugar, cholesterol and waist size all matter alongside it.</p>
          </article>

          <article class="card">
            <span class="number-label">02 / GUESSING THE INPUTS</span>
            <h3>Measuring height or weight wrong</h3>
            <p>Height in shoes adds a centimetre or two, and weight after a meal or on a different scale can shift by a kilogram. Both errors move the BMI. Measure height without shoes and weight in the morning, before eating, on the same scales.</p>
          </article>

          <article class="card">
            <span class="number-label">03 / MIXING UP THE UNITS</span>
            <h3>Using the wrong units</h3>
            <p>The formula needs kilograms and metres. Entering pounds as kilograms, or centimetres as metres, gives a nonsense number. Use the feet-and-inches option if you think in imperial units, and let the calculator convert.</p>
          </article>

          <article class="card">
            <span class="number-label">04 / CHASING ONE NUMBER</span>
            <h3>Chasing a single number</h3>
            <p>A BMI inside the healthy range is not a guarantee of health, and a BMI just outside it is not a disaster. Crash diets that force the number down fast rarely hold — steady habits, strength, sleep and waist size matter at least as much as the number itself.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="calc-section soft" id="faq">
      <div class="calc-wrap">
        <div class="section-head">
          <p class="eyebrow">Your questions, answered</p>
          <h2>BMI calculator FAQs</h2>
        </div>

        <div class="faq-list">
          ${p.faq.map(([q, a]) => `
          <details class="calc-faq">
            <summary>${e(q)}</summary>
            <p>${e(a)}</p>
          </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="calc-section" id="methodology">
      <div class="calc-wrap">
        <div class="method-box">
          <h2>About the method</h2>
          <p>
            This page uses the World Health Organization's BMI formula:
            BMI = weight (kg) ÷ height (m)², with the adult categories from
            the WHO Technical Report Series No. 854 (1995) — below 18.5
            underweight, 18.5–24.9 healthy weight, 25.0–29.9 overweight,
            30.0 and above obese, with obesity split into Class I (30.0–
            34.9), Class II (35.0–39.9) and Class III (40.0 and above). The
            healthy weight range for a height is the weight that gives a BMI
            of 18.5 at the low end and 24.9 at the high end. BMI is shown to
            one decimal place; the healthy-range weights are shown to one
            decimal place. For feet and inches, 1 inch = 2.54 cm exactly.
          </p>
          <p>
            The Indian cut-offs in the note are the WHO's lower public-
            health action points for Asian populations (23 for overweight,
            27.5 for obesity) and the Indian consensus guidelines of Misra
            et al. (2009), which count 23.0–24.9 as overweight and 25 and
            above as obese, with a healthy range of 18.0–22.9. BMI is a
            screening tool, not a diagnosis, and it does not apply to
            children, who are assessed on BMI-for-age percentile charts.
          </p>
          <p>
            Cross-checked 11 November 2026 against the ranking BMI
            calculators: 170 cm and 70 kg gives BMI 24.2 with a healthy
            range of 53.5–72.0 kg on
            <a href="https://www.calculatorplanet.in/calculators/bmi-calculator" rel="nofollow noopener" target="_blank">calculatorplanet.in</a>,
            and 78 kg at 1.72 m gives 26.4 on
            <a href="https://www.calkulator.in/bmi-calculator" rel="nofollow noopener" target="_blank">calkulator.in</a>.
            Category thresholds follow the
            <a href="https://apps.who.int/nutrition/landscape/help.aspx?helpid=420&amp;menu=0" rel="nofollow noopener" target="_blank">WHO Nutrition Landscape Information System</a>
            and the
            <a href="https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" rel="nofollow noopener" target="_blank">CDC adult BMI categories</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="calc-section cta">
      <div class="calc-wrap">
        <div class="section-head">
          <h2>Check another plan before you start</h2>
          <p>
            Try a different height or weight — or run the same check with
            the related tools for your other plans.
          </p>
        </div>

        <div class="others-row">
          ${others.map(item => `<a href="/${e(item.slug)}/">${e(item.title)}</a>`).join("")}
        </div>
      </div>
    </section>
  </div>

  <script type="application/ld+json">${safeJSON({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
  })}</script>
  <script>(${clientSource})(${safeJSON(config)});</script>`;
}
