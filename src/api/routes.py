"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Ilustration, Favorite
from api.utils import generate_sitemap, APIException
from base64 import b64encode
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import cloudinary.uploader as uploader


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
            "alias": data_form.get("alias"),
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
        if data.get("alias") is None:
            return jsonify({"msg": "Missing alias parameter "}), 400

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
            salt=password_salt,
            alias=data.get("alias")
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
                return jsonify({"token": token, "name": user.name, "image": user.image, "alias": user.alias}), 200
            else:
                return jsonify({"msg": "Bad credentials"}), 400
        return jsonify({"msg": "Bad credentials"}), 400


@api.route('/user/<alias>', methods=['GET'])
def get_user_by_alias(alias):
    if request.method == "GET":
        user = User.query.filter_by(alias=alias).first()

        if user:
            return jsonify(user.serialize()), 200
        else:
            return jsonify({'error': 'User not found'}), 404


@api.route('/ilustration', methods=['POST'])
@jwt_required()
def upload_new_image():
    if request.method == "POST":

        current_user = get_jwt_identity()
        data_files = request.files
        data_form = request.form

        data = {
            "image": data_files.get("image"),
            "title": data_form.get("title"),
            "description": data_form.get("description"),
            "category": data_form.get("category")

        }
        print(data)
        if data is None:

            return jsonify({"msg": "Missing JSON in request"}), 400
        if data.get("title") is None:
            return jsonify({"msg": "Missing title parameter"}), 400
        if data.get("description") is None:
            return jsonify({"msg": "Missing description parameter"}), 400
        if data.get("category") is None:
            return jsonify({"msg": "Missing category parameter "}), 400

        print(data.get("image"))
        if data.get("image") is not None:
            response_image = uploader.upload(data.get("image"))
            data.update({"image": response_image.get("url")})

        new_upload = Ilustration(
            url_image=data.get("image"),
            title=data.get("title"),
            description=data.get("description"),
            category=data.get("category"),
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


@api.route('/ilustration', methods=['GET'])
def get_ilustations():
    ilustrations = Ilustration.query.all()
    ilustratrations_data = list(
        map(lambda ilustration: ilustration.serialize(), ilustrations))
    return jsonify(ilustratrations_data), 200


@api.route('/favorite', methods=['GET'])
@jwt_required()
def get_user_favorite():

    favorite = Favorite.query.filter_by(user_id=get_jwt_identity()).all()
    favorite = list(map(lambda favorite: favorite.serialize(), favorite))
    return jsonify(favorite), 200


@api.route('/favorite/<int:ilustration_id>', methods=['POST'])
@jwt_required()
def add_fav(ilustration_id):
    user_id = get_jwt_identity()
    favorite = Favorite.query.filter_by(
        user_id=user_id, ilustration_id=ilustration_id).first()
    if favorite is not None:
        return jsonify({"msg": "esta ilustracion ya esta agregada"}), 400
    else:
        new_favorite = Favorite(user_id=user_id, ilustration_id=ilustration_id)
        db.session.add(new_favorite)
        try:
            db.session.commit()
            return jsonify({"msg": "Se guardo el favorito"}), 201
        except Exception as error:
            db.session.rollback()
            return jsonify({"msg": "Error adding favorite", "error": str(error)}), 500


@api.route('/favorite/<int:ilustration_id>', methods=['DELETE'])
@jwt_required()
def delete_fav_people(ilustration_id):

    user_id = get_jwt_identity()
    favorite = Favorite.query.filter_by(
        user_id=user_id, ilustration_id=ilustration_id).first()
    if favorite is None:
        return jsonify({"msg": "este favorito no existe"}), 404
    else:
        db.session.delete(favorite)
        try:
            db.session.commit()
            return jsonify({"msg": "se elimino el favorito"}), 200
        except Exception as error:
            return jsonify({"msg": error.args}), 500


@api.route('/ilustration/user/<alias>', methods=['GET'])
def get_ilustrations_by_user(alias):
    user = User.query.filter_by(alias=alias).first()

    if user is None:
        return jsonify({'error': 'User not found'}), 404

    ilustrations = Ilustration.query.filter_by(user_id=user.id).all()
    ilustrations_data = list(
        map(lambda ilustration: ilustration.serialize(), ilustrations))

    return jsonify(ilustrations_data), 200


@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_data = list(map(lambda user: user.serialize(), users))
    return jsonify(users_data), 200

@api.route('/user', methods=['PUT'])
def update_social_media():
    user=User.query.get(user_id)
    if not user :
        return jsonify({'message': 'User not exist'})
    
    data=request.json()
    user.twitter=data.get('twitter', user.twitter)
    user.facebook=data.get('facebook', user.facebook)
    user.instagram=data.get('instagram', user.instagram)
    
    db.session.commit()
    
    return jsonify({'message': 'Social Media updated'})
