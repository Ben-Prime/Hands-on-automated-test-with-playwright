# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_11\testing_responsive_layers_across_devices_test.spec.ts >> should render correctly on Tablet
- Location: tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts:10:9

# Error details

```
Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts-snapshots\should-render-correctly-on-Tablet-1-Google-Chrome-win32.png, writing actual.
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
        - textbox [ref=e18]: whatsmybrowser.org/b/C6AEM
        - button "Copy" [ref=e19] [cursor=pointer]
    - generic [ref=e21]:
      - heading "Browser details" [level=2] [ref=e22]
      - paragraph [ref=e23]: We’ve detected the following details about your browser. This information may help support teams troubleshoot issues you’re experiencing with their website.
      - generic [ref=e24]:
        - insertion [ref=e26]:
          - iframe [ref=e28]:
            - generic [active] [ref=f23e1]:
              - generic [ref=f23e6]:
                - generic [ref=f23e7]:
                  - generic "wati.io" [ref=f23e9]:
                    - link "#1 WhatsApp API" [ref=f23e10] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CK7Pfi9AyapXfCemi1sQP96y2iAnPibzChwGOtdnOnRXjpeCfrgIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE4AFP0D1DZdKKhSjgO62rMGuhYT5Vr9cNFjRmWPgt4KQ9yhd-oaewt_4SMr4Ypc4E1HddHhDlsyRZepfIAwi35eFf3Ya0xDh57iO153wWp06iid6FiCYPhN89fU89Xq7gwSQVpD0be6hUicUS9Mo0ZHY6ln3XdaE1sTVmte166njKJLdmvESZlTGOXt0GjA6DHrb36O_x4tkfFdCw4zjjeXZqvNeuEaLyuqfVWTA0KEjrJG9q6MOL_mFntcbhUJzv_Spp9NJlbxM4Su8Dx6cBj8a5gBC7moyrLYQRvraFvPhM58AE8tCfhNQEiAWss7WYToAH3u32YagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpp369N2OlQNgAbEJdJ7quupV2HmACgGYCwHICwGiDDwqCgoIjt-xApXisQJiEgoQY29tLmNsYXJlYWkud2F0aWoSChBjb20uY2xhcmVhaS53YXRpeAGIAQGQAQGqDQJOR8gNAeoNEwjk1_303Y6VAxVpkZUCHXeWDZHwDQKIDgmwDpyDoZYY2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNTI2ODA3MDU3MlAGuhcCOAGqGBcJAAAAAIzXI0ESCjUyNjgwNzA1NzIYAbIYCRIC6FkYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE&num=1&cid=CAQShwIAEQoqge3GtrqFNGkfBAL3TakZt30s7MrVMfEFRYowcpIJ45xEErBXeHPcjU0mjPE84rj5JD0sS4mnZm2tA3JgmYcqo90w7qy284ZcPRX93k63_7PUb06oetpFw1UkdhP0Vtpd4VfbDY1okmNwydQ0GZ_HOvBbZcs_UBhKqyKDGIMBf4mlG2dfpbS0AGtOCQINvFOpz0h_RFIFAziFkaBIcYjO7APzSv3sDGSfBcgFLVZa5XyCcKaUyz8-t7-G9z8zHe-XfhRm0wwbEpH3l9CyVuD53XgpHi2TLXintHAdAy72X4qsrKSc-2dW_C664SfMPfEk3mMAPQ-XtRt8h8xyff4V3nz9dBgB&sig=AOD64_3FBoiFXBZrW-LgESHkZRhQDDWIwQ&client=ca-pub-6208165966986006&rf=1&nb=0&adurl=https://www.wati.io/lp/whatsapp-api/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE
                  - generic [ref=f23e11]:
                    - link "Top Brands Across 78 Countries use WATI's WhatsApp API to Drive Sales & Automate Support" [ref=f23e13] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CK7Pfi9AyapXfCemi1sQP96y2iAnPibzChwGOtdnOnRXjpeCfrgIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE4AFP0D1DZdKKhSjgO62rMGuhYT5Vr9cNFjRmWPgt4KQ9yhd-oaewt_4SMr4Ypc4E1HddHhDlsyRZepfIAwi35eFf3Ya0xDh57iO153wWp06iid6FiCYPhN89fU89Xq7gwSQVpD0be6hUicUS9Mo0ZHY6ln3XdaE1sTVmte166njKJLdmvESZlTGOXt0GjA6DHrb36O_x4tkfFdCw4zjjeXZqvNeuEaLyuqfVWTA0KEjrJG9q6MOL_mFntcbhUJzv_Spp9NJlbxM4Su8Dx6cBj8a5gBC7moyrLYQRvraFvPhM58AE8tCfhNQEiAWss7WYToAH3u32YagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpp369N2OlQNgAbEJdJ7quupV2HmACgGYCwHICwGiDDwqCgoIjt-xApXisQJiEgoQY29tLmNsYXJlYWkud2F0aWoSChBjb20uY2xhcmVhaS53YXRpeAGIAQGQAQGqDQJOR8gNAeoNEwjk1_303Y6VAxVpkZUCHXeWDZHwDQKIDgmwDpyDoZYY2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNTI2ODA3MDU3MlAGuhcCOAGqGBcJAAAAAIzXI0ESCjUyNjgwNzA1NzIYAbIYCRIC6FkYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE&num=1&cid=CAQShwIAEQoqge3GtrqFNGkfBAL3TakZt30s7MrVMfEFRYowcpIJ45xEErBXeHPcjU0mjPE84rj5JD0sS4mnZm2tA3JgmYcqo90w7qy284ZcPRX93k63_7PUb06oetpFw1UkdhP0Vtpd4VfbDY1okmNwydQ0GZ_HOvBbZcs_UBhKqyKDGIMBf4mlG2dfpbS0AGtOCQINvFOpz0h_RFIFAziFkaBIcYjO7APzSv3sDGSfBcgFLVZa5XyCcKaUyz8-t7-G9z8zHe-XfhRm0wwbEpH3l9CyVuD53XgpHi2TLXintHAdAy72X4qsrKSc-2dW_C664SfMPfEk3mMAPQ-XtRt8h8xyff4V3nz9dBgB&sig=AOD64_3FBoiFXBZrW-LgESHkZRhQDDWIwQ&client=ca-pub-6208165966986006&rf=1&nb=7&adurl=https://www.wati.io/lp/whatsapp-api/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE
                      - text: Top Brands Across 78 Countries use WATI's WhatsApp API to
                      - text: Drive Sales & Automate Support
                    - link [ref=f23e14] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CK7Pfi9AyapXfCemi1sQP96y2iAnPibzChwGOtdnOnRXjpeCfrgIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE4AFP0D1DZdKKhSjgO62rMGuhYT5Vr9cNFjRmWPgt4KQ9yhd-oaewt_4SMr4Ypc4E1HddHhDlsyRZepfIAwi35eFf3Ya0xDh57iO153wWp06iid6FiCYPhN89fU89Xq7gwSQVpD0be6hUicUS9Mo0ZHY6ln3XdaE1sTVmte166njKJLdmvESZlTGOXt0GjA6DHrb36O_x4tkfFdCw4zjjeXZqvNeuEaLyuqfVWTA0KEjrJG9q6MOL_mFntcbhUJzv_Spp9NJlbxM4Su8Dx6cBj8a5gBC7moyrLYQRvraFvPhM58AE8tCfhNQEiAWss7WYToAH3u32YagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpp369N2OlQNgAbEJdJ7quupV2HmACgGYCwHICwGiDDwqCgoIjt-xApXisQJiEgoQY29tLmNsYXJlYWkud2F0aWoSChBjb20uY2xhcmVhaS53YXRpeAGIAQGQAQGqDQJOR8gNAeoNEwjk1_303Y6VAxVpkZUCHXeWDZHwDQKIDgmwDpyDoZYY2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNTI2ODA3MDU3MlAGuhcCOAGqGBcJAAAAAIzXI0ESCjUyNjgwNzA1NzIYAbIYCRIC6FkYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE&num=1&cid=CAQShwIAEQoqge3GtrqFNGkfBAL3TakZt30s7MrVMfEFRYowcpIJ45xEErBXeHPcjU0mjPE84rj5JD0sS4mnZm2tA3JgmYcqo90w7qy284ZcPRX93k63_7PUb06oetpFw1UkdhP0Vtpd4VfbDY1okmNwydQ0GZ_HOvBbZcs_UBhKqyKDGIMBf4mlG2dfpbS0AGtOCQINvFOpz0h_RFIFAziFkaBIcYjO7APzSv3sDGSfBcgFLVZa5XyCcKaUyz8-t7-G9z8zHe-XfhRm0wwbEpH3l9CyVuD53XgpHi2TLXintHAdAy72X4qsrKSc-2dW_C664SfMPfEk3mMAPQ-XtRt8h8xyff4V3nz9dBgB&sig=AOD64_3FBoiFXBZrW-LgESHkZRhQDDWIwQ&client=ca-pub-6208165966986006&rf=1&nb=8&adurl=https://www.wati.io/lp/whatsapp-api/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE
                      - img [ref=f23e15]
                - generic "wati.io" [ref=f23e17]:
                  - link "wati.io" [ref=f23e18] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CK7Pfi9AyapXfCemi1sQP96y2iAnPibzChwGOtdnOnRXjpeCfrgIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE4AFP0D1DZdKKhSjgO62rMGuhYT5Vr9cNFjRmWPgt4KQ9yhd-oaewt_4SMr4Ypc4E1HddHhDlsyRZepfIAwi35eFf3Ya0xDh57iO153wWp06iid6FiCYPhN89fU89Xq7gwSQVpD0be6hUicUS9Mo0ZHY6ln3XdaE1sTVmte166njKJLdmvESZlTGOXt0GjA6DHrb36O_x4tkfFdCw4zjjeXZqvNeuEaLyuqfVWTA0KEjrJG9q6MOL_mFntcbhUJzv_Spp9NJlbxM4Su8Dx6cBj8a5gBC7moyrLYQRvraFvPhM58AE8tCfhNQEiAWss7WYToAH3u32YagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpp369N2OlQNgAbEJdJ7quupV2HmACgGYCwHICwGiDDwqCgoIjt-xApXisQJiEgoQY29tLmNsYXJlYWkud2F0aWoSChBjb20uY2xhcmVhaS53YXRpeAGIAQGQAQGqDQJOR8gNAeoNEwjk1_303Y6VAxVpkZUCHXeWDZHwDQKIDgmwDpyDoZYY2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNTI2ODA3MDU3MlAGuhcCOAGqGBcJAAAAAIzXI0ESCjUyNjgwNzA1NzIYAbIYCRIC6FkYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE&num=1&cid=CAQShwIAEQoqge3GtrqFNGkfBAL3TakZt30s7MrVMfEFRYowcpIJ45xEErBXeHPcjU0mjPE84rj5JD0sS4mnZm2tA3JgmYcqo90w7qy284ZcPRX93k63_7PUb06oetpFw1UkdhP0Vtpd4VfbDY1okmNwydQ0GZ_HOvBbZcs_UBhKqyKDGIMBf4mlG2dfpbS0AGtOCQINvFOpz0h_RFIFAziFkaBIcYjO7APzSv3sDGSfBcgFLVZa5XyCcKaUyz8-t7-G9z8zHe-XfhRm0wwbEpH3l9CyVuD53XgpHi2TLXintHAdAy72X4qsrKSc-2dW_C664SfMPfEk3mMAPQ-XtRt8h8xyff4V3nz9dBgB&sig=AOD64_3FBoiFXBZrW-LgESHkZRhQDDWIwQ&client=ca-pub-6208165966986006&rf=1&nb=1&adurl=https://www.wati.io/lp/whatsapp-api/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI1dD99N2OlQMVaZGVAh13lg2REAEYASAAEgJ78fD_BwE
              - img [ref=f23e22] [cursor=pointer]
              - button [ref=f23e24] [cursor=pointer]:
                - img [ref=f23e25]
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
            - generic [ref=e61]: 768 x 1024
          - generic [ref=e62]:
            - generic [ref=e63]: Screen size
            - generic [ref=e64]: 768 x 1024 (Retina)
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
        - textbox [ref=e95]: whatsmybrowser.org/b/C6AEM
        - button "Copy" [ref=e96] [cursor=pointer]
  - generic [ref=e98]:
    - generic [ref=e99]:
      - generic:
        - generic:
          - iframe
      - iframe [ref=e100]:
        - link "Post" [ref=f26e4] [cursor=pointer]:
          - /url: https://x.com/intent/tweet?original_referer=https%3A%2F%2Fwww.whatsmybrowser.org%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Definitely%20the%20easiest%20way%20to%20find%20your%20browser%20info%2C%20and%20send%20it%20to%20your%20designer%2C%20developer%2C%20or%20support%20rep!%20whatsmybrowser.org&url=whatsmybrowser.org
          - generic [ref=f26e6]: Post
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
     |         ^ Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts-snapshots\should-render-correctly-on-Tablet-1-Google-Chrome-win32.png, writing actual.
  17 |             fullPage: true,
  18 |             mask: [
  19 |                 page?.locator('.ad-cont'),
  20 |                 page?.locator('#aswift_0_host'),
  21 |                 page.locator('[class="url medium-8"]').nth(0),
  22 |                 page.locator('[class="url medium-8"]').nth(1)
  23 |             ]
  24 |         });
  25 |     });
  26 | }
```