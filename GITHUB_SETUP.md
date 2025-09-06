# GitHub仓库设置指南

## 手动创建GitHub仓库步骤

### 1. 创建GitHub仓库
1. 访问 [GitHub](https://github.com)
2. 登录你的GitHub账户
3. 点击右上角的 "+" 按钮，选择 "New repository"
4. 填写仓库信息：
   - **Repository name**: `2048-game`
   - **Description**: `一个完整的2048游戏实现，包含HTML/CSS/JavaScript和额外的Python小游戏`
   - 设置为 **Public**（公开）
   - **不要**勾选 "Add a README file"（我们已经有了）
5. 点击 "Create repository"

### 2. 获取仓库地址
创建成功后，复制仓库的HTTPS地址，类似：
```
https://github.com/your-username/2048-game.git
```

### 3. 连接并推送代码
在命令行中运行：

```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/2048-game.git

# 重命名分支为main（如果需要）
git branch -M main

# 推送到GitHub
git push -u origin main
```

### 4. 验证推送成功
访问你的GitHub仓库页面，应该能看到所有文件已经上传。

## 替代方案：使用GitHub CLI

如果你安装了GitHub CLI，可以运行：

```bash
# 登录GitHub
gh auth login

# 创建仓库并推送
gh repo create 2048-game --public --source=. --remote=origin --push
```

## 项目文件说明

- `2048.html` - 主要的2048游戏
- `README.md` - 项目说明文档
- `guess_game.py` - 猜数字游戏
- `hangman_game.py` - Hangman猜词游戏
- `auto_game.py` - 自动演示游戏
- `index.html` - 欢迎页面

## 下一步

1. 完成上述步骤后，你的项目就成功发布到GitHub了！
2. 你可以分享仓库链接给朋友
3. 考虑添加许可证文件（LICENSE）
4. 可以添加更多功能或改进

---

🎮 享受你的2048游戏！