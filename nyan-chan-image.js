/**
 * 喵酱图片版看板娘 - 使用真实猫咪图片
 * 无版权卡通猫咪图片资源
 */

class NyanChanImage {
    constructor() {
        this.name = "喵酱";
        this.currentExpression = "happy";
        this.currentGame = null;
        this.isNightMode = false;
        this.musicPlaying = false;
        this.conversationHistory = [];
        this.lastInteraction = Date.now();
        
        // 无版权猫咪图片资源
        this.catImages = {
            // 推荐的无版权猫咪图片网站
            sources: [
                "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
                "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
                "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
                "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930401_1280.png"
            ],
            
            // 不同表情的猫咪图片
            expressions: {
                happy: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                excited: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
                sleeping: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                cool: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
                love: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930401_1280.png"
            },
            
            // 动态GIF图片
            animated: {
                waving: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
                dancing: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
                sleeping: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }
        };
        
        // 备用图片资源（AI生成风格）
        this.aiStyleImages = {
            kawaii: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
            chibi: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
            anime: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg"
        };
        
        // 游戏对话库
        this.gameDialogues = {
            "2048": [
                "2048是个数字合并游戏喵~ 需要动脑筋的呢！",
                "提示喵~ 相同数字的方块会合并哦！",
                "加油喵~ 我相信你能达到2048的！",
                "这个游戏很考验策略喵~ 慢慢来别着急！",
                "喵哈哈~ 数字越来越大啦！继续加油喵！",
                "被卡住了吗喵~ 试试换个方向思考呢！",
                "2048只是开始喵~ 你可以挑战更高的目标！",
                "你的逻辑思维很强喵~ 我都佩服你了呢！",
                "喵~ 记得留一些空格给新数字出现哦！",
                "玩得开心最重要喵~ 别给自己太大压力喵！"
            ],
            "吃豆人": [
                "吃豆人要小心幽灵喵~ 它们很狡猾的！",
                "吃到能量豆就可以反击了喵！",
                "快点收集所有豆子喵~ 我为你加油！",
                "幽灵有不同的性格喵~ 要学会利用它们的特点！",
                "喵~ 记住迷宫的路线，这是关键呢！",
                "不要贪心喵~ 有时候要懂得放弃一些豆子！",
                "被幽灵追得好紧喵~ 快跑到能量豆那里！",
                "你躲闪的动作好灵活喵~ 像猫咪一样！",
                "收集到樱桃了喵~ 额外加分好棒呢！",
                "吃完所有豆子了喵~ 你真是太厉害了！"
            ],
            "康威生命游戏": [
                "康威生命游戏很神奇喵~ 简单规则产生复杂生命！",
                "点击格子可以创造生命喵~ 你是造物主呢！",
                "看着细胞演化很治愈喵~ 像观察真实生命一样！",
                "喵~ 试试不同的初始图案，会有惊喜哦！",
                "生命游戏的规则很简单喵~ 但结果很复杂呢！",
                "有些图案会稳定下来喵~ 有些会不断变化！",
                "这个游戏没有胜负喵~ 享受观察的过程就好！",
                "你创造的图案很漂亮喵~ 很有艺术感呢！",
                "细胞的世界很奇妙喵~ 像微观宇宙一样！",
                "继续观察喵~ 也许会发现新的生命形态！"
            ],
            "贪吃蛇": [
                "贪吃蛇要控制好方向喵~ 别撞到自己了！",
                "吃到食物蛇身会变长喵~ 挑战越来越大！",
                "计划好路线很重要喵~ 不要把自己困住！",
                "喵~ 随着蛇变长，移动空间会越来越小！",
                "反应要快喵~ 但也不能太急躁呢！",
                "获得高分了好厉害喵~ 你是游戏高手呢！",
                "小心边缘喵~ 撞到墙就结束了呢！",
                "贪吃蛇很考验耐心喵~ 慢慢来别着急！",
                "你操控得很好喵~ 像灵活的猫咪一样！",
                "挑战更高难度喵~ 我相信你可以的！"
            ],
            "生态演化模拟": [
                "生态演化模拟好神奇喵~ 观察生命的循环！",
                "植物是生产者喵~ 为整个生态系统提供能量！",
                "草食动物吃植物喵~ 肉食动物吃草食动物！",
                "喵~ 这是一个完整的食物链呢！",
                "生态平衡很重要喵~ 每个物种都有其作用！",
                "看着种群数量变化很有趣喵~ 像在看纪录片！",
                "你可以亲手创造生命喵~ 试试看吧！",
                "不同物种之间相互作用喵~ 很复杂呢！",
                "生态系统很脆弱喵~ 需要精心维护！",
                "继续观察喵~ 也许会发现生态的奥秘！"
            ]
        };
        
        // 日常对话库
        this.dailyDialogues = {
            greetings: {
                morning: [
                    "早上好喵~ 今天想玩什么游戏呢？",
                    "早喵~ 大脑刚刚醒来，适合玩些益智游戏呢！",
                    "早安喵~ 新的一天开始啦！"
                ],
                afternoon: [
                    "下午好喵~ 来点刺激的游戏提提神吧！",
                    "喵呜~ 下午茶时间，配个游戏如何？",
                    "下午啦喵~ 需要我推荐游戏吗？"
                ],
                evening: [
                    "晚上好喵~ 静静观察生命的演化很治愈呢~",
                    "晚安喵~ 玩游戏放松一下心情吧！",
                    "夜晚了喵~ 适合玩些轻松的游戏呢~"
                ]
            },
            interactions: [
                "喵~ 有什么需要我帮忙的吗？",
                "我在这里陪着你喵~ 想玩什么游戏？",
                "点击游戏卡片听听我的介绍喵~",
                "今天心情如何喵~ 游戏可以调节心情呢！",
                "喵哈哈~ 你今天看起来很开心的样子！",
                "需要游戏推荐吗喵~ 我很擅长这个呢！",
                "喵~ 记得适时休息，保护眼睛哦！",
                "和你一起玩游戏很开心喵~",
                "我是喵酱~ 你的游戏小助手呢！",
                "喵~ 有什么问题都可以问我哦！"
            ],
            encouragements: [
                "你玩游戏的样子很专注喵~ 很可爱呢！",
                "加油加油喵~ 你一定可以的！",
                "我相信你喵~ 你是最棒的！",
                "喵~ 每个人都有自己的游戏节奏！",
                "玩得开心最重要喵~ 别太在意胜负！",
                "你的游戏技巧越来越好了喵~",
                "喵~ 继续保持这样的热情！",
                "有我在你身边喵~ 不用害怕挑战！",
                "你真的很厉害喵~ 我都佩服你了！",
                "喵~ 游戏世界因你而精彩！"
            ]
        };
        
        this.init();
    }
    
