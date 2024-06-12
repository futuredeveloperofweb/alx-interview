#!/usr/bin/python3
"""take a n * n 2D matrix to rotate it 90 degrees clockwise"""


def rotate_2d_matrix(matrix):
    """A method that takes a matrix rotate it"""
    ziped = zip(*reversed(matrix))
    for column1, column2 in enumerate(ziped):
        matrix[column1] = list(column2)
