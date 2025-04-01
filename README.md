## Run Application - Development

```
npm run dev
```

## Run Build and Application

```
npm run build
npm start
```

## Build Docker Image

```
docker build . -t aws-community-day/app:latest
```

## Run Docker Container

```
docker run -d -p 80:80 aws-community-day/app:latest
```

## Authenticate Docker Client with Amazon ECR

```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ############.dkr.ecr.us-east-1.amazonaws.com
```

- Replace ############ with Account ID

## Find Image ID, Tag, and Push to ECR

```
docker images
docker tag aa9d1fccdd20 ############.dkr.ecr.us-east-1.amazonaws.com/aws-community-day/app:latest
docker push ############.dkr.ecr.us-east-1.amazonaws.com/aws-community-day/app:latest
```

- Replace ############ with Account ID
