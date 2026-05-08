import sys
try:
    import PyPDF2
    with open('V_02.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for i in range(min(3, len(reader.pages))):
            print(f"--- Page {i+1} ---")
            print(reader.pages[i].extract_text())
except Exception as e:
    print("Error:", e)
    print("Trying pdfplumber or fitz...")
    try:
        import fitz
        doc = fitz.open('V_02.pdf')
        for i in range(min(3, len(doc))):
            print(f"--- Page {i+1} ---")
            print(doc[i].get_text())
    except Exception as e2:
        print("Error:", e2)
