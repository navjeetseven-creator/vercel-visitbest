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
              and subject records.
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