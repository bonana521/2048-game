/**
 * Live2D Widget
 * 游戏中心看板娘
 */

const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;
        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        } else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
        }
        if (tag) {
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        }
    });
}

// 检查屏幕宽度，只在桌面端显示
if (screen.width >= 768) {
    console.log("正在加载Live2D看板娘...");
    
    // 加载所需的CSS和JS文件
    Promise.all([
        loadExternalResource(live2d_path + "waifu.css", "css"),
        loadExternalResource("https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/live2d.min.js", "js"),
        loadExternalResource(live2d_path + "waifu-tips.js", "js")
    ]).then(() => {
        console.log("Live2D资源加载完成");
        
        // 配置选项
        window.waifuOptions = {
            waifuPath: live2d_path + "waifu-tips.json",
            apiPath: "https://live2d.fghrsh.net/api/",
            cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api@latest/",
            tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
        };
        
        // 初始化看板娘
        initWidget();
        
        // 添加一些自定义功能
        setTimeout(() => {
            console.log("Live2D看板娘加载成功！");
            
            // 添加欢迎消息
            if (localStorage.getItem("waifu-display") === null) {
                localStorage.setItem("waifu-display", "1");
                showMessage("欢迎来到游戏中心！🎮 选择你喜欢的游戏吧！", 6000, 9);
            }
        }, 2000);
    }).catch((error) => {
        console.error("Live2D资源加载失败:", error);
    });
} else {
    console.log("移动设备不加载Live2D看板娘");
}

function initWidget() {
    const waifu = document.createElement("div");
    waifu.id = "waifu";
    waifu.innerHTML = `
        <div class="waifu-tips"></div>
        <canvas id="live2d" class="live2d"></canvas>
        <div class="waifu-tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <span class="fui-info-circle"></span>
            <span class="fui-cross"></span>
        </div>
    `;
    document.body.appendChild(waifu);
    
    // 添加工具栏事件监听
    const tools = document.querySelector(".waifu-tool");
    tools.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("fui-home")) {
            window.location.href = "games_home.html";
        } else if (target.classList.contains("fui-cross")) {
            localStorage.removeItem("waifu-display");
            showMessage("下次再见！", 1300, 11);
            waifu.style.display = "none";
        }
    });
    
    // 添加拖拽功能
    let isDraggable = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    waifu.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);

    function dragStart(e) {
        if (e.target.closest(".waifu-tool")) return;
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === waifu || e.target.parentNode === waifu) {
            isDraggable = true;
        }
    }

    function drag(e) {
        if (isDraggable) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            waifu.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDraggable = false;
    }
}

// 显示消息的函数
function showMessage(text, timeout, priority) {
    const tipsElement = document.querySelector(".waifu-tips");
    if (!tipsElement) return;
    
    if (text) {
        tipsElement.innerHTML = text;
        tipsElement.style.display = "block";
        tipsElement.style.opacity = "1";
        
        setTimeout(() => {
            tipsElement.style.opacity = "0";
            setTimeout(() => {
                tipsElement.style.display = "none";
            }, 500);
        }, timeout || 3000);
    }
}

// 监听页面变化
document.addEventListener("pjax:complete", () => {
    if (typeof initWidget === "function") {
        setTimeout(initWidget, 1000);
    }
});

// 添加键盘快捷键
document.addEventListener("keydown", (e) => {
    if (e.key === "l" && e.ctrlKey) {
        const waifu = document.getElementById("waifu");
        if (waifu) {
            waifu.style.display = waifu.style.display === "none" ? "block" : "none";
            showMessage(waifu.style.display === "none" ? "看板娘已隐藏" : "看板娘已显示", 2000, 8);
        }
    }
});