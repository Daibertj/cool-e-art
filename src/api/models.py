from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=False, nullable=False )
    lastname = db.Column(db.String(30), unique=False, nullable=False )
    username = db.Column(db.String(30), unique=False, nullable=True )
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    image = db.Column(db.String(255), unique=False, nullable=True )
    create_at = db.Column(db.DateTime, nullable=False,
                          default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, nullable=False, onupdate=db.func.current_timestamp(
    ), default=db.func.current_timestamp())

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "username": self.username
            # do not serialize the password, its a security breach
        }

class Ilustation(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    url_image=db.Column(db.String(255), unique=True, nullable=False)
    title=db.Column(db.String(255), unique=False, nullable=False)
    description=db.Column(db.String(255))

def serialize(self):
        return {
            "id": self.id,
            "url_image": self.url_image,
            "title": self.title,
            "description": self.description,
            }   
