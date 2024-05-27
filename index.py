from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configurar PARA conectarse a la base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'tu_usuario'
app.config['MYSQL_PASSWORD'] = 'tu_contraseña'
app.config['MYSQL_DB'] = 'tu_base_de_datos'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html')

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)

