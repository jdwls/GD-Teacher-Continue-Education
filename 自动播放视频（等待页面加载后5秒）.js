// ==UserScript==
// @name         自动播放视频（等待页面加载后5秒）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  页面加载完成后等待5秒自动播放视频
// @author       jswd
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // 检测页面是否加载完成
    function waitForPageLoad(callback) {
        // 使用MutationObserver监听页面加载完成
        const observer = new MutationObserver(callback);
        observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    // 页面加载完成后执行的操作
    function onPageLoaded() {
        console.log('页面加载完成，等待5秒后播放视频');
        setTimeout(playVideo, 5000); // 等待5秒后播放视频
    }

    // 播放视频
    function playVideo() {
        const video = document.querySelector('video');
        if (video) {
            video.play();
            console.log('视频开始播放');
        } else {
            console.log('未找到视频元素');
        }
    }

    // 开始监听页面加载
    waitForPageLoad(onPageLoaded);
})();