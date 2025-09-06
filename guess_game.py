# -*- coding: utf-8 -*-
import random
import sys

def guess_number_game():
    secret = random.randint(1, 100)
    guesses = 0
    
    print("=== Guess Number Game ===")
    print("I'm thinking of a number between 1 and 100. Can you guess it?")
    
    while True:
        try:
            guess = input("Enter your guess (or 'quit' to exit): ")
            
            if guess.lower() == 'quit':
                print(f"Game over! The number was {secret}")
                break
                
            guess_num = int(guess)
            guesses += 1
            
            if guess_num == secret:
                print(f"🎉 Congratulations! You got it in {guesses} guesses!")
                break
            elif guess_num < secret:
                print("📈 Too low! Try again...")
            else:
                print("📉 Too high! Try again...")
                
        except ValueError:
            print("Please enter a valid number!")

if __name__ == "__main__":
    guess_number_game()