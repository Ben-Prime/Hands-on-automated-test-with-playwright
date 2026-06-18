# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_11\testing_responsive_layers_across_devices_test.spec.ts >> should render correctly on Mobile
- Location: tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts:10:9

# Error details

```
Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts-snapshots\should-render-correctly-on-Mobile-1-Google-Chrome-win32.png, writing actual.
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
        - textbox [ref=e18]: whatsmybrowser.org/b/DI4SL
        - button "Copy" [ref=e19] [cursor=pointer]
    - generic [ref=e21]:
      - heading "Browser details" [level=2] [ref=e22]
      - paragraph [ref=e23]: We’ve detected the following details about your browser. This information may help support teams troubleshoot issues you’re experiencing with their website.
      - generic [ref=e24]:
        - insertion [ref=e26]:
          - iframe [ref=e28]:
            - generic [active] [ref=f123e1]:
              - generic [ref=f123e6]:
                - generic [ref=f123e7]:
                  - generic [ref=f123e8]:
                    - link "Wati" [ref=f123e10] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C698dUswyauHlAuK6juwPmdS4mArPibzChwGLvdq3wxW3lIed3jIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE5wFP0Lu1HWsMnHMb1gXNkNyLsPnuyzXEZ4ACt4tMcYpm1RDvFayiNF5aFDm7r5Fuw8hAgHYhWE9y7yD89kkt6ugdGLzLag8zXgSnSmEuMqMuCT30RxuOEM6iji7vXSZ7XfmnR8lacjYrBX1XdB9NL-eUUDnrne09flRbiHwz-mI9on4MtIKAw-hMXz5H-b-xY-SpuU4F-JOLBPlYDigoBWsxA0r4FiorFyeABClkc_saCGGuQZzNx2HVCLEfBOOr0elcA5zt0lyWqQ09SddUmR4TT32F-6Ok-OhaciAUev__O-VX0stcOELABMHkusjfBYgFrLO1mE6AB97t9mGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMuyu_HZjpUDYAGxCS3VozQx-9i1gAoBmAsByAsBogw8KgoKCI7fsQKV4rECYhIKEGNvbS5jbGFyZWFpLndhdGlqEgoQY29tLmNsYXJlYWkud2F0aXgBiAEBkAEBqg0CTkfIDQHqDRMI39y78dmOlQMVYp2DBx0ZKg6j8A0CiA4JsA7kxYrzGNgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjUyNjgwNzA1NzJQBroXAjgBqhgXCQAAAABRJTxBEgo1MjY4MDcwNTcyGAGyGAUYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE&num=1&cid=CAQShwIAEQoqgfOi9yV0QH-MobcZsVqA99M5MWeIwqDoQe0LZL_L8qqRiH6N-j2JXgKKlqTYiARU6MN5QiKo-5bs4rpcvyIy2d0fbem6uWk9OoB5VUM5GAVwKMImfozqO-j6-UThV8rWsOTGXef6GBQj5rfHF4BxbLiSG4rhB5qkqfl-kZo5pm60UDoQzTH8TOpq_zrVUlJgmA-Sug_DEEUXlrC78oa9vqvSVaRbj0ZrtYyT8cPa9p9hKonNDKD6j8S0Z1KZiKNH1fCWoBxGxh_h2lC8Qu-GbngQIv4Luy3-a6eUehK5j9Y7DBHy8A5NWzXdsUsQvk_MfAMuHsEC1ZNxBHxvN57MoLnlmRgB&sig=AOD64_3lIdGwtaW5tLQujPLrU4GsnwrA3w&client=ca-pub-6208165966986006&rf=1&nb=19&adurl=https://www.wati.io/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE
                      - img "Wati" [ref=f123e11]
                    - generic "Wati" [ref=f123e12]:
                      - link "Automate Your Messaging" [ref=f123e14] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C698dUswyauHlAuK6juwPmdS4mArPibzChwGLvdq3wxW3lIed3jIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE5wFP0Lu1HWsMnHMb1gXNkNyLsPnuyzXEZ4ACt4tMcYpm1RDvFayiNF5aFDm7r5Fuw8hAgHYhWE9y7yD89kkt6ugdGLzLag8zXgSnSmEuMqMuCT30RxuOEM6iji7vXSZ7XfmnR8lacjYrBX1XdB9NL-eUUDnrne09flRbiHwz-mI9on4MtIKAw-hMXz5H-b-xY-SpuU4F-JOLBPlYDigoBWsxA0r4FiorFyeABClkc_saCGGuQZzNx2HVCLEfBOOr0elcA5zt0lyWqQ09SddUmR4TT32F-6Ok-OhaciAUev__O-VX0stcOELABMHkusjfBYgFrLO1mE6AB97t9mGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMuyu_HZjpUDYAGxCS3VozQx-9i1gAoBmAsByAsBogw8KgoKCI7fsQKV4rECYhIKEGNvbS5jbGFyZWFpLndhdGlqEgoQY29tLmNsYXJlYWkud2F0aXgBiAEBkAEBqg0CTkfIDQHqDRMI39y78dmOlQMVYp2DBx0ZKg6j8A0CiA4JsA7kxYrzGNgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjUyNjgwNzA1NzJQBroXAjgBqhgXCQAAAABRJTxBEgo1MjY4MDcwNTcyGAGyGAUYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE&num=1&cid=CAQShwIAEQoqgfOi9yV0QH-MobcZsVqA99M5MWeIwqDoQe0LZL_L8qqRiH6N-j2JXgKKlqTYiARU6MN5QiKo-5bs4rpcvyIy2d0fbem6uWk9OoB5VUM5GAVwKMImfozqO-j6-UThV8rWsOTGXef6GBQj5rfHF4BxbLiSG4rhB5qkqfl-kZo5pm60UDoQzTH8TOpq_zrVUlJgmA-Sug_DEEUXlrC78oa9vqvSVaRbj0ZrtYyT8cPa9p9hKonNDKD6j8S0Z1KZiKNH1fCWoBxGxh_h2lC8Qu-GbngQIv4Luy3-a6eUehK5j9Y7DBHy8A5NWzXdsUsQvk_MfAMuHsEC1ZNxBHxvN57MoLnlmRgB&sig=AOD64_3lIdGwtaW5tLQujPLrU4GsnwrA3w&client=ca-pub-6208165966986006&rf=1&nb=0&adurl=https://www.wati.io/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE
                        - text: Automate Your
                        - text: Messaging
                  - link "Leverage Meta partnership with Wati for secure, efficient WhatsApp messaging for business." [ref=f123e16] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C698dUswyauHlAuK6juwPmdS4mArPibzChwGLvdq3wxW3lIed3jIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE5wFP0Lu1HWsMnHMb1gXNkNyLsPnuyzXEZ4ACt4tMcYpm1RDvFayiNF5aFDm7r5Fuw8hAgHYhWE9y7yD89kkt6ugdGLzLag8zXgSnSmEuMqMuCT30RxuOEM6iji7vXSZ7XfmnR8lacjYrBX1XdB9NL-eUUDnrne09flRbiHwz-mI9on4MtIKAw-hMXz5H-b-xY-SpuU4F-JOLBPlYDigoBWsxA0r4FiorFyeABClkc_saCGGuQZzNx2HVCLEfBOOr0elcA5zt0lyWqQ09SddUmR4TT32F-6Ok-OhaciAUev__O-VX0stcOELABMHkusjfBYgFrLO1mE6AB97t9mGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMuyu_HZjpUDYAGxCS3VozQx-9i1gAoBmAsByAsBogw8KgoKCI7fsQKV4rECYhIKEGNvbS5jbGFyZWFpLndhdGlqEgoQY29tLmNsYXJlYWkud2F0aXgBiAEBkAEBqg0CTkfIDQHqDRMI39y78dmOlQMVYp2DBx0ZKg6j8A0CiA4JsA7kxYrzGNgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjUyNjgwNzA1NzJQBroXAjgBqhgXCQAAAABRJTxBEgo1MjY4MDcwNTcyGAGyGAUYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE&num=1&cid=CAQShwIAEQoqgfOi9yV0QH-MobcZsVqA99M5MWeIwqDoQe0LZL_L8qqRiH6N-j2JXgKKlqTYiARU6MN5QiKo-5bs4rpcvyIy2d0fbem6uWk9OoB5VUM5GAVwKMImfozqO-j6-UThV8rWsOTGXef6GBQj5rfHF4BxbLiSG4rhB5qkqfl-kZo5pm60UDoQzTH8TOpq_zrVUlJgmA-Sug_DEEUXlrC78oa9vqvSVaRbj0ZrtYyT8cPa9p9hKonNDKD6j8S0Z1KZiKNH1fCWoBxGxh_h2lC8Qu-GbngQIv4Luy3-a6eUehK5j9Y7DBHy8A5NWzXdsUsQvk_MfAMuHsEC1ZNxBHxvN57MoLnlmRgB&sig=AOD64_3lIdGwtaW5tLQujPLrU4GsnwrA3w&client=ca-pub-6208165966986006&rf=1&nb=7&adurl=https://www.wati.io/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE
                    - text: Leverage Meta partnership with Wati
                    - text: for secure, efficient WhatsApp
                    - text: messaging for business.
                  - generic "Wati" [ref=f123e17]:
                    - link "Wati" [ref=f123e18] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C698dUswyauHlAuK6juwPmdS4mArPibzChwGLvdq3wxW3lIed3jIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE5wFP0Lu1HWsMnHMb1gXNkNyLsPnuyzXEZ4ACt4tMcYpm1RDvFayiNF5aFDm7r5Fuw8hAgHYhWE9y7yD89kkt6ugdGLzLag8zXgSnSmEuMqMuCT30RxuOEM6iji7vXSZ7XfmnR8lacjYrBX1XdB9NL-eUUDnrne09flRbiHwz-mI9on4MtIKAw-hMXz5H-b-xY-SpuU4F-JOLBPlYDigoBWsxA0r4FiorFyeABClkc_saCGGuQZzNx2HVCLEfBOOr0elcA5zt0lyWqQ09SddUmR4TT32F-6Ok-OhaciAUev__O-VX0stcOELABMHkusjfBYgFrLO1mE6AB97t9mGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMuyu_HZjpUDYAGxCS3VozQx-9i1gAoBmAsByAsBogw8KgoKCI7fsQKV4rECYhIKEGNvbS5jbGFyZWFpLndhdGlqEgoQY29tLmNsYXJlYWkud2F0aXgBiAEBkAEBqg0CTkfIDQHqDRMI39y78dmOlQMVYp2DBx0ZKg6j8A0CiA4JsA7kxYrzGNgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjUyNjgwNzA1NzJQBroXAjgBqhgXCQAAAABRJTxBEgo1MjY4MDcwNTcyGAGyGAUYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE&num=1&cid=CAQShwIAEQoqgfOi9yV0QH-MobcZsVqA99M5MWeIwqDoQe0LZL_L8qqRiH6N-j2JXgKKlqTYiARU6MN5QiKo-5bs4rpcvyIy2d0fbem6uWk9OoB5VUM5GAVwKMImfozqO-j6-UThV8rWsOTGXef6GBQj5rfHF4BxbLiSG4rhB5qkqfl-kZo5pm60UDoQzTH8TOpq_zrVUlJgmA-Sug_DEEUXlrC78oa9vqvSVaRbj0ZrtYyT8cPa9p9hKonNDKD6j8S0Z1KZiKNH1fCWoBxGxh_h2lC8Qu-GbngQIv4Luy3-a6eUehK5j9Y7DBHy8A5NWzXdsUsQvk_MfAMuHsEC1ZNxBHxvN57MoLnlmRgB&sig=AOD64_3lIdGwtaW5tLQujPLrU4GsnwrA3w&client=ca-pub-6208165966986006&rf=1&nb=1&adurl=https://www.wati.io/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE
                - link "Learn More" [ref=f123e22] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C698dUswyauHlAuK6juwPmdS4mArPibzChwGLvdq3wxW3lIed3jIQASCkl8MoYLe8g4X0MKABipKJngPIAQGpAjaPmCYqIYE-qAMByAPLBKoE5wFP0Lu1HWsMnHMb1gXNkNyLsPnuyzXEZ4ACt4tMcYpm1RDvFayiNF5aFDm7r5Fuw8hAgHYhWE9y7yD89kkt6ugdGLzLag8zXgSnSmEuMqMuCT30RxuOEM6iji7vXSZ7XfmnR8lacjYrBX1XdB9NL-eUUDnrne09flRbiHwz-mI9on4MtIKAw-hMXz5H-b-xY-SpuU4F-JOLBPlYDigoBWsxA0r4FiorFyeABClkc_saCGGuQZzNx2HVCLEfBOOr0elcA5zt0lyWqQ09SddUmR4TT32F-6Ok-OhaciAUev__O-VX0stcOELABMHkusjfBYgFrLO1mE6AB97t9mGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMuyu_HZjpUDYAGxCS3VozQx-9i1gAoBmAsByAsBogw8KgoKCI7fsQKV4rECYhIKEGNvbS5jbGFyZWFpLndhdGlqEgoQY29tLmNsYXJlYWkud2F0aXgBiAEBkAEBqg0CTkfIDQHqDRMI39y78dmOlQMVYp2DBx0ZKg6j8A0CiA4JsA7kxYrzGNgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjUyNjgwNzA1NzJQBroXAjgBqhgXCQAAAABRJTxBEgo1MjY4MDcwNTcyGAGyGAUYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE&num=1&cid=CAQShwIAEQoqgfOi9yV0QH-MobcZsVqA99M5MWeIwqDoQe0LZL_L8qqRiH6N-j2JXgKKlqTYiARU6MN5QiKo-5bs4rpcvyIy2d0fbem6uWk9OoB5VUM5GAVwKMImfozqO-j6-UThV8rWsOTGXef6GBQj5rfHF4BxbLiSG4rhB5qkqfl-kZo5pm60UDoQzTH8TOpq_zrVUlJgmA-Sug_DEEUXlrC78oa9vqvSVaRbj0ZrtYyT8cPa9p9hKonNDKD6j8S0Z1KZiKNH1fCWoBxGxh_h2lC8Qu-GbngQIv4Luy3-a6eUehK5j9Y7DBHy8A5NWzXdsUsQvk_MfAMuHsEC1ZNxBHxvN57MoLnlmRgB&sig=AOD64_3lIdGwtaW5tLQujPLrU4GsnwrA3w&client=ca-pub-6208165966986006&rf=1&nb=8&adurl=https://www.wati.io/%3Fcampaignid%3D20979172929%26adgroupid%3D%26adid%3D%26utm_term%3D%26utm_campaign%3Dwati_za_africa_pmax_low-intent_all_nb_open_signup%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D2848569700%26hsa_cam%3D20979172929%26hsa_grp%3D%26hsa_ad%3D%26hsa_src%3Dx%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D20989172140%26gclid%3DEAIaIQobChMI4da78dmOlQMVYp2DBx0ZKg6jEAEYASAAEgJAe_D_BwE
                  - generic [ref=f123e25]:
                    - generic [ref=f123e26]: Learn More
                    - img [ref=f123e27]
              - img [ref=f123e32] [cursor=pointer]
              - button [ref=f123e34] [cursor=pointer]:
                - img [ref=f123e35]
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
            - generic [ref=e61]: 390 x 844
          - generic [ref=e62]:
            - generic [ref=e63]: Screen size
            - generic [ref=e64]: 390 x 844 (Retina)
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
        - textbox [ref=e95]: whatsmybrowser.org/b/DI4SL
        - button "Copy" [ref=e96] [cursor=pointer]
  - generic [ref=e98]:
    - generic [ref=e99]:
      - generic:
        - generic:
          - iframe
      - iframe [ref=e100]:
        - link "Post" [ref=f125e4] [cursor=pointer]:
          - /url: https://x.com/intent/tweet?original_referer=https%3A%2F%2Fwww.whatsmybrowser.org%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Definitely%20the%20easiest%20way%20to%20find%20your%20browser%20info%2C%20and%20send%20it%20to%20your%20designer%2C%20developer%2C%20or%20support%20rep!%20whatsmybrowser.org&url=whatsmybrowser.org
          - generic [ref=f125e6]: Post
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
> 16 |         await expect(page).toHaveScreenshot({ fullPage: true });
     |         ^ Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_11\testing_responsive_layers_across_devices_test.spec.ts-snapshots\should-render-correctly-on-Mobile-1-Google-Chrome-win32.png, writing actual.
  17 |     });
  18 | }
```