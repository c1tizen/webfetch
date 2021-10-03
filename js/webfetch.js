/*  WebFetch Project
    Made by: c1tizen
    Thanks to: Webster 
    2021

    Using UAParser for detection of: browser, device, engine, os, cpu
    Other parameters are detected by WebFetch.
*/

/* UAParser.js v0.7.28
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */

!function(i,e){"use strict";var o="model",r="name",a="type",t="vendor",n="version",s="mobile",b="tablet",w="smarttv",d=function(i){var e={};for(var o in i)e[i[o].toUpperCase()]=i[o];return e},l=function(i,e){return"string"==typeof i&&-1!==c(e).indexOf(c(i))},c=function(i){return i.toLowerCase()},u=function(i,e){if("string"==typeof i)return i=i.replace(/^\s+|\s+$/g,""),void 0===e?i:i.substring(0,255)},m=function(i,e){for(var o,r,a,t,n,s,b=0;b<e.length&&!n;){var w=e[b],d=e[b+1];for(o=r=0;o<w.length&&!n;)if(n=w[o++].exec(i))for(a=0;a<d.length;a++)s=n[++r],"object"==typeof(t=d[a])&&t.length>0?2==t.length?"function"==typeof t[1]?this[t[0]]=t[1].call(this,s):this[t[0]]=t[1]:3==t.length?"function"!=typeof t[1]||t[1].exec&&t[1].test?this[t[0]]=s?s.replace(t[1],t[2]):void 0:this[t[0]]=s?t[1].call(this,s,t[2]):void 0:4==t.length&&(this[t[0]]=s?t[3].call(this,s.replace(t[1],t[2])):void 0):this[t]=s||void 0;b+=2}},p=function(i,e){for(var o in e)if("object"==typeof e[o]&&e[o].length>0){for(var r=0;r<e[o].length;r++)if(l(e[o][r],i))return"?"===o?void 0:o}else if(l(e[o],i))return"?"===o?void 0:o;return i},g={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},v={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[n,[r,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[n,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,n],[/opios[\/ ]+([\w\.]+)/i],[n,[r,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[n,[r,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[r,n],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[n,[r,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[n,[r,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[n,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[n,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[n,[r,"IE"]],[/yabrowser\/([\w\.]+)/i],[n,[r,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure Browser"],n],[/\bfocus\/([\w\.]+)/i],[n,[r,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[n,[r,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[n,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[n,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[n,[r,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[n,[r,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[n,[r,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[r,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1 Browser"],n],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],n],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[r,n],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,"Facebook"],n],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[r,n],[/\bgsa\/([\w\.]+) .*safari\//i],[n,[r,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[n,[r,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,"Chrome WebView"],n],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[n,[r,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,n],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[n,[r,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[n,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[n,p,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[r,n],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],n],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[n,[r,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[r,n]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",c]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows (ce|mobile); ppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[["architecture",/ower/,"",c]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",c]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[t,"Samsung"],[a,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[t,"Samsung"],[a,s]],[/\((ip(?:hone|od)[\w ]*);/i],[o,[t,"Apple"],[a,s]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[t,"Apple"],[a,b]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[o,[t,"Huawei"],[a,b]],[/huawei([-\w ]+)[;\)]/i,/\b(nexus 6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\) ]/i],[o,[t,"Huawei"],[a,s]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte)?[_ ]?(?:\d?\w?)[_ ]?(?:plus)?) bui/i],[[o,/_/g," "],[t,"Xiaomi"],[a,s]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[t,"Xiaomi"],[a,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[o,[t,"OPPO"],[a,s]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[t,"Vivo"],[a,s]],[/\b(rmx[12]\d{3})(?: bui|;)/i],[o,[t,"Realme"],[a,s]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[t,"Motorola"],[a,s]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[t,"Motorola"],[a,b]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[t,"LG"],[a,b]],[/(lm-?f100[nv]?|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+) bui/i],[o,[t,"LG"],[a,s]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[t,"Lenovo"],[a,b]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[t,"Nokia"],[a,s]],[/(pixel c)\b/i],[o,[t,"Google"],[a,b]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[t,"Google"],[a,s]],[/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[t,"Sony"],[a,s]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[t,"Sony"],[a,b]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1) bui/i,/oneplus (a\d{4})[) ]/i],[o,[t,"OnePlus"],[a,s]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[t,"Amazon"],[a,b]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[t,"Amazon"],[a,s]],[/(playbook);[-\w\),; ]+(rim)/i],[o,t,[a,b]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[t,"BlackBerry"],[a,s]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[t,"ASUS"],[a,b]],[/ (z[es]6[027][01][km][ls]|zenfone \d\w?)\b/i],[o,[t,"ASUS"],[a,s]],[/(nexus 9)/i],[o,[t,"HTC"],[a,b]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[t,[o,/_/g," "],[a,s]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[t,"Acer"],[a,b]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[t,"Meizu"],[a,s]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[t,o,[a,s]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[t,o,[a,b]],[/(surface duo)/i],[o,[t,"Microsoft"],[a,b]],[/droid [\d\.]+; (fp\du?) b/i],[o,[t,"Fairphone"],[a,s]],[/(u304aa)/i],[o,[t,"AT&T"],[a,s]],[/\bsie-(\w*)/i],[o,[t,"Siemens"],[a,s]],[/\b(rct\w+) b/i],[o,[t,"RCA"],[a,b]],[/\b(venue[\d ]{2,7}) b/i],[o,[t,"Dell"],[a,b]],[/\b(q(?:mv|ta)\w+) b/i],[o,[t,"Verizon"],[a,b]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[t,"Barnes & Noble"],[a,b]],[/\b(tm\d{3}\w+) b/i],[o,[t,"NuVision"],[a,b]],[/\b(k88) b/i],[o,[t,"ZTE"],[a,b]],[/\b(nx\d{3}j) b/i],[o,[t,"ZTE"],[a,s]],[/\b(gen\d{3}) b.+49h/i],[o,[t,"Swiss"],[a,s]],[/\b(zur\d{3}) b/i],[o,[t,"Swiss"],[a,b]],[/\b((zeki)?tb.*\b) b/i],[o,[t,"Zeki"],[a,b]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[t,"Dragon Touch"],o,[a,b]],[/\b(ns-?\w{0,9}) b/i],[o,[t,"Insignia"],[a,b]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[t,"NextBook"],[a,b]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[t,"Voice"],o,[a,s]],[/\b(lvtel\-)?(v1[12]) b/i],[[t,"LvTel"],o,[a,s]],[/\b(ph-1) /i],[o,[t,"Essential"],[a,s]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[t,"Envizen"],[a,b]],[/\b(trio[-\w\. ]+) b/i],[o,[t,"MachSpeed"],[a,b]],[/\btu_(1491) b/i],[o,[t,"Rotor"],[a,b]],[/(shield[\w ]+) b/i],[o,[t,"Nvidia"],[a,b]],[/(sprint) (\w+)/i],[t,o,[a,s]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[t,"Microsoft"],[a,s]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[t,"Zebra"],[a,b]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[t,"Zebra"],[a,s]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[t,o,[a,"console"]],[/droid.+; (shield) bui/i],[o,[t,"Nvidia"],[a,"console"]],[/(playstation [345portablevi]+)/i],[o,[t,"Sony"],[a,"console"]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[t,"Microsoft"],[a,"console"]],[/smart-tv.+(samsung)/i],[t,[a,w]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[t,"Samsung"],[a,w]],[/(?:nux; netcast.+smarttv|lg netcast\.tv-201\d)/i],[[t,"LG"],[a,w]],[/(apple) ?tv/i],[t,[o,"Apple TV"],[a,w]],[/crkey/i],[[o,"Chromecast"],[t,"Google"],[a,w]],[/droid.+aft(\w)( bui|\))/i],[o,[t,"Amazon"],[a,w]],[/\(dtv[\);].+(aquos)/i],[o,[t,"Sharp"],[a,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[t,u],[o,u],[a,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[a,w]],[/((pebble))app/i],[t,o,[a,"wearable"]],[/droid.+; (glass) \d/i],[o,[t,"Google"],[a,"wearable"]],[/droid.+; (wt63?0{2,3})\)/i],[o,[t,"Zebra"],[a,"wearable"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[t,[a,"embedded"]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[o,[a,s]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[a,b]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[a,b]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[a,s]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[t,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[n,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[n,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[r,n],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[n,r]],gpu:[[/(intel|nvidia|sis|amd|apple|powervr)\W? (.+)/i,/(((?:radeon|adreno|geforce|mali).+))/i],[[t,p,{AMD:"Radeon",ARM:"Mali",NVIDIA:"GeForce",Qualcomm:"Adreno"}],[o,/ ?(\(.+?\)| direct3d.+| opengl.+|\/.+$| gpu$)/gi,""]]],os:[[/microsoft (windows) (vista|xp)/i],[r,n],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[r,[n,p,g]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,"Windows"],[n,p,g]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[n,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,"Mac OS"],[n,/_/g,"."]],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[r,n],[/\(bb(10);/i],[n,[r,"BlackBerry"]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[n,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[n,[r,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[n,[r,"webOS"]],[/crkey\/([\d\.]+)/i],[n,[r,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[r,"Chromium OS"],n],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopc]{0,4}bsd|dragonfly) ?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,n],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],n],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[r,n]]},f=function(e,o){if("object"==typeof e&&(o=e,e=void 0),!(this instanceof f))return new f(e,o).getResult();var r,a=e||(void 0!==i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),t=o?function(i,e){var o={};for(var r in i)e[r]&&e[r].length%2==0?o[r]=e[r].concat(i[r]):o[r]=i[r];return o}(v,o):v;if(this.getBrowser=function(){var i,e={};return e.name=void 0,e.version=void 0,m.call(e,a,t.browser),e.major="string"==typeof(i=e.version)?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0,e},this.getCPU=function(){var i={architecture:void 0};return m.call(i,a,t.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return m.call(i,a,t.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return m.call(i,a,t.engine),i},this.getGPU=function(){var i={vendor:void 0,model:void 0};return r&&m.call(i,r,t.gpu),i},this.getOS=function(){var i={name:void 0,version:void 0};return m.call(i,a,t.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU(),gpu:this.getGPU()}},this.getRenderer=function(){return r},this.setRenderer=function(i){return r=i,this},this.getUA=function(){return a},this.setUA=function(i){return a="string"==typeof i&&i.length>255?u(i,255):i,this},this.setUA(a),void 0!==i&&i.document){var n=document.createElement("canvas"),s=n.getContext?n.getContext("webgl2")||n.getContext("webgl")||n.getContext("experimental-webgl"):void 0;this.setRenderer(s&&s.getParameter&&s.getExtension&&s.getExtension("WEBGL_debug_renderer_info")?s.getParameter(s.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL):void 0)}return this};f.VERSION="0.7.28-gpu-experimental",f.BROWSER=d([r,n,"major"]),f.CPU=d(["architecture"]),f.DEVICE=d([o,t,a,"console",s,w,b,"wearable","embedded"]),f.ENGINE=f.OS=d([r,n]),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=f),exports.UAParser=f):"function"==typeof define&&define.amd?define(function(){return f}):void 0!==i&&(i.UAParser=f);var h=void 0!==i&&(i.jQuery||i.Zepto);if(h&&!h.ua){var x=new f;h.ua=x.getResult(),h.ua.get=function(){return x.getUA()},h.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var o in e)h.ua[o]=e[o]}}}("object"==typeof window?window:this);

//

var parser = new this.UAParser();
var result = parser.getResult();
var asciiJs = document.getElementById("asciiPortPre");
var gpuJs = document.getElementById("gpuJs");

// OPERATING SYSTEM
var os = result.os.name+" "+result.os.version;
var jsOs = document.getElementById("jsOs");
jsOs.insertAdjacentHTML("beforebegin", os);

// BROWSER
var root = document.querySelector(':root');
var browser = result.browser.name+" "+result.browser.version;
var jsBr = document.getElementById("jsBr");
jsBr.insertAdjacentHTML("beforebegin",browser);

// SHORT BROWSER
var htmlOs = "<span class='highlight'>" + result.browser.name.toLowerCase() + "</span>";
var shortOs = document.getElementById("shortOs");
shortOs.insertAdjacentHTML("beforebegin", htmlOs);

// SCREEN SIZE
var whOut = document.getElementById("resolution");
var widthNoFloat = Math.trunc(window.screen.width * window.devicePixelRatio);
var heightNoFloat = Math.trunc(window.screen.height * window.devicePixelRatio);
whOut.insertAdjacentHTML("beforebegin", widthNoFloat + " x " + heightNoFloat);
if (result.gpu.vendor !== undefined) {
    var gpuHTML = '<p class="line"><span class="highlight">GPU: </span><span id="gpuJs">'+result.gpu.vendor+" "+result.gpu.model+'</span></p>'
    gpuJs.insertAdjacentHTML("beforebegin", gpuHTML);
}


// ENGINE
if (result.engine.version === undefined) {
    var engineOut = result.engine.name
} else {
    var engineOut = result.engine.name+" "+result.engine.version
} 
jsEg.insertAdjacentHTML("beforebegin", engineOut);

// RAM detect - chrome only?


if (navigator.deviceMemory !== undefined) {
    var ramHTML = '<p class="line"><span class="highlight">RAM: </span>'+navigator.deviceMemory+'GB<span id="gpuJs"></span></p>';
    gpuJs.insertAdjacentHTML("beforebegin", ramHTML);
}

// DEVICE VENDOR
if (result.device.vendor !== undefined) {
    var deviceHTML = '<p class="line"><span class="highlight">Device vendor: </span>'+result.device.vendor+'<span id="gpuJs"></span></p>'
    jsEg.insertAdjacentHTML("beforebegin", deviceHTML);
}

// CPU ARCHITECTURE
if (result.cpu.architecture !== undefined) {
    var cpuHTML = '<p class="line"><span class="highlight">CPU architecture: </span>'+result.cpu.architecture+'<span id="cpuarchJs"></span></p>'
    jsOs.insertAdjacentHTML("beforebegin", cpuHTML);
}

var asciiRef = result.browser.name.toLowerCase()
var asciiPath = "browsers/" + asciiRef + "_64x64.jpg"
let bbd = new imgToAscii(asciiPath,1,0);
bbd.displayColor();

var inSpec = document.getElementById("inSpec");

// TERMINAL INPUT
var termIn = document.querySelector(".termPost");
termIn.value = "";

var telleport = document.querySelector(".wrapp").innerHTML;

var specDel = document.querySelector(".wrapp");
document.addEventListener("keydown", (y) => {
    if (y.key === "Enter") {
        const termOut = termIn.value.toLowerCase()
        if (termOut.substring(0,4) == "help") {
            document.querySelector(".wrapp").remove();
            termIn.value = "";
            document.querySelector(".specs").innerHTML = helpHTML;
        } else if (termOut.substring(0,5) == "ascii") {
            asciiRef = termOut.substring(6,termOut.length);
            var asciiPath = "browsers/" + asciiRef + "_64x64.jpg"
            let bbd = new imgToAscii(asciiPath,1,0);
            asciiJs.innerHTML = "";
            bbd.displayColor();
            termIn.value = "";
        } else if (termOut.substring(0,8) == "webfetch") {
            webfetchRe();
        } else if (termOut.substring(0,5) == "about") {
            document.querySelector(".wrapp").remove();
            termIn.value = "";
            document.querySelector(".specs").innerHTML = aboutHTML;
            document.getElementById("year").innerHTML = new Date().getFullYear();
        } else if (termOut.substring(0,4) == "tech") {
            document.querySelector(".wrapp").remove();
            termIn.value = "";
            document.querySelector(".specs").innerHTML = techHTML;
        } else if (termOut.substring(0,8) == "browsers") {
            document.querySelector(".wrapp").remove();
            termIn.value = "";
            document.querySelector(".termPost").removeAttribute("autofocus");
            browserList()
            document.querySelector(".wrapp").focus();
        } else {
            termIn.value = "";
        }
    }
});

function webfetchRe() {
    document.querySelector(".specs").innerHTML = "<div class='wrapp'></div>";
    document.querySelector(".wrapp").innerHTML = telleport;
    document.querySelector(".termPost").setAttribute("autofocus","");
    document.querySelector(".termPost").focus();
    setTimeout(function() {
        document.querySelector(".termPost").value = "";
    }, 0.1);
}

function browserList() {
    document.querySelector(".specs").innerHTML += `
    <div class='wrapp' tabindex='-1'>
        <span class='highlight'>Total: ` + browsers.length + `</span><div class='browser-view'></div>`;
    for (var b = 0; b < 20; b++) {
        document.querySelector(".browser-view").innerHTML += browsers[b];
    }
    var listPage = 20
    document.querySelector(".specs").innerHTML += "<span class='highlight'>[q] - Quit, [b] - Back, [n] - Next</span>";
    document.querySelector(".specs").innerHTML += "</div>"
    document.addEventListener("keydown", (lister) => {
        if (lister.key === "q" || lister.key === "Q") {
            document.removeEventListener("keydown", lister);
            webfetchRe();
        } else if (lister.key === "b" || lister.key === "B") {
            if (listPage > 20) {
                console.log(listPage)
                document.querySelector(".browser-view").innerHTML = "";
                for (var b = 0; b < 20; b++) {
                    document.querySelector(".browser-view").innerHTML += browsers[listPage-40+b];
                }
                listPage -= 20
            }
        } else if (lister.key === "n" || lister.key === "N") {
            if (listPage < browsers.length) {
                document.querySelector(".browser-view").innerHTML = "";
                for (var b = 0; b < 20; b++) {
                    if (browsers[listPage+b] !== undefined) {
                        document.querySelector(".browser-view").innerHTML += browsers[listPage+b];
                    } else {
                        document.querySelector(".browser-view").innerHTML += "<p style='opacity: 0' class='lineBrowser'>-</p>";
                    }
                    
                }
                listPage += 20
            }
        }
    })
};  
var techHTML = 
`<div class="wrapp">
    <p class="line"><span class="highlight">'UAParser.js' for detecting system/browser information: </span><a style="color: #fff" target="blank" href="https://github.com/faisalman/ua-parser-js">faisalman/ua-parser-js</a></p>

    <p class="line"><span class="highlight">'imgToAscii' for converting to ASCII: </span><a style="color: #fff" target="blank" href="https://github.com/victorqribeiro/imgToAscii">victorqribeiro/imgToAscii</a></p>

    <p class="line"><span class="highlight">'browser-logos' for browser logos: </span><a style="color: #fff" target="blank" href="https://github.com/alrra/browser-logos">alrra/browser-logos</a></p>

    type "webfetch" for main screen
</div>
`
var helpHTML = 
`<div class="wrapp">
    <p class="line"><span class="highlight">webfetch - </span>runs webfetch</p>
    <p class="line"><span class="highlight">ascii [browser_name] - </span>changes ascii art</p>
    <p class="line"><span class="highlight">browsers - </span>lists ascii supported browsers</p>
    <p class="line"><span class="highlight">tech - </span>lists all used projects/dependencies</p>
    <p class="line"><span class="highlight">about - </span>shows information about this project</p>
    <p class="line"><span class="highlight">help - </span>lists all commands</p>
</div>
`
var aboutHTML = 
`<div class="wrapp">
    <p class="line">About WebFetch</p>
    <p class="line"><span class="highlight">Made by: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen">c1tizen</a></p>
    <p class="line"><span class="highlight">Collaborator: </span>Webster</p>
    <p class="line"><span class="highlight">GitHub repository: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen/webfetch">c1tizen/webfetch</a></p>
    <p class="line"><span class="highlight">License: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen/webfetch/blob/main/LICENSE">MIT License</a></p>
    <p class="line">2021 - <span id="year"></span></p>
    type "webfetch" for main screen
</div>`
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