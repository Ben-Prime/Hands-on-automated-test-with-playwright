# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_11\testing_responsive_layers_across_devices_test.spec.ts >> should render correctly on Desktop
- Location: tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts:10:9

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  2138 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 60000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2138 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 2138 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - heading "What's My Browser" [level=1] [ref=e4]:
      - link "What's My Browser" [ref=e5] [cursor=pointer]:
        - /url: /
        - text: What's My Browser
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "FAQ" [ref=e9] [cursor=pointer]:
          - /url: /#faq
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: /#contact
  - generic [ref=e12]:
    - generic [ref=e14]:
      - heading "You’re using Chrome 148." [level=2] [ref=e15]
      - heading "Share this with your support team! Just send them the link below:" [level=3] [ref=e16]
      - generic [ref=e17]:
        - textbox [ref=e18]: whatsmybrowser.org/b/5RX59
        - button "Copy" [ref=e19] [cursor=pointer]
    - generic [ref=e21]:
      - heading "Browser details" [level=2] [ref=e22]
      - paragraph [ref=e23]: We’ve detected the following details about your browser. This information may help support teams troubleshoot issues you’re experiencing with their website.
      - generic [ref=e24]:
        - insertion [ref=e26]:
          - iframe [ref=e28]:
            - generic [active] [ref=f412e1]:
              - generic [ref=f412e3]:
                - link:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CoO_1Kc8yasqRNrzE9u8P04WYuQWo5PzLhwGnz_XGrxbI_JiG_UcQASCkl8MoYLe8g4X0MKAB0Zaj9ELIAQKpAkIq3U9tSAk-qAMByAPJBKoE5gFP0ETlPY8spg6ksrLQyaqwu0SgUlHgG02mFW7r4N8rqLDq3Z4wfU9xg_3Uz7xLk_ZQCbWJh0sbc3Msp7iqL60J3fG3RHdb9I4PK0I3HxWGFI-OR1_clSTeuSrySZmPEvn0qR24ZDaYxlRoMBH3pKYB-gQ5qz-XYnDqJNxDYLLMktOc4ik_Oyhkp7_DDh_e6atqjRGmO03PNSSVzFsTtGulu9_eEmIz-v94pHLAJOo41fqMBxNKecHhWaIZwlguSEsG-gmyIYpUK96XuWvEby2sEmV36H-MQ_UkJ6e9EKhMdSTpFjX6yMAE6fnAgtoFiAW_hrGYWKAGAoAH0c7z0x2oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJGow8zcjpUDYAGxCePFnieSKd2MgAoBmAsByAsBogwDkAEBqg0CTkfIDQHqDRMIs9HDzNyOlQMVPKL9Bx3TAiZX8A0CiA4J2BMD0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNTI2ODA3MDU3MlAGuhcCOAGqGBcJAAAAAADs80ASCjUyNjgwNzA1NzIYAbIYCRICxWgYAiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMIisrDzNyOlQMVPKL9Bx3TAiZXEAEYASAAEgL4PfD_BwE&num=1&cid=CAQS4wEAEQoqgdb1fV0EGXYE7W_D7kKHSEUBbpy_6FpIz21IewRGO077nnciXv7ndgJwxcHDLB9TKLtdauwM2xGRiqRSSI74fuFcGbh_TpedLpG3b_h3y5ptzoJGG6s2xH_jiQ2X1QdGk16lvq_kawGs5lpMtlhgRM7tgaOWKPdmwv5jcVOCoGP5gfs-tZMXZWsAuda0RPAjzzgTGv3lhaGZyfb4nBOqmn8FhA1l5jobfmSRc0j4rVZtLmpdXvZmws5el0KWIOuIvrlPWgoVoExsUb6UbOOQS3tyJFi1FwVL8XlRVlVzLxgB&sig=AOD64_0DmBgfMws-32qnZwg3ib0I0e672A&client=ca-pub-6208165966986006&rf=2&nb=2&adurl=https://www.apple.com/ng/buy/%3Fgad_campaignid%3D23673455423%26gclid%3DEAIaIQobChMIisrDzNyOlQMVPKL9Bx3TAiZXEAEYASAAEgL4PfD_BwE
                - img [ref=f412e7] [cursor=pointer]
                - button [ref=f412e9] [cursor=pointer]:
                  - img [ref=f412e10]
              - iframe
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]: Operating system
            - generic [ref=e32]: Windows 10
          - generic [ref=e33]:
            - generic [ref=e34]: IP address
            - generic [ref=e35]:
              - text: 102.88.115.222
              - generic "The IP address is shown to the user for debugging purposes. However, to protect their privacy, we do not store it on our servers or share it with others." [ref=e37] [cursor=pointer]: help_outline
          - generic [ref=e38]:
            - generic [ref=e39]: Javascript enabled
            - generic [ref=e40]: "Yes"
          - generic [ref=e41]:
            - generic [ref=e42]: Cookies enabled
            - generic [ref=e43]: "Yes"
          - generic [ref=e44]:
            - generic [ref=e45]: Flash version
            - generic [ref=e46]: Not installed
          - generic [ref=e47]:
            - generic [ref=e48]: Java version
            - generic [ref=e49]: Not installed
          - generic [ref=e50]:
            - generic [ref=e51]: Websockets supported
            - generic [ref=e52]: "Yes"
          - generic [ref=e53]:
            - generic [ref=e54]: WebGL supported
            - generic [ref=e55]: "Yes"
          - generic [ref=e56]:
            - generic [ref=e57]: Language
            - generic [ref=e58]: en-NG
          - generic [ref=e59]:
            - generic [ref=e60]: Browser size
            - generic [ref=e61]: 1920 x 1080
          - generic [ref=e62]:
            - generic [ref=e63]: Screen size
            - generic [ref=e64]: 1920 x 1080 (Retina)
          - generic [ref=e65]:
            - generic [ref=e66]: Color depth
            - generic [ref=e67]: 32 bit
        - generic [ref=e68]:
          - text: "Your full user agent string is:"
          - generic [ref=e69]: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - generic [ref=e71]:
      - heading "What browser am I using?" [level=1] [ref=e72]
      - paragraph [ref=e73]:
        - text: You’re using Chrome 148. If you believe this is incorrect, then please
        - link "email us" [ref=e74] [cursor=pointer]:
          - /url: mailto:hi@whatsmybrowser.org
        - text: to let us know!
      - heading "What is my browser?" [level=1] [ref=e75]
      - paragraph [ref=e76]:
        - text: Your browser is a software application that lets you visit web pages on the Internet. Popular browsers include
        - link "Google Chrome" [ref=e77] [cursor=pointer]:
          - /url: https://www.google.com/chrome/
        - text: ","
        - link "Firefox" [ref=e78] [cursor=pointer]:
          - /url: http://www.mozilla.org/firefox/new/
        - text: ","
        - link "Safari" [ref=e79] [cursor=pointer]:
          - /url: http://support.apple.com/downloads/#safari
        - text: ", and"
        - link "Internet Explorer" [ref=e80] [cursor=pointer]:
          - /url: http://windows.microsoft.com/en-us/internet-explorer/download-ie
        - text: . Currently,
        - link "Google Chrome" [ref=e81] [cursor=pointer]:
          - /url: https://www.google.com/chrome/
        - text: is the
        - link "most widely used browser in the world" [ref=e82] [cursor=pointer]:
          - /url: https://en.wikipedia.org/wiki/Usage_share_of_web_browsers
        - text: ", and is also considered one of the fastest and most secure."
      - heading "Why is my browser info important?" [level=1] [ref=e83]
      - paragraph [ref=e84]: Different browsers have different capabilities. And although these differences may seem minor, it’s common for websites to work fine on one browser but poorly on another. The information on this page may help support teams troubleshoot technical issues specific to your browser.
      - heading "What is an IP address?" [level=1] [ref=e85]
      - paragraph [ref=e86]:
        - text: An IP address is a set of numbers that identifies your device, and which can be tied to your online activity. Some users may not want their browsing history associated with their IP address, and might therefore opt to use a Virtual Private Network (VPN) for an extra layer of security and privacy. We recommend using a
        - link "top-rated VPN" [ref=e87] [cursor=pointer]:
          - /url: https://www.top10vpn.com/best-vpn/
        - text: to secure your online activity.
      - heading "Contact us" [level=2] [ref=e88]
      - paragraph [ref=e89]:
        - text: Feel free to contact us at
        - link "hi@whatsmybrowser.org" [ref=e90] [cursor=pointer]:
          - /url: mailto:hi@whatsmybrowser.org
        - text: if you have any questions or concerns. Additionally, please let us know if you have any feedback or suggestions for improving this site — we’d love to hear from you!
    - generic [ref=e92]:
      - heading "Share this with your support team now!" [level=3] [ref=e93]
      - generic [ref=e94]:
        - textbox [ref=e95]: whatsmybrowser.org/b/5RX59
        - button "Copy" [ref=e96] [cursor=pointer]
  - generic [ref=e98]:
    - generic [ref=e99]:
      - generic:
        - generic:
          - iframe
      - iframe [ref=e100]:
        - link "Post" [ref=f415e4] [cursor=pointer]:
          - /url: https://x.com/intent/tweet?original_referer=https%3A%2F%2Fwww.whatsmybrowser.org%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Definitely%20the%20easiest%20way%20to%20find%20your%20browser%20info%2C%20and%20send%20it%20to%20your%20designer%2C%20developer%2C%20or%20support%20rep!%20whatsmybrowser.org&url=whatsmybrowser.org
          - generic [ref=f415e6]: Post
    - generic [ref=e101]:
      - text: whatsmybrowser.org |
      - link "Privacy" [ref=e102] [cursor=pointer]:
        - /url: /privacy
      - text: "| Copyright © 2026"
  - log [ref=e103]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const viewports = [
  4  |     { name: 'Mobile', width: 390, height: 844 },
  5  |     { name: 'Tablet', width: 768, height: 1024 },
  6  |     { name: 'Desktop', width: 1920, height: 1080 },
  7  | ];
  8  | 
  9  | for (const viewport of viewports) {
  10 |     test(`should render correctly on ${viewport.name}`, async ({ page }) => {
  11 |         await page.setViewportSize({
  12 |             width: viewport.width,
  13 |             height: viewport.height
  14 |         });
  15 |         await page.goto('https://www.whatsmybrowser.org/');
> 16 |         await expect(page).toHaveScreenshot({
     |                            ^ Error: expect(page).toHaveScreenshot(expected) failed
  17 |             fullPage: true,
  18 |             mask: [
  19 |                 page?.locator('.ad-cont'),
  20 |                 page?.locator('#aswift_0_host')
  21 |             ]
  22 |         });
  23 |     });
  24 | }
```