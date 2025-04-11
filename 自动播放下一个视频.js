// ==UserScript==
// @name         自动播放下一个视频
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动跳转到下一个视频并立即播放
// @author       Jsdw
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 检测视频是否播放完成
    function checkVideoEnded() {
        var player = document.querySelector('video');
        if (player && !player.paused && player.currentTime >= player.duration - 1) {
            // 视频播放完成，跳转到下一个视频
            goNext();
        }
    }

    // 跳转到下一个视频
    function goNext() {
        var $this = $('.aidHidden.ing');
        var index = $('.aidHidden').index($this);
        if (index != $('.aidHidden').length - 1) {
            var $next = $this.next();
            studyCourse('c_350247cc7ce2458d98fd9afa7b14c581', '', $next.val());
        } else {
            alert('已经是最后一个活动');
        }
    }

    // 添加定时器，每秒检查一次视频是否播放完成
    setInterval(checkVideoEnded, 1000);
})();