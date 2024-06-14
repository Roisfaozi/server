
docker-build:
	docker rmi roisfaozi/tickitz-api && docker build -t roisfaozi/tickitz-api .

docker-run:
	docker run -d -it -p 8001:8001 --name tickitz-api --network=golang -e PG_USER=rois -e PG_HOST=postgres -e PG_PASSWORD=rois -e PG_PORT=5432 -e PG_DATABASE=tickitzz -e JWT_SECRET=alkgjalfijhasdkgjhafkghasdlghak roisfaozi/tickitz-api

docker-rmc:
	docker rm tickitz-api

docker-crun:
	docker rm tickitz-api && docker run -d -it -p 8001:8001 --name tickitz-api -e PG_USER=rois -e PG_HOST=postgreDB  -e PG_PASSWORD=rois -e PG_PORT=5432 -e PG_DATABASE=tickitz -e JWT_SECRET=alkgjalfijhasdkgjhafkghasdlghak roisfaozi/tickitz-api

compose-up:
	docker compose up

compose-down:
	docker compose down