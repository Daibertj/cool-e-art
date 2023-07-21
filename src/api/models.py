from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Ilustration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=False, nullable=False)
    description = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    url_image = db.Column(db.String(255), unique=True, nullable=False)
    category = db.Column(db.String(30), nullable=False)
    

    def __repr__(self):
        return f'<Ilustration {self.id}>'

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'user': self.user.serialize(),
            'category': self.category,
            'image': self.url_image

        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=False, nullable=False)
    lastname = db.Column(db.String(30), unique=False, nullable=False)
    alias = db.Column(db.String(30), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    image = db.Column(db.String(255), unique=False, nullable=True)
    create_at = db.Column(db.DateTime, nullable=False,
                          default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, nullable=False, onupdate=db.func.current_timestamp(
    ), default=db.func.current_timestamp())
    salt = db.Column(db.String(100), unique=False, nullable=False)
    twitter = db.Column(db.String(255), unique=False, nullable=True)
    facebook = db.Column(db.String(255), unique=False, nullable=True)
    instagram = db.Column(db.String(255), unique=False, nullable=True)
    
    ilustration = db.relationship('Ilustration', backref='user', uselist=True)
    favorite = db.relationship('Favorite', backref='user', uselist=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'lastname': self.lastname,
            'alias': self.alias,
            'image': self.image,
            'twitter': self.twitter,
            'facebook': self.facebook,
            'instagram': self.instagram,

            # do not serialize the password, its a security breach
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    ilustration_id = db.Column(db.Integer, db.ForeignKey('ilustration.id'))
    ilustration = db.relationship(
        "Ilustration", backref="favorites", uselist=False)

    def __repr__(self):
        return f'<Favorite {self.user_id}>'

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'ilustration_id': self.ilustration_id,
            'title': self.ilustration.title,
            'description': self.ilustration.description,
            'category': self.ilustration.category,
            'image': self.ilustration.url_image,
        }
