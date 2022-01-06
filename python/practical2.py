#creating a function and passing 4 parameters i.e. #open bracket,close bracket, number and a list
def param(openb,closeb,n, s=[]):
    
    if(closeb == n):
        print(''.join(s)) 
        return
    else:
        # checks if open bracket is more than close bracket
        if(openb>closeb):
            s.append(')') #you can put one closing bracket 
            param(openb,closeb+1,n,s) # recusive call to the function
            s.pop() # backtracting 
        if(openb<n):
            s.append('(')
            param(openb+1,closeb,n,s)
            s.pop()
    return
n = int(input()) #taking input from the user.
param(0,0,n)