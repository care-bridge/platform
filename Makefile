setup:
	pip install -r requirements.txt

run:
	mypy app.py && flask run --debug
