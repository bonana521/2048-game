# -*- coding: utf-8 -*-
import random
import os
import platform

def clear_screen():
    """清空屏幕"""
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')

def hangman_game():
    words = [
        'PYTHON', 'COMPUTER', 'PROGRAMMING', 'ALGORITHM', 'DATABASE',
        'FUNCTION', 'VARIABLE', 'INTERNET', 'SOFTWARE', 'HARDWARE',
        'NETWORK', 'SECURITY', 'DEVELOPER', 'FRAMEWORK', 'LIBRARY'
    ]
    
    word = random.choice(words)
    guessed_letters = set()
    wrong_guesses = 0
    max_wrong = 6
    
    # Hangman drawing
    hangman_parts = [
        "  +---+",
        "  |   |",
        "      |",
        "      |",
        "      |",
        "      |",
        "========="
    ]
    
    def display_hangman():
        display = hangman_parts.copy()
        if wrong_guesses >= 1:
            display[2] = "  O   |"
        if wrong_guesses >= 2:
            display[3] = "  |   |"
        if wrong_guesses >= 3:
            display[3] = " /|   |"
        if wrong_guesses >= 4:
            display[3] = " /|\\  |"
        if wrong_guesses >= 5:
            display[4] = " /    |"
        if wrong_guesses >= 6:
            display[4] = " / \\  |"
        
        for line in display:
            print(line)
    
    while wrong_guesses < max_wrong:
        clear_screen()
        print("=== HANGMAN GAME ===")
        display_hangman()
        
        # Display word with guessed letters
        display_word = ""
        for letter in word:
            if letter in guessed_letters:
                display_word += letter + " "
            else:
                display_word += "_ "
        
        print(f"\nWord: {display_word}")
        print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
        print(f"Guessed letters: {', '.join(sorted(guessed_letters)) if guessed_letters else 'None'}")
        
        # Check if player won
        if all(letter in guessed_letters for letter in word):
            print(f"\n🎉 Congratulations! You guessed the word: {word}")
            break
        
        # Get player's guess
        guess = input("\nGuess a letter (or 'quit' to exit): ").upper()
        
        if guess == 'QUIT':
            print(f"\nGame over! The word was: {word}")
            break
        
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter!")
            input("Press Enter to continue...")
            continue
        
        if guess in guessed_letters:
            print("You already guessed that letter!")
            input("Press Enter to continue...")
            continue
        
        guessed_letters.add(guess)
        
        if guess in word:
            print("Good guess!")
        else:
            print("Wrong letter!")
            wrong_guesses += 1
        
        input("Press Enter to continue...")
    
    if wrong_guesses >= max_wrong:
        clear_screen()
        print("=== GAME OVER ===")
        display_hangman()
        print(f"\nThe word was: {word}")
        print("Better luck next time!")

if __name__ == "__main__":
    hangman_game()