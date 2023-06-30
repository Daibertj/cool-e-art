from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# tabla de registro de artista y comprador debe estar conectada con ilustations, images y favoritos de uno a muchos
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=False, nullable=False )
    lastname = db.Column(db.String(30), unique=False, nullable=False )
    username = db.Column(db.String(30), unique=False, nullable=True )
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    image = db.Column(db.String(255), unique=False, nullable=True )
    role = db.Column(db.String(30), nullable=False)
    create_at = db.Column(db.DateTime, nullable=False,default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, nullable=False, onupdate=db.func.current_timestamp(
    ), default=db.func.current_timestamp())
    
    ilustration= db.relationship('ilustration')
    favorite = db.relationship('favorite')
    image = db.relationship('image')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "username": self.username,
            "role":self.role
            # do not serialize the password, its a security breach
        }

#tabla ilustracion debe estar conectada con image, aca deben existir mucahs imagenes desde image de uno a mucho
class Ilustation(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(255), unique=False, nullable=False)
    description=db.Column(db.String(255))
    artist_id=db.Column(db.Integer, ForeignKey('user.id'))
    
    image= db.relationship('image')
    
    def __repr__(self):
        return f'<Ilustration {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "artist": self.artist_id
            }   


# tabla de imagen, conectada a ilustaracion y a user con rol artista
class Image(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    ilustation_id=db.Column(db.Integer, ForeignKey('ilustration.id'), nullable=False),
    artist_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    url_image=db.Column(db.String(255), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Image {self.id}>'
     
    def serialize(self):
        return {
            "id": self.id,

        }

#tabla favorito con relacion user y con ilustracion
class Favorite(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db,Integer, ForeignKey('user.id'), nullable=False)
    ilustration_id=db.Column(db.Integer, ForeignKey('ilustration_id'))
    
    def __repr__(self):
        return f'<Favorite {self.id}>'
     
    def serialize(self):
        return {
            "id": self.id,
        }
     

    