# -*- coding: utf-8 -*-
import random
import time
import os
import sys

def clear_screen():
    """清空屏幕"""
    os.system('cls' if os.name == 'nt' else 'clear')

def number_guessing_demo():
    """自动演示猜数字游戏"""
    clear_screen()
    print("=== 自动演示：猜数字游戏 ===\n")
    
    secret = random.randint(1, 100)
    attempts = 0
    
    print("我想了一个1-100之间的数字...")
    time.sleep(1)
    
    # 电脑自动猜测
    low, high = 1, 100
    
    while low <= high:
        guess = (low + high) // 2
        attempts += 1
        
        print(f"第{attempts}次猜测：{guess}")
        time.sleep(0.5)
        
        if guess == secret:
            print(f"恭喜！猜对了！数字是 {secret}，用了{attempts}次！")
            break
        elif guess < secret:
            print("太小了！")
            low = guess + 1
        else:
            print("太大了！")
            high = guess - 1
        
        time.sleep(0.8)
    
    print("\n游戏结束！")
    time.sleep(2)

def dice_rolling_demo():
    """掷骰子游戏演示"""
    clear_screen()
    print("=== 掷骰子游戏 ===\n")
    
    for i in range(5):
        input(f"按Enter键掷第{i+1}次骰子...")
        dice1 = random.randint(1, 6)
        dice2 = random.randint(1, 6)
        total = dice1 + dice2
        
        print(f"骰子1: {dice1}")
        print(f"骰子2: {dice2}")
        print(f"总和: {total}")
        
        if total == 7 or total == 11:
            print("幸运数字！")
        elif total == 2 or total == 12:
            print("极端数字！")
        
        print("-" * 20)
        time.sleep(1)

def main():
    """主游戏菜单"""
    while True:
        clear_screen()
        print("=== 简单终端游戏 ===")
        print("1. 自动猜数字游戏")
        print("2. 掷骰子游戏")
        print("3. 退出")
        
        choice = input("\n选择游戏 (1-3): ")
        
        if choice == "1":
            number_guessing_demo()
        elif choice == "2":
            dice_rolling_demo()
        elif choice == "3":
            print("再见！")
            break
        else:
            print("无效选择，请重试！")
            time.sleep(1)

if __name__ == "__main__":
    main()