# Use an official Python runtime as the parent image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./app /app

# Install Poetry using the recommended method
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to PATH for subsequent commands
ENV PATH="/root/.local/bin:${PATH}"

# Now that PATH is correctly set, install project dependencies.
# Since ENV changes persist to the next RUN commands, Poetry should now be recognized.
COPY pyproject.toml poetry.lock* /app/
RUN poetry config virtualenvs.create false && \
    poetry install --no-dev --no-interaction --no-ansi

# Make port 8000 available to the world outside this container
EXPOSE 8000 

# Define environment variable
ENV PYTHONPATH=/app

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

