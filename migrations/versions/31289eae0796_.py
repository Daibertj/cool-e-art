"""empty message

Revision ID: 31289eae0796
Revises: 
Create Date: 2023-07-03 22:34:21.734242

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '31289eae0796'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.Column('lastname', sa.String(length=30), nullable=False),
    sa.Column('username', sa.String(length=30), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('image', sa.String(length=255), nullable=True),
    sa.Column('role', sa.String(length=30), nullable=False),
    sa.Column('create_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('salt', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('ilustration',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('url_image', sa.String(length=255), nullable=False),
    sa.Column('category', sa.String(length=30), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url_image')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('ilustration_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ilustration_id'], ['ilustration.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite')
    op.drop_table('ilustration')
    op.drop_table('user')
    # ### end Alembic commands ###
