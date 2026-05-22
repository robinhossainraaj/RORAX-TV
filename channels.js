// RORAx-TV IPTV Channel Management System
// Clean vanilla JavaScript with robust M3U parsing & HLS playback control.

const DEFAULT_CHANNELS_M3U = `#EXTM3U
# Source: SRC-ID:8a0a955eed047000f93213bc
#EXTINF:-1 tvg-logo="https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png" group-title="BANGLA",BTV
https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/355ba051-9a60-48aa-adcf-5a6c64da8c5c/355ba051-9a60-48aa-adcf-5a6c64da8c5c_3_playlist.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/leielj83em5kg7h/somoy_news.png" group-title="BANGLA",Somoy TV
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://s4.gifyu.com/images/imagea02f4314e761661d.png" group-title="BANGLA",Ekattor TV
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png" group-title="BANGLA",Channel 24
https://bozztv.com/rongo/rongo-Channel24HD/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/7xwwb8hetz3w8rp/independent_tv.png" group-title="BANGLA",Independent TV
https://bozztv.com/rongo/rongo-IndependentTV/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/k7z1dsec1jfjbkn/jamuna_tv_bd.png" group-title="BANGLA",Jamuna TV
https://bozztv.com/rongo/rongo-JamunaTelevision/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/4ldi1dp09s8o6bm/atn_news_bd.png" group-title="BANGLA",ATN News
https://bozztv.com/rongo/rongo-ATNNews/index.m3u8
#EXTINF:-1 tvg-logo="https://s6.gifyu.com/images/image27cfa7002786c232.png" group-title="BANGLA",ATN Bangla
https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://www.ntvbd.com/sites/default/files/aggregator/2020/02/17/ntv-channel_0.jpg" group-title="BANGLA",NTV
https://app.ncare.live/live-orgin/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://s4.gifyu.com/images/image5c0bfa6b281be803.png" group-title="BANGLA",BanglaVision
https://app.ncare.live/live-orgin/banglav000.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://cdn.tvpassport.com/image/station/240x135/channel-i-bangla.png" group-title="BANGLA",Channel I
https://app.ncare.live/live-orgin/channeli-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png" group-title="BANGLA",Deepto TV
https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ATN_Bangla.svg/2560px-ATN_Bangla.svg.png" group-title="Bangladeshi 🇧🇩",Atn Bangla
https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/g27Qp4RD/Background-Eraser-20240628-105829130.png" group-title="Bangladeshi 🇧🇩",Ntv
https://app.ncare.live/live-orgin/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Logo_of_Deepto_TV.svg/1200px-Logo_of_Deepto_TV.svg.png" group-title="Bangladeshi 🇧🇩",Deepto Tv Backup
https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8
#EXTINF:-1 tvg-logo="https://jamunagroup.com.bd/company-images/1662487622-mdshamimislam.png" group-title="Bangladeshi News 🇧🇩",Jamuna Tv
https://bozztv.com/rongo/rongo-JamunaTelevision/index.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Enterr10_Bangla.jpeg/200px-Enterr10_Bangla.jpeg" group-title="Indian-Bangla",Enter10 Bangla
https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="https://jio.dinesh29.com.np/smart/ardinesh/logos/news18-bangla-news.png" group-title="Indian-Bangla",News18 Bangla
https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="https://yt3.ggpht.com/ytc/AMLnZu_Gxy8ywjMY6_YPX-1uYtUGA56FOfDoBsH62-ekNA=s900-c-k-c0x00ffffff-no-rj" group-title="Islamic",Saudi Quran
https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8
#EXTINF:-1 tvg-logo="https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png" group-title="Islamic",Madina Live
https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/1/1d/Love_Nature_TV.png" group-title="Documentary",Love Nature
https://cdn1.logichost.in/ajmantv/live/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.ytimg.com/vi/ZKFyzan2-xo/maxresdefault_live.jpg" group-title="MUSIC",ATN Music
https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/t4cxjxRj/Deshi-TV.jpg" group-title="LIVE TV",Deshi TV HD
https://deshitv.deshitv24.net/live/myStream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.ytimg.com/vi/GRCWbI5ZSFg/maxresdefault.jpg" group-title="BD.BANG.CH ( BDIX )",ATN BANGLA UK
https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Bangla.png" group-title="Bangla",ATN Bangla UK
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg" group-title="Bangla",Deepto TV
https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Music.png" group-title="Bangla Music",ATN Music
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Enter%2010%20Bangla.jpeg" group-title="Kolkata Bangla",Enter 10 Bangla
https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Dd%20Bangla.png" group-title="Kolkata Bangla",DD Bangla
https://d3eyhgoylams0m.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/ed7bd2c7-8d10-4051-b397-2f6b90f99acb/2e9e32a4-c4f7-49c3-96d6-c4e3660c7e3f/2.m3u8
#EXTINF:-1 tvg-logo="" group-title="Indian Bangla News",ABP Ananda
https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/1tmcNHW3/Star-Jalsha-HD.jpg" group-title="Indian Bangla",Star Jalsha HD
https://dhoomtv.xyz/live/P4B9TB9xR8/humongous2tonight/23218.ts
#EXTINF:-1 tvg-logo="https://i.postimg.cc/662vVv5x/ABP-Ananda.jpg" group-title="Indian Bangla",ABP Ananda
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-ananda/1e4516fa-023a-4807-8e3d-479b346b4a62/2.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/WzhwJYDJ/DD-Bangla.jpg" group-title="Indian Bangla",DD Bangla
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index_3.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/3wPnKf19/Sony-Aath.jpg" group-title="Indian Bangla",R Plus News
https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/tTNPLBMs/24-Ghanta.jpg" group-title="Indian Bangla",TV9 Bangla
https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9banaen8yq/liveabr/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/tTNPLBMs/24-Ghanta.jpg" group-title="Indian Bangla",Zee 24 Ghanta
https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co.com/KxC4ccD0/Casio-opening-bot-logo-4k-scaled.png" group-title="Music",9xM
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/a731c680-6a62-4174-bc98-186fe654724a/0.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co.com/KxC4ccD0/Casio-opening-bot-logo-4k-scaled.png" group-title="Music",B>U Music
https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/0.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/rmBYB7GQ/Bhojpuri-Cinema.jpg" group-title="India",B4U Movies
https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/cd1f59d6-9b5d-43f0-bfb2-6ca9edc99f27/0.m3u8
#EXTINF:-1 tvg-logo="https://static.wikia.nocookie.net/logopedia/images/5/5b/8XM_2011_logo.png" group-title="India",MU | 8XM
https://vodzong.mjunoon.tv:8087/streamtest/8XM-131/playlist.m3u8
#EXTINF:-1 tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/21/9x_Jalwa.png" group-title="India",MU | 9X Jalwa
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/47bdb49d-f6f3-4927-a9ea-12c4c5afc732/0.m3u8
#EXTINF:-1 tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/29/9x_media.png" group-title="India",MU | 9XM
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/9f1a3d57-4134-4f4c-95ea-2cb142ac63f8/0.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/FFwSjdzS/Pogo.jpg" group-title="Kids",ZB Cartoon
https://server.zillarbarta.com/zbcatun/video.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/zBCLNtGZ/Duronto.jpg" group-title="Kids",Duck TV
https://d2lmgfyblo9rak.cloudfront.net/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/ubZMeQv.jpg" group-title="Kids",Jungle Book
https://cc-4bhi5osabejc9.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4bhi5osabejc9/junglebook.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/ubZMeQv.jpg" group-title="Kids",PBS Kids
https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/zBCLNtGZ/Duronto.jpg" group-title="Kids",Rongeen TV
https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="Infotainment Channels",Wild Life
https://wildearth-plex.amagi.tv/master.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/AccuWeather_2021.svg" group-title="Infotainment Channels",ACCU WEATHER
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8?v=1
#EXTINF:-1 tvg-logo="https://is.gd/imZMIp" group-title="NEWS INTERNASIONAL",DW NEWS
https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8
#EXTINF:-1 tvg-logo="https://is.gd/ywX5PG" group-title="NEWS INTERNASIONAL",CNN NEWS
https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="https://is.gd/ih6x8j" group-title="NEWS INTERNASIONAL",NDTV NEWS
https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678-b/ndtv24x7/master.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/wgIUsFu.png" group-title="NEWS INTERNASIONAL",BBC News
https://ythls.armelin.one/channel/UCelk6aHijZq-GJBBB9YpReA.m3u8?v=1
#EXTINF:-1 tvg-logo="https://i.imgur.com/A1xzjOI.png" group-title="NEWS INTERNASIONAL",DW English
https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8?v=1
#EXTINF:-1 tvg-logo="https://i.ibb.co/M7W5zRy/images.png" group-title="NEWS INTERNASIONAL",RT News (EN) 🛜
https://rt-glb.rttv.com/live/rtnews/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/M7W5zRy/images.png" group-title="NEWS INTERNASIONAL",RTNEWS GLOBAL
https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8?v=1
#EXTINF:-1 tvg-logo="https://i.ibb.co/CzCnTHV/aljazeera-home-tv.png" group-title="NEWS INTERNASIONAL",Aljazeera HD Backup 🛜v
https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/ZnD8CtvQ/BBC.jpg" group-title="NEWS INTERNASIONAL",Breaking News
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg02703-leadstory-leadstory-samsungau/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/vH3MKVPY/CNN.jpg" group-title="NEWS INTERNASIONAL",CNA News
https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/ldXaLJK.png" group-title="NEWS INTERNASIONAL",NDTV English
https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/ldXaLJK.png" group-title="NEWS INTERNASIONAL",NDTV Hindi
https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/RZJmcSt6/9XM.jpg" group-title="NEWS INTERNASIONAL",News Max 2
https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8
#EXTINF:-1 tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCvTmUhiKDs4ehoVpFLh7xwdCNK2-N_gNFqnaOM4YRQ&s=10" group-title="Live Sports",Premier League
https://premierleagpl23.akamaized.net/hls/live/2107108/tapmad47832/level_3.m3u8
#EXTINF:-1 tvg-logo="https://encrypted mtbs 0.gstatic.com/images?q=tbn:ANd9GcRPCvTmUhiKDs4ehoVpFLh7xwdCNK2-N_gNFqnaOM4YRQ&s=10" group-title="Live Sports",Sharq Game TV
https://stream.snexus.co/live/SHARQ_GAME_TV/main_stream.m3u8
#EXTINF:-1 tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCvTmUhiKDs4ehoVpFLh7xwdCNK2-N_gNFqnaOM4YRQ&s=10" group-title="Live Sports",T Sports
https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8
#EXTINF:-1 tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCvTmUhiKDs4ehoVpFLh7xwdCNK2-N_gNFqnaOM4YRQ&s=10" group-title="Live Sports",T Sports
https://live.tsports.com/mobile_hls/tsports_live_3/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/T%20Sports.png" group-title="Bangla",T Sports
https://live.tsports.com/mobile_hls/tsports_live_2/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Gazi%20TV.jpg" group-title="Bangla",Gazi TV
https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Channel%20I.png" group-title="Bangla",Channel I
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Maasranga%20TV.png" group-title="Bangla",Maasranga TV
https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/NTV.png" group-title="Bangla",NTV
https://app.ncare.live/live-orgin/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/NTV.png" group-title="Bangla",NTV UK
https://app.ncare.live/live-orgin/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/SATV.png" group-title="Bangla",SATV
https://bozztv.com/rongo/rongo-SATV/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg" group-title="Bangla",Deepto TV
https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Desh%20TV.png" group-title="Bangla",Desh TV
https://bozztv.com/rongo/rongo-DeshTV/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Bangla%20TV.png" group-title="Bangla",Bangla TV Europe
https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Banglavision.png" group-title="Bangla",Banglavision
https://app.ncare.live/live-orgin/banglav000.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Channel%209.png" group-title="Bangla",Channel 9
https://bozztv.com/rongo/rongo-Channel9/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Green%20TV.png" group-title="Bangla",Green TV
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8
#EXTINF:-1 tvg-logo="https://ibb.co.com/nPXPTPK" group-title="Bangla",Srk Tv
https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/QmPPKgg/20240826-231747.png" group-title="Bangla",Channel S UK
https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/chsukoff.stream/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Somoy%20TV.jpeg" group-title="Bangla News",Somoy TV
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Independent%20Television.png" group-title="Bangla News",Independent TV
https://bozztv.com/rongo/rongo-IndependentTV/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ekattor%20TV.png" group-title="Bangla News",Ekattor TV
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20News.png" group-title="Bangla News",ATN News
https://bozztv.com/rongo/rongo-ATNNews/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/refs/heads/main/Star%20News.jpg" group-title="Bangla News",Star News
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/channel%2024.png" group-title="Bangla News",Channel 24
https://bozztv.com/rongo/rongo-Channel24HD/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/News%2024.png" group-title="Bangla News",News 24
https://bozztv.com/rongo/rongo-News24HD/index.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/DBC%20News.png" group-title="Bangla News",DBC News
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="Bangla Music",Music Bangla
https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/musicbangla2025.stream/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/Gfw89mC/20240804-033102.png" group-title="Relagion Channel",Peace TV Bangla
https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/598TYnC/20240827-092020.png" group-title="Relagion Channel",Peace TV English
https://dzkyvlfyge.erbvr.com/PeaceTvEnglish/index.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/598TYnC/20240827-092020.png" group-title="Relagion Channel",Peace TV Urdu
https://dzkyvlfyge.erbvr.com/PeaceTvUrdu/index.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/598TYnC/20240827-092020.png" group-title="Relagion Channel",ATN Islamic
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Islamic",Islamic TV
https://app.ncare.live/live-orgin/atnislamictv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.imgur.com/xuNhiek.png" group-title="Islamic",Islam bangla
https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/7jrjkW1/20240813-112630.png" group-title="Relagion Channel",Madani TV
https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/TtHtGkW/20240803-172601.png" group-title="Relagion Channel",Makkah TV
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Relagion Channel",EWTN TV
https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/qrpsvkxl/720/chunklist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Relagion Channel",God TV
https://hlsb-us.god.tv/GODTV/USA-480.m3u8
#EXTINF:-1 tvg-logo="" group-title="Relagion Channel",Arihant TV
https://aasthaott.akamaized.net/110923/smil:arihant.smil/chunklist_b1928000.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Movie%20Bangla.png" group-title="Bangla Movies",Movie Bangla
https://cdn.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/moviebanglalink2.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Bangla Movies",G-Serise
https://vods2.aynaott.com/gseriesDrama/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/CPmLfGs/Amar-Bangla.png" group-title="Bangla Movies",Amar Bangla
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/CPmLfGs/Amar-Bangla.png" group-title="Bangla Movies",Amar Digital
https://live-stream.utkalbongo.com/utkalbongo/stream2/hls/amarbanglatwolivestream.m3u8
#EXTINF:-1 tvg-logo="" group-title="Kolkata Bangla Movies",Bangla Movies
https://live-stream.utkalbongo.com/hls/livebanglatvstream.m3u8
#EXTINF:-1 tvg-logo="" group-title="Kolkata Bangla Movies",ZB Cinema
https://server.zillarbarta.com/ZBCINEMA/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-logo="" group-title="Indian Bangla News",R Plus News
https://thelegitpro.in/pntv/rplusnews24x7/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://jio.dinesh29.com.np/smart/ardinesh/logos/calcutta-news.png" group-title="Indian Bangla News",Calcutta News
https://akdnetwork.co.in/live/cnnew/index.m3u8
#EXTINF:-1 tvg-logo="https://jio.dinesh29.com.np/smart/ardinesh/logos/kolkata-tv.png" group-title="Indian Bangla News",Kolkata TV
https://cdn.ottlive.co.in/kolkatatv/index.m3u8
#EXTINF:-1 tvg-logo="https://jio.dinesh29.com.np/smart/ardinesh/logos/tv9-bangla.png" group-title="Indian Bangla News",TV9 Bangla
https://amg01448-samsungin-tv9bangla-samsungin-9lgnh.amagi.tv/playlist/amg01448-samsungin-tv9bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="https://jio.dinesh29.com.np/smart/ardinesh/logos/samay-kolkata.png" group-title="Indian Bangla News",Samay Kolkata
https://server.playontv.in/SAMAYKOLKATA/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="Indian Bangla News",NK
https://amg01218-republictvfast-amg01218c1-samsung-in-1918.playouts.now.amagi.tv/playlist/amg01218-republictvfast-rbangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Indian Bangla News",NK TV Bangla
https://nktv.smartstream.video/smartstream-us/nkbangla/nkbangla/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi",Sony Kal
https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/DD%20National.png" group-title="Hindi",DD National
https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Ddnational/default/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Movies",The Movie Club
https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Movies",South Station
https://cc-tke03xaj1wszc.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-tke03xaj1wszc/South_Station_IN/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/B4U%20Movies.png" group-title="Hindi Movies",B4U Movies
https://cdnb4u.wiseplayout.com/B4U_Movies/HD1080/HD1080.m3u8
#EXTINF:-1 tvg-logo="https://i.ibb.co/KjjqnRH/Picsart-23-06-30-21-35-20-283.png" group-title="Hindi Movies",Sheemaroo Bollywood
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00864-shemarooenterta-shemabollywood-ono/playlist.m3u8
#EXTINF:-1 tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisiK50nT9KXOAVZcRYy4aTrv4cVP9btrY4_s2KvXzXaSzGeUEmvgE3Gj4&s=10" group-title="Hindi Movies",Joo Music
https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Movies",BOLLYWOOD PRIME
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-prime/3850b620-3d48-4f69-a540-27e9f3262077/3.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Movies",Bollywood HD
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-hd/d3227daf-ea13-48c9-95a4-1619862d136e/0.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Movies",Bollywood Classic HD
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-classic/manifest.m3u8
#EXTINF:-1 tvg-logo="" group-title="Sports",DD Sports 2.0
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/b17adfe543354fdd8d189b110617cddd/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="Sports",RTA Sports
https://rtatv.akamaized.net/Content/HLS/Live/channel(RTA3)/variant.m3u8
#EXTINF:-1 tvg-logo="" group-title="Information",BBC Earth
https://d3u3pfhhvuad9k.cloudfront.net/playlist/amg00793-bbcstudios-bbcearta-lgus/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Information",BBC Earth
https://amg00793-bbcstudios-amg00793c3-lg-us-2528.playouts.now.amagi.tv/playlist/amg00793-bbcstudios-bbcearta-lgus/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/8k0rH0MK/CGTN-Documentary-logo.png" group-title="Information",CGTN Documentary
https://livedoc.cgtn.com/1000d/prog_index.m3u8
#EXTINF:-1 tvg-logo="" group-title="Information",Wild Earth
https://wildearth-roku.amagi.tv/masterR720P.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Travel%20XP.png" group-title="Information",Travel XP GB
https://travelxp-travelxp-1-gb.samsung.wurl.tv/3000.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/mBanglaavel%20XP.png" group-title="Information",Travel XP English NL
https://travelxp-travelxp-3-nl.samsung.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Travel%20XP.png" group-title="Information",Travel XP English EU
https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Travel%20XP.png" group-title="Information",Travel XP English NZ
https://travelxp-travelxp-1-nz.samsung.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Travel%20XP.png" group-title="Information",Travel XP English SE
https://travelxp-travelxp-1-se.samsung.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Information",CGTN Docment
https://english-livebkali.cgtn.com/live/doccgtn_1.m3u8
#EXTINF:-1 tvg-logo="" group-title="Information",Discover Pakistan TV
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/discoverpakistan.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="h" group-title="KIDS",Tom & Jarry
https://live20.bozztv.com/giatvplayout7/giatv-208314/playlist.m3u8
#EXTINF:-1 tvg-logo="https://i.postimg.cc/3RxSzVbd/image.jpg" group-title="KIDS",Zoo Moo
https://amg01553-blueantmediaasi-zoomoonz-samsungnz-rdufn.amagi.tv/playlist/amg01553-blueantmediaasi-zoomoonz-samsungnz/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="English Movies",Lotus
https://cdn1.skygo.mn/live/disk1/Lotus/HLSv3-FTA/Lotus-avc1_2089200=342-mp4a_256000_eng=343.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/English%20Movies.jpeg" group-title="English Movies",Action Hollywood Movies
https://amg01076-lightningintern-actionhollywood-samsungnz-82rry.amagi.tv/playlist/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="",YRF Music HD
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Music",B4U Music
https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/1.m3u8
#EXTINF:-1 tvg-logo="" group-title="Hindi Music",Show Box
https://epiconvh.s.llnwi.net/showbox/master_1080.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ZOOM.png" group-title="Hindi Music",Zoom
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8
#EXTINF:-1 tvg-logo="https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Al%20Jazeera%20.png" group-title="English News",Aljazeera
https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="English News",CGTN News
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png" group-title="English News",France 24
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="" group-title="English News",Sky News
https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8
#EXTINF:-1 tvg-logo="https://m.media-amazon.com/images/M/MV5BNTE0MGVkOTEtYTQzMC00ZGQ5LWEzN2ItZGNkMTgzOTg3MDI2XkEyXkFqcGdeQXVyMTMyMTM0Mzcz._V1_FMjpg_UX1000_.jpg" group-title="Bangla Movies",Tofan
https://vhoichoi.viewlift.com/Renditions/20240918/1726653787189_88a8sna0ns9a8s7tf/hls/1726653787189_88a8sna0ns9a8s7tf.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770186306600.png" group-title="News",DBC News HD
http://tvn3.chowdhury-shaheb.com/dbc/index.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770189826301.png" group-title="News",Star News
https://bozztv.com/rongo/rongo-somoy/index.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1772728412891.png" group-title="Infotainment",Islamic TV
https://app.ncare.live/live-orgin/atnislamictv.stream/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770188008067.png" group-title="Entertainment",Channel 9 HD
https://bozztv.com/rongo/rongo-Channel9/index.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770347851305.png" group-title="Movies",Cineedge HD
https://nomawnoijl.gpcdn.net/akash/cineedge/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770347327658.png" group-title="Movies",Uniques HD
https://nomawnoijl.gpcdn.net/akash/uniques/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770348388925.png" group-title="Movies",Superrix HD
https://nomawnoijl.gpcdn.net/akash/superrix/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770312098339.png" group-title="Movies",Screem
https://nomawnoijl.gpcdn.net/akash/screem/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770377900139.png" group-title="Sports",Sports Legends
https://nomawnoijl.gpcdn.net/akash/sportslegends/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770378074527.png" group-title="Sports",Flash Guys HD
https://nomawnoijl.gpcdn.net/akash/flashguys/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770379038530.png" group-title="Kids",BuddyStar HD
https://nomawnoijl.gpcdn.net/akash/buddystar/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770378560772.png" group-title="Infotainment",Luxel HD
https://nomawnoijl.gpcdn.net/akash/luxell/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770378874717.png" group-title="Kids",Joy
https://nomawnoijl.gpcdn.net/akash/joy/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770379573329.png" group-title="Kids",Funny Junior HD
https://nomawnoijl.gpcdn.net/akash/funnyjunior/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380126540.png" group-title="Movies",Crimes
https://nomawnoijl.gpcdn.net/akash/crimes/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380306806.png" group-title="Movies",True Stories
https://nomawnoijl.gpcdn.net/akash/truestories/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380460488.png" group-title="Movies",Intelligence
https://nomawnoijl.gpcdn.net/akash/intelligence/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380601958.png" group-title="Sports",Sports Range
https://nomawnoijl.gpcdn.net/akash/sportrange/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380791303.png" group-title="Sports",Thunder Er
https://nomawnoijl.gpcdn.net/akash/thunder/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380942670.png" group-title="Sports",Fighters
https://nomawnoijl.gpcdn.net/akash/fighter/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770381107924.png" group-title="Kids",Smarty
https://nomawnoijl.gpcdn.net/akash/smarty/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770381248531.png" group-title="Kids",Lucky Family
https://nomawnoijl.gpcdn.net/akash/luckyfamily/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1770381398090.png" group-title="Kids",Kids Stars
https://nomawnoijl.gpcdn.net/akash/kidsstars/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778083145889.png" group-title="Music",Party Universe
https://nomawnoijl.gpcdn.net/akash/partyuniverse/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778086065071.png" group-title="Infotainment",Al Quran
https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778083459294.png" group-title="Kids",Nikki
https://nomawnoijl.gpcdn.net/akash/nikky/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778085327477.png" group-title="Movies",Originals
https://nomawnoijl.gpcdn.net/akash/originals/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778085745609.png" group-title="Sports",Crazy Ex
https://nomawnoijl.gpcdn.net/akash/crazy_ex/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778086478755.png" group-title="Infotainment",Delicious
https://nomawnoijl.gpcdn.net/akash/delicious/playlist.m3u8
#EXTINF:-1 tvg-logo="https://tstatic.akash-go.com/cms-ui/images/custom-content/1778087459461.png" group-title="Infotainment",Program Promo
https://bozztv.com/rongo/rongo-somoy/index.m3u8
`;

