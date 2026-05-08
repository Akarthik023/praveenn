from PIL import Image
import sys

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGB")
    width, height = img.size
    
    new_img = Image.new("RGBA", (width, height))
    pixels = img.load()
    new_pixels = new_img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            min_val = min(r, g, b)
            a_float = 1.0 - (min_val / 255.0)
            
            if a_float <= 0.001:
                new_pixels[x, y] = (0, 0, 0, 0)
            else:
                new_r = max(0.0, min(1.0, ((r/255.0) - (1.0 - a_float)) / a_float))
                new_g = max(0.0, min(1.0, ((g/255.0) - (1.0 - a_float)) / a_float))
                new_b = max(0.0, min(1.0, ((b/255.0) - (1.0 - a_float)) / a_float))
                
                new_pixels[x, y] = (
                    int(new_r * 255),
                    int(new_g * 255),
                    int(new_b * 255),
                    int(a_float * 255)
                )
                
    new_img.save(output_path, "PNG")

remove_white_bg(r"c:\Users\karthik\Desktop\startup\praven\public\assets\logo-new.jpg", r"c:\Users\karthik\Desktop\startup\praven\public\assets\logo-new-transparent.png")
print("Done")
