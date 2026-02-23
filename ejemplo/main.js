document.addEventListener('DOMContentLoaded', function () {
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });

(function(d,t){
      var BASE_URL="https://console-test.nauto.la";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.async=true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken:"aLB9L2gTMooMmeqhLcEGLVX7",
            baseUrl:BASE_URL
          });
        }
      };
    })(document,"script");