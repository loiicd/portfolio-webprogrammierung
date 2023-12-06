from PIL import Image
import os

def compress_images(source_dir, target_dir, max_size=(500, 500)):
    files = os.listdir(source_dir)
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    for file in files:
        if file.endswith('.jpg') or file.endswith('.png'):
            image_path = os.path.join(source_dir, file)
            img = Image.open(image_path)
            # Ändern Sie die Größe des Bildes, behalten Sie dabei das Seitenverhältnis bei
            img.thumbnail(max_size)
            # Speichern Sie das Bild im Zielverzeichnis
            target_path = os.path.join(target_dir, file)
            img.save(target_path)

# Verwenden Sie die Funktion
compress_images('./assets', './assets/compressed')