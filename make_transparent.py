from PIL import Image
import os

print("Starting favicon transparency conversion...")

source_path = r"C:\Users\Steve\.gemini\antigravity\brain\3bf37cbe-44a5-4f06-88e2-34fdf68b5159\favicon_isolated_1774045697433.png"
output_path = r"c:\SL Tech\Website\public\favicon.png"

if not os.path.exists(source_path):
    print(f"Error: Source file does not exist at {source_path}")
    exit(1)

img = Image.open(source_path)
img = img.convert("RGBA")

pixels = img.getdata()
new_pixels = []

# Chroma key threshold for pure black background
threshold = 60 # Safety bump for anti-aliasing edges

for p in pixels:
    r, g, b, a = p
    # Euclidan distance to black
    if (r < threshold and g < threshold and b < threshold):
        new_pixels.append((0, 0, 0, 0)) # Alpha 0
    else:
        new_pixels.append(p)

img.putdata(new_pixels)

# Resize to standard sizes for cross-browser high DPI compatibility
# Save 32x32 for standard tab icon
img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save(output_path, "PNG")

print(f"✅ Success: Favicon saved to {output_path}")

# Also save an 180x180 for iOS icon fallback
img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
img_180.save(r"c:\SL Tech\Website\public\apple-touch-icon.png", "PNG")
print("✅ Success: Apple touchscreen icon saved.")
