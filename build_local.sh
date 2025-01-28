# Builds the frontend container
docker compose build --no-cache;
# Install dependencies 
docker compose run --rm --no-deps frontend pnpm install ;
#run container
docker compose up frontend