// Parse the default M3U string into the DEFAULT_CHANNELS array
const DEFAULT_CHANNELS = parseM3U(DEFAULT_CHANNELS_M3U);

// Globally accessible active playlist array
let currentPlaylist = [];
let activeHls = null;

// Initialize channel data with Fallback Defaults (ignore localStorage custom uploads completely)
function loadPlaylistData() {
  currentPlaylist = [...DEFAULT_CHANNELS];
  window.currentPlaylist = currentPlaylist;
}

// Category normalizer engine to clean up and group all premium channel assets without duplicate or confusing categories
function normalizeCategory(category, name) {
  const normCat = (category || "").trim().toUpperCase();
  const normName = (name || "").trim().toLowerCase();

  // 1. ISLAMIC & SPIRITUAL
  if (
    normCat.includes("ISLAMIC") || 
    normCat.includes("RELAGION") || 
    normCat.includes("RELIGION") ||
    normName.includes("quran") ||
    normName.includes("sunnah") ||
    normName.includes("islam") ||
    normName.includes("peace tv") ||
    normName.includes("madani") ||
    normName.includes("makkah") ||
    normName.includes("god tv") ||
    normName.includes("ewtn") ||
    normName.includes("arihant")
  ) {
    return "Islamic & Spiritual";
  }

  // 2. SPORTS
  if (
    normCat.includes("SPORTS") || 
    normName.includes("sports") || 
    normName.includes("premier league") ||
    normName.includes("fighter") ||
    normName.includes("thunder er") ||
    normName.includes("crazy ex") ||
    normName.includes("flash guys")
  ) {
    return "Sports";
  }

  // 3. KIDS
  if (
    normCat.includes("KIDS") || 
    normCat.includes("CARTOON") || 
    normName.includes("kids") || 
    normName.includes("cartoon") ||
    normName.includes("jungle book") ||
    normName.includes("duck tv") ||
    normName.includes("rongeen") ||
    normName.includes("tom &") ||
    normName.includes("smarty") ||
    normName.includes("lucky family") ||
    normName.includes("buddystar") ||
    normName.includes("joy") ||
    normName.includes("funny junior") ||
    normName.includes("nikki")
  ) {
    return "Kids";
  }

  // 4. MUSIC
  if (
    normCat.includes("MUSIC") || 
    normName.includes("9xm") || 
    normName.includes("9x jalwa") || 
    normName.includes("8xm") ||
    normName.includes("yrf music") ||
    normName.includes("show box") ||
    normName.includes("party universe") ||
    normName.includes("zoom")
  ) {
    return "Music";
  }

  // 5. INFOTAINMENT
  if (
    normCat.includes("INFOTAINMENT") || 
    normCat.includes("INFORMATION") || 
    normCat.includes("DOCUMENTARY") ||
    normName.includes("nature") ||
    normName.includes("earth") ||
    normName.includes("wild") ||
    normName.includes("travel xp") ||
    normName.includes("weather") ||
    normName.includes("delicious") ||
    normName.includes("promo") ||
    normName.includes("luxel") ||
    normName.includes("pakistan tv")
  ) {
    return "Infotainment";
  }

  // 6. INTERNATIONAL NEWS
  if (
    normCat.includes("NEWS INTERNASIONAL") || 
    normCat.includes("ENGLISH NEWS") ||
    normName.includes("dw news") ||
    normName.includes("dw english") ||
    normName.includes("cnn") ||
    normName.includes("bbc news") ||
    normName.includes("rt news") ||
    normName.includes("rtnews") ||
    normName.includes("aljazeera") ||
    normName.includes("cna news") ||
    normName.includes("news max") ||
    normName.includes("france 24") ||
    normName.includes("sky news") ||
    normName.includes("cgtn news")
  ) {
    return "International News";
  }

  // 7. MOVIES
  if (
    normCat.includes("MOVIES") || 
    normCat.includes("MOVIE") || 
    normCat.includes("CINEMA") ||
    normName.includes("movie") ||
    normName.includes("movies") ||
    normName.includes("cinema") ||
    normName.includes("g-serise") ||
    normName.includes("amar bangla") ||
    normName.includes("amar digital") ||
    normName.includes("tofan") ||
    normName.includes("cineedge") ||
    normName.includes("uniques") ||
    normName.includes("screem") ||
    normName.includes("superrix") ||
    normName.includes("crimes") ||
    normName.includes("true stories") ||
    normName.includes("intelligence") ||
    normName.includes("shemaroo") ||
    normName.includes("bollywood") ||
    normName.includes("lotus") ||
    normName.includes("hollywood") ||
    normName.includes("originals")
  ) {
    return "Movies";
  }

  // 8. KOLKATA BANGLA
  if (
    normCat.includes("KOLKATA") || 
    normCat.includes("INDIAN-BANGLA") || 
    normCat.includes("INDIAN BANGLA") ||
    normName.includes("jalsha") ||
    normName.includes("r plus news") ||
    normName.includes("calcutta") ||
    normName.includes("kolkata tv") ||
    normName.includes("samay kolkata") ||
    normName.includes("dd bangla") ||
    normName.includes("abp ananda") ||
    normName.includes("news18 bangla") ||
    normName.includes("enterr10 bangla") ||
    normName.includes("enter 10 bangla") ||
    normName.includes("zee 24 ghanta") ||
    normName.includes("tv9 bangla") ||
    normName.includes("nk tv") ||
    normName.includes("nk bangla")
  ) {
    return "Kolkata Bangla";
  }

  // 9. BANGLA NEWS
  if (
    normCat.includes("BANGLA NEWS") ||
    normName.includes("somoy") ||
    normName.includes("ekattor") ||
    normName.includes("channel 24") ||
    normName.includes("independent") ||
    normName.includes("jamuna") ||
    normName.includes("atn news") ||
    normName.includes("news 24") ||
    normName.includes("dbc news") ||
    normName.includes("star news")
  ) {
    return "Bangla News";
  }

  // 10. BANGLA TV
  if (
    normCat.includes("BANGLA") || 
    normCat.includes("BANGLADESHI") || 
    normCat.includes("BD.BANG.CH") ||
    normName.includes("btv") ||
    normName.includes("atn bangla") ||
    normName.includes("ntv") ||
    normName.includes("banglavision") ||
    normName.includes("channel i") ||
    normName.includes("deepto") ||
    normName.includes("deshi tv") ||
    normName.includes("gazibdz") ||
    normName.includes("gazi tv") ||
    normName.includes("satv") ||
    normName.includes("desh tv") ||
    normName.includes("bangla tv") ||
    normName.includes("channel 9") ||
    normName.includes("green tv") ||
    normName.includes("srk tv") ||
    normName.includes("channel s uk")
  ) {
    return "Bangla TV";
  }

  // Fallback defaults
  if (normCat.includes("HINDI") || normName.includes("sony kal") || normName.includes("dd national")) {
    return "Hindi Entertainment";
  }

  return category || "General";
}

