# This a program that prompts the user to enter a file name, then prompts the
# user to enter the contents of the file, and then saves the content to the
# file.

fileName = input('Enter file name: ')
file_handle = open(fileName,'w')
content = str(input('Enter contents of file: '))
file_handle.write(content)
file_handle.close()
