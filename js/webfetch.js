/*  
    WebFetch Project
    Made by: c1tizen
    Collaborator: Webster 
    2021
*/

/* 
UAParser.js v0.7.28
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */

!function(i,e){"use strict";var o="model",r="name",a="type",n="vendor",t="version",s="mobile",b="tablet",w="smarttv",d=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},l=function(i,e){return"string"==typeof i&&-1!==c(e).indexOf(c(i))},c=function(i){return i.toLowerCase()},u=function(i,e){if("string"==typeof i)return i=i.replace(/^\s\s*/,"").replace(/\s\s*$/,""),void 0===e?i:i.substring(0,255)},m=function(i,e){for(var o,r,a,n,t,s,b=0;b<e.length&&!t;){var w=e[b],d=e[b+1];for(o=r=0;o<w.length&&!t;)if(t=w[o++].exec(i))for(a=0;a<d.length;a++)s=t[++r],"object"==typeof(n=d[a])&&n.length>0?2===n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,s):this[n[0]]=n[1]:3===n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=s?s.replace(n[1],n[2]):void 0:this[n[0]]=s?n[1].call(this,s,n[2]):void 0:4===n.length&&(this[n[0]]=s?n[3].call(this,s.replace(n[1],n[2])):void 0):this[n]=s||void 0;b+=2}},p=function(i,e){for(var o in e)if("object"==typeof e[o]&&e[o].length>0){for(var r=0;r<e[o].length;r++)if(l(e[o][r],i))return"?"===o?void 0:o}else if(l(e[o],i))return"?"===o?void 0:o;return i},h={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},f={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[t,[r,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[t,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,t],[/opios[\/ ]+([\w\.]+)/i],[t,[r,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[t,[r,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[r,t],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[t,[r,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[t,[r,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[t,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[t,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[t,[r,"IE"]],[/yabrowser\/([\w\.]+)/i],[t,[r,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure Browser"],t],[/\bfocus\/([\w\.]+)/i],[t,[r,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[t,[r,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[t,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[t,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[t,[r,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[t,[r,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[t,[r,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[r,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1 Browser"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],t],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[r,t],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,"Facebook"],t],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[r,t],[/\bgsa\/([\w\.]+) .*safari\//i],[t,[r,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[t,[r,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,"Chrome WebView"],t],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[t,[r,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,t],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[t,[r,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[t,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[t,p,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[r,t],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],t],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[t,[r,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[r,t]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",c]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows (ce|mobile); ppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[["architecture",/ower/,"",c]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",c]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[n,"Samsung"],[a,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[n,"Samsung"],[a,s]],[/\((ip(?:hone|od)[\w ]*);/i],[o,[n,"Apple"],[a,s]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[n,"Apple"],[a,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[o,[n,"Huawei"],[a,b]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[o,[n,"Huawei"],[a,s]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[o,/_/g," "],[n,"Xiaomi"],[a,s]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[n,"Xiaomi"],[a,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[n,"OPPO"],[a,s]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[n,"Vivo"],[a,s]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[o,[n,"Realme"],[a,s]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[n,"Motorola"],[a,s]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[n,"Motorola"],[a,b]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[n,"LG"],[a,b]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[n,"LG"],[a,s]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[n,"Lenovo"],[a,b]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[n,"Nokia"],[a,s]],[/(pixel c)\b/i],[o,[n,"Google"],[a,b]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[n,"Google"],[a,s]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[n,"Sony"],[a,s]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[n,"Sony"],[a,b]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[n,"OnePlus"],[a,s]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[n,"Amazon"],[a,b]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[n,"Amazon"],[a,s]],[/(playbook);[-\w\),; ]+(rim)/i],[o,n,[a,b]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[n,"BlackBerry"],[a,s]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[n,"ASUS"],[a,b]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[n,"ASUS"],[a,s]],[/(nexus 9)/i],[o,[n,"HTC"],[a,b]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[n,[o,/_/g," "],[a,s]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[n,"Acer"],[a,b]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[n,"Meizu"],[a,s]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[n,"Sharp"],[a,s]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[n,o,[a,s]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[n,o,[a,b]],[/(surface duo)/i],[o,[n,"Microsoft"],[a,b]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[n,"Fairphone"],[a,s]],[/(u304aa)/i],[o,[n,"AT&T"],[a,s]],[/\bsie-(\w*)/i],[o,[n,"Siemens"],[a,s]],[/\b(rct\w+) b/i],[o,[n,"RCA"],[a,b]],[/\b(venue[\d ]{2,7}) b/i],[o,[n,"Dell"],[a,b]],[/\b(q(?:mv|ta)\w+) b/i],[o,[n,"Verizon"],[a,b]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[n,"Barnes & Noble"],[a,b]],[/\b(tm\d{3}\w+) b/i],[o,[n,"NuVision"],[a,b]],[/\b(k88) b/i],[o,[n,"ZTE"],[a,b]],[/\b(nx\d{3}j) b/i],[o,[n,"ZTE"],[a,s]],[/\b(gen\d{3}) b.+49h/i],[o,[n,"Swiss"],[a,s]],[/\b(zur\d{3}) b/i],[o,[n,"Swiss"],[a,b]],[/\b((zeki)?tb.*\b) b/i],[o,[n,"Zeki"],[a,b]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[n,"Dragon Touch"],o,[a,b]],[/\b(ns-?\w{0,9}) b/i],[o,[n,"Insignia"],[a,b]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[n,"NextBook"],[a,b]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[n,"Voice"],o,[a,s]],[/\b(lvtel\-)?(v1[12]) b/i],[[n,"LvTel"],o,[a,s]],[/\b(ph-1) /i],[o,[n,"Essential"],[a,s]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[n,"Envizen"],[a,b]],[/\b(trio[-\w\. ]+) b/i],[o,[n,"MachSpeed"],[a,b]],[/\btu_(1491) b/i],[o,[n,"Rotor"],[a,b]],[/(shield[\w ]+) b/i],[o,[n,"Nvidia"],[a,b]],[/(sprint) (\w+)/i],[n,o,[a,s]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[n,"Microsoft"],[a,s]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[n,"Zebra"],[a,b]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[n,"Zebra"],[a,s]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[n,o,[a,"console"]],[/droid.+; (shield) bui/i],[o,[n,"Nvidia"],[a,"console"]],[/(playstation [345portablevi]+)/i],[o,[n,"Sony"],[a,"console"]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[n,"Microsoft"],[a,"console"]],[/smart-tv.+(samsung)/i],[n,[a,w]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[n,"Samsung"],[a,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[n,"LG"],[a,w]],[/(apple) ?tv/i],[n,[o,"Apple TV"],[a,w]],[/crkey/i],[[o,"Chromecast"],[n,"Google"],[a,w]],[/droid.+aft(\w)( bui|\))/i],[o,[n,"Amazon"],[a,w]],[/\(dtv[\);].+(aquos)/i],[o,[n,"Sharp"],[a,w]],[/(bravia[\w- ]+) bui/i],[o,[n,"Sony"],[a,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[n,u],[o,u],[a,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[a,w]],[/((pebble))app/i],[n,o,[a,"wearable"]],[/droid.+; (glass) \d/i],[o,[n,"Google"],[a,"wearable"]],[/droid.+; (wt63?0{2,3})\)/i],[o,[n,"Zebra"],[a,"wearable"]],[/(quest( 2)?)/i],[o,[n,"Facebook"],[a,"wearable"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[n,[a,"embedded"]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[o,[a,s]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[a,b]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[a,b]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[a,s]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[n,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[t,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[r,t],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[t,r]],os:[[/microsoft (windows) (vista|xp)/i],[r,t],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[r,[t,p,h]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,"Windows"],[t,p,h]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[t,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,"Mac OS"],[t,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[t,r],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[r,t],[/\(bb(10);/i],[t,[r,"BlackBerry"]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[t,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[t,[r,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[t,[r,"webOS"]],[/crkey\/([\d\.]+)/i],[t,[r,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[r,"Chromium OS"],t],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,t],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],t],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[r,t]]},v=function(e,o){if("object"==typeof e&&(o=e,e=void 0),!(this instanceof v))return new v(e,o).getResult();var r=e||(void 0!==i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),a=o?function(i,e){var o={};for(var r in i)e[r]&&e[r].length%2==0?o[r]=e[r].concat(i[r]):o[r]=i[r];return o}(f,o):f;return this.getBrowser=function(){var i,e={};return e.name=void 0,e.version=void 0,m.call(e,r,a.browser),e.major="string"==typeof(i=e.version)?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0,e},this.getCPU=function(){var i={architecture:void 0};return m.call(i,r,a.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return m.call(i,r,a.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return m.call(i,r,a.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return m.call(i,r,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(i){return r="string"==typeof i&&i.length>255?u(i,255):i,this},this.setUA(r),this};v.VERSION="0.7.31",v.BROWSER=d([r,t,"major"]),v.CPU=d(["architecture"]),v.DEVICE=d([o,n,a,"console",s,w,b,"wearable","embedded"]),v.ENGINE=v.OS=d([r,t]),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=v),exports.UAParser=v):"function"==typeof define&&define.amd?define(function(){return v}):void 0!==i&&(i.UAParser=v);var g=void 0!==i&&(i.jQuery||i.Zepto);if(g&&!g.ua){var x=new v;g.ua=x.getResult(),g.ua.get=function(){return x.getUA()},g.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var o in e)g.ua[o]=e[o]}}}("object"==typeof window?window:this);

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
    "<p class='lineBrowser'>safari</p>",
    "<p class='lineBrowser'>safari-ios_1-6</p>",
    "<p class='lineBrowser'>safari-ios</p>",
    "<p class='lineBrowser'>safari-new</p>",
    "<p class='lineBrowser'>safari-old</p>",
    "<p class='lineBrowser'>safari-technology-preview</p>",
    "<p class='lineBrowser'>safari-technology-preview-new</p>",
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
    "<p class='lineBrowser'>webfetch</p>",
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
//

var parser = new this.UAParser();
var result = parser.getResult();
var asciiJs = document.getElementById("asciiPortPre");

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

// ENGINE
if (result.engine.version === undefined) {
    var engineOut = result.engine.name
} else {
    var engineOut = result.engine.name+" "+result.engine.version
} 
jsEg.insertAdjacentHTML("beforebegin", engineOut);

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

// ASCII IMPORT INTO DOCUMENT
var asciiRef = result.browser.name.toLowerCase()
if (browsers.includes("<p class='lineBrowser'>"+asciiRef+"</p>") === true) {
    var asciiPath = "browsers/" + asciiRef + ".jpg"
} else {
    var asciiPath = "browsers/webfetch_64x64.jpg"
}
let bbd = new imgToAscii(asciiPath,1,0);
bbd.displayColor();

// CSS COLOR HIGHLIGHT
function asciiHighlight() {
    var img1x1 = new Image();
    img1x1.crossOrigin = "anonymous";
    img1x1.src = "./browsers/1x1/" + asciiRef + ".jpg";
    var canvas = document.getElementById("asciiAnalyze");
    var ctx = canvas.getContext('2d');
    img1x1.onload = function() {
    ctx.drawImage(img1x1, 0, 0);
    img1x1.style.display = "none";
    canvas.style.display = "none";
    var pixel = ctx.getImageData(0, 0, 1, 1);
    var data = pixel.data;
    console.log(`rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`)
    var rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    document.documentElement.style.setProperty("--highlight", rgba);
    };
}
asciiHighlight()

function funcAscii() {
    if (browsers.includes("<p class='lineBrowser'>"+asciiRef+"</p>") === false) {
        var asciiPath = "browsers/webfetch.jpg"
    } else {
        var asciiPath = "browsers/" + asciiRef + ".jpg"
    }
    let bbd = new imgToAscii(asciiPath,1,0);
    asciiJs.innerHTML = "";
    bbd.displayColor();
    termIn.value = "";
    console.log("hello :)")
}

let memCount = 0
var inSpec = document.getElementById("inSpec");

// TERMINAL INPUT
var termIn = document.querySelector(".termPost");
termIn.value = "";
var termMemory = []
var telleport = document.querySelector(".wrapp").innerHTML;
var specDel = document.querySelector(".wrapp");
document.addEventListener("keydown", (y) => {
    if (y.key === "Enter") {
        memCount = 0;
        const termOut = termIn.value.toLowerCase();
        termMemory.unshift(termOut);
        console.log(termMemory)
        if (termOut.substring(0,4) == "help") {
            document.querySelector(".wrapp").remove();
            termIn.value = "";
            document.querySelector(".specs").innerHTML = helpHTML;
        } else if (termOut.substring(0,5) == "ascii") {
            asciiRef = termOut.substring(6,termOut.length);
            funcAscii()
            asciiHighlight();
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
        } else if (termOut.substring(0,7) == "palette") {
            webfetchRe();
            paletteSplit = termOut.split(" ");
            if (palettes.includes(paletteSplit[1])) {
                document.querySelector("#paletteSq").setAttribute("src","./palettes/"+paletteSplit[1]+".png")
                var telleport = document.querySelector(".wrapp").innerHTML; 
            }
            termIn.value = "";
        } else {
            termIn.value = "";
        }
    } else if (y.key === "ArrowUp") {
        if (memCount < termMemory.length) {
            memCount += 1
            console.log(memCount)
            termIn.value = termMemory[-1+memCount]
        }
    } else if (y.key === "ArrowDown") {        
        if (memCount > 1) {
            memCount -= 1
            console.log(memCount)
            termIn.value = termMemory[-1+memCount]
        }
    }
});

let inputFocus = true

function webfetchRe() {
    document.querySelector(".specs").innerHTML = "<div class='wrapp'></div>";
    document.querySelector(".wrapp").innerHTML = telleport;
    document.querySelector(".termPost").setAttribute("autofocus","");
    document.querySelector(".termPost").focus();
    setTimeout(function() {
        document.querySelector(".termPost").value = "";
        document.removeEventListener("keydown", lister);
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
        if (document.querySelector(".termPost") !== document.activeElement) {
            if (lister.key === "q" || lister.key === "Q") {
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
            }}
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
    <p class="line"><span class="highlight">palette [dark,light,pale,pastel,pure] - </span>changes color palette</p>
    <p class="line"><span class="highlight">tech - </span>lists all used projects/dependencies</p>
    <p class="line"><span class="highlight">about - </span>shows information about this project</p>
    <p class="line"><span class="highlight">help - </span>lists all commands</p>
    <br>
    <p class="line">When a "<span class="highlight">*</span>" is in the name of specification, it may not be correct.</p>
</div>
`
var aboutHTML = 
`<div class="wrapp">
    <p class="line">About <span id="yellowWF"><span id="blackText">web</span>fetch</span></p>
    <p class="line"><span class="highlight">Made by: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen">c1tizen</a></p>
    <p class="line"><span class="highlight">Collaborator: </span>Webster</p>
    <p class="line"><span class="highlight">GitHub repository: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen/webfetch">c1tizen/webfetch</a></p>
    <p class="line"><span class="highlight">License: </span><a style="color: #fff" target="blank" href="https://github.com/c1tizen/webfetch/blob/main/LICENSE">GNU General Public License v3.0</a></p>
    <p class="line">2021 - <span id="year"></span></p>
    <p class="line highlight">type "webfetch" for main screen</p>
</div>`

let palettes = ["dark","light","pale","pastel","pure"];