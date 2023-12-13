from PIL import Image, UnidentifiedImageError
import os

def compress_images(source_dir, target_dir, max_size=(500, 300)):
    files = os.listdir(source_dir)
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    for file in files:
        if file.endswith('.jpg') or file.endswith('.png'):
            image_path = os.path.join(source_dir, file)
            try:
                img = Image.open(image_path)
                img.thumbnail(max_size, Image.LANCZOS)
                width, height = img.size
                x = (max_size[0] - width) // 2
                y = (max_size[1] - height) // 2
                new_img = Image.new('RGBA', max_size)
                new_img.paste(img, (x, y))
                target_path = os.path.join(target_dir, file)
                new_img.save(target_path, "PNG")
                print("success", image_path)
            except (UnidentifiedImageError, OSError) as e:
                print(f"Die Datei {image_path} konnte nicht geöffnet werden. Überprüfen Sie das Format und die Integrität der Datei.")
                print(e)

compress_images('/Users/jacob/data/dhbw/22_3-portfolio-web_engeneering/assets/data-img', './compressed')