// M3U Parser logic: Parses extended M3U lists line-by-line using regular expressions
function parseM3U(m3uContent) {
  const channels = [];
  const lines = m3uContent.split('\n');
  let currentObj = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('#EXTINF:')) {
      currentObj = {
        name: "Unknown Channel",
        logo: "",
        category: "General",
        url: "",
        fallbackLogoText: "CH"
      };

      // Extract details using customized RegEx
      const logoMatch = line.match(/tvg-logo="([^"]*)"/) || line.match(/tvg-logo='([^']*)'/);
      const groupMatch = line.match(/group-title="([^"]*)"/) || line.match(/group-title='([^']*)'/);
      
      if (logoMatch && logoMatch[1]) {
        currentObj.logo = logoMatch[1];
      }
      if (groupMatch && groupMatch[1]) {
        currentObj.category = groupMatch[1];
      }

      // Extract Name (everything after comma in EXTINF line)
      const commaIndex = line.lastIndexOf(',');
      if (commaIndex !== -1) {
        const namePart = line.substring(commaIndex + 1).trim();
        if (namePart) {
          currentObj.name = namePart;
          const initials = namePart.split(' ').map(n => n[0]).join('').substring(0, 3).toUpperCase();
          currentObj.fallbackLogoText = initials || "CH";
        }
      }

      // Normalize category intelligently using name & group keys to remove duplicates
      currentObj.category = normalizeCategory(currentObj.category, currentObj.name);
    } else if (line && !line.startsWith('#') && currentObj) {
      // Line is URL
      currentObj.url = line;
      channels.push(currentObj);
      currentObj = null;
    }
  }

  return channels;
}

