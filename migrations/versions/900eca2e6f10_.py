"""empty message

Revision ID: 900eca2e6f10
Revises: 1214a9d8fc96
Create Date: 2023-07-08 20:25:30.599822

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '900eca2e6f10'
down_revision = '1214a9d8fc96'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('alias',
               existing_type=sa.VARCHAR(length=30),
               nullable=False)
        batch_op.create_unique_constraint(None, ['alias'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('alias',
               existing_type=sa.VARCHAR(length=30),
               nullable=True)

    # ### end Alembic commands ###
