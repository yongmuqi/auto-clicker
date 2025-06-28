// auto-click.js
(function autoClickLoop() {
    const isClickable = el => el && !el.disabled && el.offsetParent !== null;

    setInterval(() => {
        // 查找“Verify”按钮并点击
        const verifyBtn = Array.from(document.querySelectorAll('button, input[type="button"], a'))
            .find(el => /verify/i.test(el.innerText || el.value) && isClickable(el));
        if (verifyBtn) {
            console.log('🔘 点击 Verify');
            verifyBtn.click();
        }

        // 查找“Continue”按钮并点击
        const continueBtn = Array.from(document.querySelectorAll('button, input[type="button"], a'))
            .find(el => /continue/i.test(el.innerText || el.value) && isClickable(el));
        if (continueBtn) {
            console.log('🔘 点击 Continue');
            continueBtn.click();
        }
    }, 500); // 每 500ms 检查一次
})();
