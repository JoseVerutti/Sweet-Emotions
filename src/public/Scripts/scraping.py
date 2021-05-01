from bs4 import BeautifulSoup
import requests


URL = "https://www.frasesde.org/frases-de-amor.php"
page= requests.get(URL)
soup= BeautifulSoup(page.content, 'html.parser')

Frases =[]
Archivo= open("Frases.txt","w")
Fra= soup.find_all('li')

for i in Fra:
    Frases.append(i.text)
for frase in Frases:
    Archivo.write(frase)
    Archivo.write("-"+"\n")
    print(frase)

Archivo.close