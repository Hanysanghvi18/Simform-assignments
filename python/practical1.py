num_in_word = ['zero','one','two','three','four','five','six','seven','eight','nine']

#Taking input from user
num1 = input('enter number 1: ')
num2 = input('enter number 2: ')

#Function to find GCD
def compute_gcd(x, y):
   while(y):
       x, y = y, x % y     
   return x

#converting number to words
i=0
while(i<=9):
    num1 = num1.replace(num_in_word[i], str(i))  
    num2 = num2.replace(num_in_word[i], str(i))
    i+= 1

try:
    num1 = int(num1)
    num2 = int(num2)
    gcd = compute_gcd(num1, num2) # calling the function
    result = ""
    while(gcd!=0):
        temp = gcd%10
        result = num_in_word[temp]
        gcd = gcd//10
    print("gcd is:",result)  
except:
    print('Please enter valid input') #perform exception if the input is not correct.
