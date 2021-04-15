from sys import argv

def string_between(string, first_character, second_character):
	inital_pos = string.find(first_character)
	final_pos = string.find(second_character)
	if first_character == second_character:
		final_pos = string[inital_pos + 1:].find(second_character) + inital_pos + 1
	return string[inital_pos + 1: final_pos].replace(' ', '')

def change_import_to_require(line):
	new_line = "const {0} = require('{1}').{0};"
	object_of_library = (string_between(line, '{', '}'))
	library = (string_between(line, "'", "'"))
	return new_line.format(object_of_library, library)

def rewrite_file_with_imports(file_name):
	list_file = list()

	with open(file_name) as file:
		for line in file:
			if 'import ' in line:
				line = change_import_to_require(line)+'\n'
			list_file.append(line)

	with open(file_name, 'w') as file:
		for line in list_file:
			file.write(line)

	print('Re-formateo listo !')

file_name = 'clase.js'

if len(argv) == 1:
	if file_name == '':
		print('Si quieres ocuparme, cambia la lina 29')
		print('por el nombre de archivo a modificar.')
		print('O también puedes ingresarlo por consola ')
		print('de la siguiente forma: ')
		print('python3 reformatjs.py filename.js')
	else:
		rewrite_file_with_imports(file_name)
else:
	file_name = argv[1]
	rewrite_file_with_imports(file_name)