// Close and clean up the active HLS player
function stopActiveStream() {
  const video = document.getElementById('modal-video-element');
  if (activeHls) {
    activeHls.destroy();
    activeHls = null;
  }
  if (video) {
    video.pause();
    video.src = '';
    video.load();
  }
}

// State to track tried URLs during a single channel play session to prevent infinite loop recursion
let triedUrls = new Set();

function resolveGpUrl(url) {
  if (url.includes('/1709/')) return 'https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/355ba051-9a60-48aa-adcf-5a6c64da8c5c/355ba051-9a60-48aa-adcf-5a6c64da8c5c_3_playlist.m3u8'; // BTV
  if (url.includes('/1702/')) return 'https://bozztv.com/rongo/rongo-somoy/index.m3u8'; // Somoy TV
  if (url.includes('/1703/')) return 'https://bozztv.com/rongo/rongo-Channel24HD/index.m3u8'; // Channel 24
  if (url.includes('/1704/')) return 'https://bozztv.com/rongo/rongo-IndependentTV/index.m3u8'; // Independent TV
  if (url.includes('/1701/')) return 'https://bozztv.com/rongo/rongo-JamunaTelevision/index.m3u8'; // Jamuna TV
  if (url.includes('/1706/')) return 'https://bozztv.com/rongo/rongo-ATNNews/index.m3u8'; // ATN News
  if (url.includes('/1722/')) return 'https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8'; // ATN Bangla
  if (url.includes('/1716/')) return 'https://app.ncare.live/live-orgin/ntvuk00332211.stream/playlist.m3u8'; // NTV
  if (url.includes('/1723/')) return 'https://app.ncare.live/live-orgin/channeli-8-org.stream/playlist.m3u8'; // Channel I
  if (url.includes('/1728/')) return 'http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8'; // DBC News
  if (url.includes('/1720/')) return 'https://bozztv.com/rongo/rongo-SATV/index.m3u8'; // SATV
  if (url.includes('/1711/')) return 'https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8'; // Deepto TV
  if (url.includes('/1729/')) return 'https://bozztv.com/rongo/rongo-Channel9/index.m3u8'; // Channel 9
  if (url.includes('/1715/')) return 'https://app.ncare.live/live-orgin/banglav000.stream/playlist.m3u8'; // BanglaVision
  if (url.includes('/1713/')) return 'https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8'; // Al Quran
  if (url.includes('/1724/')) return 'https://app.ncare.live/live-orgin/atnislamictv.stream/playlist.m3u8'; // Islamic TV
  if (url.includes('deeptotv')) return 'https://bozztv.com/rongo/rongo-DeeptoTV/index.m3u8';
  return null;
}