    init() {
        this.createWaifu();
        this.createToolbar();
        this.createMusicPlayer();
        this.createNightMode();
        this.bindEvents();
        this.showWelcomeMessage();
        this.startIdleAnimation();
    }
    
    createWaifu() {
        const waifu = document.createElement("div");
        waifu.id = "nyan-chan-image";
        waifu.innerHTML = `
            <div class="waifu-container">
                <div class="waifu-character">
                    <img class="waifu-image" src="${this.catImages.expressions.happy}" alt="喵酱">
                    <div class="waifu-accessory">🎮</div>
                </div>
                <div class="waifu-message">
                    <div class="message-text">欢迎来到游戏中心喵~</div>
                    <div class="message-tail"></div>
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement("style");
        style.textContent = `
            #nyan-chan-image {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 200px;
                z-index: 9999;
                cursor: move;
                user-select: none;
                font-family: 'Arial', sans-serif;
            }
            
            .waifu-container {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                border: 3px solid #ff6b9d;
                transition: all 0.3s ease;
            }
            
            .waifu-container:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
            }
            
            .waifu-character {
                text-align: center;
                margin-bottom: 10px;
                position: relative;
            }
            
            .waifu-image {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #ff6b9d;
                margin-bottom: 5px;
                animation: float 3s ease-in-out infinite;
                transition: all 0.3s ease;
            }
            
            .waifu-image:hover {
                transform: scale(1.1);
                border-color: #ff5a8a;
            }
            
            .waifu-accessory {
                position: absolute;
                top: -5px;
                right: 10px;
                font-size: 24px;
                background: #ff6b9d;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            
            .waifu-message {
                background: #ff6b9d;
                color: white;
                padding: 10px;
                border-radius: 15px;
                position: relative;
                font-size: 12px;
                text-align: center;
                min-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .message-tail {
                position: absolute;
                bottom: -8px;
                left: 20px;
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid #ff6b9d;
            }
            
            .waifu-toolbar {
                display: flex;
                justify-content: center;
                gap: 5px;
                margin-top: 10px;
            }
            
            .toolbar-btn {
                background: #ff6b9d;
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .toolbar-btn:hover {
                background: #ff5a8a;
                transform: scale(1.1);
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-5px); }
                60% { transform: translateY(-3px); }
            }
            
            @keyframes wiggle {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-5deg); }
                75% { transform: rotate(5deg); }
            }
            
            .night-mode .waifu-container {
                background: rgba(30, 30, 30, 0.95);
                border-color: #9d4edd;
            }
            
            .night-mode .waifu-image {
                border-color: #9d4edd;
            }
            
            .night-mode .waifu-accessory {
                background: #9d4edd;
            }
            
            .night-mode .waifu-message {
                background: #9d4edd;
            }
            
            .night-mode .message-tail {
                border-top-color: #9d4edd;
            }
            
            .night-mode .toolbar-btn {
                background: #9d4edd;
            }
            
            .night-mode .toolbar-btn:hover {
                background: #8b3dd1;
            }
            
            /* 图片加载失败时的备用样式 */
            .waifu-image.error {
                content: "🐱";
                font-size: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ff6b9d;
                color: white;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(waifu);
        
        // 添加图片加载错误处理
        const img = waifu.querySelector('.waifu-image');
        img.onerror = () => {
            img.classList.add('error');
            img.src = '';
            img.alt = '🐱';
        };
        
        // 添加拖拽功能
        this.makeDraggable(waifu);
    }
    
    createToolbar() {
        const toolbar = document.createElement("div");
        toolbar.className = "waifu-toolbar";
        toolbar.innerHTML = `
            <button class="toolbar-btn" title="主页" onclick="nyanChanImage.goHome()">🏠</button>
            <button class="toolbar-btn" title="对话" onclick="nyanChanImage.startConversation()">💬</button>
            <button class="toolbar-btn" title="推荐游戏" onclick="nyanChanImage.recommendGame()">🎮</button>
            <button class="toolbar-btn" title="换装" onclick="nyanChanImage.changeOutfit()">👗</button>
            <button class="toolbar-btn" title="夜间模式" onclick="nyanChanImage.toggleNightMode()">🌙</button>
            <button class="toolbar-btn" title="背景音乐" onclick="nyanChanImage.toggleMusic()">🎵</button>
            <button class="toolbar-btn" title="隐藏" onclick="nyanChanImage.hide()">❌</button>
        `;
        
        document.querySelector("#nyan-chan-image .waifu-container").appendChild(toolbar);
    }
    
    createMusicPlayer() {
        const audio = document.createElement("audio");
        audio.id = "bg-music";
        audio.loop = true;
        audio.volume = 0.3;
        
        // 创建一个简单的背景音乐（使用Web Audio API生成）
        this.createBackgroundMusic(audio);
        
        document.body.appendChild(audio);
    }
    
    createBackgroundMusic(audioElement) {
        // 使用Web Audio API创建简单的背景音乐
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        // 创建简单的旋律
        const melody = [220, 246.94, 261.63, 293.66, 329.63];
        let noteIndex = 0;
        
        setInterval(() => {
            if (this.musicPlaying) {
                oscillator.frequency.setValueAtTime(melody[noteIndex], audioContext.currentTime);
                noteIndex = (noteIndex + 1) % melody.length;
            }
        }, 1000);
        
        this.audioContext = audioContext;
        this.oscillator = oscillator;
        this.gainNode = gainNode;
    }
    
    createNightMode() {
        const nightModeBtn = document.createElement("button");
        nightModeBtn.id = "night-mode-toggle";
        nightModeBtn.innerHTML = "🌙";
        nightModeBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9998;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        `;
        
        nightModeBtn.onclick = () => this.toggleNightMode();
        document.body.appendChild(nightModeBtn);
    }
    
    bindEvents() {
        // 监听游戏页面变化
        this.currentGame = this.detectCurrentGame();
        if (this.currentGame) {
            this.showGameWelcome();
        }
        
        // 监听用户活跃度
        document.addEventListener('click', () => {
            this.lastInteraction = Date.now();
        });
        
        // 定期检查用户状态
        setInterval(() => {
            this.checkUserStatus();
        }, 60000);
    }
    
    detectCurrentGame() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        const gameMap = {
            '2048.html': '2048',
            'pacman.html': '吃豆人',
            'gameoflife.html': '康威生命游戏',
            'snake.html': '贪吃蛇',
            'ecosystem_v2.html': '生态演化模拟'
        };
        
        return gameMap[filename] || null;
    }
    
    showWelcomeMessage() {
        const hour = new Date().getHours();
        let timeOfDay;
        
        if (hour < 12) timeOfDay = 'morning';
        else if (hour < 18) timeOfDay = 'afternoon';
        else timeOfDay = 'evening';
        
        const greetings = this.dailyDialogues.greetings[timeOfDay];
        const message = greetings[Math.floor(Math.random() * greetings.length)];
        
        this.showMessage(message, 4000);
    }
    
    showGameWelcome() {
        if (!this.currentGame) return;
        
        const dialogues = this.gameDialogues[this.currentGame];
        const message = dialogues[Math.floor(Math.random() * dialogues.length)];
        
        setTimeout(() => {
            this.showMessage(message, 5000);
        }, 1000);
    }
    
    showMessage(text, duration = 3000) {
        const messageEl = document.querySelector("#nyan-chan-image .message-text");
        if (!messageEl) return;
        
        messageEl.textContent = text;
        messageEl.style.opacity = "1";
        
        setTimeout(() => {
            messageEl.style.opacity = "0";
            setTimeout(() => {
                messageEl.textContent = "";
                messageEl.style.opacity = "1";
            }, 500);
        }, duration);
    }
    
    changeOutfit() {
        const outfits = Object.keys(this.catImages.expressions);
        const currentOutfit = this.currentExpression;
        const currentIndex = outfits.indexOf(currentOutfit);
        const nextIndex = (currentIndex + 1) % outfits.length;
        
        this.currentExpression = outfits[nextIndex];
        const imgEl = document.querySelector("#nyan-chan-image .waifu-image");
        if (imgEl) {
            imgEl.src = this.catImages.expressions[this.currentExpression];
            imgEl.style.animation = "none";
            setTimeout(() => {
                imgEl.style.animation = "wiggle 0.5s ease-in-out";
            }, 10);
        }
        
        this.showMessage("喵~ 我换了新造型呢！可爱吗？", 2000);
    }
    
    startConversation() {
        const interactions = this.dailyDialogues.interactions;
        const message = interactions[Math.floor(Math.random() * interactions.length)];
        this.showMessage(message, 4000);
    }
    
    recommendGame() {
        const hour = new Date().getHours();
        let recommendations;
        
        if (hour < 12) {
            recommendations = ["2048", "康威生命游戏"];
        } else if (hour < 18) {
            recommendations = ["吃豆人", "贪吃蛇"];
        } else {
            recommendations = ["生态演化模拟", "康威生命游戏"];
        }
        
        const game = recommendations[Math.floor(Math.random() * recommendations.length)];
        const dialogues = this.gameDialogues[game];
        const message = dialogues[Math.floor(Math.random() * dialogues.length)];
        
        this.showMessage(`我推荐你玩${game}！${message}`, 5000);
    }
    
    toggleNightMode() {
        this.isNightMode = !this.isNightMode;
        document.body.classList.toggle('night-mode');
        
        const message = this.isNightMode ? "夜晚模式开启喵~ 保护眼睛很重要呢！" : "白天模式恢复喵~ 继续享受游戏吧！";
        this.showMessage(message, 3000);
    }
    
    toggleMusic() {
        if (this.musicPlaying) {
            if (this.oscillator) {
                this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            }
            this.musicPlaying = false;
            this.showMessage("音乐暂停了喵~ 需要的时候再打开哦！", 2000);
        } else {
            if (this.oscillator) {
                this.gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            }
            this.musicPlaying = true;
            this.showMessage("开始播放背景音乐喵~ 享受游戏时光吧！", 2000);
        }
    }
    
    goHome() {
        window.location.href = "games_home.html";
    }
    
    hide() {
        const waifu = document.getElementById("nyan-chan-image");
        if (waifu) {
            waifu.style.display = "none";
            this.showMessage("下次再见喵~ 我会想你的！", 2000);
        }
    }
    
    makeDraggable(element) {
        let isDragging = false;
        let currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;

        element.addEventListener("mousedown", dragStart);
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);

        function dragStart(e) {
            if (e.target.closest(".toolbar-btn")) return;
            
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target === element || e.target.parentNode === element) {
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

                element.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }
    }
    
    checkUserStatus() {
        const inactiveTime = Date.now() - this.lastInteraction;
        
        if (inactiveTime > 300000) { // 5分钟无操作
            this.showMessage("喵~ 还在吗？需要我推荐游戏吗？", 4000);
            this.lastInteraction = Date.now();
        }
    }
    
    startIdleAnimation() {
        setInterval(() => {
            const messages = [
                "喵~ 我在这里陪着你呢！",
                "今天想玩什么游戏呢？",
                "需要我帮忙吗喵？",
                "记得适时休息哦喵~",
                "喵~ 游戏要开心最重要！"
            ];
            
            if (Math.random() < 0.3) { // 30% 概率
                const message = messages[Math.floor(Math.random() * messages.length)];
                this.showMessage(message, 3000);
            }
        }, 30000); // 每30秒
    }
}

// 初始化图片版喵酱
let nyanChanImage;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        nyanChanImage = new NyanChanImage();
    });
} else {
    nyanChanImage = new NyanChanImage();
}