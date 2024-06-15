
docker-build:
	docker rmi roisfaozi/tickitz-api:1 && docker build -t roisfaozi/tickitz-api:1 .

docker-run:
	docker run -d -it -p 8001:8001 --name tickitz-api --network=golang -e PGUSER=rois -e PGHOST=postgres -e PGPASSWORD=rois -e PGPORT=5432 -e PGDATABASE=tickitzz -e JWT_SECRET=alkgjalfijhasdkgjhafkghasdlghak roisfaozi/tickitz-api

docker-rlocal:
	docker run -d -it -p 8001:8001 --name tickitzapi -e PGUSER=rois -e PGHOST=postgreDB -e PGPASSWORD=rois -e PGPORT=5432 -e PGDATABASE=tickitz -e JWT_SECRET=alkgjalfijhasdkgjhafkghasdlghak roisfaozi/tickitz-api:1

docker-rmc:
	docker rm tickitzapi

docker-crun:
	docker rm tickitz-api && docker run -d -it -p 8001:8001 --name tickitz-api -e PG_USER=rois -e PG_HOST=postgreDB  -e PG_PASSWORD=rois -e PG_PORT=5432 -e PG_DATABASE=tickitz -e JWT_SECRET=alkgjalfijhasdkgjhafkghasdlghak roisfaozi/tickitz-api

compose-up:
	docker compose up -d

compose-down:
	docker compose stop && docker compose down