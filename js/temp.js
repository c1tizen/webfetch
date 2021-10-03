let browsers = [
    "<p class='lineBrowser'>360-secure</p>",
    "<p class='lineBrowser'>amigo</p>",
    "<p class='lineBrowser'>android-webview-beta</p>",
    "<p class='lineBrowser'>android-webview-canary</p>",
    "<p class='lineBrowser'>android-webview-dev</p>",
    "<p class='lineBrowser'>android-webview</p>",
    "<p class='lineBrowser'>android</p>",
    "<p class='lineBrowser'>aol-explorer</p>",
    "<p class='lineBrowser'>arora</p>",
    "<p class='lineBrowser'>avant</p>",
    "<p class='lineBrowser'>axis</p>",
    "<p class='lineBrowser'>basilisk</p>",
    "<p class='lineBrowser'>beaker</p>",
    "<p class='lineBrowser'>bezillabrowser</p>",
    "<p class='lineBrowser'>brave-beta</p>",
    "<p class='lineBrowser'>brave-dev</p>",
    "<p class='lineBrowser'>brave-nightly</p>",
    "<p class='lineBrowser'>brave_1</p>",
    "<p class='lineBrowser'>brave_2</p>",
    "<p class='lineBrowser'>brave</p>",
    "<p class='lineBrowser'>browsh</p>",
    "<p class='lineBrowser'>camino</p>",
    "<p class='lineBrowser'>chrome-android_18-36</p>",
    "<p class='lineBrowser'>chrome-beta-android_25-36</p>",
    "<p class='lineBrowser'>chrome-beta_37-58</p>",
    "<p class='lineBrowser'>chrome-beta</p>",
    "<p class='lineBrowser'>chrome-canary_19-48</p>",
    "<p class='lineBrowser'>chrome-canary</p>",
    "<p class='lineBrowser'>chrome-devtools</p>",
    "<p class='lineBrowser'>chrome-dev_37-59</p>",
    "<p class='lineBrowser'>chrome-dev</p>",
    "<p class='lineBrowser'>chrome_1-11</p>",
    "<p class='lineBrowser'>chrome_12-48</p>",
    "<p class='lineBrowser'>chrome</p>",
    "<p class='lineBrowser'>chromium_1-11</p>",
    "<p class='lineBrowser'>chromium_12-48</p>",
    "<p class='lineBrowser'>chromium</p>",
    "<p class='lineBrowser'>coast</p>",
    "<p class='lineBrowser'>cruz</p>",
    "<p class='lineBrowser'>cốc-cốc</p>",
    "<p class='lineBrowser'>cờ-rôm+</p>",
    "<p class='lineBrowser'>dolphin-beta</p>",
    "<p class='lineBrowser'>dolphin-zero_1</p>",
    "<p class='lineBrowser'>dolphin-zero_2</p>",
    "<p class='lineBrowser'>dolphin_1</p>",
    "<p class='lineBrowser'>dolphin_2</p>",
    "<p class='lineBrowser'>dolphin</p>",
    "<p class='lineBrowser'>edge-beta_12-18</p>",
    "<p class='lineBrowser'>edge-beta</p>",
    "<p class='lineBrowser'>edge-canary_12-18</p>",
    "<p class='lineBrowser'>edge-canary</p>",
    "<p class='lineBrowser'>edge-dev_12-18</p>",
    "<p class='lineBrowser'>edge-dev</p>",
    "<p class='lineBrowser'>edge-tile</p>",
    "<p class='lineBrowser'>edge_12-18</p>",
    "<p class='lineBrowser'>edge</p>",
    "<p class='lineBrowser'>electron</p>",
    "<p class='lineBrowser'>epic-old</p>",
    "<p class='lineBrowser'>epic</p>",
    "<p class='lineBrowser'>epiphany-technology-preview_1</p>",
    "<p class='lineBrowser'>epiphany-technology-preview</p>",
    "<p class='lineBrowser'>epiphany</p>",
    "<p class='lineBrowser'>fake</p>",
    "<p class='lineBrowser'>falkon</p>",
    "<p class='lineBrowser'>fennec</p>",
    "<p class='lineBrowser'>firefox-aurora_23-35</p>",
    "<p class='lineBrowser'>firefox-aurora_5-22</p>",
    "<p class='lineBrowser'>firefox-beta_1</p>",
    "<p class='lineBrowser'>firefox-beta_57-70</p>",
    "<p class='lineBrowser'>firefox-beta</p>",
    "<p class='lineBrowser'>firefox-developer-edition_35-56</p>",
    "<p class='lineBrowser'>firefox-developer-edition_57-70</p>",
    "<p class='lineBrowser'>firefox-developer-edition</p>",
    "<p class='lineBrowser'>firefox-developer</p>",
    "<p class='lineBrowser'>firefox-dev</p>",
    "<p class='lineBrowser'>firefox-focus_1</p>",
    "<p class='lineBrowser'>firefox-focus_2</p>",
    "<p class='lineBrowser'>firefox-lite-old</p>",
    "<p class='lineBrowser'>firefox-lite</p>",
    "<p class='lineBrowser'>firefox-nightly_23-56</p>",
    "<p class='lineBrowser'>firefox-nightly_57-70</p>",
    "<p class='lineBrowser'>firefox-nightly_6-22</p>",
    "<p class='lineBrowser'>firefox-nightly</p>",
    "<p class='lineBrowser'>firefox-preview-beta</p>",
    "<p class='lineBrowser'>firefox-preview-nightly</p>",
    "<p class='lineBrowser'>firefox-preview</p>",
    "<p class='lineBrowser'>firefox-reality-old</p>",
    "<p class='lineBrowser'>firefox-reality</p>",
    "<p class='lineBrowser'>firefox_1.5-3</p>",
    "<p class='lineBrowser'>firefox_1</p>",
    "<p class='lineBrowser'>firefox_23-56</p>",
    "<p class='lineBrowser'>firefox_3.5-22</p>",
    "<p class='lineBrowser'>firefox_57-70</p>",
    "<p class='lineBrowser'>firefox</p>",
    "<p class='lineBrowser'>flock</p>",
    "<p class='lineBrowser'>geckoview</p>",
    "<p class='lineBrowser'>hermes</p>",
    "<p class='lineBrowser'>iceape</p>",
    "<p class='lineBrowser'>icecat</p>",
    "<p class='lineBrowser'>iceweasel</p>",
    "<p class='lineBrowser'>internet-explorer-developer-channel</p>",
    "<p class='lineBrowser'>internet-explorer-tile_10-11</p>",
    "<p class='lineBrowser'>internet-explorer_6</p>",
    "<p class='lineBrowser'>internet-explorer_7-8</p>",
    "<p class='lineBrowser'>internet-explorer_9-11</p>",
    "<p class='lineBrowser'>jsdom</p>",
    "<p class='lineBrowser'>k-meleon</p>",
    "<p class='lineBrowser'>konqueror_1-3</p>",
    "<p class='lineBrowser'>konqueror_4</p>",
    "<p class='lineBrowser'>konqueror</p>",
    "<p class='lineBrowser'>links</p>",
    "<p class='lineBrowser'>maxthon-beta_1</p>",
    "<p class='lineBrowser'>maxthon_1</p>",
    "<p class='lineBrowser'>maxthon</p>",
    "<p class='lineBrowser'>midori</p>",
    "<p class='lineBrowser'>mosaic</p>",
    "<p class='lineBrowser'>netscape_4-6</p>",
    "<p class='lineBrowser'>netscape_8</p>",
    "<p class='lineBrowser'>netscape_9</p>",
    "<p class='lineBrowser'>netsurf</p>",
    "<p class='lineBrowser'>nw.js</p>",
    "<p class='lineBrowser'>omniweb_1-5</p>",
    "<p class='lineBrowser'>omniweb_6</p>",
    "<p class='lineBrowser'>opera-beta_25-32</p>",
    "<p class='lineBrowser'>opera-beta</p>",
    "<p class='lineBrowser'>opera-developer_16-33</p>",
    "<p class='lineBrowser'>opera-developer</p>",
    "<p class='lineBrowser'>opera-gx</p>",
    "<p class='lineBrowser'>opera-mini-beta_1</p>",
    "<p class='lineBrowser'>opera-mini-beta</p>",
    "<p class='lineBrowser'>opera-mini_1</p>",
    "<p class='lineBrowser'>opera-mini_2</p>",
    "<p class='lineBrowser'>opera-mini</p>",
    "<p class='lineBrowser'>opera-neon</p>",
    "<p class='lineBrowser'>opera-next_15-24</p>",
    "<p class='lineBrowser'>opera-touch</p>",
    "<p class='lineBrowser'>opera_10-14</p>",
    "<p class='lineBrowser'>opera_15-32</p>",
    "<p class='lineBrowser'>opera_2-6</p>",
    "<p class='lineBrowser'>opera</p>",
    "<p class='lineBrowser'>opera_7-9</p>",
    "<p class='lineBrowser'>orca</p>",
    "<p class='lineBrowser'>otter</p>",
    "<p class='lineBrowser'>pale-moon-old</p>",
    "<p class='lineBrowser'>pale-moon</p>",
    "<p class='lineBrowser'>phantomjs</p>",
    "<p class='lineBrowser'>phoenix-firebird</p>",
    "<p class='lineBrowser'>puffin-old</p>",
    "<p class='lineBrowser'>puffin</p>",
    "<p class='lineBrowser'>qupzilla</p>",
    "<p class='lineBrowser'>qutebrowser</p>",
    "<p class='lineBrowser'>rekonq</p>",
    "<p class='lineBrowser'>rockmelt-ios</p>",
    "<p class='lineBrowser'>rockmelt</p>",
    "<p class='lineBrowser'>safari-ios_1-6</p>",
    "<p class='lineBrowser'>safari-ios</p>",
    "<p class='lineBrowser'>safari-technology-preview</p>",
    "<p class='lineBrowser'>safari-technology-preview_9-13</p>",
    "<p class='lineBrowser'>safari_1-7</p>",
    "<p class='lineBrowser'>safari</p>",
    "<p class='lineBrowser'>safari_8-13</p>",
    "<p class='lineBrowser'>samsung-internet-beta_5.4-9.1</p>",
    "<p class='lineBrowser'>samsung-internet-beta</p>",
    "<p class='lineBrowser'>samsung-internet-beta_9.2-9.4</p>",
    "<p class='lineBrowser'>samsung-internet-gear-vr</p>",
    "<p class='lineBrowser'>samsung-internet_3-4.2</p>",
    "<p class='lineBrowser'>samsung-internet_5.4-9.0</p>",
    "<p class='lineBrowser'>samsung-internet_5</p>",
    "<p class='lineBrowser'>samsung-internet</p>",
    "<p class='lineBrowser'>seamonkey</p>",
    "<p class='lineBrowser'>servo_1</p>",
    "<p class='lineBrowser'>servo</p>",
    "<p class='lineBrowser'>shiira</p>",
    "<p class='lineBrowser'>silk_1</p>",
    "<p class='lineBrowser'>silk_3</p>",
    "<p class='lineBrowser'>silk_4</p>",
    "<p class='lineBrowser'>silk</p>",
    "<p class='lineBrowser'>skyfire-android</p>",
    "<p class='lineBrowser'>skyfire-ios</p>",
    "<p class='lineBrowser'>sogou-mobile_1</p>",
    "<p class='lineBrowser'>sogou-mobile_2</p>",
    "<p class='lineBrowser'>sogou-mobile_3</p>",
    "<p class='lineBrowser'>sogou-mobile</p>",
    "<p class='lineBrowser'>spidermonkey</p>",
    "<p class='lineBrowser'>srware-iron</p>",
    "<p class='lineBrowser'>surf</p>",
    "<p class='lineBrowser'>tor-alpha</p>",
    "<p class='lineBrowser'>tor-nightly</p>",
    "<p class='lineBrowser'>tor-old</p>",
    "<p class='lineBrowser'>tor</p>",
    "<p class='lineBrowser'>uc-mini</p>",
    "<p class='lineBrowser'>uc-old</p>",
    "<p class='lineBrowser'>uc</p>",
    "<p class='lineBrowser'>v8-ignition</p>",
    "<p class='lineBrowser'>v8-liftoff</p>",
    "<p class='lineBrowser'>v8-orinoco</p>",
    "<p class='lineBrowser'>v8-turbofan</p>",
    "<p class='lineBrowser'>v8</p>",
    "<p class='lineBrowser'>vivaldi-old</p>",
    "<p class='lineBrowser'>vivaldi-snapshot-old</p>",
    "<p class='lineBrowser'>vivaldi-snapshot</p>",
    "<p class='lineBrowser'>vivaldi</p>",
    "<p class='lineBrowser'>webkit-nightly_1-7</p>",
    "<p class='lineBrowser'>webkit-nightly_10-13</p>",
    "<p class='lineBrowser'>webkit-nightly</p>",
    "<p class='lineBrowser'>webkit-nightly_8-9</p>",
    "<p class='lineBrowser'>webkit</p>",
    "<p class='lineBrowser'>webpositive</p>",
    "<p class='lineBrowser'>web_1</p>",
    "<p class='lineBrowser'>web_2</p>",
    "<p class='lineBrowser'>web_3</p>",
    "<p class='lineBrowser'>web</p>",
    "<p class='lineBrowser'>wyzo</p>",
    "<p class='lineBrowser'>xpress</p>",
    "<p class='lineBrowser'>yandex-alpha</p>",
    "<p class='lineBrowser'>yandex-beta</p>",
    "<p class='lineBrowser'>yandex-lite</p>",
    "<p class='lineBrowser'>yandex-old</p>",
    "<p class='lineBrowser'>yandex</p>"
]