// Core IPTV HLS Player initialization and loading state handler
function playHLSStream(streamUrl, channelName, channelLogo, fallbackText, isRetry = false) {
  const modal = document.getElementById('player-modal');
  const video = document.getElementById('modal-video-element');
  const modalTitle = document.getElementById('modal-channel-name');
  const modalLogo = document.getElementById('modal-channel-logo');
  const modalFallback = document.getElementById('modal-channel-logo-fallback');
  const spinner = document.getElementById('player-loading-spinner');
  const errorAlert = document.getElementById('player-error-alert');
  const errorText = document.getElementById('player-error-message');
  const playOverlay = document.getElementById('player-play-overlay');

  if (!isRetry) {
    triedUrls.clear();
  }

  // Intercept and resolve GP CDN URLs on the fly
  let urlToPlay = streamUrl;
  if (streamUrl && streamUrl.includes('gpcdn.net')) {
    urlToPlay = resolveGpUrl(streamUrl) || streamUrl;
  }

  triedUrls.add(streamUrl);
  triedUrls.add(urlToPlay);

  // Stop previous stream completely
  stopActiveStream();

  // Show Modal screen
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden'); // Lock scrollbar
  }

  // Set visual descriptions
  if (modalTitle) modalTitle.textContent = channelName;
  
  if (channelLogo && modalLogo && modalFallback) {
    modalLogo.src = channelLogo;
    modalLogo.classList.remove('hidden');
    modalFallback.classList.add('hidden');
    modalLogo.onerror = () => {
      modalLogo.classList.add('hidden');
      modalFallback.textContent = fallbackText;
      modalFallback.classList.remove('hidden');
    };
  } else if (modalFallback && modalLogo) {
    modalLogo.classList.add('hidden');
    modalFallback.textContent = fallbackText || "TV";
    modalFallback.classList.remove('hidden');
  }

  // Show spinner and hide old alerts
  if (spinner) {
    spinner.querySelector('span:last-of-type').textContent = isRetry ? "Signal lost, tuning alternative streams..." : "Decoding stream signals...";
    spinner.classList.remove('hidden');
  }
  if (errorAlert) errorAlert.classList.add('hidden');
  if (playOverlay) playOverlay.classList.add('hidden');

  // Trigger auto-switching callback on stream load failure
  function handlePlayFailure(errDetails) {
    console.warn("Playback failure encountered:", errDetails);
    
    // Find all alternative streams of the exact same channel name in the active playlist
    const fallbackUrls = (window.currentPlaylist || [])
      .filter(ch => ch.name.trim().toLowerCase() === channelName.trim().toLowerCase())
      .map(ch => ch.url);

    let nextUrlToTry = null;
    for (const fUrl of fallbackUrls) {
      const resolvedFUrl = fUrl.includes('gpcdn.net') ? (resolveGpUrl(fUrl) || fUrl) : fUrl;
      if (!triedUrls.has(fUrl) && !triedUrls.has(resolvedFUrl)) {
        nextUrlToTry = fUrl;
        break;
      }
    }

    if (nextUrlToTry) {
      console.log(`Auto-switching to alternative feed for ${channelName}: ${nextUrlToTry}`);
      if (spinner) {
        spinner.querySelector('span:last-of-type').textContent = `Tuning fallback feed...`;
        spinner.classList.remove('hidden');
      }
      setTimeout(() => {
        playHLSStream(nextUrlToTry, channelName, channelLogo, fallbackText, true);
      }, 1200);
    } else {
      // No more fallback feeds found, show nice user error alert
      if (spinner) spinner.classList.add('hidden');
      if (errorAlert && errorText) {
        errorText.textContent = "This channel stream is currently unavailable. This is often due to temporary network updates or regional feed restrictions. Please try another channel.";
        errorAlert.classList.remove('hidden');
      }
      stopActiveStream();
    }
  }

  // Load stream
  if (Hls.isSupported()) {
    const hls = new Hls({
      maxBufferLength: 10,
      capLevelToPlayerSize: true,
      autoStartLoad: true
    });
    activeHls = hls;
    hls.loadSource(urlToPlay);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      if (spinner) spinner.classList.add('hidden');
      video.play().catch(err => {
        console.warn("Autoplay blocked: ", err);
        if (playOverlay) playOverlay.classList.remove('hidden');
      });
    });

    hls.on(Hls.Events.ERROR, (event, data) => {
      console.error("HLS.js loading feedback: ", data);
      if (data.fatal) {
        hls.destroy();
        activeHls = null;
        handlePlayFailure(data.type);
      }
    });
  } 
  // Native Safari HLS engine support (iOS / macOS native HTML5 video player)
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = urlToPlay;
    video.addEventListener('loadedmetadata', () => {
      if (spinner) spinner.classList.add('hidden');
      video.play().catch(err => {
        console.warn("Autoplay Safari blocked: ", err);
        if (playOverlay) playOverlay.classList.remove('hidden');
      });
    });

    video.addEventListener('error', (e) => {
      handlePlayFailure("HTML5 Video Error");
    });
  } else {
    // Unsupported Browser environment
    if (spinner) spinner.classList.add('hidden');
    if (errorAlert && errorText) {
      errorText.textContent = "Your modern browser does not support HLS stream playback. Try Chrome or Safari.";
      errorAlert.classList.remove('hidden');
    }
  }
}

// Export files to global scope for use in HTML files
window.DEFAULT_CHANNELS = DEFAULT_CHANNELS;
window.currentPlaylist = currentPlaylist;
window.loadPlaylistData = loadPlaylistData;
window.parseM3U = parseM3U;
window.stopActiveStream = stopActiveStream;
window.playHLSStream = playHLSStream;

