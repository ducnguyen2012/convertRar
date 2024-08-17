from flask import Flask, request, jsonify, send_from_directory
import os
from conCatFile import conCatFile

app = Flask(__name__)

# Directory where uploaded files will be saved
UPLOAD_FOLDER = 'uploads'

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'files' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    files = request.files.getlist('files')
    
    if not files:
        return jsonify({'error': 'no file part in request'}), 400
    file_paths = []
    for file in files:
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        
        # Save the file to the upload folder
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)
        file_paths.append(file_path)
    concat = conCatFile(os.getcwd() + "\\uploads\\")
    res = concat.conCatFileMP3()
    print(res)
    return jsonify({'message': f'File uploaded successfully to {file_paths}'}), 200

@app.route('/DownloadPage', methods=['GET'])
def list_file():
    files = os.listdir(app.config['UPLOAD_FOLDER'])
    return jsonify({'Files': files})

@app.route('/result.mp3', methods=['GET'])
def get_file():
    filename = 'result.mp3'
    return send_from_directory(BASE_DIR, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

    