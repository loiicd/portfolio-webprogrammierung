from PIL import Image
import os

def compress_images(source_dir, target_dir, max_size=(500, 300)):
    files = os.listdir(source_dir)
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    for file in files:
        if file.endswith('.jpg') or file.endswith('.png'):
            image_path = os.path.join(source_dir, file)
            img = Image.open(image_path)
            img.thumbnail(max_size, Image.ANTIALIAS)
            # Zentrieren Sie das Bild im Zielbereich
            width, height = img.size
            x = (max_size[0] - width) // 2
            y = (max_size[1] - height) // 2
            # Erstellen Sie ein neues Bild mit Transparenz (Alpha-Kanal)
            new_img = Image.new('RGBA', max_size)
            new_img.paste(img, (x, y))
            # Speichern Sie das Bild im Zielverzeichnis
            target_path = os.path.join(target_dir, file)
            # Speichern Sie das Bild im PNG-Format, um die Transparenz zu erhalten
            new_img.save(target_path, "PNG")

# Verwenden Sie die Funktion
compress_images('./assets', './assets/compressed')