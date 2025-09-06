/**
 * 简化版Live2D看板娘
 * 如果原版无法加载，使用这个版本
 */

function loadSimpleWaifu() {
    console.log("加载简化版看板娘...");
    
    // 创建简单的看板娘容器
    const waifu = document.createElement("div");
    waifu.id = "simple-waifu";
    waifu.innerHTML = `
        <div class="waifu-character">
            <div class="waifu-face">🎮</div>
            <div class="waifu-message">欢迎来到游戏中心！</div>
        </div>
    `;
    
    // 添加样式
    const style = document.createElement("style");
    style.textContent = `
        #simple-waifu {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 120px;
            height: 150px;
            z-index: 9999;
            cursor: move;
            user-select: none;
        }
        
        .waifu-character {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            padding: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border: 2px solid #667eea;
        }
        
        .waifu-face {
            font-size: 48px;
            margin-bottom: 10px;
            animation: bounce 2s infinite;
        }
        
        .waifu-message {
            font-size: 12px;
            color: #333;
            font-weight: bold;
            opacity: 0.8;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }
        
        #simple-waifu:hover .waifu-message {
            opacity: 1;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(waifu);
    
    // 添加拖拽功能
    let isDragging = false;
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
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === waifu || e.target.parentNode === waifu) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
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
        isDragging = false;
    }
    
    // 随机消息
    const messages = [
        "欢迎来到游戏中心！🎮",
        "今天想玩什么游戏呢？",
        "试试2048吧！很锻炼思维的哦~",
        "吃豆人是个经典选择！",
        "康威生命游戏很有趣！",
        "贪吃蛇挑战你的反应力！",
        "生态演化模拟很神奇！",
        "祝你玩得开心！🌟"
    ];
    
    // 每10秒换一条消息
    setInterval(() => {
        const messageEl = waifu.querySelector(".waifu-message");
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageEl.textContent = randomMessage;
    }, 10000);
    
    console.log("简化版看板娘加载完成！");
}

// 如果5秒后Live2D还没有加载，就加载简化版
setTimeout(() => {
    if (!document.getElementById("waifu")) {
        loadSimpleWaifu();
    }
}, 5000);