# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_9\scoping_accessibility_scans_test.spec.ts >> should analyze accessibility of the form and exclude the ad banner
- Location: tests\chapter_9\scoping_accessibility_scans_test.spec.ts:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 366

- Array []
+ Array [
+   Object {
+     "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
+     "help": "Form elements should have a visible label",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright",
+     "id": "label-title-only",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Only title used to generate label for form element",
+         "html": "<input class=\"subjects-auto-comple...\" autocapitalize=\"none\" autocomplete=\"off\" autocorrect=\"off\" id=\"subjectsInput\" spellcheck=\"false\" tabindex=\"0\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-haspopup=\"true\" role=\"combobox\" aria-activedescendan...=\"\" type=\"text\" value=\"\" ...>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "title-only",
+             "impact": "serious",
+             "message": "Only title used to generate label for form element",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           "#subjectsInput",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Only title used to generate label for form element",
+         "html": "<input class=\"\" autocapitalize=\"none\" autocomplete=\"off\" autocorrect=\"off\" id=\"react-select-3-input\" spellcheck=\"false\" tabindex=\"0\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-haspopup=\"true\" role=\"combobox\" aria-activedescendan...=\"\" aria-describedby=\"react-select-3-place...\" value=\"\" ...>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "title-only",
+             "impact": "serious",
+             "message": "Only title used to generate label for form element",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           "#react-select-3-input",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure every form element has a label",
+     "help": "Form elements must have labels",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/label?application=playwright",
+     "id": "label",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input id=\"dateOfBirthInput\" class=\"form-control\" type=\"text\" value=\"17 Jun 2026\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#dateOfBirthInput",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input class=\"subjects-auto-comple...\" autocapitalize=\"none\" autocomplete=\"off\" autocorrect=\"off\" id=\"subjectsInput\" spellcheck=\"false\" tabindex=\"0\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-haspopup=\"true\" role=\"combobox\" aria-activedescendan...=\"\" type=\"text\" value=\"\" ...>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#subjectsInput",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input label=\"Select picture\" lang=\"en\" id=\"uploadPicture\" class=\"form-control\" type=\"file\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#uploadPicture",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input class=\"\" autocapitalize=\"none\" autocomplete=\"off\" autocorrect=\"off\" id=\"react-select-3-input\" spellcheck=\"false\" tabindex=\"0\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-haspopup=\"true\" role=\"combobox\" aria-activedescendan...=\"\" aria-describedby=\"react-select-3-place...\" value=\"\" ...>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#react-select-3-input",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e99]: Name
          - textbox "First Name" [ref=e101]
          - textbox "Last Name" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e106]: Email
          - textbox "name@example.com" [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - textbox [ref=e132]: 17 Jun 2026
        - generic [ref=e133]:
          - generic [ref=e135]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e148]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e161]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e166]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e171]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - generic [ref=e178]: Select State
                - combobox [ref=e180]
              - img [ref=e184]
          - generic [ref=e186]:
            - generic:
              - log
              - generic:
                - generic:
                  - generic: Select City
                - generic:
                  - generic:
                    - img
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('should analyze accessibility of the form and exclude the ad banner',
  5  |     async ({ page }) => {
  6  |         await page.goto('https://demoqa.com/automation-practice-form');
  7  |         const results = await new AxeBuilder({ page })
  8  |             .include('form') // Only analyze elements within the 'form'
  9  |             .exclude('.Google-Ad') // Skip elements with .Google-Ad class
  10 |             .analyze();
  11 |         // Log the violations for debugging/reporting
  12 |         if (results.violations.length > 0) {
  13 |             console.log('Accessibility Violations found:');
  14 |             results.violations.forEach(violation => {
  15 |                 console.log(`- ${violation.id}: ${violation.description}`);
  16 |                 console.log(` Help: ${violation.helpUrl}`);
  17 |                 console.log(' Nodes:', violation.nodes.map(node => node.html).
  18 |                     join('\n'));
  19 |                 console.log('---');
  20 |             });
  21 |         }
  22 |         // If violations are found, this test will fail and list them.
> 23 |         expect(results.violations).toEqual([]);
     |                                    ^ Error: expect(received).toEqual(expected) // deep equality
  24 |     });
```