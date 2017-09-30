# Prompts user to enter file, reads file, and prints the file to the screen.

fileName = input('Enter file name to be printed to screen: ')
file_handle = open(fileName,'r')
text = file_handle.read()
print(text)
file_handle.close()
