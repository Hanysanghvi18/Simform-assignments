#creating a list which takes input from the user
list1 = input().split(",")

anagrams = []
for i in list1:
    """ creating a Single Line Nested Loops Using List Comprehension.
        here it is taking a string from list than converting that string in set and than compares it with every other string in list """
    m = [w2 for w2 in list1 if set(w2) == set(i)]
    
    if m not in anagrams:
        anagrams += [m]

print(anagrams)
