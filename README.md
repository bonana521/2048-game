# 2048游戏

一个用HTML、CSS和JavaScript实现的经典2048游戏。

## 游戏特色

- 🎮 完整的2048游戏逻辑
- 🎨 现代化的渐变背景设计
- 📱 响应式设计，支持移动设备
- ⌨️ 键盘控制（方向键或WASD）
- 👆 触摸滑动支持
- 🏆 分数统计和最高分记录
- 💾 本地存储最高分
- 🎯 游戏结束检测

## 如何游玩

### 键盘控制
- **方向键** 或 **WASD** 控制方块移动
- 相同数字的方块会合并
- 目标是合并出2048方块

### 触摸控制
- 在移动设备上滑动手指来控制方向

### 游戏规则
1. 使用方向键移动所有方块
2. 相同数字的方块碰撞时会合并成一个
3. 每次移动后会随机生成一个新的2或4
4. 当无法移动时游戏结束
5. 目标是创造出2048方块

## 技术栈

- **HTML5** - 游戏结构
- **CSS3** - 样式和动画
- **JavaScript** - 游戏逻辑
- **LocalStorage** - 最高分存储

## 安装和运行

1. 克隆仓库：
```bash
git clone https://github.com/your-username/2048-game.git
cd 2048-game
```

2. 打开游戏：
```bash
# 直接在浏览器中打开 2048.html
# 或者使用本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000/2048.html
```

## 项目结构

```
2048-game/
├── 2048.html          # 游戏主文件
├── README.md          # 项目说明
└── guess_game.py      # 猜数字游戏（额外）
├── hangman_game.py    # Hangman游戏（额外）
├── auto_game.py       # 自动演示游戏（额外）
└── index.html         # 欢迎页面（额外）
```

## 游戏截图

[游戏截图将在此处显示]

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 开发者

- 开发者：Your Name
- 技术支持：Claude Code

---

**享受游戏！** 🎮