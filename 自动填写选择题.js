// ==UserScript==
// @name         自动填写选择题
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动填写选择题并提交
// @author       jswd
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 自动选择答案并提交
    function autoSelectAndSubmit() {
        // 找到所有的选项
        const options = document.querySelectorAll('input[name="response"]');

        if (options.length === 0) {
            console.log('未找到选项');
            return;
        }
        // 随机选择一个答案
        const randomIndex = Math.floor(Math.random() * options.length);
        options[randomIndex].checked = true;
        console.log('随机选择了答案：' + (randomIndex === 0 ? 'A、正确' : 'B、错误'));
        // 找到提交按钮并点击
        const submitButton = document.querySelector('.btn.u-main-btn');
        if (submitButton) {
            submitButton.click();
            console.log('自动提交成功！');
        } else {
            console.log('未找到提交按钮');
        }
    }

    // 每10秒检测一次按钮是否存在
    function checkAndRun() {
        const submitButton = document.querySelector('.btn.u-main-btn');
        if (submitButton) {
            console.log('检测到提交按钮，执行自动提交');
            autoSelectAndSubmit();
        } else {
            console.log('未检测到提交按钮，继续检测');
        }
    }

    // 页面加载完成后开始检测
    window.onload = function() {
        // 立即检查一次
        checkAndRun();
        // 每10秒检查一次
        setInterval(checkAndRun, 10000);
    };
})();