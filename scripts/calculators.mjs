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
  }

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