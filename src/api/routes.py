"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Ilustration
from api.utils import generate_sitemap, APIException
from base64 import b64encode
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import cloudinary.uploader as uploader
from .models import User

api = Blueprint('api', __name__)


def set_password(password, salt):
    return generate_password_hash(f"{password}{salt}")


def check_password(hash_password, password, salt):
    return check_password_hash(hash_password, f"{password}{salt}")



@api.route('/user', methods=['POST'])
def register_user():
    if request.method == "POST":
        data_files = request.files
        data_form = request.form
        

        data = {
            "name": data_form.get("name"),
            "lastname": data_form.get("lastname"),
            "email": data_form.get("email"),
            "password": data_form.get("password"),
            "image": data_files.get("image")
        }

        
        if data is None:
            return jsonify({"msg": "Missing JSON in request"}), 400
        if data.get("name") is None:
            return jsonify({"msg": "Missing name parameter"}), 400
        if data.get("lastname") is None:
            return jsonify({"msg": "Missing last name parameter"}), 400
        if data.get("email") is None:
            return jsonify({"msg": "Missing email parameter"}), 400
        if data.get("password") is None:
            return jsonify({"msg": "Missing password parameter"}), 400
        

        user = User.query.filter_by(email=data.get("email")).first()
        if user is not None:
            return jsonify({"msg": "Email already registered"}), 400

        password_salt = b64encode(os.urandom(32)).decode('utf-8')
        password_hash = set_password(data.get("password"), password_salt)

        if data.get("image") is not None:
            response_image = uploader.upload(data.get("image"))
            data.update({"image": response_image.get("url")})

        new_user = User(
            name=data.get("name"),
            lastname=data.get("lastname"),
            email=data.get("email"),
            password=password_hash,
            image=data.get("image"),
            salt=password_salt
        )

        db.session.add(new_user)
        try:
            db.session.commit()
            return jsonify({"msg": "User successfully registered"}), 201
        except Exception as error:
            db.session.rollback()
            return jsonify({"msg": "Error registering user", "error": str(error)}), 500
        return jsonify([]), 200

@api.route('/login', methods=['POST'])
def login():
    if request.method == "POST":
        data = request.json
        email = data.get("email", None)
        password = data.get("password", None)

        if email is None:
            return jsonify({"msg": "Missing email parameter"}), 400
        if password is None:
            return jsonify({"msg": "Missing password parameter"}), 400

        user = User.query.filter_by(email=email).one_or_none()
        if user is not None:
            if check_password(user.password, password, user.salt):
                token = create_access_token(identity=user.id)
                return jsonify({"token": token, "name":user.name, "image":user.image}), 200
            else:
                return jsonify({"msg": "Bad credentials"}), 400
        return jsonify({"msg": "Bad credentials"}), 400
    

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user_by_token():
     if request.method == "GET":
         user = User.query.get(get_jwt_identity())
             
         if user:
             return jsonify(user.serialize()), 200
         else:
             return jsonify({'error': 'User not found'}), 404
    
@api.route('/ilustration', methods=['POST'])
@jwt_required()
def upload_new_image():
    if request.method =="POST":
        current_user = get_jwt_identity()
        data_files = request.files
        data_form = request.form
        

        data = {
            "image": data_form.get("image"),
            "description": data_form.get("description"),
            "title": data_form.get("title"),
            "category": data_form.get("category")
            
        }
        
        if data is None:
            return jsonify({"msg": "Missing JSON in request"}), 400
        if data.get("description") is None:
            return jsonify({"msg": "Missing last name parameter des"}), 400
        if data.get("title") is None:
            return jsonify({"msg": "Missing email parameter tit"}), 400
        if data.get("category") is None:
            return jsonify({"msg": "Missing password parameter cat"}), 400
        
        
        if data.get("image") is not None:
            response_image = uploader.upload(data.get("image"))
            data.update({"image": response_image.get("url")})
            
        new_upload = Ilustration(
                title=data.get("title"),
                description=data.get("description"),
                category=data.get("category"),
                url_image=data.get("image"),
                user_id=current_user
            )
            
        db.session.add(new_upload)
        try:
            db.session.commit()   
            return jsonify({"msg": "Upload successfully"}), 201
        except Exception as error:
            db.session.rollback()
            return jsonify({"msg": "Error occurred while trying to upload image", "error": str(error)}), 500
        return jsonify([]), 200

            
        
     


@api.route('/ilustration', methods=['GET'] )
def get_ilustations():
    ilustrations=Ilustration.query.all()       
    ilustratrations_data= list(map(lambda ilustration : ilustration.serialize() , ilustrations))       
    return jsonify(ilustratrations_data), 200


