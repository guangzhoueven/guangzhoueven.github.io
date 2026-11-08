var posts=["posts/27584/","posts/25773/","posts/20400/","posts/30389/","posts/55046/","posts/1935/","posts/44345/","posts/60655/","posts/17683/","posts/55617/","posts/7983/","posts/16107/","posts/63970/","posts/21385/","posts/4996/","posts/33641/","posts/18472/","posts/41845/","posts/14549/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img.zhheo.com/i/67d8fa75943e4.webp","descr":"分享设计与科技生活","siteshot":"https://img.zhheo.com/i/67d8fb5f563ff.webp"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg"},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","descr":"分享技术与科技生活","siteshot":"https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"guangzhou_even","link":"https://blog.guangzhoueven.dpdns.org/","avatar":"/img/logo.png","descr":"一个平凡的人","siteshot":"/img/site.png"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://bu.dusays.com/2025/04/11/67f92f6fcfb26.webp","descr":"以博客记录生活与热爱！"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO"},{"name":"小冰","link":"https://zfe.space/","avatar":"https://zfe.space/images/headimage.png","descr":"咕咕咕！"},{"name":"iMaeGoo's Blog","link":"https://www.imaegoo.com/","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站"},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平"},{"name":"I'm Luochancy","link":"https://www.luochancy.com/","avatar":"https://apac-r2.luochancy.com/img/icon.png","descr":"这是个猫猫的博客喵～"},{"name":"云游君的小站","link":"https://www.yunyoujun.cn","avatar":"https://www.yunyoujun.cn/images/avatar.jpg","descr":"希望能成为一个有趣的人。"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };